from django.contrib import admin
from django.utils.html import format_html
from .models import Education, Experience, Profile, Project, Skill, SkillTopic


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'email', 'location')

    def has_add_permission(self, request):
        # Keep it singleton-like: allow add only if none exists
        if Profile.objects.exists():
            return False
        return super().has_add_permission(request)


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'featured', 'sort_order')
    list_filter = ('category', 'featured')
    search_fields = ('title', 'description')
    ordering = ('sort_order', 'id')


class SkillTopicInline(admin.TabularInline):
    """Lets you add sub-topics (URLs, Views, Models, REST...) while editing a skill."""
    model = SkillTopic
    extra = 1
    fields = ('name', 'percent', 'sort_order')
    ordering = ('sort_order', 'id')


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'level', 'image_tag', 'topics_count', 'sort_order')
    list_editable = ('level', 'sort_order')
    search_fields = ('name', 'summary', 'description')
    ordering = ('sort_order', 'id')
    readonly_fields = ('image_tag',)
    inlines = [SkillTopicInline]
    fieldsets = (
        (None, {
            'fields': ('name', 'color', 'level', 'sort_order'),
            'description': 'Main skill card. Example: Django.',
        }),
        ('Description', {
            'fields': ('summary', 'description'),
        }),
        ('Image', {
            'fields': ('image', 'image_tag'),
            'description': 'Upload a logo/icon for this skill (PNG, JPG or WebP).',
        }),
    )

    def image_tag(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" width="80" height="80" '
                'style="object-fit:contain;background:#111;border-radius:8px;padding:4px;" />',
                obj.image.url,
            )
        return '-'

    image_tag.short_description = 'Preview'

    def topics_count(self, obj):
        return obj.topics.count()

    topics_count.short_description = 'Topics'


@admin.register(SkillTopic)
class SkillTopicAdmin(admin.ModelAdmin):
    list_display = ('name', 'skill', 'percent', 'sort_order')
    list_filter = ('skill',)
    search_fields = ('name', 'skill__name')
    ordering = ('skill', 'sort_order', 'id')


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('position', 'company', 'duration', 'sort_order')
    ordering = ('sort_order', 'id')


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ('degree', 'school', 'duration', 'status', 'sort_order')
    ordering = ('sort_order', 'id')
