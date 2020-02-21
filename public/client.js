function randomSSN () {
  const digits = 9;
  const max = 9;
  const min = 0;
  const ssn = Array.from({ length: digits }, () => { return Math.floor(Math.random() * (max - min + 1)) + min; });    
  return ssn.join('');
}

function randomDOB () {
  
  const max = 120;
  const min = 60;
  const years = Math.floor(Math.random() * (max - min + 1)) + min;
  
  let randomDate = new Date(+(new Date()) - Math.floor(Math.random()*10000000000));
  randomDate.setYear(randomDate.getYear() - years);  
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
