# Data Types in python 

# Text Type:	str
# Numeric Types:	int, float, complex
# Sequence Types:	list, tuple, range
# Mapping Type:	dict
# Set Types:	set, frozenset
# Boolean Type:	bool
# Binary Types:	bytes, bytearray, memoryview

# Setting the Data Type

x = 5
y = "John"
print(type(x))    # x will be int
print(type(y))    # y will be str


# Setting the Specific Data Type

x = str(3)    # x will be '3'  but it does not print '3' instead it prints 3
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0

print(x)
print(y)
print(z)

# Boolean Data Type

x = True
print(type(x))    # x will be bool

# List Data Type

x = ["apple", "banana", "cherry"]
print(x)    # x will be ['apple', 'banana', 'cherry']
print(type(x))    # x will be list

# Tuple Data Type

x = ("apple", "banana", "cherry")
print(x)    # x will be ('apple', 'banana', 'cherry')
print(type(x))    # x will be tuple

# Range Data Type

x = range(6)
print(x)    # x will be range(0, 6)

# Dictionary Data Type

x = {"name" : "John", "age" : 36}
print(x)    # x will be {'name': 'John', 'age': 36}
print(type(x))    # x will be dict

print(x["name"])



# Type Conversion

x=5
y=3.8
z=True

s=complex(x)
a=int(y)
m=float(z)

print(s)
print(a)
print(m)
