class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def speak(self):
        print(f"My name is {self.name} and I'm {self.age} years old.")

    def eat(self):
        print("I'm eating now.")
person1 = Person("Alice", 25)
person2 = Person("Bob", 30)

person1.speak()  # prints "My name is Alice and I'm 25 years old."
person2.eat()    # prints "I'm eating now."
