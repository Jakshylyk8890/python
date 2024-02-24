conversion_table = {
    'q': 'й', 'w': 'ц', 'e': 'у', 'r': 'к', 't': 'е', 'y': 'н', 'u': 'г', 'i': 'ш',
    'o': 'щ', 'p': 'з', 'a': 'ф', 's': 'ы', 'd': 'в', 'f': 'а', 'g': 'п', 'h': 'р',
    'j': 'о', 'k': 'л', 'l': 'д', 'z': 'я', 'x': 'ч', 'c': 'с', 'v': 'м', 'b': 'и',
    'n': 'т', 'm': 'ь'
}

def convert_string(input_string):
    output = ''
    for char in input_string:
        converted = conversion_table.get(char, char)
        output += converted
    return output

input_string = input("Enter a string: ")
converted_string = convert_string(input_string)
print("Converted string:", converted_string)
