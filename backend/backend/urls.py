"""URL configuration for the backend project.

Routes the Django admin, the portfolio data API, and the GraphQL endpoint.
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # Portfolio data API (JSON + Django template views)
    path('api/', include('backend.backend.api_urls')),
    # Graphene-Django GraphQL endpoint
    path('graphql/', include('backend.backend.graphql_urls')),
]
