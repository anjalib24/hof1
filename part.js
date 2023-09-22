let  arr=[1,2,34,5];
arr.forEach(function(index,element,arr)
{
    console.log(index,element,arr);

})
arr.forEach((element,index,arr)=>
{
    console.log("arrow:",index,element,arr);
});
const heros=["naagraj","doga","dhurva","maniraj"];
heros.forEach((el)=>
{
    console.log(el.toUpperCase())
})


arr.map(function(element,index,arr)
{
console.log(element,index.arr);
})
 heros.map((h)=>console.log(h.toUpperCase()))

const herowithraj=heros.filter((h)=>
{
    return h.endsWith("raj");
})
console.log(herowithraj);

const cartBill=[20,30,50];
const sumofcartbill=cartBill.reduce((prev,curr)=>prev+curr,0)
console.log(sumofcartbill);


const gamescore=[200,100,310,300,250,150]
console.log(typeof gamescore[1]);
const gamescorecheck=gamescore.every((v)=>typeof v==='number')
console.log("check",gamescorecheck);

const above200=gamescore.find((score)=>score>200)
console.log(above200)
