export default function sidebar() {
	return [
		{
			text: "Get Started",
			collapsible: false,
			items: [
				{ text: "Install Insights", link: "/getting-started/installation" },
				{
					text: "Complete Setup",
					link: "/getting-started/setup-your-account",
				},
				{ text: "Quick Start", link: "/getting-started/quick-start" }
			],
		},
		{
			text: "Data Sources",
			collapsible: false,
			items: [
				{ text: "Overview", link: "/data-source/overview" },
			]
		},
		{
			text: "Querying Data",
			collapsible: false,
			items: [
				{ text: "Overview", link: "/query/overview" },
				{ text: "Joining Data", link: "/query/joining-data" },
				{ text: "Expressions", link: "/query/expressions" },
				{ text: "Transformations", link: "/query/transformations" },
				{ text: "SQL Editor", link: "/query/sql-editor" },
				{ text: "Query Reusibility", link: "/query/query-reusibility" },
			]
		},
		{
			text: "Dashboards",
			collapsible: false,
			items: [
				{ text: "Overview", link: "/dashboard/overview" },
				{ text: "Charts", link: "/dashboard/charts" },
				{ text: "Filters", link: "/dashboard/filters" },
				{ text: "Sharing", link: "/dashboard/sharing" }
			]
		},
		{
			text: "Miscellaneous",
			collapsible: false,
			items: [
				{
					text: "FAQ",
					link: "/miscellaneous/faq",
				},
			],
		},
	];
}
