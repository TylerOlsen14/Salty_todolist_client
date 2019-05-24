import React, { Component } from 'react'
import {
  Button,
  Modal, 
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

export class UpdateTodo extends Component {
  state = {
    modal: false,
    responsible: '',
    task: '',
    dueDate: '',
    done: ''
  }

  componentWillMount = async () => {
    this.setState({
      responsible: this.props.todo.responsible,
      task: this.props.todo.task,
      dueDate: this.props.todo.dueDate,
      done: this.props.todo.done,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
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
    })
  }

  onSubmit = async e => {
    e.preventDefault();
    await fetch(`http://localhost:5000/`+ this.props.todo._id, {
      method: "PUT",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      }
    })
    this.toggle();
    // this.props.refresh();
  }

  newTodo = {
    responsible: this.state.responsible,
    task: this.state.task,
    dueDate: this.state.dueDate,
    done: this.state.done,
  }

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={this.toggle}
        >
          Update task
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader
            toggle={this.toggle}
          >
            Edit ToDo Item
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup onSubmit={this.handleSubmit}>
                <Label for="ToDoItem">
                  ToDo Item
                </Label>
                <Input
                type="text"
                name="responsible"
                id="item"
                value={this.state.responsible}
                onChange={this.onChange}
              />
              <Input
                type="text"
                name="task"
                id="item"
                value={this.state.task}
                onChange={this.onChange}
              />
              <Input
                type="number"
                name="dueDate"
                id="item"
                value={this.state.dueDate}
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
              <Button
                color="dark"
                style={{marginTop: '2rem'}}
                block
              >
                Update ToDo Item
              </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default UpdateTodo
