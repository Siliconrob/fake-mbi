function randomSSN () {
  const digits = 9;
  const max = 9;
  const min = 0;
  const ssn = Array.from({ length: digits }, () => { return Math.floor(Math.random() * (max - min + 1)) + min; });    
  return ssn.join('');
}

function randomInitial() {
  const alpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; 
  return alpha[Math.random() * alpha.length|0];  
}

function randomName(baseText) {
  const random6digits = Math.floor(100000 + Math.random() * 900000);
  return `${baseText}${random6digits}`;  
}

function randomDateOfBirth() {
  const randomNumber = Math.floor(1 + Math.random() * 40);
  const newDate = new Date(+(new Date()) - Math.floor(Math.random()*10000000000));  
  newDate.setFullYear(newDate.getFullYear() - (65 + randomNumber));
  return newDate;  
}

function mbi() {
  const alpha = [..."ACDEFGHJKMNPQRTUVWXY"]; 
  const alphaNumeric = [..."ACDEFGHJKMNPQRTUVWXY0123456789"]; 
  const numeric19 = [..."123456789"];
  const numeric = [..."0123456789"];

  /*
  Position 1 – numeric values 1 thru 9
  Position 2 – alphabetic values A thru Z (minus S, L, O, I, B, Z)
  Position 3 – alpha-numeric values 0 thru 9 and A thru Z (minus S, L, O, I, B, Z) Position 4 – numeric values 0 thru 9
  Position 5 – alphabetic values A thru Z (minus S, L, O, I, B, Z)
  Position 6 – alpha-numeric values 0 thru 9 and A thru Z (minus S, L, O, I, B, Z) Position 7 – numeric values 0 thru 9
  Position 8 – alphabetic values A thru Z (minus S, L, O, I, B, Z)
  Position 9 – alphabetic values A thru Z (minus S, L, O, I, B, Z)
  Position 10 – numeric values 0 thru 9
  Position 11 – numeric values 0 thru 9
  */

  const mbi = [
    numeric19[Math.random() * numeric19.length|0],
    alpha[Math.random() * alpha.length|0],
    alphaNumeric[Math.random() * alphaNumeric.length|0],
    numeric[Math.random() * numeric.length|0],
    alpha[Math.random() * alpha.length|0],
    alphaNumeric[Math.random() * alphaNumeric.length|0],
    numeric[Math.random() * numeric.length|0],
    alpha[Math.random() * alpha.length|0],
    alpha[Math.random() * alpha.length|0],
    numeric[Math.random() * numeric.length|0],
    numeric[Math.random() * numeric.length|0]
  ];
  
  return mbi.join('');
}

function btnClick() {
  $('#mbiLabel').text(mbi());
  $("#firstName").val(randomInitial());
  $("#lastName").val(randomName('LastName'));
  $("#dateOfBirth").val(randomDateOfBirth());
  $("#ssn").val(randomSSN());
  return false;
}

$(document).ready(() => {
  console.log("hello world :o");
  $("#dateOfBirth").val(randomDateOfBirth());
  $("#firstName").val(randomInitial());
  $("#lastName").val(randomName('LastName'));
  $("#ssn").val(randomSSN());
  
});
