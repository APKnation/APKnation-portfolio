"""URL routes for the portfolio JSON API."""
from django.urls import path

import views

urlpatterns = [
    path('projects/', views.project_list),
    path('projects/<int:project_id>/', views.project_detail),
    path('skills/', views.skill_list),
    path('experience/', views.experience_list),
    path('education/', views.education_list),
    path('contact/', views.contact_detail),
]
