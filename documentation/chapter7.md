# Chapter 7: Arrays and Lists
## Introduction
In Visual C#, arrays and lists are fundamental data structures that allow you to store and manipulate collections of data. These structures provide efficient ways to organize, access, and modify data in your programs.

## Arrays
An array is a fixed-size collection of elements of the same type. It provides indexed access to its elements, allowing for efficient storage and retrieval.

## Lists
A List, on the other hand, is a dynamic collection that can grow or shrink in size. It is part of the .```System.Collections.Generic``` namespace and provides additional methods for easy manipulation.

## Arrays
### Definition:
In C#, an array is a collection of elements of the same type stored in contiguous memory locations. The elements are accessed using an index, starting from 0.

### Why Use Arrays:
1. **Fixed Size**:
Arrays have a fixed size, which is determined at the time of creation. This can be useful when the number of elements is known in advance.

2. **Efficient Access**:
Accessing elements by index allows for fast and direct access to any element in the array.

### Array Structure
```c#
// Declaration and Initialization
DataType[] arrayName = new DataType[size]; // One dimensional array
DataType[,] arrayName = new DataType[row, column]; // Two dimensional array

// Initialization and Access of 1D and 2D Arrays
arrayName[index] = value;
accessVariable = arrayName[index];

// Initialization and Access of 2D Arrays
arrayName[rowIndex, columnIndex] = value;
accessVariable = arrayName[rowIndex, columnIndex];

```
### Examples
- Initializing an Array
```c#
int [] arr = new int[5]; // One dimensional array
int [,] arr = new int[3, 4]; // Two dimensional array
```
- Accessing an Array

```c#
// 1D Array
int [] arr = new int[5];
arr[0] = 10;
arr[1] = 20;

MessageBox.Show(arr[0].ToString());

// 2D Array
int [,] arr = new int[3, 4];
arr[0, 0] = 10;
arr[0, 1] = 20;
arr[0, 2] = 30;

// Accessing 2D Array using for loop
for (int row = 0; row < arr.Length; row++){
    for (int column = 0; column < row; column++){
        MessageBox.Show(arr[row, column].ToString());
    }
}
```

## List
### Definition
A List in C# is a dynamic collection that can grow or shrink in size. It provides methods for adding, removing, and manipulating elements.

### Why Use Lists
1. Dynamic Size:

    - Lists can dynamically adjust their size, making them suitable for situations where the number of elements is unknown or can change.
2. Versatility:
    - Lists provide a wide range of methods for common operations like adding, removing, sorting, and more.

### List Structure
```c#
// Declaration and Initialization
List<DataType> listName = new List<DataType>();

// Adding Elements
listName.Add(value);

// Accessing Elements
DataType element = listName[index];
```
### Example
```c#
List<string> names = new List<string>();

names.Add("Ahmed");
names.Add("Mohamed");
names.Add("Ali");

// Remove Element
names.Remove("Ahmed");

// Access Element
string name = names[0];

// Loop Through List
for (int index = 0; index < names.Count; index++){
    MessageBox.Show(names[index]);
}

// Loop Through List using foreach
foreach (string name in names){
    MessageBox.Show(name);
}
```
