InstoreEndpoint.getMenuCategoriesClient = function() {
  var client = this;

  //Name canot be blank
  //Category_id must be a UUID

  return {
	CREATE_URL: "https://sync.instoredoes.com/v1/api/categories?{name}",
	DELETE_URL: "https://sync.instoredoes.com/v1/api/categories?{category_id}",
	LIST_URL: "https://sync.instoredoes.com/v1/api/categories",
	UPDATE_URL: "https://sync.instoredoes.com/v1/api/categories?{category_id}?{name{",			
  }
  
};

