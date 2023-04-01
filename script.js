function login() {
    if(uname.value.length==0&&psw.value.length==0){
		document.getElementById("alert").innerHTML = "Please enter your username and password.";
        document.getElementById("userError").innerHTML = "*";
        document.getElementById("passError").innerHTML = "*";
		uname.focus();
		console.log("Log in error.");
	}
	else if(uname.value.length==0&&psw.value.length!=0){
		document.getElementById("alert").innerHTML = "Please enter your username.";
        document.getElementById("userError").innerHTML = "*";
        document.getElementById("passError").innerHTML = "";
		uname.focus();
		console.log("Log in error.");
	}
	else if(uname.value.length!=0&&psw.value.length==0){
		document.getElementById("alert").innerHTML = "Please enter your password.";
        document.getElementById("userError").innerHTML = "";
        document.getElementById("passError").innerHTML = "*";
		psw.focus();
		console.log("Log in error.");
	}
	else{
		console.log("Log in successful.");
		alert("You have successfully logged in.");
        location.replace("files/homepage.html")
	}
}