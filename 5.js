const urlpattern=/^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[.][a-zA-Z]+$/;
const url="https://pwskills.com"

if(isValidURL(url))
{
    console.log(`"${url}" is a valid URL`);
}
else
{
    console.log(`"${url}"is not a valid URL`);
}
function isValidURL(input)
{
    return urlpattern.test(input);
}
