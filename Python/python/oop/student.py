def main():
    student = get_student() #name, house = get_student()
    # if student[0] == "jaks":
    #     student[1] = "Viu"
    print(f"{student['name']} from {student['house']}") #print(f"{student[0]} from {student[1]}") #print(f"{name} from {house}")

def get_student():
    student = {}    # name = input("Name: ")
    student["name"] = input("Name: ")    # house = input("House: ")
    student["house"] = input("House: ")    # return [name, house]  #Tuples are used to store multiple items in a single variable.
    return student

if __name__ == "__main__":
    main()