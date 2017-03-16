import{ observable, computed, autorun }from'mobx';

class Todo{
 @observable content;
 @observable finished = false;
    constructor(content) {
        this.content = content;
    }
}

class TodoList{
  @observable todos = [];
  @computed get todoListString() {
        return this.todos.filter(todo=>!todo.finished).map((todo, i) =>`${i+1}.${todo.content}`).join('\n');
    }
}

const store =new TodoList();

store.todos.push(
    new Todo("task1"),
    new Todo("task2"),
    new Todo("task3")
);
autorun(()=>console.log(store.todoListString))

store.todos[2].finished =true;