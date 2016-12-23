const base2str = {
  2: 'bin',
  8: 'oct',
  10: 'dec',
  16: 'hex'
};

function render(props) {
  let { calc: { base }, calc } = props;
  $('.calc')
    .removeClass('bin oct dec hex')
    .addClass(base2str[base]);
  $('.button').removeClass('disabled');
  Object.keys(base2str)
    .filter(base_k => base_k>base)
    .forEach(base_k =>
      $(`.${base2str[base_k]}.button`).addClass('disabled')
    );

  $('.display .value').html(calc.toString(base));
  $('.base.hex').html(calc.toString(16));
  $('.base.dec').html(calc.toString(10));
  $('.base.oct').html(calc.toString(8));
  $('.base.bin').html(calc.toString(2));
}
