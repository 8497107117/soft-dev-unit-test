function isVal(cmd) {
  return cmd[0]==='val';
}

function isOper(cmd) {
  return cmd[0]==='oper';
}

if(module) {
    module.exports = {
        isVal: isVal,
        isOper: isOper
    };
}
