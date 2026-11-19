"""JSON API views for the portfolio (database-backed)."""
from django.http import JsonResponse
from django.views.decorators.http import require_GET

from portfolio.models import Education, Experience, Profile, Project, Skill


def _project(p):
    return {
        'id': p.id, 'title': p.title, 'description': p.description, 'image': p.image,
        'technologies': p.technologies or [], 'category': p.category,
        'demoUrl': p.demo_url, 'githubUrl': p.github_url, 'featured': p.featured,
    }


@require_GET
def project_list(request):
    return JsonResponse([_project(p) for p in Project.objects.all()], safe=False)


@require_GET
def project_detail(request, project_id):
    try:
        p = Project.objects.get(pk=project_id)
    except Project.DoesNotExist:
        return JsonResponse({'error': 'Project not found'}, status=404)
    return JsonResponse(_project(p))


@require_GET
def skill_list(request):
    data = [{'name': s.name, 'icon': s.icon, 'color': s.color, 'level': s.level} for s in Skill.objects.all()]
    return JsonResponse(data, safe=False)


@require_GET
def experience_list(request):
    data = [{
        'id': e.id, 'position': e.position, 'company': e.company, 'location': e.location,
        'duration': e.duration, 'description': e.description,
        'technologies': e.technologies or [], 'achievements': e.achievements or [],
    } for e in Experience.objects.all()]
    return JsonResponse(data, safe=False)


@require_GET
def education_list(request):
    data = [{
        'id': e.id, 'degree': e.degree, 'school': e.school, 'location': e.location,
        'duration': e.duration, 'status': e.status, 'description': e.description,
        'coursework': e.coursework or [],
    } for e in Education.objects.all()]
    return JsonResponse(data, safe=False)


def _profile_dict(p):
    return {
        'name': p.name, 'title': p.title, 'heroIntro': p.hero_intro,
        'aboutBio1': p.about_bio_1, 'aboutBio2': p.about_bio_2, 'aboutBio3': p.about_bio_3,
        'aboutSummary': p.about_summary, 'location': p.location, 'email': p.email, 'phone': p.phone,
        'githubUrl': p.github_url, 'instagramUrl': p.instagram_url, 'whatsappUrl': p.whatsapp_url,
        'resumeUrl': p.resume_url, 'contactMessage': p.contact_message,
        'yearsExperience': p.years_experience, 'projectsCount': p.projects_count, 'skillsCount': p.skills_count,
        'coreValuesTags': p.core_values_tags or [], 'coreValues': p.core_values or [],
        'devApproaches': p.dev_approaches or [], 'skillCategories': p.skill_categories or [],
    }


@require_GET
def profile_detail(request):
    p = Profile.objects.first()
    if not p:
        return JsonResponse({}, status=404)
    return JsonResponse(_profile_dict(p))


@require_GET
def contact_detail(request):
    p = Profile.objects.first()
    if not p:
        return JsonResponse({'error': 'Profile not found'}, status=404)
    return JsonResponse({
        'name': p.name, 'email': p.email, 'phone': p.phone,
        'location': p.location, 'message': p.contact_message,
    })
