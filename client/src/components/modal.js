import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Input,FormGroup,Label } from 'reactstrap';
import moment from 'moment'
class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
      const {content} = this.props;
    return (
      <div>
        <Button color="primary" size="sm" onClick={this.toggle}><i className="fas fa-arrow-alt-circle-right"/></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
          <Label for="taskDetails">Task Details:</Label><Input type="text" name="text" id="taskTitle" value={content.title}/>
          </ModalHeader>
          <ModalBody>
          <FormGroup>
          <Label for="taskDetails">Task Details:</Label>
          <Input type="textarea" name="text" id="taskDetails" value={content.content}/>
        </FormGroup>
              <hr/>
              <i className="fas fa-calendar-alt"></i> Created Date: {moment(content.date).format("DD.MM.YYYY")}<br/>
              <i className="fas fa-clock"></i> Due Date: {moment(content.dueDate).format("DD.MM.YYYY")}<br/>
              <i className="fas fa-user"></i> Created by: {content.createdBy}
          </ModalBody>
          <ModalFooter>
          <img height="35" alt={content.contributors[0].name + ' '+content.contributors[0].lastName } title={content.contributors[0].name + ' '+content.contributors[0].lastName } src={'assets/img/' + content.contributors[0].profilePhoto}/>
            <Button color="primary" onClick={this.toggle}>Save</Button>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;