var initialState = {
  fighters: [
    {
      name: "Muhammad Ali",
      nickname: "The Greatest"
    },
    {
      name: "Chuck Liddell",
      nickname: "The Iceman"
    }
  ]
};
function randomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}
function list(state, action) {
  state = state || initialState;
  switch (action.type) {
    case "GET_DATA":
      return state;
    case "GET_MORE_DATA":
      var copy = Object.assign({}, state);
      for (var i = 1; i <= 100; i++) {
        copy.fighters.push({
          name: "Muhammad Ali",
          nickname: "The Greatest" + randomInt(1000)
        });
      }
      return copy;
    default:
      return state;
  }
}

module.exports = list;
