function myfunc(event)
{
    event.preventDefult();
    var first_name = document.getElementById("validationCustom01").value;
    var last_name = document.getElementById("validationCustom02").value;
    var username = document.getElementById("validationCustomUsername").value;
    var email = document.getElementById("inputEmail4").value;
    var password = document.getElementById("inputPassword4").value;
    var address = document.getElementById("inputAddress").value;
    var address_two = document.getElementById("inputAddress2").value;
    var city = document.getElementById("inputCity").value;
    var zip= document.getElementById("inputZip").value;

    localStorage.setItem('is_first_name', first_name);
    localStorage.setItem('is_last_name', last_name);
    localStorage.setItem('is_username', username);
    localStorage.setItem('is_email', email);
    localStorage.setItem('is_password', password);
    localStorage.setItem('is_address', address);
    localStorage.setItem('is_address_two', address_two);
    localStorage.setItem('is_city', city);
    localStorage.setItem('is_zip', zip);

}