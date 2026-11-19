"""GraphQL schema for the portfolio website.

Reads portfolio content from the PostgreSQL-backed Django models so the
frontend displays live, admin-managed data.
"""
from graphene import Boolean, Field, Int, List, ObjectType, Schema, String
try:
    from graphene.types.generic import GenericScalar as JSONScalar
except Exception:
    from graphene.types.json import JSONString as JSONScalar

from portfolio.models import Education as EducationModel
from portfolio.models import Experience as ExperienceModel
from portfolio.models import Profile as ProfileModel
from portfolio.models import Project as ProjectModel
from portfolio.models import Skill as SkillModel


def _as_string_list(value):
    """Make a GraphQL List(String) field safe even if the DB has a scalar/dict."""
    if value is None or value == '':
        return []
    if isinstance(value, (list, tuple)):
        return [str(item) for item in value if item is not None]
    if isinstance(value, dict):
        return [f'{key}: {val}' for key, val in value.items()]
    return [str(value)]


class ProjectType(ObjectType):
    id = Int()
    title = String()
    description = String()
    image = String()
    technologies = List(String)
    category = String()
    demoUrl = String()
    githubUrl = String()
    featured = Boolean()

    def resolve_technologies(self, info):
        return _as_string_list(getattr(self, 'technologies', None))

    def resolve_image(self, info):
        """Full URL for uploaded images; keep legacy asset filenames as-is."""
        if not self.image:
            return ''
        try:
            name = self.image.name
            if self.image.storage.exists(name):
                return info.context.build_absolute_uri(self.image.url)
            # Legacy value such as 'ecommerce.png' handled by the frontend image map.
            return name
        except Exception:
            return getattr(self, 'image', '') or ''

    def resolve_demoUrl(self, info):
        return getattr(self, 'demo_url', None) or getattr(self, 'demoUrl', '#')

    def resolve_githubUrl(self, info):
        return getattr(self, 'github_url', None) or getattr(self, 'githubUrl', '#')


class SkillTopicType(ObjectType):
    id = Int()
    name = String()
    percent = Int()


class SkillType(ObjectType):
    id = Int()
    name = String()
    summary = String()
    description = String()
    level = Int()
    color = String()
    image = String()
    topics = List(SkillTopicType)

    def resolve_image(self, info):
        """Return a full URL so the Vue frontend can load uploads directly."""
        if not self.image:
            return ''
        try:
            return info.context.build_absolute_uri(self.image.url)
        except Exception:
            return ''

    def resolve_topics(self, info):
        try:
            return self.topics.all()
        except Exception:
            return []


class ExperienceType(ObjectType):
    id = Int()
    position = String()
    company = String()
    location = String()
    duration = String()
    description = String()
    technologies = List(String)
    achievements = List(String)

    def resolve_technologies(self, info):
        return _as_string_list(getattr(self, 'technologies', None))

    def resolve_achievements(self, info):
        return _as_string_list(getattr(self, 'achievements', None))


class EducationType(ObjectType):
    id = Int()
    degree = String()
    school = String()
    location = String()
    duration = String()
    status = String()
    description = String()
    coursework = List(String)

    def resolve_coursework(self, info):
        return _as_string_list(getattr(self, 'coursework', None))


class ContactType(ObjectType):
    name = String()
    email = String()
    phone = String()
    location = String()
    message = String()


class ProfileType(ObjectType):
    name = String()
    title = String()
    heroIntro = String()
    aboutBio1 = String()
    aboutBio2 = String()
    aboutBio3 = String()
    aboutSummary = String()
    location = String()
    email = String()
    phone = String()
    githubUrl = String()
    instagramUrl = String()
    whatsappUrl = String()
    resumeUrl = String()
    contactMessage = String()
    yearsExperience = String()
    projectsCount = String()
    skillsCount = String()

    coreValuesTags = JSONScalar()
    coreValues = JSONScalar()
    devApproaches = JSONScalar()
    skillCategories = JSONScalar()

    def resolve_heroIntro(self, info): return getattr(self, 'hero_intro', '')
    def resolve_aboutBio1(self, info): return getattr(self, 'about_bio_1', '')
    def resolve_aboutBio2(self, info): return getattr(self, 'about_bio_2', '')
    def resolve_aboutBio3(self, info): return getattr(self, 'about_bio_3', '')
    def resolve_aboutSummary(self, info): return getattr(self, 'about_summary', '')
    def resolve_githubUrl(self, info): return getattr(self, 'github_url', '')
    def resolve_instagramUrl(self, info): return getattr(self, 'instagram_url', '')
    def resolve_whatsappUrl(self, info): return getattr(self, 'whatsapp_url', '')
    def resolve_resumeUrl(self, info): return getattr(self, 'resume_url', '')
    def resolve_contactMessage(self, info): return getattr(self, 'contact_message', '')
    def resolve_yearsExperience(self, info): return getattr(self, 'years_experience', '')
    def resolve_projectsCount(self, info): return getattr(self, 'projects_count', '')
    def resolve_skillsCount(self, info): return getattr(self, 'skills_count', '')
    def resolve_coreValuesTags(self, info): return getattr(self, 'core_values_tags', []) or []
    def resolve_coreValues(self, info): return getattr(self, 'core_values', []) or []
    def resolve_devApproaches(self, info): return getattr(self, 'dev_approaches', []) or []
    def resolve_skillCategories(self, info): return getattr(self, 'skill_categories', []) or []



class Query(ObjectType):
    projects = List(ProjectType)
    project = Field(ProjectType, id=Int(required=True))
    skills = List(SkillType)
    experience = List(ExperienceType)
    education = List(EducationType)
    contact = Field(ContactType)
    profile = Field(ProfileType)

    def resolve_projects(self, info, **kwargs):
        return ProjectModel.objects.all()

    def resolve_project(self, info, **kwargs):
        try:
            return ProjectModel.objects.get(pk=kwargs.get('id'))
        except ProjectModel.DoesNotExist:
            return None

    def resolve_skills(self, info, **kwargs):
        return SkillModel.objects.all()

    def resolve_experience(self, info, **kwargs):
        return ExperienceModel.objects.all()

    def resolve_education(self, info, **kwargs):
        return EducationModel.objects.all()

    def resolve_profile(self, info, **kwargs):
        return ProfileModel.objects.first()

    def resolve_contact(self, info, **kwargs):
        p = ProfileModel.objects.first()
        if not p:
            return None
        return {
            'name': p.name,
            'email': p.email,
            'phone': p.phone,
            'location': p.location,
            'message': p.contact_message,
        }


schema = Schema(query=Query)
