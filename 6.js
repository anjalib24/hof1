const linkedin=/^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/;
function isvalid(url)
{
    return linkedin.test(url);
}
let url='https://www.linkedin.com/in/mithun-s-83a8a3186/'
if(isvalid(url))
{
    console.log(`"${url}" is a valid linkedin profile URL.`);
}
else
{
    console.log(`"${url}"is not a valid linedin profile`);
}