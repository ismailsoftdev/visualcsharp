# Chapter 6: Methods

## Introduction
In Visual C#, a method is a block of code that performs a specific task or operation. It is a reusable and self-contained unit of functionality within a program. Methods are used to organize code, improve code readability, and facilitate code reusability.

### Why Use Methods:
1. Modularity and Organization:
Methods allow breaking down a program into smaller, more manageable pieces.
Each method focuses on a specific functionality, making the codebase easier to understand and maintain.

2. Code Reusability:
Methods can be called multiple times from different parts of the program.
Reusing methods reduces redundancy and promotes efficient code development.



### Method Structure

```C#
AccessModifier ReturnType MethodName(ParameterType parameter1, ParameterType parameter2, ...)
    {
        //Method body
        // Code to perform the desired operation
        // Optionally, return a value using the return statement
    }
```

1. **Access Modifier**: Specifies the visibility of the method (e.g., public, private, internal).
2. **Return Type**: Specifies the type of value the method will return, or void if the method doesn't return any value.
4. **Method Name**: A unique identifier for the method.
5. **Parameters**: Input values that the method accepts (if any).
    - ParameterType is the Data Type of the parameter.
6. **Method Body**: Contains the code to perform the desired operation.
7. **Return Statement**: If the method has a return type other than void, it uses the return keyword followed by the value to be returned.

**Examples**:
* A method that returns the sum of two numbers
``` c#
public int AddNumbers(int num1, int num2)
{
    int sum = num1 + num2;
    return sum;
}
```
* A method that doesn't return a value
``` c#
public void PrintMessage()
{
    MessageBox.Show("Hello, World!");
}
```
### How to use methods
1. To use a method, you call it by its name, passing arguments if required.

```C#
int result = AddNumbers(5, 10);
```
The result variable will contain the value returned by the method.

2. To use a method that doesn't return a value, you just call it by its name.
```C#
PrintMessage();
```