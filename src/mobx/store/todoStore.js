import { observable, computed, action } from 'mobx'

class TodoItem {
  constructor (title) {
    this.title = title
    this.timeStamp = new Date().toLocaleString()
    this.isCompleted = false
  }
}

export default class TodoStore {
  @observable todos = []

  @computed get completedTaskCount () {
    return this.todos.filter(todo => todo.isCompleted === true).length
  }

  @action addTodo (title) {
    const newTodo = new TodoItem(title)
    this.todos.push(newTodo)
  }
}