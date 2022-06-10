function reverseString(message){
  // wirte your code here
  var arr=message.split("");
  var temp;
  for(let i=0,j=message.length-1;i<j;i++,j--){
    temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
  }
  message=arr.join("");
  console.log(message);
}
reverseString('hello'); // should return 'olleh'
