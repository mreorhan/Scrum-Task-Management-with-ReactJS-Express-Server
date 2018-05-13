# Scrum Task Management

[![Version][npm-image]][npm-url]  Scrum Masters can create tasks for employees in this project.

This project powered by React.JS and Express.

![Screenshotv](http://oi63.tinypic.com/29e5fnk.jpg)

Get Started
-----------

```
Open command line and apply that steps:

1. Step
 git clone https://github.com/mreorhan/Scrum-Task-Management-with-ReactJS-Express-Server/ scrumtaskmanagement

2. Step
 cd scrumtaskmanagement
 npm install
 npm start
 
3. Step
 You can start working on any explorer window.
```


HTTP Request
-----------
http://localhost:5000/tasks

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /tasks | `GET` | Empty | List all tasks. |
| /tasks | `POST` | {'title':'task title', 'content':'task content', status:1, date:Date.now, color:SpecialField, dueDate:Date, createdBy:ObjectId, contributors: Object.Id } | Create a new task. |
| /tasks/update/:id | `PUT` | {'title':'task title', 'content':'task content', status:1, date:Date.now, color:SpecialField, dueDate:Date, createdBy:ObjectId, contributors: Object.Id } | Update task by id. |
| /tasks/delete/:id | `DELETE` | Empty | Delete task by id. |
| /users | `GET` | Empty | List all users. |
| /users | `POST` | {'username':'emreorhan', 'name':'Emre', lastName:'Orhan, createdBy:ObjectId, profilePhoto:'emre.jpg' } | Create a new user. |
| /story | `GET` | Empty | List all projects. |

GET: http://localhost:3000/users   --> Show all users
  
  Contributing
------------

See [Contributors](CONTRIBUTORS.md).

[npm-image]: https://img.shields.io/npm/v/react-toastr.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/react-toastr

![Screenshot](https://lh3.googleusercontent.com/qd0MI1JKjOfd2Z9KDx3ZMsGrHPqma0J5oLfN9cn8XjOJ6EQXCMQVfko67YxvmnMLFZbBge0_m8ENHjpAeOKj=w1920-h917-rw)

