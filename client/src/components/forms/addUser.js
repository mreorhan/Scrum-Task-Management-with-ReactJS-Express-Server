import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Input,FormGroup,Label } from 'reactstrap';
import axios from 'axios'

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username:'',
      name:'',
      lastname:'',
      profilePhoto:'5af1921c0fe5703dd4a463ec',
      loading:false
    };
    
    this.toggle = this.toggle.bind(this);
  }
  handleChange = event => {
    this.setState({ name: event.target.value });
  }
  handleInput(e) {
     this.setState({
      [e.target.name]: e.target.value
     })
     console.log(this.state.dueDate)
}

  handleClick = event => {
    
    axios.post('/users', {
      username:this.state.username,
      name:this.state.name,
      lastName:this.state.lastName,
      profilePhoto:this.state.profilePhoto
    })
    .then((response)=> {
      if(response.data.message)
        alert(response.data.message)
      else{
        this.toggle();
        this.setState({
          username:null,
          name:null,
          lastName:null,
          profilePhoto:null,
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
        <i className="fas fa-user-plus" onClick={this.toggle}></i>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
          <i className="fas fa-user-circle"></i> Add User
          </ModalHeader>
          <ModalBody>
          <FormGroup><Label for="username">Username(*):</Label><Input type="text" name="username" onChange={this.handleInput.bind(this)}/></FormGroup>
          <FormGroup><Label for="name">Name(*):</Label><Input type="text" name="name" onChange={this.handleInput.bind(this)}/></FormGroup>
          <FormGroup><Label for="lastName">Last Name(*):</Label><Input type="text" name="lastName" onChange={this.handleInput.bind(this)}/></FormGroup>
          <FormGroup><Label for="profilePhoto">Profile Photo URL(*):</Label><Input type="text" name="profilePhoto" onChange={this.handleInput.bind(this)}/></FormGroup>
          
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleClick.bind(this)}><i className="fas fa-plus-circle"></i> Add</Button>
            <Button color="secondary" onClick={this.toggle}><i className="fas fa-times-circle"></i> Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddUser;