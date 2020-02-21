
function randomSSN(length) {
  Array.from({length: 9}, () => { return Math.floor(Math.random() * (max - min + 1)) + min; }).join('');
}

$(function() {
  console.log('hello world :o');
  $('form').submit(function(event) {
    event.preventDefault();
  });
});
