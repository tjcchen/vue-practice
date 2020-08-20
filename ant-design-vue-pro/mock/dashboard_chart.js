function chart(method) {
  let res = null;
  switch(method) {
    case "GET":
      res = [80, 20, 36, 10, 10, 20]
      break;
    default:
      return null;
  }
  return res;
};

// CommonJS module export
module.exports = chart;