function randomSSN() {
  const digits = 9;
  const max = 9;
  const min = 0;
  const ssn = Array.from({ length: digits }, () => { return Math.floor(Math.random() * (max - min + 1)) + min; }).join("");  
  return ssn.replace(/(\d+)\/(\d+)\/(\d+)/, '$3$1$2');
}

$(document).ready(() => {
  console.log("hello world :o");
  const ssn = randomSSN();
  $("#ssn").val(ssn);
});
