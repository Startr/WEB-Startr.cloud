# Writing our Startr Django app, part 2

This tutorial begins where [[Writing our Startr Django app, part 1|Tutorial part 1]] left off. We’ll set up the database, create your first model, and get a quick introduction to Django’s automatically-generated admin site.

> **Note**: if you've run into any problems in [[Writing our Startr Django app, part 1|Tutorial part 1]] or just want  a snapshot of how things are at thing point we've tagged where things at https://github.com/Startr/WEB-Django/releases/tag/v0.0.2. Feel free to download the Zip and jump right in.
## Database setup

We store data in our database. They are like digital filing cabinets.

Imagine a library. We have thousands of books. We need a system to categorize and find these books fast. A database does this for our digital data. We add, update, and retrieve information in a structured way.

Our team uses databases to run dynamic websites and apps. We store user profiles, app data, and more in our database. It's like a super-smart, super-fast librarian helping us manage our digital assets.

SQLite is the default database for Django. 

We love SQLite for our Django projects/. SQLite is self-contained and included in Python. This means you don't need to install anything else to support your database. It also reduces dependencies and simplifies deployment. 

It's a great choice for projects of any size, even those with tens of thousands of users. We've had it handle massive amounts of traffic with ease. We start with in in most of our projects and it has never given us headaches.

When to consider PostgreSQL? If your project grows to millions of users or requires specific advanced features. But for most use cases, SQLite is more than sufficient.

If you wish to use another database, see [details to customize and get your database running](https://docs.djangoproject.com/en/4.2/topics/install/#database-installation).

Now, open up `our_site/settings.py`. It’s a normal Python module with module-level variables representing Django settings.

While you’re editing `our_site/settings.py`, set [`TIME_ZONE`](https://docs.djangoproject.com/en/4.2/ref/settings/#std-setting-TIME_ZONE) to your time zone.

Also, note the [`INSTALLED_APPS`](https://docs.djangoproject.com/en/4.2/ref/settings/#std-setting-INSTALLED_APPS) setting at the top of the file. That holds the names of all Django applications that are activated in this Django instance. Apps can be used in multiple projects, and you can package and distribute them for use by others in their projects.

By default, [`INSTALLED_APPS`](https://docs.djangoproject.com/en/4.2/ref/settings/#std-setting-INSTALLED_APPS) contains the following apps, all of which come with Django:

- [`django.contrib.admin`](https://docs.djangoproject.com/en/4.2/ref/contrib/admin/#module-django.contrib.admin "django.contrib.admin: Django's admin site.") – The admin site. You’ll use it shortly.
- [`django.contrib.auth`](https://docs.djangoproject.com/en/4.2/topics/auth/#module-django.contrib.auth "django.contrib.auth: Django's authentication framework.") – An authentication system.
- [`django.contrib.contenttypes`](https://docs.djangoproject.com/en/4.2/ref/contrib/contenttypes/#module-django.contrib.contenttypes "django.contrib.contenttypes: Provides generic interface to installed models.") – A framework for content types.
- [`django.contrib.sessions`](https://docs.djangoproject.com/en/4.2/topics/http/sessions/#module-django.contrib.sessions "django.contrib.sessions: Provides session management for Django projects.") – A session framework.
- [`django.contrib.messages`](https://docs.djangoproject.com/en/4.2/ref/contrib/messages/#module-django.contrib.messages "django.contrib.messages: Provides cookie- and session-based temporary message storage.") – A messaging framework.
- [`django.contrib.staticfiles`](https://docs.djangoproject.com/en/4.2/ref/contrib/staticfiles/#module-django.contrib.staticfiles "django.contrib.staticfiles: An app for handling static files.") – A framework for managing static files.

These applications are included by default as a convenience for the common case.

Some of these applications use at least one database table, so we need to create the tables in the database before we can use them. To do that, run the following command from in our docker container:

```bash
python manage.py migrate
```


> **Note**: Be sure to run it from the same directory as our project's manage.py `/project/our_site/`

When you run `python manage.py migrate` for the first time you should be presented with:

```bash
Operations to perform:
  Apply all migrations: admin, auth, contenttypes, sessions
Running migrations:
  Applying contenttypes.0001_initial... OK
  Applying auth.0001_initial... OK
  Applying admin.0001_initial... OK
  Applying admin.0002_logentry_remove_auto_add... OK
  Applying admin.0003_logentry_add_action_flag_choices... OK
  Applying contenttypes.0002_remove_content_type_name... OK
  Applying auth.0002_alter_permission_name_max_length... OK
  Applying auth.0003_alter_user_email_max_length... OK
  Applying auth.0004_alter_user_username_opts... OK
  Applying auth.0005_alter_user_last_login_null... OK
  Applying auth.0006_require_contenttypes_0002... OK
  Applying auth.0007_alter_validators_add_error_messages... OK
  Applying auth.0008_alter_user_username_max_length... OK
  Applying auth.0009_alter_user_last_name_max_length... OK
  Applying auth.0010_alter_group_name_max_length... OK
  Applying auth.0011_update_proxy_permissions... OK
  Applying auth.0012_alter_user_first_name_max_length... OK
  Applying sessions.0001_initial... OK
```

The [`migrate`](https://docs.djangoproject.com/en/4.2/ref/django-admin/#django-admin-migrate) command looks at the [`INSTALLED_APPS`](https://docs.djangoproject.com/en/4.2/ref/settings/#std-setting-INSTALLED_APPS) setting and creates any necessary database tables according to the database settings in your `our_site/settings.py` file and the database migrations shipped with the app (we’ll cover those later). You’ll see a message for each migration it applies. 

> **Note**: If you’re interested in databases, `run sqlite3 db.sqlite3` and type , `.tables` (SQLite) to display the tables Django created. To exit sqlite3 hold down `^t` control and t.
## For the minimalists

As we said above, the default applications are included for the common case, but only some need them. If you don’t need any or all of them, feel free to comment out or delete the appropriate line(s) from [`INSTALLED_APPS`](https://docs.djangoproject.com/en/4.2/ref/settings/#std-setting-INSTALLED_APPS) before running [`migrate`](https://docs.djangoproject.com/en/4.2/ref/django-admin/#django-admin-migrate). The [`migrate`](https://docs.djangoproject.com/en/4.2/ref/django-admin/#django-admin-migrate) command will only run migrations for apps in [`INSTALLED_APPS`](https://docs.djangoproject.com/en/4.2/ref/settings/#std-setting-INSTALLED_APPS).

> **Note**: if you've run into any problems or just want  a snapshot of how things are at thing point we've tagged where things at https://github.com/Startr/WEB-Django/releases/tag/v0.0.3. Feel free to download the Zip and jump right in.
## Creating models

Now we’ll define your models – essentially, your database layout with additional metadata.


### Philosophy
---
> **Philosophy  - Sidebar**
>A model is our main source of data information. It defines the key fields and behaviours for our stored data. With Django we embrace [DRY code](https://wiki.c2.com/?DontRepeatYourself). This means you define your data model once, and everything else follows automatically.
---

**A Clear Path Forward**

Migrations in Django come from one source: your models file. 

Here, a clear history is built. Django keeps your database in sync with your models.

Think of it like a diary. Every change in your models creates a new entry.

This method helps Django stay up-to-date with your database schema.

In our course app, we define three crucial models: **Person**, **Group**, and **Theme**. These outline the app's framework and model the learning process.

---

### 1. Person Model

The `Person` model represents individuals in the course. Each person can take on different roles. Attributes include:

- **Name** : The person's full name.
- **Email** : For communication and account management.
- **Phone Number** : Optional direct contact information.
- **Profile Picture** : A visual representation of the person.
- **Role** : a participant, facilitator, or team leader. This distinction unlocks custom app features.
### 2. Group Model

The `Group` model represents collections of `Person` instances working together. Each group promotes collaboration. Key attributes include:

- **Members** : A many-to-many relationship - connecting `Person` instances to `Group` instances, showing who belongs to what.
- **Group Name** : A distinct identifier for each group.
- **Description** : A concise summary of the group's purpose or focus.

### 3. Theme Model

Our `Theme` model presents a cohesive look for courses or groups.

**Key Features:**

- **Color Palette**: A set of colors used for design, branding, and materials.
- **Font Choices**: Typographic specifications for clear and engaging design.
- **Logo**: An image that defines the group's identity.
- **Background Images or Graphics**: Optional visual elements that enhance content.

### Summary

These models work together to create a powerful framework for our course app. They foster collaboration and enable a cohesive learning experience.

These concepts are represented by Python classes. Edit the `courses/models.py` file so it looks like this:

`courses/models.py`

```python
from django.db import models
from django.contrib.auth.models import User

class Person(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)  # Connects to the Django user model
    profile_picture = models.ImageField(upload_to='profile_pictures/', null=True, blank=True)
    role = models.CharField(max_length=20, choices=[('participant', 'Participant'), ('facilitator', 'Facilitator')])

    def __str__(self):
        return self.user.get_full_name() or self.user.username


class Group(models.Model):
    name = models.CharField(max_length=100)
    members = models.ManyToManyField(Person)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class Theme(models.Model):
    group = models.ForeignKey(Group, on_delete=models.CASCADE)  # Connects each theme to a group
    color_palette = models.JSONField()  # Stores color values
    font_choices = models.CharField(max_length=100)  # Specify the font choice
    logo = models.ImageField(upload_to='logos/', null=True, blank=True)
    background_image = models.ImageField(upload_to='backgrounds/', null=True, blank=True)

    def __str__(self):
        return f"Theme for {self.group.name}"

```

## Understanding the Models in Our Course App

In our Django course app, we have three main models: **Person**, **Group**, and **Theme**. Each model is represented by a class that subclasses [`django.db.models.Model`](https://docs.djangoproject.com/en/4.2/ref/models/instances/#django.db.models.Model "django.db.models.Model"). Each model comprises fields that correspond to database columns.

#### 1. Person Model
The `Person` model captures individual users who interact within the course. It has the following fields:

- **user**: A one-to-one relationship with Django's user model (`User`). This links each `Person` instance to an authenticated user.
- **profile_picture**: An [`ImageField`](https://docs.djangoproject.com/en/4.2/ref/models/fields/#django.db.models.ImageField "django.db.models.ImageField") used for users' profile images.
- **role**: A [`CharField`](https://docs.djangoproject.com/en/4.2/ref/models/fields/#django.db.models.CharField "django.db.models.CharField") that indicates whether the person is a `participant` or `facilitator`. The choices are defined via a set of options.

Each field is defined with a machine-readable name, which is also its database column name. By default, Django uses the field name as its human-readable name unless an alternative is provided.

#### 2. Group Model
The `Group` model represents a collection of `Person` instances working together. Its fields include:

- **name**: A [`CharField`](https://docs.djangoproject.com/en/4.2/ref/models/fields/#django.db.models.CharField "django.db.models.CharField") that identifies the group.
- **members**: A [`ManyToManyField`](https://docs.djangoproject.com/en/4.2/ref/models/fields/#django.db.models.ManyToManyField "django.db.models.ManyToManyField") that links multiple `Person` instances to the group. This enables flexible collaboration.
- **description**: A text field that provides an optional overview of the group's purpose.

#### 3. Theme Model
The `Theme` model defines the visual aspects associated with a course or group. It includes:

- **group**: A foreign key that connects each theme to a specific `Group`, establishing a relationship.
- **color_palette**: A [`JSONField`](https://docs.djangoproject.com/en/4.2/ref/models/fields/#django.db.models.JSONField "django.db.models.JSONField") used to store color values for branding.
- **font_choices**: A [`CharField`](https://docs.djangoproject.com/en/4.2/ref/models/fields/#django.db.models.CharField "django.db.models.CharField") specifying typography preferences.
- **logo**: An [`ImageField`](https://docs.djangoproject.com/en/4.2/ref/models/fields/#django.db.models.ImageField "django.db.models.ImageField") for the course or group branding.
- **background_image**: Another optional [`ImageField`](https://docs.djangoproject.com/en/4.2/ref/models/fields/#django.db.models.ImageField "django.db.models.ImageField") to enhance visual content.

Each of these models is designed to work cohesively, providing a robust framework for managing participants, groups, and the themes that enhance the learning experience.
## Activating Our Models

The model code provides Django with valuable information. With this code, Django can:

- Create a database schema with `CREATE TABLE` statements for our app.
- Generate a Python database-access API to interact with `Person`, `Group`, and `Theme` objects.

Before we move forward, we need to inform our project that the `courses` app is installed.
### Philosophy
--- 
> **Philosophy  - Sidebar**
> Django apps are “pluggable”: You can use an app in multiple projects, and you can distribute apps, because they don’t have to be tied to a given Django installation.
---

To include the app in our project, we need to add a reference to its configuration class in the [`INSTALLED_APPS`](https://docs.djangoproject.com/en/4.2/ref/settings/#std-setting-INSTALLED_APPS) setting. The `CoursesConfig` class is in the `courses/apps.py` file, so its dotted path is `'courses.apps.coursesConfig'`. Edit the `our_site/settings.py` file and add that dotted path to the [`INSTALLED_APPS`](https://docs.djangoproject.com/en/4.2/ref/settings/#std-setting-INSTALLED_APPS) setting. It’ll look like this:

`our_site/settings.py`

```python
INSTALLED_APPS = [
    "courses",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]
```

Now Django knows to include the `courses` app when running our_site. Let’s run another command:

```bash
python manage.py makemigrations courses
```

When we first run this we'll see something similar to the following:

```bash
SystemCheckError: System check identified some issues:

ERRORS:
courses.Person.profile_picture: (fields.E210) Cannot use ImageField because Pillow is not installed.
	HINT: Get Pillow at https://pypi.org/project/Pillow/ or run command "python -m pip install Pillow".
courses.Theme.background_image: (fields.E210) Cannot use ImageField because Pillow is not installed.
	HINT: Get Pillow at https://pypi.org/project/Pillow/ or run command "python -m pip install Pillow".
courses.Theme.logo: (fields.E210) Cannot use ImageField because Pillow is not installed.
	HINT: Get Pillow at https://pypi.org/project/Pillow/ or run command "python -m pip install Pillow".
```

We'll solve this by running
```bash
pipenv install Pillow
```

This will both install `Pillow` and add it to our `Pipfile` and `Pipfile.lock` so that the next time we build Docker of the project it will automatically be installed. 

Let's run makemigrations again:

```bash
python manage.py makemigrations courses
```

This will now output:
```bash
Migrations for 'courses':
  courses/migrations/0001_initial.py
    - Create model Group
    - Create model Theme
    - Create model Person
    - Add field members to group
```

By running `makemigrations`, you’re telling Django that you’ve made some changes to your models (in this case, you’ve made new ones) and that you’d like the changes to be stored as a _migration_.

Migrations are how Django stores changes to your models (and thus your database schema) - they’re files on disk. You can read the migration for your new model if you like; it’s the file `courses/migrations/0001_initial.py`. Don’t worry, you’re not expected to read them every time Django makes one, but they’re designed to be human-editable in case you want to manually tweak how Django changes things.

There’s a command that will run the migrations for you and manage your database schema automatically - that’s called [`migrate`](https://docs.djangoproject.com/en/4.2/ref/django-admin/#django-admin-migrate), and we’ll come to it in a moment - but first, let’s see what SQL that migration would run. The [`sqlmigrate`](https://docs.djangoproject.com/en/4.2/ref/django-admin/#django-admin-sqlmigrate) command takes migration names and returns their SQL:

```bash
python manage.py sqlmigrate courses 0001
```

You should see something similar to the following (we’ve reformatted it for readability):

```sql
['/project/our_site', '/usr/local/lib/python311.zip', '/usr/local/lib/python3.11', '/usr/local/lib/python3.11/lib-dynload', '/project/.venv/lib/python3.11/site-packages']
BEGIN;
--
-- Create model Group
--
CREATE TABLE "courses_group" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" varchar(100) NOT NULL, "description" text NOT NULL);
--
-- Create model Theme
--
CREATE TABLE "courses_theme" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "color_palette" text NOT NULL CHECK ((JSON_VALID("color_palette") OR "color_palette" IS NULL)), "font_choices" varchar(100) NOT NULL, "logo" varchar(100) NULL, "background_image" varchar(100) NULL, "group_id" bigint NOT NULL REFERENCES "courses_group" ("id") DEFERRABLE INITIALLY DEFERRED);
--
-- Create model Person
--
CREATE TABLE "courses_person" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "profile_picture" varchar(100) NULL, "role" varchar(20) NOT NULL, "user_id" integer NOT NULL UNIQUE REFERENCES "auth_user" ("id") DEFERRABLE INITIALLY DEFERRED);
--
-- Add field members to group
--
CREATE TABLE "courses_group_members" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "group_id" bigint NOT NULL REFERENCES "courses_group" ("id") DEFERRABLE INITIALLY DEFERRED, "person_id" bigint NOT NULL REFERENCES "courses_person" ("id") DEFERRABLE INITIALLY DEFERRED);
CREATE INDEX "courses_theme_group_id_f7d771b7" ON "courses_theme" ("group_id");
CREATE UNIQUE INDEX "courses_group_members_group_id_person_id_efd02802_uniq" ON "courses_group_members" ("group_id", "person_id");
CREATE INDEX "courses_group_members_group_id_2879fe5a" ON "courses_group_members" ("group_id");
CREATE INDEX "courses_group_members_person_id_d16be044" ON "courses_group_members" ("person_id");
COMMIT;
```

**Note** the following:

- The exact output will vary depending on the database you are using. The example above is generated for PostgreSQL.
- Table names are automatically generated by combining the name of the app (`courses`) and the lowercase name of the model – `person`, `group`, and `theme`. (You can override this behavior.)
- Primary keys (IDs) are added automatically. (You can override this, too.)
- By convention, Django appends `"_id"` to the foreign key field name. (Yes, you can override this as well.)
- The foreign key relationship is made explicit by a `FOREIGN KEY` constraint. Don’t worry about the `DEFERRABLE` parts; it’s telling PostgreSQL to not enforce the foreign key until the end of the transaction.
- It’s tailored to the database you’re using, so database-specific field types such as `auto_increment` (MySQL), `bigint PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY` (PostgreSQL), or `integer primary key autoincrement` (SQLite) are handled for you automatically. The same goes for quoting field names, using either double quotes or single quotes.
- The [`sqlmigrate`](https://docs.djangoproject.com/en/4.2/ref/django-admin/#django-admin-sqlmigrate) command doesn’t actually run the migration on your database; instead, it prints it to the screen so you can see what SQL Django thinks is required. It’s useful for checking what Django is going to do or if you have database administrators who require SQL scripts for changes.


If you’re interested, you can also run `python manage.py check`
this checks for any problems in your project without making migrations or touching the database.

Now, run `migrate` again to create those model tables in your database:

```bash
python manage.py migrate
```

```bash
Operations to perform:
  Apply all migrations: admin, auth, contenttypes, courses, sessions
Running migrations:
  Applying courses.0001_initial... OK
```

The `migrate` command applies all pending migrations to your database. Django tracks applied migrations using a special table called `django_migrations`. This command synchronizes your model changes with the database schema.

Migrations are powerful. They allow you to modify your models over time without deleting your database or tables. You can upgrade your database live without losing data. 

We will explore migrations in detail later in the tutorial. For now, remember this three-step guide for making changes to your models:

- Change your models (in `models.py`).
- Run [`python manage.py makemigrations`](https://docs.djangoproject.com/en/4.2/ref/django-admin/#django-admin-makemigrations) to create migrations for those changes
- Run [`python manage.py migrate`](https://docs.djangoproject.com/en/4.2/ref/django-admin/#django-admin-migrate) to apply those changes to the database.

Separate commands exist for creating and applying migrations. This design allows you to commit migrations to your version control system. You can ship these migrations with your app. They make development easier and are useful for other developers as well. Migrations ensure consistency in production environments.

You should read the offical  [django-admin documentation](https://docs.djangoproject.com/en/4.2/ref/django-admin/) for full information on what the `manage.py` utility can do.

## Playing with the API

Now, let’s hop into the interactive Python shell and play around with the free API Django gives you. 

### Django's manage.py shell

To invoke the Django Python shell, use this command:

```bash
python manage.py shell
```

We’re using this instead of simply typing “python”, because `manage.py` sets the [`DJANGO_SETTINGS_MODULE`](https://docs.djangoproject.com/en/4.2/topics/settings/#envvar-DJANGO_SETTINGS_MODULE) environment variable, which gives Django the Python import path to your `our_site/settings.py` file.

Once you’re in the shell, explore the [database API](https://docs.djangoproject.com/en/4.2/topics/db/queries/):

```python
from courses.models import Person, Group, Theme # Import the model classes we just wrote.
```

 No people, groups, or themes in the system yet.

```
>>> Person.objects.all()
<QuerySet []>
>>> Group.objects.all()
<QuerySet []>
>>> Theme.objects.all()
<QuerySet []>
>>> exit()
```

This is perfect. Our object sets have been created but we haven't populated them yet. Let's take a moment to `make` a release.

## Make'ing a release

Using `make` in our Django and Linux setup streamlines our work. The Makefile automates repetitive tasks, making it easier for developers. For example, with just a simple command, we can run a script that fetches updates from a remote source. This saves time and minimizes errors. 

It's easy for all of us to forget complex command sequences. So to keep things clear is Startr project we try to always include our Makefile. Just type `make it_run`, and we're running.

The `help` command is a lifesaver. It lists all available commands in an instant. This feature is especially helpful for newcomers who might feel overwhelmed. 

Clean-up tasks, like `things_clean`, keep our project tidy and organized. The Makefile brings clarity and efficiency to our workflow. It transforms chaos into order.

To create a minor release using our `Makefile`, we'll follow a series of steps that include starting the minor release, updating the version number, and finishing the release. Here’s a step-by-step breakdown:

### Step 0: Make sure we're not in the Docker container and our latest changes are checked in

```bash
git status
```

This will output

```bash
On branch develop
Your branch is up to date with 'origin/develop'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   Pipfile
	modified:   Pipfile.lock
	modified:   our_site/courses/models.py
	modified:   our_site/our_site/settings.py

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	our_site/courses/migrations/0001_initial.py
```

So let's commit our changes and add & commit our migrations to our git repo before doing a minor release.

```bash
git commit  Pipfile Pipfile.lock -m "chore: pillow added to requirement"
git commit our_site/courses/models.py -m "feat:Initial courses models"
git commit our_site/our_site/settings.py -m \
	"feat:Adding courses to our site settings"
git add our_site/courses/migrations/0001_initial.py && git commit -m \
	"feat: Adding initial course migrations"
```

With these files added we'll push our changes:

```bash
git pull && git push
```
>**Note**: It's always a good idea to pull changes to ensure we're working with the latest code 

### Step 1: Ensure Our Git Flow is Set Up

Make sure we have Git Flow initialized in your repository. If you haven't done this yet, run the following command:

```bash
git flow init
```

Follow the prompts to set up your branching model.

### Step 2: Check the Current Version

Before starting a new minor release, it’s a good practice to check your current tags and version numbers. You can get the current version using:

```bash
git tag --sort=-v:refname
```

### Step 3: Start the Minor Release 

Use the `make` command defined in your `Makefile` to start a minor release. The command incrementally changes the minor version of your tag. Run:

```bash
make minor_release
```

This command executes the `minor_release` target defined in your `Makefile`, which includes the following:

```make
minor_release:
	# Start a minor release with incremented minor version
	git flow release start $$(git tag --sort=-v:refname | sed 's/^v//' | head -n 1 | awk -F'.' '{print $$1"."$$2+1".0"}')
```

#### Breakdown of What This Does:
1. It retrieves the current highest version tag.
2. It extracts the major and minor numbers.
3. It increments the minor version by 1 and sets the patch version to 0.
4. It starts a new release branch based on the current version.

### Step 4: Make Necessary Changes

Make any changes needed for this minor release, like updating the code, fixing bugs, or adding new features. Remember to commit your changes during this process:

```bash
git add .
git commit -m "Your message about the changes"
```

### Step 5: Finish the Release

Once your changes are made and committed, you can finish the release with:

```bash
make release_finish
```

This will execute the `release_finish` target from your `Makefile`. Here's what the command does:

```make
release_finish:
	git flow release finish "$$(git branch --show-current | sed 's/release\///')" && git push origin develop && git push origin master && git push --tags && git checkout develop
```

#### Breakdown of Release Finish:
1. It merges the release branch into `develop` and `master`.
2. It pushes changes to both branches and also pushes tags.
3. It checks out the `develop` branch again.

### Releases keep things clean and tidy :D

> **Note**: if you've run into any problems just want  a snapshot of how things are at thing point we've tagged where things at https://github.com/Startr/WEB-Django/releases/tag/v0.1.0. Feel free to download the Zip and jump right in.

## Using the API to manage DB data

### Create a New Person

Before creating the test user, we must ensure the auth tables exist. Missing tables cause errors.

Run the migration commands to build the database structure. It’s like setting the foundation before raising a house. Without it, everything falls apart. First, check for pending migrations:

```bash
python manage.py makemigrations
```

Next, apply those migrations:

```bash
python manage.py migrate
```

This creates essential tables like `auth_user`. It’s like giving Django its memory. Once these tables are in place, we can create users.

```bash
Operations to perform:
  Apply all migrations: admin, auth, contenttypes, courses, sessions
Running migrations:
  Applying contenttypes.0001_initial... OK
  Applying auth.0001_initial... OK
  Applying admin.0001_initial... OK
  Applying admin.0002_logentry_remove_auto_add... OK
  Applying admin.0003_logentry_add_action_flag_choices... OK
  Applying contenttypes.0002_remove_content_type_name... OK
  Applying auth.0002_alter_permission_name_max_length... OK
  Applying auth.0003_alter_user_email_max_length... OK
  Applying auth.0004_alter_user_username_opts... OK
  Applying auth.0005_alter_user_last_login_null... OK
  Applying auth.0006_require_contenttypes_0002... OK
  Applying auth.0007_alter_validators_add_error_messages... OK
  Applying auth.0008_alter_user_username_max_length... OK
  Applying auth.0009_alter_user_last_name_max_length... OK
  Applying auth.0010_alter_group_name_max_length... OK
  Applying auth.0011_update_proxy_permissions... OK
  Applying auth.0012_alter_user_first_name_max_length... OK
  Applying courses.0001_initial... OK
  Applying sessions.0001_initial... OK
```

--- 
> **Philosophy - Sidebar**
> Working with databases is crucial. Data drives applications. 
>
> With Django's API, you create users quickly. I once needed a test user in minutes. I opened the shell and typed a few commands. Soon, the user was ready. No hassle.
>
> The API handles the hard parts. You focus on building. This saves time. Efficient development leads to better products.
---

Now, to create a test user with specific details, we use Django's shell. Open our project container and run:

```bash
cd /project/our_site
python manage.py shell
```

>**Note**: This must be run within our docker container's /project/our_site/ folder 

Within the shell, you can execute the following commands to create a user:

```python
from django.contrib.auth.models import User
from courses.models import Person

# Create the test user
test_user = User.objects.create_user(username='testuser', email='testuser@example.com', password='password123')

# Now create the Person instance
p = Person(user=test_user, profile_picture=None, role='participant')
p.save()  # Save the Person instance to the database
```

Now you have a test user (`testuser`) and a matching `Person` instance. Use this user throughout your project. This method lets you create users in the Django shell. It’s quick and flexible. If you want to automate it, create a custom management command. It’s like having a button that sets up everything for you. 

Save the object to the database by calling `save()` explicitly.

```python
p.save()
```

Now it has an ID.

```python
p.id
1
```

Access model field values using Python attributes.

```python
p.user
<some_user_instance>
p.role
'participant'
```

### Change values by modifying the attributes and then calling `save()`.

```python
>>> p.role = "facilitator"
>>> p.save()
```

### `objects.all()` displays all persons, groups, or themes in the database.

```python
>>> Person.objects.all()
 <QuerySet [<Person: testuser>]>
```

Wait a minute. `<Person: Person object (1)>` isn’t a helpful representation of this object. 


To improve object representation, let’s edit the `Person`, `Group`, and `Theme` models in the `courses/models.py` file. We will add a [`__str__()`](https://docs.djangoproject.com/en/4.2/ref/models/instances/#django.db.models.Model.__str__ "django.db.models.Model.__str__") method to each model:

`courses/models.py`

```python
from django.db import models
from django.contrib.auth.models import User

class Person(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_picture = models.ImageField(upload_to='profile_pictures/', null=True, blank=True)
    role = models.CharField(max_length=20, choices=[('participant', 'Participant'), ('facilitator', 'Facilitator')])

    def __str__(self):
        return f"{self.user.get_full_name() or self.user.username} ({self.role})"


class Group(models.Model):
    name = models.CharField(max_length=100)
    members = models.ManyToManyField(Person)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class Theme(models.Model):
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    color_palette = models.JSONField()
    font_choices = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='logos/', null=True, blank=True)
    background_image = models.ImageField(upload_to='backgrounds/', null=True, blank=True)

    def __str__(self):
        return f"Theme for '{self.group.name}'"
```

Adding the `__str__()` methods is essential. This not only makes it easier to work with objects in the interactive prompt but also enhances how objects are displayed in Django’s automatically-generated admin interface.

---

https://sage.startr.cloud/c/b86d2148-3710-4331-9860-95fe18872e3e
### Adding a custom method to our courses model

In the `courses/models.py` file, we can add custom methods to enhance our models. For example, let’s add a method to the `Person` model:

```python
from django.db import models 
from django.contrib.auth.models import User
from django.utils import timezone # Add this for our custom method

class Person(models.Model):
    # Existing fields...

    def is_active(self):
        """Returns True if the user is active based on their last login time."""
        return self.user.last_login >= timezone.now() - timezone.timedelta(days=30)
```

In this example, we define a method called `is_active`. This method checks if the user associated with the `Person` instance has logged in within the last 30 days. 

Note the import statements for `from django.utils import timezone` to access Django's timezone utilities. If you're unfamiliar with time zone handling in Django, you can learn more in the [time zone support docs](https://docs.djangoproject.com/en/4.2/topics/i18n/timezones/).

After saving these changes, start a new Python interactive shell by running `python manage.py shell`:

```bash
python manage.py shell
```

Then, import the `Person` model:

```python
>>> from courses.models import Person
```

Now you can create a `Person` instance or access existing ones, and use the `is_active` method to check user activity.

Certainly! Here’s the revised section combining the code examples and the explanation in a clear and structured format:

---

# Working with the `Person` Model

## Verify Our `__str__()` Addition Worked

First, let's check if our `__str__()` method is functioning correctly:

```python
>>> Person.objects.all()
<QuerySet [<Person: testuser (participant)>]>
```

## Django Provides a Rich Database Lookup API Driven by Keyword Arguments

Django's database lookup API allows us to filter objects based on keyword arguments:

```python
>>> Person.objects.filter(id=1)
<QuerySet [<Person: testuser (participant)>]>
>>> Person.objects.filter(user__username__startswith="test")
<QuerySet [<Person: testuser (participant)>]>
```

## Get the Person Based on Activity This Year

If we want to check for users who have logged in this year, we can use the following query:

```python
>>> from django.utils import timezone
>>> current_year = timezone.now().year
>>> Person.objects.filter(user__last_login__year=current_year)
<QuerySet []>
```

### Why This Query is Important

Once a user logs in, the `last_login` field for that user's associated `User` model updates with the current timestamp. Therefore, once a user logs in during the current year, the query above will return all `Person` instances for users who logged in this year.

This feature allows for efficient tracking of active users. If `last_login` indicates a `Person` logged in anytime within the current year, they will appear in the query results. Monitoring recent activity enables effective engagement with users who have accessed the application.

---
## The API Automatically Follows Relationships

Django’s ORM allows you to follow relationships as deeply as needed. Use double underscores to separate relationships, and this method works at any level, with no limitations.

### Fake a Login for the Test User

Since we only have our test user and they haven't logged in yet, we need to simulate a login by manually setting the `last_login` attribute. Here’s how to do it:

```python
from django.utils import timezone
from django.contrib.auth.models import User

# Assume 'testuser' is the username of your test user
test_user = User.objects.get(username='testuser')
test_user.last_login = timezone.now()
test_user.save()
```

### Create a New Group

Now, let’s create a new group associated with our test user. First, ensure you import the necessary models:

```python
from courses.models import Group, Person

# Assume 'testuser' is the username of your test user
test_user_person = Person.objects.get(user__username='testuser')

# Create a new group
new_group = Group.objects.create(name='Test Group', description='This is a test group.')
new_group.members.add(test_user_person)  # Add the test user as a member
new_group.save()
```

### Find All Groups for Any Person Who Logged In This Year

Now let’s find all `Group` instances that have members who have logged in this year:

```python
current_year = timezone.now().year
groups_with_active_members = Group.objects.filter(members__user__last_login__year=current_year)
print(groups_with_active_members)  # This will show the groups that have members logged in this year
```

### Let's Delete a Group

To delete a specific group, use the `delete()` method. For example, to delete a group that starts with "Test," you would execute:

```python
g = Group.objects.filter(name__startswith="Test")
g.delete()
```

For more information on model relationships, see [Accessing related objects](https://docs.djangoproject.com/en/4.2/ref/models/relations/). To learn about using double underscores for field lookups via the API, check out [Field lookups](https://docs.djangoproject.com/en/4.2/topics/db/queries/#field-lookups-intro). For full details on the database API, refer to our [Database API reference](https://docs.djangoproject.com/en/4.2/topics/db/queries/).


## Introducing our Django Admin

### Philosophy
--- 
> **Philosophy - Sidebar**
> Creating admin sites is tedious. It doesn't need creativity. Django automates admin interface creation for models. 
>
> Built in a newsroom, Django separates “content publishers” from the “public” site. Managers add news, events, and scores. The content appears on the public site. 
>
> This creates a unified interface for editors. The admin is for site managers, not visitors.
---

### Creating an admin user[¶](https://docs.djangoproject.com/en/4.2/intro/tutorial02/#creating-an-admin-user "Permalink to this headline")

First we’ll need to create a user who can login to the admin site. Run the following command:

```
python manage.py createsuperuser
```

Enter your desired username and press enter.

```
Username: admin
```

You will then be prompted for your desired email address:

```
Email address: admin@example.com
```

The final step is to enter your password. You will be asked to enter your password twice, the second time as a confirmation of the first.

```
Password: InsecurePassword
Password (again): InsecurePassword
Superuser created successfully.
```

> **Note**: In prodcuction you will need to use a secure password. Never use an insecure password let alone InsecurePassword.
### Start the development server

Our Django admin site is activated by default. Let’s start the development server and explore it.

```
cd /project/our_site
python manage.py runserver 0.0.0.0:8080
```

Now, open a web browser and go to “/admin/” on your local domain – e.g., [http://127.0.0.1:8080/admin/](http://127.0.0.1:8080/admin/). You should see the admin’s login screen:

![[Projects/Curriculum/Startr.Stack/Startr Django/attachments/6e4941b2b4ff96444532e52503dbfc22_MD5.png]]

Since [translation](https://docs.djangoproject.com/en/4.2/topics/i18n/translation/) is turned on by default, if you set [`LANGUAGE_CODE`](https://docs.djangoproject.com/en/4.2/ref/settings/#std-setting-LANGUAGE_CODE), the login screen will be displayed in the given language (if Django has appropriate translations).

### Enter the admin site

Now, try logging in with the superuser account you created in the previous step. You should see the Django admin index page:

![[Screenshot 2024-10-13 at 2.29.26 PM.png]]
You should see a few types of editable content: groups and users. They are provided by [`django.contrib.auth`](https://docs.djangoproject.com/en/4.2/topics/auth/#module-django.contrib.auth "django.contrib.auth: Django's authentication framework."), the authentication framework shipped by Django.

### Make the Course App Modifiable in the Admin

But where’s our course app? It’s not displayed on the admin index page.

To make it visible, we’ll register our models in the `courses/admin.py` file. Open `courses/admin.py` and update it as follows:

`courses/admin.py`

```python
from django.contrib import admin
from .models import Person, Group, Theme

# Register all models at once
admin.site.register((Person, Group, Theme))
```

### Explore the Free Admin Functionality



Now that we’ve registered our models, Django recognizes them and will display each model on the admin page. Go back to “/admin/” e.g [http://127.0.0.1:8080/admin/](http://127.0.0.1:8080/admin/).

Now you can navigate to the admin interface to add, edit, and delete entries for `Person`, `Group`, and `Theme`!

![[Screenshot 2024-10-13 at 2.39.49 PM.png]]

Click “Questions”. Now you’re at the “change list” page for questions. This page displays all the questions in the database and lets you choose one to change it. There’s the “What’s up?” question we created earlier:

![[Projects/Curriculum/Startr.Stack/Startr Django/attachments/cf3386c2b0e301cf66ae1d6190a902f7_MD5.png]]

Click the “What’s up?” question to edit it:

![[Projects/Curriculum/Startr.Stack/Startr Django/attachments/ad5957db2be45b7fb26486a464522e16_MD5.png]]

Things to note here:

- The form is automatically generated from the `Question` model.
- The different model field types ([`DateTimeField`](https://docs.djangoproject.com/en/4.2/ref/models/fields/#django.db.models.DateTimeField "django.db.models.DateTimeField"), [`CharField`](https://docs.djangoproject.com/en/4.2/ref/models/fields/#django.db.models.CharField "django.db.models.CharField")) correspond to the appropriate HTML input widget. Each type of field knows how to display itself in the Django admin.
- Each [`DateTimeField`](https://docs.djangoproject.com/en/4.2/ref/models/fields/#django.db.models.DateTimeField "django.db.models.DateTimeField") gets free JavaScript shortcuts. Dates get a “Today” shortcut and calendar popup, and times get a “Now” shortcut and a convenient popup that lists commonly entered times.

The bottom part of the page gives you a couple of options:

- Save – Saves changes and returns to the change-list page for this type of object.
- Save and continue editing – Saves changes and reloads the admin page for this object.
- Save and add another – Saves changes and loads a new, blank form for this type of object.
- Delete – Displays a delete confirmation page.

If the value of “Date published” doesn’t match the time when you created the question in [Tutorial 1](https://docs.djangoproject.com/en/4.2/intro/tutorial01/), it probably means you forgot to set the correct value for the [`TIME_ZONE`](https://docs.djangoproject.com/en/4.2/ref/settings/#std-setting-TIME_ZONE) setting. Change it, reload the page and check that the correct value appears.

Change the “Date published” by clicking the “Today” and “Now” shortcuts. Then click “Save and continue editing.” Then click “History” in the upper right. You’ll see a page listing all changes made to this object via the Django admin, with the timestamp and username of the person who made the change:

![[Projects/Curriculum/Startr.Stack/Startr Django/attachments/87a42048a71f9cf057952566ebf6a10e_MD5.png]]

When you’re comfortable with the models API and have familiarized yourself with the admin site, read [[Writing your first Django app, part 3]] to learn how to add more views to our courses app.