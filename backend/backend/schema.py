"""GraphQL schema for the portfolio website.

Exposes portfolio data (projects, skills, experience, education, contact)
as a GraphQL API consumed by the Vue frontend. Data is currently seed-backed;
it can be migrated to Django models/PostgreSQL later.
"""
from graphene import Boolean, Field, Int, List, ObjectType, Schema, String

projects = [{'id': 1, 'title': 'E-Commerce Platform', 'description': 'A full-featured online store with payment integration and inventory management.', 'image': 'ecommerce.png', 'technologies': ['React.js', 'Tailwind CSS', 'SQLite', 'Node.js'], 'category': 'web', 'demoUrl': '#', 'githubUrl': 'https://github.com/APKnation/demo-ecommerce-with-vue', 'featured': True}, {'id': 2, 'title': 'Fitness Tracker App', 'description': 'Mobile application for tracking workouts, nutrition, and health metrics.', 'image': 'tracker.png', 'technologies': ['Vue.js', 'Django', 'SQLite', 'Tailwind CSS'], 'category': 'mobile', 'demoUrl': '#', 'githubUrl': '#', 'featured': True}, {'id': 3, 'title': 'Task Management System', 'description': 'Collaborative tool for teams to manage projects and tasks efficiently.', 'image': 'task.png', 'technologies': ['HTML', 'Tailwind CSS', 'Vue.js', 'SQLite'], 'category': 'web', 'demoUrl': '#', 'githubUrl': 'https://github.com/APKnation/angular_todo-app', 'featured': True}, {'id': 4, 'title': 'Sustainable Farm Marketplace', 'description': 'E-commerce platform connecting sustainable farmers with consumers for direct product sales.', 'image': 'farmer.png', 'technologies': ['Django', 'React.js', 'SQLite', 'Tailwind CSS'], 'category': 'web', 'demoUrl': '#', 'githubUrl': 'https://github.com/APKnation/agriMarket', 'featured': True}, {'id': 5, 'title': 'Timber Management System', 'description': 'Mobile application for efficient timber inventory tracking, logging operations, and forest resource management.', 'image': 'timber.jpeg', 'technologies': ['Vue.js', 'SQLite', 'Tailwind CSS', 'HTML'], 'category': 'mobile', 'demoUrl': '#', 'githubUrl': 'https://github.com/APKnation/timber-app', 'featured': True}, {'id': 6, 'title': 'School Management System', 'description': 'Comprehensive platform for managing student records, attendance, grading, and communication between teachers, students, and parents.', 'image': 'school.png', 'technologies': ['Django', 'Vue.js', 'SQLite', 'Tailwind CSS'], 'category': 'web', 'demoUrl': '#', 'githubUrl': 'https://github.com/APKnation/mkalala-sec', 'featured': True}, {'id': 7, 'title': 'Tanzania Weather Tracker', 'description': 'Real-time weather tracking application that provides current weather conditions, forecasts, and location-based weather updates specifically for Tanzania regions.', 'image': 'weather.jpeg', 'technologies': ['React.js', 'HTML', 'Tailwind CSS', 'SQLite'], 'category': 'web', 'demoUrl': '#', 'githubUrl': 'https://github.com/APKnation/weather-api', 'featured': True}, {'id': 8, 'title': 'APKnation MovieHub', 'description': 'A modern movie discovery platform for finding the perfect film. Search thousands of movies with tailored recommendations for your next favorite viewing experience.', 'image': 'moviehub.png', 'technologies': ['Vue.js', 'Django', 'SQLite', 'Tailwind CSS'], 'category': 'web', 'demoUrl': '#', 'githubUrl': 'https://github.com/APKnation/movie-app-with-react', 'featured': True}, {'id': 9, 'title': 'Learning Management System (LMS)', 'description': 'Comprehensive educational platform for course creation, student enrollment, progress tracking, and interactive learning experiences with multimedia content support.', 'image': 'lms.png', 'technologies': ['React.js', 'Django', 'SQLite', 'Tailwind CSS'], 'category': 'web', 'demoUrl': '#', 'githubUrl': 'https://github.com/APKnation/LMS-django-react', 'featured': True}, {'id': 10, 'title': 'Hotel Management System', 'description': 'Complete hotel operations management solution with room booking, guest services, staff management, billing, and real-time inventory tracking.', 'image': 'hotel.png', 'technologies': ['Vue.js', 'HTML', 'SQLite', 'Tailwind CSS'], 'category': 'web', 'demoUrl': '#', 'githubUrl': 'https://github.com/APKnation/hotel-management-sytem', 'featured': True}, {'id': 11, 'title': 'Banking System', 'description': 'Modern banking application with account management, fund transfers, transaction tracking, and secure authentication for seamless financial operations.', 'image': 'banking.jpeg', 'technologies': ['Spring Boot', 'React.js', 'MySQL', 'Tailwind CSS'], 'category': 'web', 'demoUrl': '#', 'githubUrl': '#', 'featured': True}, {'id': 12, 'title': 'Furniture E-Commerce Platform', 'description': 'A full-featured furniture online store with product catalog, category management, cart system, order tracking, and admin dashboard built with Spring Boot and React.', 'image': 'furniture.png', 'technologies': ['Spring Boot', 'React.js', 'MySQL', 'Tailwind CSS'], 'category': 'web', 'demoUrl': '#', 'githubUrl': 'https://github.com/APKnation/furniture', 'featured': True}, {'id': 13, 'title': 'KaziHub Job Platform', 'description': 'A modern job marketplace platform connecting employers and job seekers with smart filtering, real-time notifications, application tracking, and profile management.', 'image': 'kazihub.png', 'technologies': ['Vue.js', 'Django', 'PostgreSQL', 'Tailwind CSS'], 'category': 'web', 'demoUrl': '#', 'githubUrl': 'https://github.com/APKnation/kazihub', 'featured': True}, {'id': 14, 'title': 'Maji Salama Water Management', 'description': 'Water resource management system for monitoring, tracking, and optimizing water distribution and conservation initiatives.', 'image': 'majisalama.png', 'technologies': ['Vue.js', 'Django', 'PostgreSQL', 'Tailwind CSS'], 'category': 'web', 'demoUrl': '#', 'githubUrl': 'https://github.com/APKnation/majisalama', 'featured': True}, {'id': 15, 'title': 'Cafe Ordering System', 'description': 'A comprehensive management system for cafe ordering, tracking tables, and processing payments efficiently.', 'image': 'order.png', 'technologies': ['Vue.js', 'Tailwind CSS', 'Django', 'SQLite'], 'category': 'web', 'demoUrl': '#', 'githubUrl': 'https://github.com/APKnation/cafe-ordering-MS', 'featured': True}, {'id': 16, 'title': 'Charity Management Platform', 'description': 'A platform to facilitate and manage charitable donations, volunteers, and campaigns.', 'image': 'charity.png', 'technologies': ['Vue.js', 'Tailwind CSS', 'Django', 'SQLite'], 'category': 'web', 'demoUrl': '#', 'githubUrl': 'https://github.com/APKnation/charity', 'featured': True}]

skills = [{'name': 'JavaScript', 'icon': 'JS', 'color': 'yellow', 'level': 92}, {'name': 'Python', 'icon': 'PY', 'color': 'blue', 'level': 88}, {'name': 'PHP', 'icon': 'PH', 'color': 'indigo', 'level': 76}, {'name': 'Java', 'icon': 'JV', 'color': 'red', 'level': 80}, {'name': 'Spring Boot', 'icon': 'SB', 'color': 'green', 'level': 78}, {'name': 'Django', 'icon': 'DJ', 'color': 'green', 'level': 84}, {'name': 'HTML/CSS', 'icon': 'HC', 'color': 'orange', 'level': 95}, {'name': 'Tailwind', 'icon': 'TW', 'color': 'cyan', 'level': 90}, {'name': 'Angular.js', 'icon': 'AJ', 'color': 'green', 'level': 72}, {'name': 'React.js', 'icon': 'RJ', 'color': 'blue', 'level': 88}, {'name': 'Vue.js', 'icon': 'VV', 'color': 'green', 'level': 93}, {'name': 'SQL', 'icon': 'SQ', 'color': 'purple', 'level': 86}]

experiences = [{'id': 1, 'position': 'Software Engineer', 'company': 'Tech Solutions Ltd', 'location': 'Dodoma, Tanzania', 'duration': '2023 - Present', 'description': 'Full-stack development of web applications using modern technologies. Leading development teams and implementing best practices.', 'technologies': ['Vue.js', 'Laravel', 'Node.js', 'MySQL', 'Docker'], 'achievements': ['Leading development of 5 major client projects', 'Implementing modern development practices', 'Mentoring junior developers', 'Setting up CI/CD pipelines']}]

education = [{'id': 1, 'degree': 'Bachelor of Science in Software Engineering', 'school': 'University of Dodoma', 'location': 'Dodoma, Tanzania', 'duration': '2023 - Present', 'status': 'In Progress', 'description': 'Currently pursuing comprehensive software engineering education with focus on software development methodologies, system design, and practical implementation.', 'coursework': ['Software Architecture', 'System Design', 'Web Development', 'Database Systems', 'Software Engineering Principles', 'Agile Development', 'Cloud Computing']}]

contact = {'name': 'Atanas Patrick', 'email': 'atanasikafuka@gmail.com', 'phone': '+255749288072', 'location': 'Dodoma, Tanzania', 'message': "I'm actively open to discussing new opportunities, collaborations, and exciting projects."}


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


class SkillType(ObjectType):
    name = String()
    icon = String()
    color = String()
    level = Int()


class ExperienceType(ObjectType):
    id = Int()
    position = String()
    company = String()
    location = String()
    duration = String()
    description = String()
    technologies = List(String)
    achievements = List(String)


class EducationType(ObjectType):
    id = Int()
    degree = String()
    school = String()
    location = String()
    duration = String()
    status = String()
    description = String()
    coursework = List(String)


class ContactType(ObjectType):
    name = String()
    email = String()
    phone = String()
    location = String()
    message = String()


class Query(ObjectType):
    projects = List(ProjectType)
    project = Field(ProjectType, id=Int(required=True))
    skills = List(SkillType)
    experience = List(ExperienceType)
    education = List(EducationType)
    contact = Field(ContactType)

    def resolve_projects(self, info, **kwargs):
        return projects

    def resolve_project(self, info, **kwargs):
        project_id = kwargs.get("id")
        for p in projects:
            if p["id"] == project_id:
                return p
        return None

    def resolve_skills(self, info, **kwargs):
        return skills

    def resolve_experience(self, info, **kwargs):
        return experiences

    def resolve_education(self, info, **kwargs):
        return education

    def resolve_contact(self, info, **kwargs):
        return contact


schema = Schema(query=Query)
