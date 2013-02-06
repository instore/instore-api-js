Instore
===============

Javascript wrapper for the Instore API

## Getting started

1. Initialize Instore.Api class passing your client\_id.

        instore = new Instore.Api('346C7E9A9577844A1DD7')

2. Authorize Instore Api by login in through OAauth. 

        instore.login(function(){
          // User successfully logged in

          // Fetch user information
          instore.me(function(res){
            res.data.email      // user@example.com
            res.data.first_name // John
            res.data.last_name  // Smith
          })
        })
        
  Client will store OAuth access token in cookie for one day after user authorizes Instore Api.

3. Perform asynchronous requests to Instore Api endpoints.
        
        instore.categories().fetch(function(res){
          res.data // [...]
        })

4. At any point you can use logout function which will reset OAuth access token.
  
        instore.logout()

## Further information

Response object maps API fields :

    instore.categories().find('17b530c0-fd28-4091-94b0-aab2417936ae', function(res){
      response.status  // true
      response.scope   // "api"
      response.code    // "ok"
      response.message // ""
      response.data    // {...}
    })

Each endpoint support limit and page options for paginating results

    instore.categories().fetch({page: 2}, function(res){ ... })
    instore.categories().fetch({page: 2, limit: 10}, function(res){ ... })

Those parameters are optional so it's possible to skip them by either suppling empty {} or passing callback function as first parameter
  
    instore.categories().fetch(function(res){ ... })
    instore.categories().fetch({}, function(res){ ... })

When creating or updating resources Instore API can return validation errors. In that case response will have status equal false along with the errors field :

    instore.categories().create({name: ''}, function(res){
      res.status // false
      res.errors // { ... }
    })

## Full list of methods
       
    instore.login(function(res){ ... })
    instore.logout()
    instore.me(function(res){ ... })
    instore.categories().fetch(params = {}, function(res){ ... })
    instore.categories().find(id, function(res){ ... })
    instore.categories().create(params, function(res){ ... })
    instore.categories().update(id, params, function(res){ ... })
    instore.categories().destroy(id, function(res){ ... })
    instore.items().fetch(params = {}, function(res){ ... })
    instore.items().find(id, function(res){ ... })
    instore.items().create(params, function(res){ ... })
    instore.items().update(id, params, function(res){ ... })
    instore.items().destroy(id, function(res){ ... })
    instore.itemSizes().fetch(params = {}, function(res){ ... })
    instore.itemSizes().find(id, function(res){ ... })
    instore.itemSizes().create(params, function(res){ ... })
    instore.itemSizes().update(id, params, function(res){ ... })
    instore.itemSizes().destroy(id, function(res){ ... })
    instore.ingredients().fetch(params = {}, function(res){ ... })
    instore.ingredients().find(id, function(res){ ... })
    instore.ingredients().create(params, function(res){ ... })
    instore.ingredients().update(id, params, function(res){ ... })
    instore.ingredients().destroy(id, function(res){ ... })
    instore.itemIngredients().fetch(params = {}, function(res){ ... })
    instore.itemIngredients().find(id, function(res){ ... })
    instore.itemIngredients().create(params, function(res){ ... })
    instore.itemIngredients().destroy(id, function(res){ ... })
    instore.specialQualities().fetch(params = {}, function(res){ ... })
    instore.specialQualities().find(id, function(res){ ... })
    instore.specialQualities().create(params, function(res){ ... })
    instore.specialQualities().destroy(id, function(res){ ... })
    instore.uniqueQualities().fetch(params = {}, function(res){ ... })
    instore.uniqueQualities().find(id, function(res){ ... })
    instore.locations().fetch(params = {}, function(res){ ... })
    instore.locations().find(id, function(res){ ... })
    instore.locationGroups().fetch(params = {}, function(res){ ... })
    instore.locationGroups().find(id, function(res){ ... })
    instore.taxes().fetch(params = {}, function(res){ ... })
    instore.taxes().find(id, function(res){ ... })
    instore.taxes().create(params, function(res){ ... })
    instore.taxes().update(id, params, function(res){ ... })
    instore.taxes().destroy(id, function(res){ ... })
    instore.discounts().fetch(params = {}, function(res){ ... })
    instore.discounts().find(id, function(res){ ... })
    instore.discounts().create(params, function(res){ ... })
    instore.discounts().update(id, params, function(res){ ... })
    instore.discounts().destroy(id, function(res){ ... })
    instore.orders().fetch(params = {}, function(res){ ... })
    instore.orders().find(id, function(res){ ... })
    instore.orders().create(params, function(res){ ... })
    instore.orders().update(id, params, function(res){ ... })
    instore.orders().void(id, function(res){ ... })
    instore.orders().refund(id, function(res){ ... })
    instore.orders().hold(id, params, function(res){ ... })
    instore.orders().unhold(id, function(res){ ... })
    instore.orderLines().fetch(params = {}, function(res){ ... })
    instore.orderLines().find(id, function(res){ ... })
    instore.orderLines().create(params, function(res){ ... })
    instore.orderLines().destroy(id, function(res){ ... })
    instore.appliedDiscounts().fetch(params = {}, function(res){ ... })
    instore.appliedDiscounts().find(id, function(res){ ... })
    instore.appliedDiscounts().create(params, function(res){ ... })
    instore.appliedDiscounts().destroy(id, function(res){ ... })
    instore.orderLineIngredients().fetch(params = {}, function(res){ ... })
    instore.orderLineIngredients().find(id, function(res){ ... })
    instore.orderLineIngredients().create(params, function(res){ ... })
    instore.orderLineIngredients().destroy(id, function(res){ ... })
    instore.payments().fetch(params = {}, function(res){ ... })
    instore.payments().find(id, function(res){ ... })
    instore.payments().create(params, function(res){ ... })

## Documentation

You can view the full Instore api documentation at <https://instoredoes.com/developer/documentation/api>
