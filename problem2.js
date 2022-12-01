// check if the string is palindrome or not

let str="aaabbbaaa";
 let reverse_str="";
    for(i=str.length-1;i>=0;i--){
      reverse_str +=str[i];
    }
  if(reverse_str==str){
    console.log("Yes the string is palindrome")
  }else{
    console.log("No the string is not palindrome")
  }