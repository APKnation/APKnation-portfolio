from django.db import models


class Profile(models.Model):
    """Singleton-like site/profile settings for the portfolio owner."""
    name = models.CharField(max_length=120, default='Atanas Patrick')
    title = models.CharField(max_length=200, default='Software Engineer')
    hero_intro = models.TextField(blank=True, default='')
    about_bio_1 = models.TextField(blank=True, default='')
    about_bio_2 = models.TextField(blank=True, default='')
    about_bio_3 = models.TextField(blank=True, default='')
    about_summary = models.TextField(blank=True, default='')
    location = models.CharField(max_length=200, blank=True, default='')
    email = models.EmailField(blank=True, default='')
    phone = models.CharField(max_length=60, blank=True, default='')
    github_url = models.URLField(blank=True, default='')
    instagram_url = models.URLField(blank=True, default='')
    whatsapp_url = models.URLField(blank=True, default='')
    resume_url = models.CharField(max_length=500, blank=True, default='')
    contact_message = models.TextField(blank=True, default='')
    years_experience = models.CharField(max_length=20, blank=True, default='1+')
    projects_count = models.CharField(max_length=20, blank=True, default='10+')
    skills_count = models.CharField(max_length=20, blank=True, default='5+')


    # Admin-manageable presentation content (displayed in frontend)
    core_values_tags = models.JSONField(default=list, blank=True, help_text='List of short tag strings shown on the About card.')
    core_values = models.JSONField(default=list, blank=True, help_text='List of {title, description} shown in About > Core Values & Philosophy.')
    dev_approaches = models.JSONField(default=list, blank=True, help_text='List of {title, description, color} shown in Skills > Development Approach.')
    skill_categories = models.JSONField(default=list, blank=True, help_text='List of {title, subtitle, theme, items:[{name, percent}]} shown in Skills > Skill Categories.')

    class Meta:
        verbose_name = 'Profile'
        verbose_name_plural = 'Profile'

    def __str__(self):
        return self.name


class Project(models.Model):
    CATEGORY_CHOICES = [('web', 'Web'), ('mobile', 'Mobile'), ('design', 'Design')]
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, default='')
    image = models.CharField(max_length=200, blank=True, default='', help_text='Filename in frontend assets/images, e.g. ecommerce.png')
    technologies = models.JSONField(default=list, blank=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='web')
    demo_url = models.CharField(max_length=500, blank=True, default='#')
    github_url = models.CharField(max_length=500, blank=True, default='#')
    featured = models.BooleanField(default=False)
    sort_order = models.IntegerField(default=0)

    class Meta:
        ordering = ['sort_order', 'id']

    def __str__(self):
        return self.title


class Skill(models.Model):
    name = models.CharField(max_length=100)
    summary = models.CharField(
        max_length=300,
        blank=True,
        default='',
        help_text='Short text shown on the skill card / when the skill is opened.',
    )
    description = models.TextField(
        blank=True,
        default='',
        help_text='Longer explanation of what you know in this skill.',
    )
    level = models.PositiveSmallIntegerField(
        default=0,
        help_text='Overall proficiency from 0 to 100 (0 = hide the bar).',
    )
    color = models.CharField(max_length=30, blank=True, default='blue')
    image = models.ImageField(
        upload_to='skills/',
        blank=True,
        null=True,
        help_text='Logo/icon for this skill. Upload a PNG, JPG or WebP image.',
    )
    sort_order = models.IntegerField(default=0)

    class Meta:
        ordering = ['sort_order', 'id']

    def __str__(self):
        return self.name


class SkillTopic(models.Model):
    """A sub-topic inside a skill, e.g. Django > URLs, Views, Models, REST."""
    skill = models.ForeignKey(Skill, related_name='topics', on_delete=models.CASCADE)
    name = models.CharField(max_length=120, help_text='e.g. URLs, Views, Models, Functions, Database, REST API')
    percent = models.PositiveSmallIntegerField(
        default=0,
        help_text='How well you know this topic, from 0 to 100 (0 = hide the bar).',
    )
    sort_order = models.IntegerField(default=0)

    class Meta:
        ordering = ['sort_order', 'id']
        verbose_name = 'skill topic'
        verbose_name_plural = 'skill topics'

    def __str__(self):
        return f'{self.skill.name} - {self.name}'


class Experience(models.Model):
    position = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    location = models.CharField(max_length=200, blank=True, default='')
    duration = models.CharField(max_length=100, blank=True, default='')
    description = models.TextField(blank=True, default='')
    technologies = models.JSONField(default=list, blank=True)
    achievements = models.JSONField(default=list, blank=True)
    sort_order = models.IntegerField(default=0)

    class Meta:
        ordering = ['sort_order', 'id']

    def __str__(self):
        return f"{self.position} - {self.company}"


class Education(models.Model):
    degree = models.CharField(max_length=300)
    school = models.CharField(max_length=200)
    location = models.CharField(max_length=200, blank=True, default='')
    duration = models.CharField(max_length=100, blank=True, default='')
    status = models.CharField(max_length=100, blank=True, default='')
    description = models.TextField(blank=True, default='')
    coursework = models.JSONField(default=list, blank=True)
    sort_order = models.IntegerField(default=0)

    class Meta:
        ordering = ['sort_order', 'id']
        verbose_name_plural = 'Education'

    def __str__(self):
        return f"{self.degree} - {self.school}"
