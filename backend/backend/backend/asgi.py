"""ASGI entrypoint. Run with Daphne: daphne -b 0.0.0.0:8000 backend.asgi:application"""
import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

django_asgi = get_asgi_application()

# GraphQL is served by Graphene-Django over HTTP through Django's URL router,
# so the ASGI application delegates request handling to Django.
application = django_asgi
