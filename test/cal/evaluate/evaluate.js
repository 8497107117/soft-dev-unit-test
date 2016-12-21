function evaluate(arr) {
  let str = '';
  for(let i=0; i<arr.length; i++) {
    switch(arr[i][1]) {
      case 'add':
        str += '+';
        break;
      case 'sub':
        str += '-';
        break;
      case 'mul':
        str += '*';
        break;
      case 'div':
        str += '/'
        break;
      case 'mod':
        str += '%';
        break;
      default:
        str += arr[i][1];
        break;
    }
  }
  str = str.replace('--', '+');
  console.log(str);
  console.log(JSON.stringify(arr));
  return eval(str);
}
