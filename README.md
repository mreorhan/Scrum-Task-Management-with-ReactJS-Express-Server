# Scrum & Agile Task Management

[![Version][npm-image]][npm-url] [![Version][npm-passing-image]][npm-passing-url]


Scrum Masters can create tasks for employees in this project.

This project powered by React.JS and Express.

![Screenshot]([http://oi63.tinypic.com/29e5fnk.jpg](https://user-images.githubusercontent.com/17215194/180495928-3eab3305-1880-4383-a7d8-4ce70d2da4d3.png))

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
| /users | `POST` | {'username':'emreorhan', 'name':'Emre', lastName:'Orhan', createdBy:ObjectId, profilePhoto:'emre.jpg' } | Create a new user. |
| /story | `GET` | Empty | List all projects. |
  
  Contributing
------------

See [Contributors](CONTRIBUTORS.md).

[npm-image]: https://img.shields.io/npm/v/react-toastr.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/react-toastr

[npm-passing-image]: https://travis-ci.org/caolan/async.svg?branch=master
[npm-passing-url]: https://travis-ci.org/caolan/async
### [Online Demo](https://scrum-agile-task-manager.firebaseapp.com/)
