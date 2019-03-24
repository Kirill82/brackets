module.exports = function check(str, bracketsConfig) {
  let mas = [];
  mas[0] = str.charAt(0);
  for (let i = 1, len = str.length; i < len; i++) {
    for (let j = 0, lent = bracketsConfig.length; j < lent; j++) {
      if (str.charAt(i) === bracketsConfig[j][1] && mas[mas.length - 1] === bracketsConfig[j][0]) {
        mas.pop();
        break;
      }
      if (str.charAt(i) === bracketsConfig[j][0] || str.charAt(i) === bracketsConfig[j][1]) {
        mas.push(str.charAt(i));
        break;
      } 
    }
  }
  return (mas.length === 0);
}
