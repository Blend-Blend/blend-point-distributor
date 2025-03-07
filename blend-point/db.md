# Basic Operations with SQLite Database `dev.db`

This document provides basic commands to interact with the SQLite database `dev.db`.

## Show Tables

To list all tables in the SQLite database, use the following command:

```shell
sqlite3 dev.db ".tables"
```

## Describe a Table

To see the structure of a specific table, use the `.schema` command followed by the table name. For example, to describe a table named `User`:

```shell
sqlite3 dev.db ".schema User"
```

## Insert Data

To insert data into a table, use the `INSERT INTO` SQL command. For example, to insert a new user into the `User` table:

```sql
INSERT INTO User (name, email) VALUES ('John Doe', 'john@example.com');
```

## Query Data

To query data from a table, use the `SELECT` SQL command. For example, to select all users:

```sql
SELECT * FROM User;
```

## Update Data

To update existing data in a table, use the `UPDATE` SQL command. For example, to update a user's email:

```sql
UPDATE User SET email = 'newemail@example.com' WHERE name = 'John Doe';
```

## Delete Data

To delete data from a table, use the `DELETE FROM` SQL command. For example, to delete a user:

```sql
DELETE FROM User WHERE name = 'John Doe';
```

## Exit SQLite

To exit the SQLite command-line interface, type:

```shell
.exit
```

These commands should help you perform basic operations with your SQLite database `dev.db`. Adjust the table names and fields according to your actual database schema.

```shell

```