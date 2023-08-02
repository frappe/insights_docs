# Frequently Asked Questions

## Q. My site is hosted on Frappe Cloud. How do I connect to my database?
If your site is hosted on Frappe Cloud and you have **Dashboard** access then follow these instructions to find your database credentials.
1. Go to **Backup & Restore** tab or go to

	```https://frappecloud.com/dashboard/sites/<your-site.frappe.cloud>/database```

1. Click on the **Access Database** button and then click on enable database access.
1. You will be prompted with a dialog box that will show you the database credentials.

	<div class="border rounded flex items-center justify-center bg-gray-50 w-full py-8" >
		<img class="shadow rounded-sm" src="./images/fc-database-credentials.png" alt="fc-database-credentials" width="50%">
	</div>

1. Then follow this [guide](/data-source/overview) to connect to your database.

## Q. How do I view charts/dashboard on my Frappe/ERPNext Site?

::: tip
Check [this video](https://github.com/frappe/insights_docs/assets/25369014/8744b000-550a-479c-89d5-6bfe0bf142b7) if you want to embed a chart in your Frappe/ERPNext Workspace
:::

You can export your charts/dashboards as an `iframe` and embed it in anywhere on your site. 

1. Click on the **Share** button in the visualization tab. 

	![Share Chart](https://github.com/frappe/insights_docs/assets/25369014/96f43995-a174-4a3d-92bb-f6c9210c7342)

1. Click on the **Copy iframe** button
	
	![Copy iframe link](https://github.com/frappe/insights_docs/assets/25369014/3b713944-7211-4acc-ad03-45c71235bfd4)


## Q. How do I join data from multiple data sources?

It is possible to join data from multiple data source but it is quite cumbersome. We are working on improving this experience. For now, you can follow the steps below to join data from multiple data sources.

1. Create a query for **each** of the data sources that you want to join.
1. Make sure that the there is one **common** column in each of the queries that you want to join.
1. After creating, click on the **Store Query** under menu to store in into the **Query Store** data source.
1. Repeat the above steps for all the queries that you want to join.
1. Now, create a new query and use the **Query Store** data source and join each of the queries by selecting them as a table.
