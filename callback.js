function h(x,fn)//hof
{
    console.log(x*x)
     fn(x*x);
}
// h(10,function()
// {
//     console.log("done with callback");
// })
h(10,exec);
function exec(n)
{
    console.log("square value is",n);
}
