;(function(global) {
  function parsedCookies() {
    return document.cookie.split('; ').reduce((acc, cur) => {
      var key = cur.split('=')[0];
      var value = cur.split('=')[1];
      acc[key] = value;
      return acc;
    }, {});
  }
  global.cookies = {
    getAll: function(key) {
      return parsedCookies();
    },
    get: function(key) {
      return parsedCookies()[key];
    },
    set: function(key, value) {
      return document.cookie = key + '=' + value; 
    },
    remove: function(key) {
      return document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    },
  }
})(window);