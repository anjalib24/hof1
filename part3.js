let pattern="pw";
let regone=new RegExp(pattern)
const strtocheck="pw is growing at a rapid speed and recently thry are";
const result=regone.test(strtocheck);
console.log(result);


let flag='gi'
let regtwo=new RegExp(pattern,flag);
let resul=regtwo.test(strtocheck);
console.log(resul);
 

let regthree= /pw/gi
const resu=regthree.test(strtocheck)
console.log(resu)

const web="https://pwskills.com/hitesh%20choudhary"
const use=web.replace(/%\d0/,'-')
console.log(use);
