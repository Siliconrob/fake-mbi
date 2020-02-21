function randomSSN () {
  const digits = 9;
  const max = 9;
  const min = 0;
  const ssn = Array.from({ length: digits }, () => { return Math.floor(Math.random() * (max - min + 1)) + min; });    
  return ssn.join('');
}

function randomDOB () {
  
  return randomDate;
}

$(document).ready(() => {
  console.log("hello world :o");
  
  const dob = randomDOB();
  const formattedDate = dob.toISOString().split('T')[0]
  $("#dateOfBirth").val(formattedDate);
  
  const ssn = randomSSN();
  $("#ssn").val(ssn);
});
