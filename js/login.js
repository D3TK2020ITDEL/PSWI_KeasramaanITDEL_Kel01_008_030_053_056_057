function validate(form) {
	var returnValue = true;
	var username = document.getElementById ("username");
	var password = document.getElementById ("password");
			
	if(username.value != "Mahasiswa"){
		returnValue = false;
		alert("Masukkan Username dengan benar");
		document.getElementById("username").focus();
	}
	else if(password.value != "Mahasiswa") {
		returnValue = false;
		alert("Password anda salah! \n Coba lagi.");
		document.getElementById("password").focus();
	}
	else{
		alert("Selamat anda telah berhasil Login.");
	}
	return returnValue;
}
	