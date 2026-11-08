"""JSON API views for the portfolio."""
from django.http import JsonResponse
from django.views.decorators.http import require_GET

from schema import projects, skills, experiences, education, contact


@require_GET
def project_list(request):
    return JsonResponse(list(projects), safe=False)


@require_GET
def project_detail(request, project_id):
    project = next((p for p in projects if p["id"] == project_id), None)
    if project is None:
        return JsonResponse({"error": "Project not found"}, status=404)
    return JsonResponse(project)


@require_GET
def skill_list(request):
    return JsonResponse(list(skills), safe=False)


@require_GET
def experience_list(request):
    return JsonResponse(list(experiences), safe=False)


@require_GET
def education_list(request):
    return JsonResponse(list(education), safe=False)


@require_GET
def contact_detail(request):
    return JsonResponse(contact)
