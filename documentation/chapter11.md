# Chapter 11: Databases

## Introduction
In Visual C#, databases play a crucial role in storing, managing, and retrieving data. This chapter explores the fundamentals of working with databases, including connecting to databases, performing CRUD operations (Create, Read, Update, Delete), and utilizing database queries.

## Databases and SQL
### Definition
A database is a structured collection of data, and SQL (Structured Query Language) is a domain-specific language used to manage and manipulate relational databases.

### Why use Databases:
1. Data Persistence
    - Databases provide a persistent storage solution for application data that can be easily accessed and modified.
2. Data Retrieval
    - Efficiently retrieve and query data based on specific criteria.

### Prerequisites
- You need to install the ```System.Data.SqlClient``` package to use SQL. To install it, you need to right click on the solution and select **Manage NuGet Packages** from the context menu and click **Browse** and enter the search term ```System.Data.SqlClient``` in the search box and then click **Install**.

### Database Usage Structure
```c#
// Connection string
string connectionString = "Data Source=yourserver;Initial Catalog=yourdatabase;integrated security=true;";

// Create connection
using (SqlConnection connection = new SqlConnection(connectionString)){
    // Open connection
    connection.Open();

    // Perform SQL operations (e.g. select, insert, update, delete)
}
```

### CRUD Operations
- **CRUD** operations refer to the fundamental database operations: Create, Read, Update, and Delete.

#### CRUD Operation Structure
```c#
// Create (Insert)
string insertQuery = "INSERT INTO TableName (Column1, Column2) VALUES (Value1, Value2)";

// Read (Select)
string selectQuery = "SELECT * FROM TableName WHERE Condition";

// Update
string updateQuery = "UPDATE TableName SET Column1 = NewValue WHERE Condition";

// Delete
string deleteQuery = "DELETE FROM TableName WHERE Condition";
```
#### Examples
1. Create Operation
```c#
using (SqlConnection connection = new SqlConnection(connectionString)){
    // Open connection
    connection.Open();

    string query = "INSERT INTO TableName (Column1, Column2) VALUES ('" + textBox1.Text + "', '" + textBox2.Text + "')";

    using (SqlCommand command = new SqlCommand(query, connection)){
        // Execute query
        command.ExecuteNonQuery();
    }
}
```
2. Read Operation
```c#
using (SqlConnection connection = new SqlConnection(connectionString)){
    // Open connection
    connection.Open();

    string query = "SELECT * FROM TableName";

    using (SqlCommand command = new SqlCommand(query, connection)){
        // Execute query
        SqlDataAdapter adapter = new SqlDataAdapter(command);

        DataTable table = new DataTable();
        adapter.Fill(table);

        // Display data in the Data Gridview
        dataGridView1.DataSource = table;
    }
}
```
3. Update Operation
```c#
using (SqlConnection connection = new SqlConnection(connectionString)){
    // Open connection
    connection.Open();

    string query = "UPDATE TableName SET Column1 = '" + textBox1.Text + "', Column2 = '" + textBox2.Text + "' WHERE Id = '" + textbox3.Text + "'";

    using (SqlCommand command = new SqlCommand(query, connection)){
        // Execute query
        command.ExecuteNonQuery();
    }
}
```
4. Delete Operation
```c#
using (SqlConnection connection = new SqlConnection(connectionString)){
    // Open connection
    connection.Open();

    string query = "DELETE FROM TableName WHERE Id = '" + textbox3.Text + "'";

    using (SqlCommand command = new SqlCommand(query, connection)){
        // Execute query
        command.ExecuteNonQuery();
    }
}
```
Understanding how to connect to databases, execute SQL queries, and manage data through CRUD operations is essential for building robust and data-driven applications in Visual C#.