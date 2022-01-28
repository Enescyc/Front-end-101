let str = "javascripttools";
let reverseStr=[];
for(i=0;i<str.length-1;i++){
    reverseStr[i]=str[str.length-2-i];
}
str = reverseStr.toString();
console.log(str[0])