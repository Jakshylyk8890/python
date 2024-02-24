from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.label import Label
from kivy.uix.textinput import TextInput
from kivy.uix.button import Button
class ToDoLayout(BoxLayout):
    def __init__(self, **kwargs):
        super(ToDoLayout, self).__init__(**kwargs)
        self.orientation = "vertical"

        self.task_input = TextInput(hint_text="Enter task description")
        self.add_widget(self.task_input)

        self.add_button = Button(text="Add Task")
        self.add_button.bind(on_release=self.add_task)
        self.add_widget(self.add_button)

        self.task_list = BoxLayout(orientation="vertical")
        self.add_widget(self.task_list)

    def add_task(self, instance):
        task_description = self.task_input.text
        task_label = Label(text=task_description)
        self.task_list.add_widget(task_label)
        self.task_input.text = ""
class ToDoApp(App):
    def build(self):
        layout = ToDoLayout()
        return layout
if __name__ == "__main__":
    ToDoApp().run()
