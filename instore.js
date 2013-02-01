// Generated by CoffeeScript 1.3.3
var Instore, exports,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Instore = {};

Instore.Endpoint = (function() {

  Endpoint.prototype.baseUrl = 'https://api.instoredoes.com';

  function Endpoint(accessToken, options) {
    this.accessToken = accessToken;
    if (options == null) {
      options = {};
    }
    this.host = options.host || this.baseUrl;
    this;

  }

  Endpoint.prototype.path = function() {
    return "" + this.host + "/v1/api/" + this.resource;
  };

  Endpoint.prototype.fetch = function(params, callback) {
    if (params == null) {
      params = {};
    }
    if (typeof params === 'function' && !callback) {
      callback = params;
      params = {};
    }
    params.access_token = this.accessToken;
    return $.getJSON(this.path(), params, callback);
  };

  Endpoint.prototype.find = function(id, callback) {
    var params;
    if (typeof id !== 'string') {
      throw 'UUID id parameter required';
    }
    params = {
      access_token: this.accessToken
    };
    return $.getJSON("" + (this.path()) + "/" + id, params, callback);
  };

  Endpoint.prototype.createResource = function(params, callback) {
    if (params == null) {
      params = {};
    }
    if (typeof params === 'function' && !callback) {
      callback = params;
      params = {};
    }
    params.access_token = this.accessToken;
    return $.post(this.path(), params, callback);
  };

  Endpoint.prototype.updateResource = function(id, params, callback) {
    if (params == null) {
      params = {};
    }
    if (typeof id !== 'string') {
      throw 'UUID id parameter required';
    }
    if (typeof params === 'function' && !callback) {
      callback = params;
      params = {};
    }
    params.access_token = this.accessToken;
    return $.ajax({
      url: "" + (this.path()) + "/" + id,
      type: 'PUT',
      data: params,
      success: callback
    });
  };

  Endpoint.prototype.destroyResource = function(id, callback) {
    var params;
    if (typeof id !== 'string') {
      throw 'UUID id parameter required';
    }
    params = {
      access_token: this.accessToken
    };
    return $.ajax({
      url: "" + (this.path()) + "/" + id,
      type: 'DELETE',
      data: params,
      success: callback
    });
  };

  return Endpoint;

})();

Instore.Me = (function(_super) {

  __extends(Me, _super);

  function Me() {
    return Me.__super__.constructor.apply(this, arguments);
  }

  Me.prototype.resource = 'me';

  Me.prototype.me = function(callback) {
    var params;
    params = {
      access_token: this.accessToken
    };
    return $.getJSON("" + (this.path()) + "/" + id, params, callback);
  };

  return Me;

})(Instore.Endpoint);

Instore.Categories = (function(_super) {

  __extends(Categories, _super);

  function Categories() {
    return Categories.__super__.constructor.apply(this, arguments);
  }

  Categories.prototype.resource = 'categories';

  Categories.prototype.create = function(params, callback) {
    if (params == null) {
      params = {};
    }
    return this.createResource(params, callback);
  };

  Categories.prototype.update = function(id, params, callback) {
    if (params == null) {
      params = {};
    }
    return this.updateResource(id, params, callback);
  };

  Categories.prototype.destroy = function(id, callback) {
    return this.destroyResource(id, callback);
  };

  return Categories;

})(Instore.Endpoint);

Instore.AppliedDiscounts = (function(_super) {

  __extends(AppliedDiscounts, _super);

  function AppliedDiscounts() {
    return AppliedDiscounts.__super__.constructor.apply(this, arguments);
  }

  AppliedDiscounts.prototype.resource = 'applied_discounts';

  AppliedDiscounts.prototype.create = function(params, callback) {
    if (params == null) {
      params = {};
    }
    return this.createResource(params, callback);
  };

  AppliedDiscounts.prototype.destroy = function(id, callback) {
    return this.destroyResource(id, callback);
  };

  return AppliedDiscounts;

})(Instore.Endpoint);

Instore.Discounts = (function(_super) {

  __extends(Discounts, _super);

  function Discounts() {
    return Discounts.__super__.constructor.apply(this, arguments);
  }

  Discounts.prototype.resource = 'discounts';

  Discounts.prototype.create = function(params, callback) {
    if (params == null) {
      params = {};
    }
    return this.createResource(params, callback);
  };

  Discounts.prototype.update = function(id, params, callback) {
    if (params == null) {
      params = {};
    }
    return this.updateResource(id, params, callback);
  };

  Discounts.prototype.destroy = function(id, callback) {
    return this.destroyResource(id, callback);
  };

  return Discounts;

})(Instore.Endpoint);

Instore.Ingredients = (function(_super) {

  __extends(Ingredients, _super);

  function Ingredients() {
    return Ingredients.__super__.constructor.apply(this, arguments);
  }

  Ingredients.prototype.resource = 'ingredients';

  Ingredients.prototype.create = function(params, callback) {
    if (params == null) {
      params = {};
    }
    return this.createResource(params, callback);
  };

  Ingredients.prototype.update = function(id, params, callback) {
    if (params == null) {
      params = {};
    }
    return this.updateResource(id, params, callback);
  };

  Ingredients.prototype.destroy = function(id, callback) {
    return this.destroyResource(id, callback);
  };

  return Ingredients;

})(Instore.Endpoint);

Instore.ItemIngredients = (function(_super) {

  __extends(ItemIngredients, _super);

  function ItemIngredients() {
    return ItemIngredients.__super__.constructor.apply(this, arguments);
  }

  ItemIngredients.prototype.resource = 'item_ingredients';

  ItemIngredients.prototype.create = function(params, callback) {
    if (params == null) {
      params = {};
    }
    return this.createResource(params, callback);
  };

  ItemIngredients.prototype.destroy = function(id, callback) {
    return this.destroyResource(id, callback);
  };

  return ItemIngredients;

})(Instore.Endpoint);

Instore.ItemSizes = (function(_super) {

  __extends(ItemSizes, _super);

  function ItemSizes() {
    return ItemSizes.__super__.constructor.apply(this, arguments);
  }

  ItemSizes.prototype.resource = 'item_sizes';

  ItemSizes.prototype.create = function(params, callback) {
    if (params == null) {
      params = {};
    }
    return this.createResource(params, callback);
  };

  ItemSizes.prototype.update = function(id, params, callback) {
    if (params == null) {
      params = {};
    }
    return this.updateResource(id, params, callback);
  };

  ItemSizes.prototype.destroy = function(id, callback) {
    return this.destroyResource(id, callback);
  };

  return ItemSizes;

})(Instore.Endpoint);

Instore.Items = (function(_super) {

  __extends(Items, _super);

  function Items() {
    return Items.__super__.constructor.apply(this, arguments);
  }

  Items.prototype.resource = 'items';

  Items.prototype.create = function(params, callback) {
    if (params == null) {
      params = {};
    }
    return this.createResource(params, callback);
  };

  Items.prototype.update = function(id, params, callback) {
    if (params == null) {
      params = {};
    }
    return this.updateResource(id, params, callback);
  };

  Items.prototype.destroy = function(id, callback) {
    return this.destroyResource(id, callback);
  };

  return Items;

})(Instore.Endpoint);

Instore.LocationGroups = (function(_super) {

  __extends(LocationGroups, _super);

  function LocationGroups() {
    return LocationGroups.__super__.constructor.apply(this, arguments);
  }

  LocationGroups.prototype.resource = 'location_groups';

  return LocationGroups;

})(Instore.Endpoint);

Instore.Locations = (function(_super) {

  __extends(Locations, _super);

  function Locations() {
    return Locations.__super__.constructor.apply(this, arguments);
  }

  Locations.prototype.resource = 'locations';

  return Locations;

})(Instore.Endpoint);

Instore.OrderLineIngredients = (function(_super) {

  __extends(OrderLineIngredients, _super);

  function OrderLineIngredients() {
    return OrderLineIngredients.__super__.constructor.apply(this, arguments);
  }

  OrderLineIngredients.prototype.resource = 'order_line_ingredients';

  OrderLineIngredients.prototype.create = function(params, callback) {
    if (params == null) {
      params = {};
    }
    return this.createResource(params, callback);
  };

  OrderLineIngredients.prototype.destroy = function(id, callback) {
    return this.destroyResource(id, callback);
  };

  return OrderLineIngredients;

})(Instore.Endpoint);

Instore.OrderLines = (function(_super) {

  __extends(OrderLines, _super);

  function OrderLines() {
    return OrderLines.__super__.constructor.apply(this, arguments);
  }

  OrderLines.prototype.resource = 'order_lines';

  OrderLines.prototype.create = function(params, callback) {
    if (params == null) {
      params = {};
    }
    return this.createResource(params, callback);
  };

  OrderLines.prototype.destroy = function(id, callback) {
    return this.destroyResource(id, callback);
  };

  return OrderLines;

})(Instore.Endpoint);

Instore.Orders = (function(_super) {

  __extends(Orders, _super);

  function Orders() {
    return Orders.__super__.constructor.apply(this, arguments);
  }

  Orders.prototype.resource = 'orders';

  Orders.prototype.create = function(params, callback) {
    if (params == null) {
      params = {};
    }
    return this.createResource(params, callback);
  };

  Orders.prototype.update = function(id, params, callback) {
    if (params == null) {
      params = {};
    }
    return this.updateResource(id, params, callback);
  };

  Orders.prototype["void"] = function(id, callback) {
    var params;
    if (typeof id !== 'string') {
      throw 'UUID id parameter required';
    }
    params = {
      access_token: this.accessToken
    };
    return $.post("" + (this.path()) + "/" + id + "/void", params, callback);
  };

  Orders.prototype.refund = function(id, callback) {
    var params;
    if (typeof id !== 'string') {
      throw 'UUID id parameter required';
    }
    params = {
      access_token: this.accessToken
    };
    return $.post("" + (this.path()) + "/" + id + "/refund", params, callback);
  };

  Orders.prototype.hold = function(id, params, callback) {
    if (typeof id !== 'string') {
      throw 'UUID id parameter required';
    }
    if (typeof params === 'function' && !callback) {
      callback = params;
      params = {};
    }
    params.access_token = this.accessToken;
    return $.post("" + (this.path()) + "/" + id + "/hold_order", params, callback);
  };

  Orders.prototype.unhold = function(id, callback) {
    var params;
    if (typeof id !== 'string') {
      throw 'UUID id parameter required';
    }
    params = {
      access_token: this.accessToken
    };
    return $.post("" + (this.path()) + "/" + id + "/unhold_order", params, callback);
  };

  return Orders;

})(Instore.Endpoint);

Instore.Payments = (function(_super) {

  __extends(Payments, _super);

  function Payments() {
    return Payments.__super__.constructor.apply(this, arguments);
  }

  Payments.prototype.resource = 'payments';

  Payments.prototype.create = function(params, callback) {
    if (params == null) {
      params = {};
    }
    return this.createResource(params, callback);
  };

  return Payments;

})(Instore.Endpoint);

Instore.SpecialQualities = (function(_super) {

  __extends(SpecialQualities, _super);

  function SpecialQualities() {
    return SpecialQualities.__super__.constructor.apply(this, arguments);
  }

  SpecialQualities.prototype.resource = 'special_qualities';

  SpecialQualities.prototype.create = function(params, callback) {
    if (params == null) {
      params = {};
    }
    return this.createResource(params, callback);
  };

  SpecialQualities.prototype.destroy = function(id, callback) {
    return this.destroyResource(id, callback);
  };

  return SpecialQualities;

})(Instore.Endpoint);

Instore.Taxes = (function(_super) {

  __extends(Taxes, _super);

  function Taxes() {
    return Taxes.__super__.constructor.apply(this, arguments);
  }

  Taxes.prototype.resource = 'taxes';

  Taxes.prototype.create = function(params, callback) {
    if (params == null) {
      params = {};
    }
    return this.createResource(params, callback);
  };

  Taxes.prototype.update = function(id, params, callback) {
    if (params == null) {
      params = {};
    }
    return this.updateResource(id, params, callback);
  };

  Taxes.prototype.destroy = function(id, callback) {
    return this.destroyResource(id, callback);
  };

  return Taxes;

})(Instore.Endpoint);

Instore.UniqueQualities = (function(_super) {

  __extends(UniqueQualities, _super);

  function UniqueQualities() {
    return UniqueQualities.__super__.constructor.apply(this, arguments);
  }

  UniqueQualities.prototype.resource = 'unique_qualities';

  return UniqueQualities;

})(Instore.Endpoint);

Instore.Api = (function() {

  Api.prototype.baseUrl = 'https://api.instoredoes.com';

  Api.prototype.cookieName = 'instore_access_token';

  function Api(clientId, options) {
    this.clientId = clientId;
    this.options = options != null ? options : {};
    this.accessToken = this.options.accessToken || this.readCookie(this.cookieName);
    this.host = this.options.host || this.baseUrl;
    this;

  }

  Api.prototype.login = function(callback) {
    var oauthInterval, options, popup,
      _this = this;
    options = {
      path: "" + this.host + "/oauth/authorize?client_id=" + this.clientId + "&redirect_uri=" + window.location.href + "&response_type=token",
      windowName: 'Login to Instore',
      windowOptions: 'width=880,height=380,modal=no,resizable=no,toolbar=no,menubar=no,scrollbars=no,alwaysRaise=yes'
    };
    popup = window.open(options.path, options.windowName, options.windowOptions);
    return oauthInterval = window.setInterval(function() {
      var hash, match;
      if (popup.closed) {
        window.clearInterval(oauthInterval);
        return;
      }
      hash = popup.location.hash || '';
      if (match = hash.match('access_token=([^&]*)')) {
        _this.accessToken = unescape(match[1]);
        _this.setCookie(_this.cookieName, _this.accessToken, 1);
        popup.close();
        window.clearInterval(oauthInterval);
        if (callback) {
          return callback();
        }
      }
    }, 1000);
  };

  Api.prototype.me = function(callback) {
    return new Instore.Me(this.accessToken, {
      host: this.host
    }).fetch(callback);
  };

  Api.prototype.appliedDiscounts = function() {
    return new Instore.AppliedDiscounts(this.accessToken, {
      host: this.host
    });
  };

  Api.prototype.discounts = function() {
    return new Instore.Discounts(this.accessToken, {
      host: this.host
    });
  };

  Api.prototype.categories = function() {
    return new Instore.Categories(this.accessToken, {
      host: this.host
    });
  };

  Api.prototype.ingredients = function() {
    return new Instore.Ingredients(this.accessToken, {
      host: this.host
    });
  };

  Api.prototype.itemIngredients = function() {
    return new Instore.ItemIngredients(this.accessToken, {
      host: this.host
    });
  };

  Api.prototype.itemSizes = function() {
    return new Instore.ItemSizes(this.accessToken, {
      host: this.host
    });
  };

  Api.prototype.items = function() {
    return new Instore.Items(this.accessToken, {
      host: this.host
    });
  };

  Api.prototype.locationGroups = function() {
    return new Instore.LocationGroups(this.accessToken, {
      host: this.host
    });
  };

  Api.prototype.locations = function() {
    return new Instore.Locations(this.accessToken, {
      host: this.host
    });
  };

  Api.prototype.orderLineIngredients = function() {
    return new Instore.OrderLineIngredients(this.accessToken, {
      host: this.host
    });
  };

  Api.prototype.orderLines = function() {
    return new Instore.OrderLines(this.accessToken, {
      host: this.host
    });
  };

  Api.prototype.orders = function() {
    return new Instore.Orders(this.accessToken, {
      host: this.host
    });
  };

  Api.prototype.payments = function() {
    return new Instore.Payments(this.accessToken, {
      host: this.host
    });
  };

  Api.prototype.specialQualities = function() {
    return new Instore.SpecialQualities(this.accessToken, {
      host: this.host
    });
  };

  Api.prototype.taxes = function() {
    return new Instore.Taxes(this.accessToken, {
      host: this.host
    });
  };

  Api.prototype.uniqueQualities = function() {
    return new Instore.UniqueQualities(this.accessToken, {
      host: this.host
    });
  };

  Api.prototype.logout = function() {
    return this.setCookie(this.cookieName, '', 0);
  };

  Api.prototype.setCookie = function(cookieName, cookieValue, nDays) {
    var expire, today;
    today = new Date();
    expire = new Date();
    if (nDays === null || nDays === 0) {
      nDays = 1;
    }
    expire.setTime(today.getTime() + 3600000 * 24 * nDays);
    return document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString();
  };

  Api.prototype.readCookie = function(cookieName) {
    var ind, ind1, theCookie;
    theCookie = " " + document.cookie;
    ind = theCookie.indexOf(" " + cookieName + "=");
    if (ind === -1) {
      ind = theCookie.indexOf(";" + cookieName + "=");
    }
    if (ind === -1 || cookieName === "") {
      return "";
    }
    ind1 = theCookie.indexOf(";", ind + 1);
    if (ind1 === -1) {
      ind1 = theCookie.length;
    }
    return unescape(theCookie.substring(ind + cookieName.length + 2, ind1));
  };

  return Api;

})();

if (typeof exports === "undefined") {
  exports = window;
}

exports.Instore = Instore;
