# Joining Data

To create insightful reports, you will need to combine data from multiple tables. Query Builder interface allows you to join any number of tables in a single query.

To join tables, you will first need to add a table, then click on the table name to open the join section where you can select the table you want to join with.

![Join Tables](./images/join-tables.png)

## Joining multiple tables

To join multiple tables, you will need to join in a specific order. For example, if you want to join `users`, `orders`, `products`, and `categories` tables, you will need to join them in the following order:

1. Add the `users` table to the query.
2. Then open the join section for the `users` table and select the `orders` table.
3. Now, add the `orders` table to the query.
4. Then open the join section for the `orders` table and select the `products` table.
5. Now, add the `products` table to the query.
6. Then open the join section for the `products` table and select the `categories` table.

