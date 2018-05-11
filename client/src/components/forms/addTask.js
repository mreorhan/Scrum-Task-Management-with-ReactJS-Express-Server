import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Input,FormGroup,Label } from 'reactstrap';
import moment from 'moment'
import axios from 'axios'

class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title:'',
      content:'',
      contributors:'',
      createdBy:'5af1921c0fe5703dd4a463ec',
      dueDate:'',
      status:this.props.status,
      loading:false
    };
    
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount(){
    moment.locale('tr');
    this.changeColumnTitle()
  }
  handleChange = event => {
    this.setState({ name: event.target.value });
  }
  changeColumnTitle = number=>{
    let newTitle;
    if(number==="1")
      newTitle="Backlog"
    else if(number==="2")
      newTitle="ToDo"
    else if(number==="3")
      newTitle="In Progress"
    else
      newTitle="Done"

    return newTitle;
  }
  handleInput(e) {
     this.setState({
      [e.target.name]: e.target.value
     })
     console.log(this.state.dueDate)
}

  handleClick = event => {
    
    axios.post('/tasks', {
      title:this.state.title,
      content:this.state.content,
      status:this.props.status,
      contributors:this.state.contributors,
      dueDate:this.state.dueDate,
      createdBy:this.state.createdBy
    })
    .then((response)=> {
      if(response.data.message)
        alert(response.data.message)
      else{
        this.toggle();
        this.setState({
          title:null,
          content:null,
          contributors:null,
          dueDate:null,
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

    return (
      <div>
        <i className="fas fa-plus-circle" onClick={this.toggle}></i>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            Create a New Task to {this.changeColumnTitle(this.props.status)}
          </ModalHeader>
          <ModalBody>
          <FormGroup>
          <Label for="title">Task Title(*):</Label><Input type="text" name="title" id="taskTitle" onChange={this.handleInput.bind(this)}/></FormGroup>
          <FormGroup>
          <Label for="content">Task Details:</Label>
          <Input type="textarea" name="content" id="content" onChange={this.handleInput.bind(this)}/>
        </FormGroup>
        <FormGroup>
            <Label for="contributors">Contribute to:</Label>
            <Input type="select" name="contributors" id="contributors" onChange={this.handleInput.bind(this)}>
              <option value="">Choose:</option>
              <option value="5af18ffe0fe5703dd4a463e6">Emre ORHAN</option>
              <option value="5af19831a689cf330c5d3391">Oğuzhan ÇETİNKAYA</option>
            </Input>
          </FormGroup>
              <hr/>
              <i className="fas fa-calendar-alt"></i> Created Date: {moment().format('L, h:mm:ss')} <br/>
              <i className="fas fa-clock"></i> Due Date: <input name="dueDate" id="dueDate" type="datetime-local" onChange={this.handleInput.bind(this)}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleClick.bind(this)}>Add</Button>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddModal;