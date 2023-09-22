// let ages=[12,34,23,56,11];
// const result=ages.filter(check);
// function check(age)

// {
// return age>=18;
// }
// check(ages);
// console.log(result);
const books=[
{
    name:"hindi",
    author:"a",
    year:2004,
},
{
name:"english",
author:"b",
year:2005,
},
{
    name:"urdu",
    autjor:"c",
    year:2010,
},
];
const filterbooks=books.filter((book)=>
{
    return book.year>=2010;
})
const result=filterbooks.map((book)=>
{
    return
    {
        ...book,
        author: book.author.toUpperCase(),

    };
});
console.log(result);



