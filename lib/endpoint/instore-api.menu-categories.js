InstoreEndpoint.getMenuCategoriesClient = function() {
  var client = this;

  return {
	CREATE_URL: "https://sync.instoredoes.com/v1/api/categories?{category_name}",
	DELETE_URL: "https://sync.instoredoes.com/v1/api/categories?{category_id}",
	LIST_URL: "https://sync.instoredoes.com/v1/api/categories",
	UPDATE_URL: "https://sync.instoredoes.com/v1/api/categories?{category_id}?{category_name}",			
		
		create: function(categoryName, parameters, requestCallback)
		{	
			var requestUrl = this.CREATE_URL.replace("{category_name}", categoryName) + client.requestQuery();
			requestUrl += InstoreUtils.createQueryString("&", parameters);
			
			InstoreUtils.doRequest(requestUrl, requestCallback, "POST");
		},

		delete: function(categoryId, parameters, requestCallback)
		{
			var requestUrl = this.DELETE_URL.replace("{category_id}", categoryId) + client.requestQuery();
			requestUrl += InstoreUtils.createQueryString("&", parameters);
			
			InstoreUtils.doRequest(requestUrl, requestCallback, "DELETE");
		},

		list: function(categoryName, parameters, requestCallback)
		{	
			var requestUrl = this.LIST_URL + client.requestQuery();
			requestUrl += InstoreUtils.createQueryString("&", parameters);
			
			InstoreUtils.doRequest(requestUrl, requestCallback, "GET");
		},
		
		
		update: function(categoryName, categoryId, parameters, requestCallback)
		{
			
			var requestUrl = this.UPDATE_URL.replace("{category_id}", categoryId).replace("{category_name}", categoryName) + client.requestQuery();
			requestUrl += InstoreUtils.createQueryString("&", parameters);
			
			InstoreUtils.doRequest(requestUrl, requestCallback, "PUT");
		}
			
  };
  
};

