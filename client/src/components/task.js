import React,{Component} from 'react'
import moment from 'moment'
import ModalExampleDimmer from './modal'
import axios from 'axios'
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui';
class Task extends Component{
  componentWillReceiveProps(){
  
    $(".mcell-task").draggable({
      appendTo: "body",
      cursor: "move",
      helper: 'clone',
      revert: "invalid"
  });
  
  $(".mcell").droppable({
      tolerance: "intersect",
      accept: ".mcell-task",
      activeClass: "ui-state-default",
      hoverClass: "ui-state-hover",
      drop: function(event, ui) {        
          $(this).append($(ui.draggable));
          console.log($(this).find("li").attr('id'))
      }
  });
  }
api = id =>{
  axios.delete('/tasks/delete/'+id)
  .then(function (response) {
    if(response.status==="1")
      alert("ok")
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
        tasks.filter(i=>i.status===Number(filter))
        .map((i,index)=>{
          if(i._id)
          return(
            <li id={i._id} className="mcell-task" key={index}>
              <span className="task-name">
                <span>{i.title}</span>
                <i id="delete" className="fas fa-times" onClick={() => this.api(i._id)}></i>
              </span>
              <span className="task-details">{i.content}</span>
              <div>
              <span className="task-due">{moment(i.dueDate).format("DD.MM.YYYY")}</span>
              <span className="task-contributors">
                <img alt={i.contributors[0].name + ' '+i.contributors[0].lastName } title={i.contributors[0].name + ' '+i.contributors[0].lastName } src={'assets/img/' + i.contributors[0].profilePhoto}/>
              </span>
            </div>
            <ModalExampleDimmer propContent={i}/>
            </li>
          )
          else
          return <div>Bo </div>
        })
    }
    return(
      <div className="process">{content}</div>
    )
  }
}
export default Task;