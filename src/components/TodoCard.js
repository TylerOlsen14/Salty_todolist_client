import React, { Component } from 'react';
import { 
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'
import UpdateTodo from './UpdateTodo'

class TodoCard extends Component {
  constructor() {
    super();
    this.state = { data: [] }
  }

  componentDidMount() {
    fetch(`http://localhost:5000/`)
    .then(res => res.json())
    .then(json => this.setState({ data: json }))
  }

  render() {
    return (
      <div className="TodoCard">
        {this.state.data.map(todo => (
          <Card body outline color="secondary" className="p-3 m-3" style={{width:"300px"}} key={todo._id} id="TodoCard">
            <CardBody>
              <CardTitle className="task">{todo.task}</CardTitle>
              <CardSubtitle className="responsible">Responsible: {todo.responsible}</CardSubtitle>
              <CardText className="task">{todo.task}</CardText>
              <CardText className="dueDate">{todo.dueDate}</CardText>
            </CardBody>
            <UpdateTodo
              todo={todo}
             />
          </Card>
        ))}
      </div>
    );
  }
}

export default TodoCard;
