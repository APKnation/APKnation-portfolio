"""URL configuration for backend project."""
from django.contrib import admin
from django.urls import include, path
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api_urls')),
    path('graphql/', csrf_exempt(GraphQLView.as_view(graphiql=True))),
]
