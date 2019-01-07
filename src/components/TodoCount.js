import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class TodoCount extends Component {
  render () {
    return (
      <div>
        Progress: {this.props.store.todoStore.completedTaskCount} / {this.props.store.todoStore.todos.length}
      </div>
    )
  }
}
export default TodoCount