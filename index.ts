import inquirer from "inquirer";
import { ToDoManager } from "./todoManager";

const manager = new ToDoManager();

async function main() {
  while (true) {
    const { action } = await inquirer.prompt({
      name: "action",
      type: "list",
      message: "Choose an action:",
      choices: ["Add To-Do", "View To-Dos", "Delete To-Do", "Exit"],
    });

    switch (action) {
      case "Add To-Do":
        const { task } = await inquirer.prompt({
          name: "task",
          type: "input",
          message: "Enter your task:",
        });
        manager.addTodo(task);
        break;

      case "View To-Dos":
        manager.listTodos();
        break;

      case "Delete To-Do":
        const { id } = await inquirer.prompt({
          name: "id",
          type: "number",
          message: "Enter the ID of the task to delete:",
        });
        manager.deleteTodo(id);
        break;

      case "Exit":
        console.log("👋 Exiting To-Do Manager...");
        return;
    }
  }
}

main();
