rows = int(input("Enter number of rows: "))
k = 0

# Loop to print the upper half of the diamond
for i in range(1, rows+1):
    for space in range(1, (rows-i)+1):
        print(end="  ")
    while k!=(2*i-1):
        print("* ", end="")
        k += 1
    k = 0
    print()

# Loop to print the lower half of the diamond
for i in range(rows-1, 0, -1):
    for space in range(1, rows-i+1):
        print(end="  ")
    k = 0
    while k!=(2*i-1):
        print("* ", end="")
        k += 1
    print()


length = 10
astr = "*"
for i in range(length):
    for j in range(length-i):
        print(" ", end='')
    print(astr)
    astr += "**"
length -= 1
space = 1
astrNum = ((length*2)-1)
astr = "*" * astrNum
for i in range(length):
    print(" " + space * " " + astr)
    astrNum -= 2
    astr = "*" * astrNum
    space += 1
