function connect() {
  store = Alloy.Globals.store.getState();
  $.label.text = store.counter;
}
Alloy.Globals.store.subscribe(connect);
