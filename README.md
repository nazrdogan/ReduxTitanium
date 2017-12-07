ReduxTitanium

![ss](https://github.com/nazrdogan/ReduxTitanium/blob/master/video.gif)

Redux for Titanium apps.

https://redux.js.org/docs/introduction/

```
// Counter Reducer 
function counter(state, action) {
  state = state || 0;
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
module.exports = counter;
```


```
 // Creating store and combine reducers
 // you need to put redux.js inside lib folder.

var createStore = require("redux").createStore;
var combineReducers = require("redux").combineReducers;
var counter = require("counterReducer");
var list = require("listReducer");


var reducers = combineReducers({ counter,list });

// Creating global store
Alloy.Globals.store = createStore(reducers);

```

```

// Dispacthing action.
function increment(e) {
  Alloy.Globals.store.dispatch({ type: "INCREMENT" });
}
function decrement(e) {
  Alloy.Globals.store.dispatch({ type: "DECREMENT" });
}
function getMoreData() {
  Alloy.Globals.store.dispatch({ type: "GET_MORE_DATA" });
}

// Connecting store.
function connect() {
  var store = Alloy.Globals.store.getState();
  Ti.API.info(store);

  createRow(store.list.fighters);
}
// subscribing
Alloy.Globals.store.subscribe(connect);

```


