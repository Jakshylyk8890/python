conversion_table = {
    'й': 'q', 'ц': 'w', 'у': 'e', 'к': 'r', 'е': 't', 'н': 'y', 'г': 'u', 'ш': 'i',
    'щ': 'o', 'з': 'p', 'ф': 'a', 'ы': 's', 'в': 'd', 'а': 'f', 'п': 'g', 'р': 'h',
    'о': 'j', 'л': 'k', 'д': 'l', 'я': 'z', 'ч': 'x', 'с': 'c', 'м': 'v', 'и': 'b',
    'т': 'n', 'ь': 'm'
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
