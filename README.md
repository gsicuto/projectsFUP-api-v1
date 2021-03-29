# Fup Api

## Api for Projects comments Follow UP

FupApi is a express rest api for manage comments in projects

## Features

- Create Projects
- Add Students to your projects
- Add FollowUp comments daily for each project

This Api is created to help tech MEARN stack to students on IronHack BootCamp Out/2020
Created by [Gabriel Sicuto]

## Tech

Fup Api uses:

- [node.js]
- [Express]

## Installation

Clone this repo

In the source folder add an .env file with this variables:

MONGO_URI - for your atlas cluster or local mongodb
TOKEN_SECRET - for your jwt secret
EXPIRATION_AUTH_TOKEN - for setting your expiration time for jwt

Install the dependencies and devDependencies and start the server.

```sh
npm i
npm run dev
```

**`http://localhost:3000/api`**.

You can test with:
**`https://fupprojects.herokuapp.com/api`**

The common endpoints are the following:

All end point except /auth need to be access with token on Authorization header

| Method | Endpoint                  | Payload                                    | Response              | Action                                                         |
| ------ | ------------------------- | ------------------------------------------ | --------------------- | -------------------------------------------------------------- |
| GET    | /students/list            | -                                          | [students]            | Get all the students from the DB                               |
| POST   | /students                 | {"name":String}                            | {student}             | Create New Student                                             |
| PUT    | /students/:id             | {"name":String}                            | {student}             | Update Existing Student by Id                                  |
| GET    | /projects/list            | -                                          | [projects]            | Get all Projects form the DB                                   |
| GET    | /projects/list/?title=    | -                                          | [projects]            | Get all Projects that title match the query search             |
| POST   | /projects                 | {"title": String,"presentation": Date}     | {project}             | Create new Project                                             |
| GET    | /projects/:id             | -                                          | {project}             | Get one project by id                                          |
| PUT    | /projects/:id             | -                                          | {project}             | Update Existing Project by Id                                  |
| POST   | /projects/add-student/:id | {"studentId": id}                          | {project}             | Add an student on a project                                    |
| DELETE | /projects/:id             | -                                          | -                     | Deletes project and removes project from students relationship |
| POST   | /fups                     | {"user":id, "content":String, "projectId"} | {fup}                 | Add an FollowUp to a project                                   |
| DELETE | /fups/:id                 | -                                          | -                     | Deletes FollowUp and removes projects relationship             |
| POST   | /auth/signup              | {"username":String, "password":String}     | -                     | Create new user                                                |
| POST   | /auth/login               | {"username":String, "password":String}     | Auth token on Headers | Return JWT to private routes                                   |
