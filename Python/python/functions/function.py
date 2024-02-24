# def nameOfFunction(param):
#   your code 
#   return

def addition(num1, num2, num3):
    return(num1 + num2 + num3)

def division(num1, num2):
    if num2 == 0:
        return "ERROR: Cannot divide to ZERO"
    else:
        return num1 / num2

var1 = 20 
var2 = 0
var3 = 1
result=addition(var1, var2, var3)
print("Result of addition:" , result)

result=division(var1, var2)
print("Result of divide:" , result)

# ------------------------------------------------------------------------------------------------------------
def name(name):
    print(f"My name is {name}")

name('jaks')
#-------------------------------------------------------------------------------------------------------------
def can_drive(age, driving_age=16):
    return age >= driving_age

can_drive(16, 18)