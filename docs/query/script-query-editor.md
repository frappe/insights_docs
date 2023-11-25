# Script Query Editor

The Script Query Editor is for technical users who want to write Python scripts to create queries. It is the most flexible way to create queries as you can use the full power of Python to create queries.

![Script Query Editor](./images/script-query-editor.png)

You need to be familiar with Frappe Framework's Script API in order to make best use of the Script Query Editor. You can learn more about the Script API [here](https://frappeframework.com/docs/user/en/desk/scripting/script-api).

::: warning
**Dashboard Filters** are not supported with the queries created using the Script Query Editor.
:::

While fetching data from a REST API, you may need to store secret keys or tokens in the query. You can store these keys by clicking on the **{}** button at the bottom of the editor. You can then use these keys just like any other python variable.

![Script Query Variables](./images/script-query-variables.png)