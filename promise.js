const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let x = await promiseTheaterIXX();
  let y = await promiseTheaterVGC();
  let xY = x.concat(y);
  let totalEmosi = 0;
  xY.map(x => x.hasil === emosi && (totalEmosi += 1) )
  return totalEmosi
};
// console.log()
// promiseOutput("marah")
module.exports = {
  promiseOutput,
};
