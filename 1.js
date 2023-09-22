let input="pw skills";
console.log(input);
function reversestr(string)
{
    return string.split("").reverse().join("");
}
function delay(string)
{
    setTimeout(function()
    {
    let reversed=reversestr(string);
    console.log("reverse"+reversed);
    }
   ,3000);
}

delay(input);