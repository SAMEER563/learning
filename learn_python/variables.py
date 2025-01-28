# VAriables are the container for storing data values.

x =3
y= "Good morning"

print(x)
print(y)

# Variables do not need to be declared with any particular type and can even change type after they have been set.

x = 4
x = "Sally"
print(x)

# String variables can be declared either by using single or double quotes:

x = "John"
# is the same as
x = 'John'

# It is case sensitive so the variables x and X are treated as different variables. It never overwrites the value of the variable.

x = 4
X = "Sally"
print(x)

# Casting is the process of converting the value of one data type (integer, string, float, etc.) to another data type.

x = str(3)    # x will be '3'  but it does not print '3' instead it prints 3 
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0

print(x)
print(y)
print(z)

# Get the type of a variable
x=5
y=2.5

print(type(x))  # x will be int
print(type(y))  # y will be float



# Define a variable name 

myvar = "John"
my_var = "John"
_my_var = "John"
myVar = "John"
MYVAR = "John"
myvar2 = "John"


# Illegal variable names:

# 2myvar = "John"
# my-var = "John"
# my var = "John"

# It is not allowed to combine a string and a number in a variable name.
# It can start with an underscore or a letter but not with a number.



# Assign multiple values to multiple variables

x, y, z = "Orange", "Banana", "Cherry"
print(y)


# Assign the same value to multiple variables in one line

x = y = z = "Orange"
print(y)

# Output variables


x = "awesome"
print("Python is " + x)

# The print() function is used to output multiple values seperated by commas.

x = "Python is "
y = "awesome"
z = "language"
print(x,y,z)

# + is used to add two variables
x = "Python is "
y = "awesome"
print(x + y)

# If you try to combine a string and a number, Python will give you an error:

x = 5
y = "John"
# print(x + y)  # it will give you an error

print("Hello","World")  # it will print Hello World

# Global Variables

x = "awesome"

def myfunc():
    print("python is " + x)

myfunc()

# If you create a variable with the same name inside a function, this variable will be local, and can only be used inside the function. The global variable with the same name will remain as it was, global and with the original value.

x = "outside"

def myfunc():
    x = "inside"
    print("Result from " + x)

myfunc()

print("Result from " + x)

# To create a global variable inside a function, you can use the global keyword.

def myfunc():
    global x
    x = "fantastic"

myfunc()

print("Python is " + x)

# Also, use the global keyword if you want to change a global variable inside a function.

x = "awesome"

def myfunc():
    global x
    x = "fantastic"

myfunc()

print("Python is " + x)



