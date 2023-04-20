import{_ as e,c as t,o as a,a as s}from"./app.89eba29f.js";const r="/assets/enable-query-reusability.e7830b57.png",n="/assets/view-sql.4928f6c1.png",d=JSON.parse('{"title":"Reusing Query","description":"","frontmatter":{},"headers":[],"relativePath":"query/query-reusibility.md","lastUpdated":1681986768000}'),i={name:"query/query-reusibility.md"},o=s('<h1 id="reusing-query" tabindex="-1">Reusing Query <a class="header-anchor" href="#reusing-query" aria-hidden="true">#</a></h1><p>A query can be reused as a table in another query. This is useful when you want to create complex queries that are not possible in a single query.</p><p>You can enable query reusability by toggling the <strong>Enable Query Reusability</strong> switch in the <strong>Settings</strong> section of the query.</p><p><img src="'+r+'" alt="Enable Query Reusability"></p><p>Once you enable it, Insights will create a new virtual table for each query. You can select the query as a table while selecting the tables for a new query. You can only select the queries that belongs to the same data source.</p><p>When using a query as a table, the final SQL that is generated will contain the SQL of the query that you have selected as a subquery. To view the final SQL, click on the <strong>View SQL</strong> button in the 3-dot menu of the query.</p><p><img src="'+n+'" alt="View SQL"></p>',7),u=[o];function l(c,h,y,_,p,b){return a(),t("div",null,u)}const q=e(i,[["render",l]]);export{d as __pageData,q as default};
