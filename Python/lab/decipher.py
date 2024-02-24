def decipher(cipher_string, cipher_key):
    # Create a dictionary mapping each letter in cipher_key to the original alphabet
    key_mapping = {cipher_key[i]: chr(ord('a') + i) for i in range(26)}
    
    # Use the mapping to decipher each letter in cipher_string
    deciphered_string = ''.join(key_mapping[char] for char in cipher_string)
    
    return deciphered_string

if __name__ == '__main__':
    print(decipher('jgphestdmcyrizxqfowlaukbnv', 'jgphestdmcyrizxqfowlaukbnv'))
    # Output: 'abcdefghijklmnopqrstuvwxyz'
    
    print(decipher('prxahjpjhein', 'jgphestdmcyrizxqfowlaukbnv'))
    # Output: 'cloudacademy'
