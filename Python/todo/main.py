class Task:
    def __init__(self, description, due_date):
        self.description = description
        self.due_date = due_date
        self.completed = False

class ToDoList:
    def __init__(self):
        self.tasks = []

    def add_task(self, description, due_date):
        task = Task(description, due_date)
        self.tasks.append(task)
        print("Task added successfully.")

    def view_tasks(self):
        if not self.tasks:
            print("No tasks found.")
            return

        print("Tasks:")
        for index, task in enumerate(self.tasks, start=1):
            print(f"{index}. {task.description} (Due: {task.due_date}) - {'Completed' if task.completed else 'Not completed'}")

    def update_task_status(self, task_index, completed):
        if task_index < 1 or task_index > len(self.tasks):
            print("Invalid task index.")
            return

        task = self.tasks[task_index - 1]
        task.completed = completed
        print("Task status updated successfully.")
def main():
    todo_list = ToDoList()

    while True:
        print("\n===== To-Do List Application =====")
        print("1. Add Task")
        print("2. View Tasks")
        print("3. Update Task Status")
        print("0. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            description = input("Enter task description: ")
            due_date = input("Enter due date: ")
            todo_list.add_task(description, due_date)
        elif choice == "2":
            todo_list.view_tasks()
        elif choice == "3":
            todo_list.view_tasks()
            task_index = int(input("Enter the task index to update: "))
            completed = input("Enter task completion status (True/False): ").lower() == "true"
            todo_list.update_task_status(task_index, completed)
        elif choice == "0":
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == '__main__':
    main()
