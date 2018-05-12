import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Input,FormGroup,Label } from 'reactstrap';
import moment from 'moment'
import axios from 'axios'
class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title:this.props.propContent.title,
      content:this.props.propContent.content,
      status:this.props.propContent.status,
      color:this.props.propContent.color
    };

    this.toggle = this.toggle.bind(this);
  }
  handleInput(e) { 
    this.setState({
     [e.target.name]: e.target.value
    })
    console.log(this.state.title)
}
handleClick = id => {
  axios.put(`/tasks/update/${id}`, {
    title:this.state.title,
    content:this.state.content,
    status:this.state.status
  })
  .then((response)=> {
    if(response.data.message)
      alert(response.data.message)
    else{
      this.toggle();
      this.setState({
        title:null,
        content:null,
        loading:false
      })
    }
    console.log(response);
  })
  .catch((error)=> {
    console.log(error);
  });
  
}
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
      let {title,content,status} = this.state;
      const {propContent,classType} = this.props;
    return (
      <div>
        <Button color="primary" size="sm" className={classType} onClick={this.toggle}><i className="fas fa-arrow-alt-circle-right"/></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
          <Label for="title">Task Title:</Label><Input type="text" name="title" value={title} onChange={this.handleInput.bind(this)}/>
          </ModalHeader>
          <ModalBody>
          <FormGroup>
          <Label for="content">Task Details:</Label>
          <Input type="textarea" name="content" value={content} onChange={this.handleInput.bind(this)}/>
        </FormGroup>
        <Label for="status">Status:</Label>
            <Input type="select" value={status} name="status" id="status" onChange={this.handleInput.bind(this)}>
                <option value="1">Backlog</option>
                <option value="2">Todo</option>
                <option value="3">In Progress</option>
                <option value="4">Done</option>
            </Input>
              <hr/>
              <i className="fas fa-calendar-alt"></i> Created Date: {moment(propContent.date).format("DD.MM.YYYY")}<br/>
              <i className="fas fa-clock"></i> Due Date: {moment(propContent.dueDate).format("DD.MM.YYYY")}<br/>
              <i className="fas fa-user"></i> Created by: {propContent.createdBy}
          </ModalBody>
          <ModalFooter>
          <img height="35" alt={propContent.contributors[0].name + ' '+propContent.contributors[0].lastName } title={propContent.contributors[0].name + ' '+propContent.contributors[0].lastName } src={'/assets/img/' + propContent.contributors[0].profilePhoto}/>
            <Button color="primary" onClick={()=>this.handleClick(propContent._id)}>Update</Button>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;