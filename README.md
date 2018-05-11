# Scrum Task Management

[![Version][npm-image]][npm-url]  Scrum Masters can create tasks for employees in this project.

This project powered by React.JS and Express.

Open command line and apply that steps:
-----------
```
1. Step
  git clone https://github.com/mreorhan/Scrum-Task-Management-with-ReactJS-Express-Server/ scrumtaskmanagement

2. Step
cd scrumtaskmanagement
npm install
npm start

3. Step (open new command line)
 cd scrumtaskmanagement/client
 npm install
 npm start

4. Step
 You can start working on which explorer window.
```


HTTP Request
-----------
GET: http://localhost:3000/tasks     --> Show all tasks

POST: http://localhost:3000/tasks    --> Add new task
[headers]:
{
  title:        string *required*,
  content:      string,
  status:       number *1,2,3,4*,
  dueDate:      Date,
  createdBy:    Object.Id
  contributors: Object.Id
  }
  
  Contributing
------------

See [Contributors](CONTRIBUTORS.md).

[npm-image]: https://img.shields.io/npm/v/react-toastr.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/react-toastr
