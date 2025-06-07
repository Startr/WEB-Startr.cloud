# Writing our Startr Django app, part 1
## Startr.Cloud Django REST API app

We learn by doing. In this project, you'll build a simple course management app.

Our course management app will have two sides:

- A public site for browsing and enrolling in courses.
- A secret section - an admin site - to create more courses, add staff, and track students.

Let's start with the perfect base. We'll install Django in a Docker container. Get Django set up, and we're ready to roll. This allows us to have a safe, reliable, reproducible, and easily deployed project. Docker is a great tool; if you get a chance, learn more about it, but in the meantime, make sure [Docker is installed](https://docs.docker.com/desktop/). 

This project uses Django 4.2 LTS and Python 3.10+. Don't sweat it - just make sure Docker is installed. We'll use the right Docker image and files from our [project repo](https://github.com/Startr/WEB-Django). 

```embed
title: "Startr/WEB-Django"
image: "https://avatars.githubusercontent.com/u/123415409?s=400"
description: "The Startr guided project using Django 5.1 and Python 3.10+ to create a course management system."
url: "https://github.com/Startr/WEB-Django"
```

Basic Tools

To begin, make sure you have Git and a code editor. We like VS Code or VIM.

Here's how to set up your project tools:

**Step 1: Get Git**

- Go to the official Git website: git-scm.com
- Click on "Downloads"
- Choose your operating system (Windows, Mac, or Linux)
- Follow the simple install instructions

**Step 2: Choose a Code Editor**

- We like **VS Code** . It's free, powerful, and easy to use. 
  Download from [code.visualstudio.com](https://code.visualstudio.com)
- Or, you can use **VIM** . It's a favorite among pros. 
  Download from [www.vim.org](http://www.vim.org/)

That's it. Now you're ready to start coding.

## Creating our project

Once you've got your tools in place, now it's time to grab the code. Choose your favorite method:

**Option 1: Download a Release**

- Click here: [Startr/WEB-Django v0.0.0](https://github.com/Startr/WEB-Django/releases/tag/v0.0.0)
- Download the latest stable version of our project

**Option 2: Use Our Template**

- Click here: [Create a new repo from our template](https://github.com/new?template_name=WEB-Django&template_owner=Startr)
- A new, templated repository will be created for you

**Option 3: Fork the Project (For Coders)**

- Click here: [Startr/WEB-Django](https://github.com/Startr/WEB-Django/)
- Fork the project to suggest tweaks and join our open-source development team

**Getting the Code on Your Computer**

- Once you have your code, navigate to the project directory using the command line
- Type `cd` followed by the directory path (e.g., `cd Desktop/WEB-Django`)
- Run the command: `make`
- The project will now be set up and ready for use

```bash
Startr/WEB-Django by Startr.Cloud

This is the default make command.
This command lists available make commands.

Usage example:
    make it_run

Available make commands:

it_build
it_run
```

Then, run this command:

```bash
make it_run
```

This will run for a little while on your first run and then conclude with:

```bash
What's next:
    View a summary of image vulnerabilities and recommendations → docker scout quickview 
✅ Build successful!
🚀 Running the Docker container...
root@`lots of numbers and letters`:/project#
```

You can now run the following command directly in the docker container:

```bash
django-admin startproject our_site
```

>**Note**: If you're seeing a warning that `our_site` already exists, it's likely because you already have a later version of the project on your computer. Don't stress!
**Solution 1: Delete Existing Files** 
Navigate to the project directory Delete the `our_site` directory (you can do this using `rm -rf our_site` in the terminal)
**Solution 2: Download an Earlier Version**  
Click here to download the older version of the project: [Startr/WEB-Django v0.0.0](https://github.com/Startr/WEB-Django/releases/tag/v0.0.0). This will give you a fresh start with the code we'll be using for this tutorial.

Running the above command in our Startr Docker will create the `our_site` project directory in the current location. 

> **Note**: You **must** avoid naming projects after built-in Python or Django components. In particular, you should **avoid** using **names** like **Django**` (which will conflict with Django itself) or `test` (which conflicts with a built-in Python package).

**Breaking Down the Django Project Structure**

After running `django-admin startproject our_site`, take a peek at what's been created. Here's a rundown of the main folders and files:


```
our_site/
    manage.py
    our_site/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
```


**Project Folder: `our_site` (Outer Folder)**

- This is the top-level folder, holding your entire project. You can rename it at any time, and Django won't bat an eye.

**Project Package: `our_site` (Inner Folder)**

- This is the actual Python package, where all your project's code lives.
- Django uses the package name to import relevant modules, like `our_site.urls`.

**Key Files and Folders:**

- [ ] `manage.py`: This file is the powerhouse of your project, providing essential commands for starting the server, making changes, and more.
  - Dive deeper into `django-admin` and `manage.py`: [Link](https://docs.djangoproject.com/en/5.1/ref/django-admin/)
- [ ] `our_site/__init__.py`: An empty file indicating this directory is a package.
  - Learn more about Python packages: [Link](https://startr.cloud/python#packages)
- [ ] `our_site/settings.py`: The heart of your project, housing all the settings and configurations.
  - Explore Django settings in-depth: [Link](https://docs.djangoproject.com/en/5.1/topics/settings/)
- [ ] `our_site/urls.py`: Defines URL patterns, mapping them to views and actions.
  - Read more about the URL dispatcher: [Link](https://docs.djangoproject.com/en/5.1/topics/http/urls/)
- [ ] `our_site/asgi.py` and `our_site/wsgi.py`: These files cater to ASGI and WSGI servers, respectively.
  - Learn about deployment options:
    - ASGI: [Link](https://docs.djangoproject.com/en/5.1/howto/deployment/asgi/)
    - WSGI: [Link](https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/)

Each file and folder has a specific purpose. Take some time to get familiar with them, and soon you'll be navigating your Django project like a pro!

## The Development Server

Let’s verify our Django project works. 

1. Change into the outer `our_site` directory if you haven’t already,
2. run the following `python manage.py runserver 0.0.0.0:8080`

This should run the server at [http://127.0.0.1:8080/](http://127.0.0.1:8080/) check our web browser.  You’ll see the following output on the command line:

```

Performing system checks...

System check identified no issues (0 silenced).

You have unapplied migrations; our app may not work properly until they are applied.
Run 'python manage.py migrate' to apply them.

October 02, 2024 - 15:50:53
Django version 5.1, using settings 'our_site.settings'
Starting development server at http://0.0.0.0:8080/
Quit the server with CONTROL-C.
```

> **Note**: Let us ignore the warning about unapplied database migrations; we’ll deal with the database shortly.

> You’ll see the Django “Congratulations!” page with a rocket taking off. 
> ![[Django Rocket.png]]
> *It worked!*

> Each time you load the page the the output in the terminal will change and show what was loaded.

You’ve started the Django development server, a lightweight web server written purely in Python. This is included with Django, so you can develop things rapidly without having to deal with configuring a production server – such as NGINX – until you’re ready for production.

Now it's a good time to note: ***don’t use this server unprotected*** in anything resembling a production environment. Alone, it’s intended ***only for use while developing***. (The Django team is in the business of making web frameworks, not web servers.)


## Automatic reloading of [`runserver`](https://docs.djangoproject.com/en/5.1/ref/django-admin/#django-admin-runserver)

The development server automatically reloads Python code for each request as needed. You don’t need to restart the server for code changes to take effect. However, some actions, like adding files, don’t trigger a restart, so you’ll have to restart the server in these cases.

- [ ] #TODO enable auto restart of the server on adding files
## Creating the course app

Now that our environment – a “project” – is set up, you’re set to start doing real work.

Each application we write in Django consists of a Python package following a convention. Django comes with a utility that automatically generates the basic directory structure of an app, so we can focus on writing code rather than creating directories.

## Projects vs. apps

> What’s the difference between a project and an app? An app is a web application that does something – e.g., a blog system, public records database or a small course app. A project is a collection of configurations and apps for a particular website. 
>
> A project can contain multiple apps. An app can be in multiple projects.
>

Apps work anywhere in the [Python path](https://docs.python.org/3/project/modules.html#tut-searchpath "(in Python v3.12)"). In this project, we’ll build the course app in the same folder as `manage.py`. This way, it imports as a top-level module, not as a submodule of `our_site`.

To create our app, make sure you’re in the same directory as `manage.py` and type this command:

`python manage.py startapp courses`

That’ll create a directory of `courses`, which is laid out like this:
``
```
courses/
    __init__.py
    admin.py
    apps.py
    migrations/
        __init__.py
    models.py
    tests.py
    views.py
```

This directory structure will house the course application.

## Write our first view

Let’s write the first view. Open the file `courses/views.py` and put the following Python code in it:

`courses/views.py

```python
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. You're at the courses index.")
```

This is the most basic view possible in Django. To access it in a browser, we need to map it to a URL - and for this we need to define a URL configuration, or “URLconf” for short. These URL configurations are defined inside each Django app, and they are Python files named `urls.py`.

To define a URLconf for the `courses` app, create a file `courses/urls.py` with the following content:

```python
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
]
```

Our app directory should now look like this:

```
courses/
    __init__.py
    admin.py
    apps.py
    migrations/
        __init__.py
    models.py
    tests.py
    urls.py
    views.py
```

The next step is to configure the global URLconf in the `our_site` project to include the URLconf defined in `courses.urls`. To do this, add an import for `django.urls.include` in `our_site/urls.py` and insert an [`include()`](https://docs.djangoproject.com/en/5.1/ref/urls/#django.urls.include "django.urls.include") in the `urlpatterns` list, so you have:

`our_site/urls.py`[¶]

```python
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("courses/", include("courses.urls")),
    path("admin/", admin.site.urls),
]
```

The [`path()`](https://docs.djangoproject.com/en/5.1/ref/urls/#django.urls.path "django.urls.path") function expects at least two arguments: `route` and `view`. The [`include()`](https://docs.djangoproject.com/en/5.1/ref/urls/#django.urls.include "django.urls.include")function allows referencing other URLconfs. Whenever Django encounters [`include()`](https://docs.djangoproject.com/en/5.1/ref/urls/#django.urls.include "django.urls.include"), it chops off whatever part of the URL matched up to that point and sends the remaining string to the included URLconf for further processing.

The idea behind [`include()`](https://docs.djangoproject.com/en/5.1/ref/urls/#django.urls.include "django.urls.include") is to make it easy to plug and play URLs. 

Since courses are in their own URLconf (`courses/urls.py`), they can be placed under “/courses/”, or under “/fun_courses/”, or under “/content/courses/”, or any other path root, and the app will still work.

When to use [`include()`](https://docs.djangoproject.com/en/5.1/ref/urls/#django.urls.include "django.urls.include")

We should always use `include()` when we include other URL patterns. `admin.site.urls` is the only exception to this.

We have now wired an `index` view into the URLconf. Verify it’s working with the following command:

`python manage.py runserver 0.0.0.0:8080`

Go to [http://localhost:8080/courses/](http://localhost:8080/courses/) in our browser, and you should see the text “_Hello, world. You’re at the courses index._”, which you defined in the `index` view.

Page not found?

If you get an error page here, check that you’re going to [http://localhost:8080/courses/](http://localhost:8080/courses/) and not [http://localhost:8080/](http://localhost:8080/).

> **Note**: if you've run into any problems or just want to see a snapshot of how things are at thing point we've taged where things at https://github.com/Startr/WEB-Django/releases/tag/v0.0.2 .

When you’re comfortable with the basic request and response flow, read [[Writing our Startr Django app, part 2]] , to learn how to work with the database.
