import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class AddTodo extends Component {
  state = {
    modal: false,
    responsible: '',
    task: '',
    dueDate: '',
    done: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.onSubmit(this.state)
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = (e) => {
    console.log(this.state)
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit = async e => {
    e.preventDefault();
    await fetch(`http://localhost:5000/`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      }
    })
    this.toggle();
    // this.props.refresh();
  }

  // newTodo = {
  //   responsible: this.state.responsible,
  //   task: this.state.task,
  //   dueDate: this.state.dueDate,
  //   done: this.state.done
  // }

  render() {
    return (
      <div>
      <Button
        color='dark'
        style={{marginBottom: '2rem'}}
        onClick={this.toggle}
      >
        Add To-Do item
      </Button>
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
      >
        <ModalHeader
          toggle={this.toggle}
        >
          Create new To-Do item
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup onSubmit={this.handleSubmit}>
              <Label for="ToDoItem">
                What needs to be done?
              </Label>
              <Input
                type="text"
                name="responsible"
                id="item"
                placeholder="Who is responsible?"
                onChange={this.onChange}
              />
              <Input
                type="text"
                name="task"
                id="item"
                placeholder="What needs to be done?"
                onChange={this.onChange}
              />
              <Input
                type="number"
                name="dueDate"
                id="item"
                placeholder="When does it need to be done?"
                onChange={this.onChange}
              />
              <label>
                Is the task complete?
                <select 
                  value={this.state.value}
                  onChange={this.onChange}
                  name="done"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </label>
              <input type="submit" value="Submit" />
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
      </div>
    );
  }
}

export default AddTodo;
