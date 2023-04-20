# Installation

Frappe Insights can be installed in several ways depending on your requirements. You can choose to install it on Frappe Cloud, the cloud version of Frappe Insights, or on your own server. The following sections describe the installation methods in detail.

## Insights Cloud

You can also use the cloud version of Frappe Insights, hosted at [frappeinsights.com](https://frappeframework.com). This version provides all the features of the self-hosted version without the hassle of server maintenance. Sign up for a free account on the website to get started.

## Frappe Cloud

Frappe Insights can be installed in a single click on Frappe Cloud, a managed hosting platform that provides easy installation and maintenance. There are two ways to install Frappe Insights on Frappe Cloud:

::: tip ERPNext Users
If you are an ERPNext user, and your site is hosted on Frappe Cloud, this is the easiest way to install Frappe Insights.
:::

::: warning Note
You need to be logged in to Frappe Cloud to install Frappe Insights. If you don't have an account, you can create one for free at [frappecloud.com](https://frappecloud.com/dashboard).
:::

- **On an existing site**: You can install Frappe Insights on your existing site on Frappe Cloud. Your site must be running Frappe Framework v14 or later. Follow the intructions below to install on an existing site.
  1. Go to [Frappe Cloud Marketplace](https://frappecloud.com/marketplace/apps/insights) and click on the **Install** button.
  2. Select a site to install Frappe Insights on and select the plan you want to use. Click on the **Install** button to start the installation.
  3. The installation will be completed in a few minutes.
  4. Go to `https://frappecloud.com/dashboard/sites/<your-site>/jobs` to check the status of the installation.
  5. Once the installation is complete, you can access Frappe Insights at `https://<your-site>.frappe.cloud/insights`.
- **On a new site**: You can install Frappe Insights on a new site on Frappe Cloud. Follow the instructions below to install Frappe Insights on a new site.
  1. Go to [New Site Page](https://frappecloud.com/dashboard/sites/new) and enter site name
  2. Select **Version 14** or later as the Frappe Framework version
  3. Select **Insights** as the app to install
  4. Complete the installation process by following the instructions on the screen
  5. Once the installation is complete, you can access Frappe Insights at `https://<your-site>.frappe.cloud/insights`.

## Self Hosted

If you prefer to host Frappe Insights on your own server, you can choose one of the following methods:

- **Docker Image**: Frappe Insights provides a Docker image that makes it easy to install and run on any platform that supports Docker.

  1. Clone the [Frappe Insights repository](https://github.com/frappe/insights)
  2. `cd` into the `insights` directory and run `docker-compose up`
  3. The installation will be completed in a few minutes. Once the installation is complete, you can access Frappe Insights at `http://insights.test:8000/insights`.

- **Manual Installation**: You can also install Frappe Insights manually on your server. This method requires more technical knowledge and may take longer to set up. Follow the instructions below to install Frappe Insights manually.
  1. Install Frappe Bench on your machine by following the instructions [here](https://frappeframework.com/docs/user/en/installation).
  2. Start a new bench by running `bench init frappe-insights-bench`
  3. Start the server by running `bench start`
  4. In a new terminal, `cd` into the `frappe-insights-bench` directory and run `bench get-app insights`
  5. Create a new site by running `bench new-site insights.local`
  6. Map your site to localhost by running `bench --site insights.local add-to-hosts`
  7. Install the app on your site by running `bench --site insights.local install-app insights`
  8. Now you can access Frappe Insights at `http://insights.local:8000/insights`.
