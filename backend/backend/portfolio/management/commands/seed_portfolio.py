from django.core.management.base import BaseCommand
from portfolio.models import Education, Experience, Profile, Project, Skill
from portfolio.seed_data import PROJECTS, SKILLS, EXPERIENCES, EDUCATION, CONTACT, PROFILE


class Command(BaseCommand):
    help = 'Seed the portfolio database with initial content (idempotent: only fills empty tables / missing profile)'

    def add_arguments(self, parser):
        parser.add_argument('--force', action='store_true', help='Clear existing portfolio data and reseed')

    def handle(self, *args, **options):
        force = options['force']
        if force:
            Project.objects.all().delete()
            Skill.objects.all().delete()
            Experience.objects.all().delete()
            Education.objects.all().delete()
            Profile.objects.all().delete()
            self.stdout.write('Cleared existing portfolio data.')

        if not Profile.objects.exists():
            data = {**PROFILE}
            # ensure contact fields align
            data.setdefault('email', CONTACT.get('email', ''))
            data.setdefault('phone', CONTACT.get('phone', ''))
            data.setdefault('location', CONTACT.get('location', ''))
            data.setdefault('contact_message', CONTACT.get('message', ''))
            Profile.objects.create(**data)
            self.stdout.write(self.style.SUCCESS('Created profile.'))
        else:
            self.stdout.write('Profile exists, skipping.')

        if not Project.objects.exists():
            for i, p in enumerate(PROJECTS):
                Project.objects.create(
                    title=p.get('title', ''),
                    description=p.get('description', ''),
                    image=p.get('image', ''),
                    technologies=p.get('technologies') or [],
                    category=p.get('category', 'web'),
                    demo_url=p.get('demoUrl') or p.get('demo_url') or '#',
                    github_url=p.get('githubUrl') or p.get('github_url') or '#',
                    featured=bool(p.get('featured')),
                    sort_order=i,
                )
            self.stdout.write(self.style.SUCCESS(f'Created {len(PROJECTS)} projects.'))
        else:
            self.stdout.write('Projects exist, skipping.')

        if not Skill.objects.exists():
            for i, s in enumerate(SKILLS):
                Skill.objects.create(
                    name=s.get('name', ''),
                    icon=s.get('icon', '') or '',
                    color=s.get('color', 'blue') or 'blue',
                    level=int(s.get('level') or 80),
                    sort_order=i,
                )
            self.stdout.write(self.style.SUCCESS(f'Created {len(SKILLS)} skills.'))
        else:
            self.stdout.write('Skills exist, skipping.')

        if not Experience.objects.exists():
            for i, e in enumerate(EXPERIENCES):
                Experience.objects.create(
                    position=e.get('position', ''),
                    company=e.get('company', ''),
                    location=e.get('location', ''),
                    duration=e.get('duration', ''),
                    description=e.get('description', ''),
                    technologies=e.get('technologies') or [],
                    achievements=e.get('achievements') or [],
                    sort_order=i,
                )
            self.stdout.write(self.style.SUCCESS(f'Created {len(EXPERIENCES)} experiences.'))
        else:
            self.stdout.write('Experience exists, skipping.')

        if not Education.objects.exists():
            for i, e in enumerate(EDUCATION):
                Education.objects.create(
                    degree=e.get('degree', ''),
                    school=e.get('school', ''),
                    location=e.get('location', ''),
                    duration=e.get('duration', ''),
                    status=e.get('status', ''),
                    description=e.get('description', ''),
                    coursework=e.get('coursework') or [],
                    sort_order=i,
                )
            self.stdout.write(self.style.SUCCESS(f'Created {len(EDUCATION)} education entries.'))
        else:
            self.stdout.write('Education exists, skipping.')

        self.stdout.write(self.style.SUCCESS('Seed complete.'))
