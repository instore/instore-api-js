Instore = {}

class Instore.Endpoint
  baseUrl: 'https://api.instoredoes.com'

  constructor: (@accessToken, options = {}) ->
    @host = options.host || @baseUrl
    @

  path: ->
    "#{@host}/v1/api/#{@resource}"

  fetch: (params = {}, callback) ->
    if typeof params == 'function' && !callback
      callback = params
      params = {}

    params.access_token = @accessToken

    $.getJSON @path(), params, callback

  find: (id, callback) ->
    throw 'UUID id parameter required' if typeof id != 'string'    
    params = {access_token: @accessToken}

    $.getJSON "#{@path()}/#{id}", params, callback

  createResource: (params = {}, callback) ->
    if typeof params == 'function' && !callback
      callback = params
      params = {}

    params.access_token = @accessToken
    $.post @path(), params, callback

  updateResource: (id, params = {}, callback) ->
    throw 'UUID id parameter required' if typeof id != 'string' 
    if typeof params == 'function' && !callback
      callback = params
      params = {}

    params.access_token = @accessToken

    $.ajax 
      url: "#{@path()}/#{id}"
      type: 'PUT'
      data: params
      success: callback

  destroyResource: (id, callback) ->
    throw 'UUID id parameter required' if typeof id != 'string'
    params = {access_token: @accessToken}

    $.ajax 
      url: "#{@path()}/#{id}"
      type: 'DELETE'
      data: params
      success: callback


class Instore.Categories extends Instore.Endpoint
  resource: 'categories'

  create: (params = {}, callback) ->
    @createResource(params, callback)

  update: (id, params = {}, callback) ->
    @updateResource(id, params, callback)

  destroy: (id, callback) ->
    @destroyResource(id, callback)

class Instore.AppliedDiscounts extends Instore.Endpoint
  resource: 'applied_discounts'

  create: (params = {}, callback) ->
    @createResource(params, callback)

  destroy: (id, callback) ->
    @destroyResource(id, callback)

class Instore.Discounts extends Instore.Endpoint
  resource: 'discounts'

  create: (params = {}, callback) ->
    @createResource(params, callback)

  update: (id, params = {}, callback) ->
    @updateResource(id, params, callback)

  destroy: (id, callback) ->
    @destroyResource(id, callback)

class Instore.Ingredients extends Instore.Endpoint
  resource: 'ingredients'

  create: (params = {}, callback) ->
    @createResource(params, callback)

  update: (id, params = {}, callback) ->
    @updateResource(id, params, callback)

  destroy: (id, callback) ->
    @destroyResource(id, callback)


class Instore.ItemIngredients extends Instore.Endpoint
  resource: 'item_ingredients'

  create: (params = {}, callback) ->
    @createResource(params, callback)

  destroy: (id, callback) ->
    @destroyResource(id, callback)

class Instore.ItemSizes extends Instore.Endpoint
  resource: 'item_sizes'

  create: (params = {}, callback) ->
    @createResource(params, callback)

  update: (id, params = {}, callback) ->
    @updateResource(id, params, callback)

  destroy: (id, callback) ->
    @destroyResource(id, callback)

class Instore.Items extends Instore.Endpoint
  resource: 'items'

  create: (params = {}, callback) ->
    @createResource(params, callback)

  update: (id, params = {}, callback) ->
    @updateResource(id, params, callback)

  destroy: (id, callback) ->
    @destroyResource(id, callback)

class Instore.LocationGroups extends Instore.Endpoint
  resource: 'location_groups'

class Instore.Locations extends Instore.Endpoint
  resource: 'locations'

class Instore.OrderLineIngredients extends Instore.Endpoint
  resource: 'order_line_ingredients'

  create: (params = {}, callback) ->
    @createResource(params, callback)

  destroy: (id, callback) ->
    @destroyResource(id, callback)

class Instore.OrderLines extends Instore.Endpoint
  resource: 'order_lines'

  create: (params = {}, callback) ->
    @createResource(params, callback)

  destroy: (id, callback) ->
    @destroyResource(id, callback)

class Instore.Orders extends Instore.Endpoint
  resource: 'orders'

  create: (params = {}, callback) ->
    @createResource(params, callback)

  update: (id, params = {}, callback) ->
    @updateResource(id, params, callback)

  void: (id, callback) ->
    throw 'UUID id parameter required' if typeof id != 'string'

    params = {access_token: @accessToken}
    $.post "#{@path()}/#{id}/void", params, callback

  refund: (id, callback) ->
    throw 'UUID id parameter required' if typeof id != 'string'

    params = {access_token: @accessToken}
    $.post "#{@path()}/#{id}/refund", params, callback

  hold: (id, params, callback) ->
    throw 'UUID id parameter required' if typeof id != 'string'
    if typeof params == 'function' && !callback
      callback = params
      params = {}

    params.access_token = @accessToken
    $.post "#{@path()}/#{id}/hold_order", params, callback

  unhold: (id, callback) ->
    throw 'UUID id parameter required' if typeof id != 'string'

    params = {access_token: @accessToken}
    $.post "#{@path()}/#{id}/unhold_order", params, callback

class Instore.Payments extends Instore.Endpoint
  resource: 'payments'

  create: (params = {}, callback) ->
    @createResource(params, callback)

class Instore.SpecialQualities extends Instore.Endpoint
  resource: 'special_qualities'

  create: (params = {}, callback) ->
    @createResource(params, callback)

  destroy: (id, callback) ->
    @destroyResource(id, callback)

class Instore.Taxes extends Instore.Endpoint
  resource: 'taxes'

  create: (params = {}, callback) ->
    @createResource(params, callback)

  update: (id, params = {}, callback) ->
    @updateResource(id, params, callback)

  destroy: (id, callback) ->
    @destroyResource(id, callback)

class Instore.UniqueQualities extends Instore.Endpoint
  resource: 'unique_qualities'


class Instore.Api
  baseUrl: 'https://api.instoredoes.com'
  cookieName: 'instore_access_token'

  constructor: (@clientId, @options = {}) ->
    @accessToken = @options.accessToken || @readCookie(@cookieName)
    @host = @options.host || @baseUrl
    @

  login: ->
    options =
      path: "#{@baseUrl}/oauth/authorize?client_id=#{@clientId}&redirect_uri=#{window.location.href}&response_type=token"
      windowName: 'Login to Instore'
      windowOptions: 'width=880,height=380,modal=no,resizable=no,toolbar=no,menubar=no,scrollbars=no,alwaysRaise=yes'
      
    popup = window.open(options.path, options.windowName, options.windowOptions)
    
    oauthInterval = window.setInterval( =>
      hash = popup.location.hash || ''
      if match = hash.match('access_token=([^&]*)')
        @accessToken = unescape(match[1])
        @setCookie(@cookieName, @accessToken, 1)
        popup.close()
        window.clearInterval(oauthInterval)
    , 1000)

  appliedDiscounts: ->
    new Instore.AppliedDiscounts(@accessToken, host: @host)

  discounts: ->
    new Instore.Discounts(@accessToken, host: @host)

  categories: ->
    new Instore.Categories(@accessToken, host: @host)

  ingredients: ->
    new Instore.Ingredients(@accessToken, host: @host)

  itemIngredients: ->
    new Instore.ItemIngredients(@accessToken, host: @host)

  itemSizes: ->
    new Instore.ItemSizes(@accessToken, host: @host)

  items: ->
    new Instore.Items(@accessToken, host: @host)

  locationGroups: ->
    new Instore.LocationGroups(@accessToken, host: @host)

  locations: ->
    new Instore.Locations(@accessToken, host: @host)

  orderLineIngredients: ->
    new Instore.OrderLineIngredients(@accessToken, host: @host)

  orderLines: ->
    new Instore.OrderLines(@accessToken, host: @host)

  orders: ->
    new Instore.Orders(@accessToken, host: @host)

  payments: ->
    new Instore.Payments(@accessToken, host: @host)

  specialQualities: ->
    new Instore.SpecialQualities(@accessToken, host: @host)

  taxes: ->
    new Instore.Taxes(@accessToken, host: @host)

  uniqueQualities: ->
    new Instore.UniqueQualities(@accessToken, host: @host)

  setCookie: (cookieName, cookieValue, nDays) ->
    today = new Date()
    expire = new Date()
    nDays = 1 if nDays == null || nDays == 0
    expire.setTime(today.getTime() + 3600000 * 24 * nDays)
    document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString()

  readCookie: (cookieName) ->
    theCookie = " " + document.cookie
    ind = theCookie.indexOf(" " + cookieName+ "=")
    ind = theCookie.indexOf(";"+cookieName+"=") if ind == -1 
    return "" if ind == -1 || cookieName == ""
    ind1 = theCookie.indexOf(";", ind + 1)
    ind1 = theCookie.length if (ind1 == -1) 
    unescape(theCookie.substring(ind + cookieName.length + 2, ind1))

if typeof exports is "undefined" then exports = window
exports.Instore = Instore
