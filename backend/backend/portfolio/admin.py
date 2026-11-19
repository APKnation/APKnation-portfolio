from django.contrib import admin
from django.utils.html import format_html
from .models import Education, Experience, Profile, Project, Skill


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


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'color', 'image_tag', 'sort_order')
    ordering = ('sort_order', 'id')
    readonly_fields = ('image_tag',)

    def image_tag(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="50" height="50" style="object-fit:cover;" />'.format(obj.image.url))
        return '-'

    image_tag.short_description = 'Image'


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('position', 'company', 'duration', 'sort_order')
    ordering = ('sort_order', 'id')


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ('degree', 'school', 'duration', 'status', 'sort_order')
    ordering = ('sort_order', 'id')
