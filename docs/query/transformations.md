# Transformations

Transformations are a way to modify the data in your query. They are performed after the data is fetched from the database and before the data is displayed in the query result. You can add multiple transformations to your query.

You can perform the following transformations by clicking on the 3-dot menu beside the title of the query.

![Transformations](./images/transformations.png)

## Pivot

Pivot is used to transform the data from a row-based format to a column-based format.

Example:

| ID | category | sales |
| --- | --- | --- |
| 1 | Consumables | 10 |
| 2 | Consumables | 20 |
| 3 | Hardware | 30 |

After pivoting the data on the `category` column, the data will look like this:

| ID | Consumables | Hardware |
| --- | --- | --- |
| 1 | 10 |  |
| 2 | 20 |  |
| 3 |  | 30 |


## Unpivot

Unpivot is used to transform the data from a column-based format to a row-based format.

Example:

| ID | Consumables | Hardware |
| --- | --- | --- |
| 1 | 10 |  |
| 2 | 20 |  |
| 3 |  | 30 |

After unpivoting the data with new column name `category` and `sales`, the data will look like this:

| ID | Category | Sales |
| --- | --- | --- |
| 1 | Consumables | 10 |
| 2 | Consumables | 20 |
| 3 | Hardware | 30 |

