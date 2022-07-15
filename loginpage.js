function checkCredentials()
{
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if(username.value=="yashsain.2406@gmail.com" && password.value == "mywebsite"){
        alert("Login successful.");
        return false;
    }
    else{
        alert("Login failed.");
    }
    
}