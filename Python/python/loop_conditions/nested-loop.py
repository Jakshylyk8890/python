length = 10
astr = "*"
for i in range(length):
    for j in range(length-i):
        print(" ", end='')
    print(astr)
    astr+="**" # astr = astr + "**"


adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]
for x in adj:
  for y in fruits:
    print(x, y)