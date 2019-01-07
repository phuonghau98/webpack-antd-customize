import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { observer, inject } from 'mobx-react'
import TodoCount from './TodoCount'

@inject('store')
@observer
class TodoApp extends Component {
  handleAddTodo (inputNode) {
    this.props.store.todoStore.addTodo(this.inputNode.state.value)
    this.inputNode.state.value = null
  }

  render () {
    return (
      <div>
        {
          this.props.store.todoStore.todos.map(todo => <p key={todo.timeStamp}>{todo.title}</p>)
        }
        <TodoCount />
        <Form >
          <Input ref={node => (this.inputNode = node)} />
          <Button type='primary' onClick={() => this.handleAddTodo(this.inputNode)}>Add</Button>
        </Form>
      </div>
    )
  }
}
export default TodoApp