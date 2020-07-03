# Cookies

Some methods that make it easy to work with **cookies**

## Usage

You can access the methods via a global variable named `cookies` from everywhere.

```javascript
// Returns an object of all the cookies
cookies.getAll();

// Set a new cookie i.e. key=value
cookies.set('key', 'value');

// Returns the value of the cookie with that key name
cookies.get('key');

// Removes the value of the cookie with that key name
cookies.remove('key');
```
