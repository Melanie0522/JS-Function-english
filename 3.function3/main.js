function alphabetSort(message){
  // wirte your code here
  var arr=message.split("");
  arr=arr.sort();
  message=arr.join("");
  return message;
}
console.log(alphabetSort('hello')); // should return 'ehllo'
