"""Seed data for initial portfolio population.

Note: All data is now empty by default. The frontend fetches live data from the
GraphQL API which reads from the Django admin/database. Run `python manage.py
seed_portfolio --force` only if you want to clear and repopulate from DB.
"""

PROJECTS = []
SKILLS = []
EXPERIENCES = []
EDUCATION = []
CONTACT = {}
PROFILE = {}
