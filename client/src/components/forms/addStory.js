import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Input,FormGroup,Label } from 'reactstrap';
import axios from 'axios'

class AddStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title:'',
      createdBy:'',
      count:2
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

getStoryCount = () => {
  axios.get(`/story/count`)
  .then((r)=> {
      this.setState({
          count: r.data.count,
          err:''
      })
  })
  .catch((e)=>{
      this.setState({
          err: e
      })
  })
}
  handleClick = event => {
    this.getStoryCount()
    axios.post('/story', {
      title:this.state.title,
      createdBy:this.state.createdBy,
      storyId:this.state.count
    })
    .then((response)=> {
      if(response.data.error)
        alert(response.data.error)
      else{
        this.toggle();
        this.setState({
          title:null,
          createdBy:null,
          storyId:null,
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
        <Button color="secondary" onClick={this.toggle}><i className="fas fa-plus-circle"/> Add Project</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            Add Story
          </ModalHeader>
          <ModalBody>
          <FormGroup><Label for="title">Story Title(*):</Label><Input type="text" name="title" onChange={this.handleInput.bind(this)}/></FormGroup>
          <FormGroup><Label for="createdBy">Created by(*):</Label><Input type="text" name="createdBy" onChange={this.handleInput.bind(this)}/></FormGroup>
          
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

export default AddStory;