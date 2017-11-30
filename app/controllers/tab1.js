function increment(e) {
  Alloy.Globals.store.dispatch({ type: "INCREMENT" });
}
function decrement(e) {
  Alloy.Globals.store.dispatch({ type: "DECREMENT" });
  Alloy.Globals.store.dispatch({ type: "GET_MORE_DATA" });
}

function connect() {
  var store = Alloy.Globals.store.getState();
  Ti.API.info(store);

  createRow(store.list.fighters);
}

// generate random number, used to make each row appear distinct for this example

var defaultFontSize = Ti.Platform.name === "android" ? 16 : 14;

function createRow(list) {
  var tableData = [];
  for (var i = 0; i < list.length; i++) {
    var row = Ti.UI.createTableViewRow({
      selectedBackgroundColor: "white",
      rowIndex: i,
      height: 110
    });
    var labelDetails = Ti.UI.createLabel({
      color: "#222",
      font: { fontFamily: "Arial", fontSize: 22, fontWeight: "normal" },
      text: list[i].nickname,
      left: 70,
      top: 44,
      width: 360
    });
    row.add(labelDetails);
    tableData.push(row);
  }
  $.table.setData(tableData);
}
Alloy.Globals.store.subscribe(connect);
connect();
