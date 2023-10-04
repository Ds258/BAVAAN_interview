var regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
var regex_phone = /^[7-9][0-9]{9}$/;

function validateForm() {
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    if (email == null || email == "") {
        alert("Email can't be left blank");
        return false;
    } else if (regex_email.test(email)) {
        
    }

    return true;
}