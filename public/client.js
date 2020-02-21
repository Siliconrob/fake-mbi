function randomSSN () {
  const digits = 9;
  const max = 9;
  const min = 0;
  const ssn = Array.from({ length: digits }, () => { return Math.floor(Math.random() * (max - min + 1)) + min; });    
  return ssn.join('');
}

function randomDOB () {
  new Date(+(new Date()) - Math.floor(Math.random()*10000000000))
}

$(document).ready(() => {
  console.log("hello world :o");
  const ssn = randomSSN();
  $("#ssn").val(ssn);
});
