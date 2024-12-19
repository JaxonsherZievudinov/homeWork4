// task1
// function mul(a) {
//     let c = 1;
//     let b = a.split(",");
//     for (let i = 0; i <= b.length - 1; i++) {
//         c *= Number(b[i]);
//     }
//     return c;
// }
// console.log(mul("1,2,3,4"));


// task2
// function sum(a) {
//     let cnt=0
//     let b =a.split("-")
//    return b.length
// }
// console.log(sum("on-o-mat-o-poe-ai"));

// task3
// function sum(a,b) {
//     return a.includes(b)
// }
// console.log(sum("abs","v"));

// task4
// function sum(a){
//    let b=a.trim()
//    return b
// }
// console.log("hello, hello");


// task5
// let sum =(a)=> {
//     return "Hello "+a
// }
// console.log(sum("ghjkl"));

//6 
// function sting(a){
//     return a.length % 2 == 0 ? a[Math.floor(a.length/2)-1]+a[Math.floor(a.length/2)] :a[Math.floor(a.length/2)] 
// }
// console.log(sting("test"));

//7 
// function doubleLetter(a){
//     let splitted = a.split("")
//     let n = ''
//     for (let i = 0 ; i < splitted.length ; i ++ )
//     {
//         if (splitted[i] == splitted[i+1]){
//             n=  'true' 
//             break
//         }   
//         else {n = 'false'}
//     }
//     return n
// }
// console.log(doubleLetter("ssalom"));

//8
// function Nemo(a){
//     let spl = a.split(" ")    
//     for (let i = 1 ; i < spl.length ; i ++){
//         if (spl[i]=="Nemo") {
//             return 'I found Nemo at '+i+'!'

//         }
//     }
//     return 'I don`t found Nemo'
     
// }
// console.log(Nemo("I am finding Nemo !"));

//9
// function  reverse(a){
//     let splitted = a.split(" ")
//     for (let i = 0 ; i < splitted.length ; i ++){
//         let spl = splitted[i].split("")
//         if (spl.length >= 5)[
//             spl.reverse()
//         ]
//         splitted[i] = spl.join("")
//     }
//     let text = splitted.join(" ")
//   return text
    
// }
// console.log(reverse("Salom se aleykum du"));

//10
// function dashed(a){
//     let spl = a.split("")
//     for (let i = 0 ; i < spl.length ; i ++){
//         if (spl[i]=="e"  spl[i]=="a" spl[i]=="i"  spl[i]=="o"  spl[i]=="u"  spl[i]=="E"  spl[i]=="A"  spl[i]=="I"  spl[i]=="O" || spl[i]=="U" ){
//             spl[i]="-"+spl[i]+"-"
//         }
//     }
//     let text = spl.join("")
//     return text
// }
// console.log(dashed("Carpe Diem"));

//11
// function  joinDigit(a){
//      let num = Number(a)
//      let res = ""
//      for (let i = 1 ; i <= num-1 ; i ++){
//         res += i + "-"
//      }
//      return res + a
// }
// console.log(joinDigit(10));

// 12
// function isPalindrome(a) {
//     let b = a.toLowerCase();
//     let v = b.split('').reverse().join("");
//     return b==v ;
    
// }
// console.log(isPalindrome("level")); 

// 13
// function sum(a, str) {
//     if (a.length != 1) {
//         return "Первый аргумент должен быть одним символом!";
//     }
//     let cnt = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == a) {
//             cnt++;
//         }
//     }
//     return cnt;
// }
// console.log(sum("a", "banana")); 

// 14
// function sum(a) {
//     let min=""
//     let max=""
//     for(let i=0;i<a.length;i++) {
//         if(a[i]==a[i].toUpperCase()){
//             max+=a[i]
//         } 
//         else {
//             min+=a[i]
//         }
//     }
//     return max.concat(min)
// }
// console.log(sum("saLOm"));

// 15
// function sum(a) {
//     let b=""
//     for (let i=a;i>0;i=Math.floor(i/10)){
//         b+=i%10
//     }
//     return b+a
// }
// console.log(sum(152));

