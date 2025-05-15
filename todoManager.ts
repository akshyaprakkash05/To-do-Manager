import { ToDo } from "./todo";

export class ToDoManager {
  private todos: ToDo[] = [];
  private nextId: number = 1;

  addTodo(task: string): void {
    const todo = new ToDo(this.nextId++, task);
    this.todos.push(todo);
    console.log(`✅ Task added: "${task}"`);
  }

  listTodos(): void {
    console.log("\n📋 Your To-Dos:");
    if (this.todos.length === 0) {
      console.log("  (No tasks)");
      return;
    }
    this.todos.forEach((todo) => {
      console.log(`  ${todo.id}. ${todo.task}`);
    });
  }

  deleteTodo(id: number): void {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      const removed = this.todos.splice(index, 1)[0];
      console.log(`❌ Deleted: "${removed.task}"`);
    } else {
      console.log("⚠️ Invalid task ID.");
    }
  }
}
