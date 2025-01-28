# String in Python

# String is a sequence of characters. It is a data type in Python. Strings are immutable. This means that once a string is created, the elements within it can not be changed or replaced. Strings are ordered sequences of characters. Strings are enclosed in single quotes (' ') or double quotes (" ").

# Example:

s= "Sameer"
k="Kumar"
m="Maurya"

print(s)
print(k)
print(m)

# Multiline Strings
# You can assign a multiline string to a variable by using three quotes. You can use three single quotes (''' ''') or three double quotes (""" """).

# Example:

a = '''Sameer is looking for job at position of front end developer.'''
print(a)


# You can declare as direct string as well.
print("He is also looking for job at position of back end developer.")


# Strings are Arrays

# Like many other popular programming languages, strings in Python are arrays of bytes representing unicode characters. However, Python does not have a character data type, a single character is simply a string with a length of 1. Square brackets can be used to access elements of the string.

# Example:

a = "Hello, World!"
print(a[7])
