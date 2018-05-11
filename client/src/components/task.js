import React,{Component} from 'react'
import moment from 'moment'
import ModalExampleDimmer from './modal'
import axios from 'axios'
class Task extends Component{

api = id =>{
  axios.delete('http://localhost:3000/tasks/delete/'+id)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

}
onCli(id){
  axios.delete(`http://localhost:3000/tasks/delete/${id}`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
  render(){
    const {tasks,loading,filter} = this.props;
      let content;
      if (loading) {
        content = <div className="loader">
            <svg className="circular" viewBox="25 25 50 50">
              <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10"/>
            </svg>
          </div>;
      }
      else{
        content = 
        tasks.filter(i=>i.status==filter)
        .map((i,index)=>(
        <li key={index} id={`item${index+5}`} className="mcell-task" draggable="true" data-toggle="modal" data-target="#showdetails">
          <span className="task-name">
            <span>{i.title}</span>
            <i id="delete" className="fas fa-times" onClick={this.onCli()}></i>
          </span>
          <span className="task-details">{i.content}</span>
          <div>
          <span className="task-due">{moment(i.dueDate).format("DD.MM.YYYY")}</span>
          <span className="task-contributors">
            <img alt={i.contributors[0].name + ' '+i.contributors[0].lastName } title={i.contributors[0].name + ' '+i.contributors[0].lastName } src={'assets/img/' + i.contributors[0].profilePhoto}/>
          </span>
        </div>
        <ModalExampleDimmer content={i}/>
        </li>
      ))
    }
    return(
      <div className="process">{content}</div>
    )
  }
}
export default Task;