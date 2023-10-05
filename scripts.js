var regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
var regex_phone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

function validateForm() {
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
    if (phone == null || phone == "") {
        alert("Phone number can't be left blank");
        return false;
    } else if (regex_phone.test(phone)) {
        return true;
    } else {
        alert("Phone is not invalid");
        return false;
    }
    
    if (email == null || email == "") {
        alert("Email can't be left blank");
        return false;
    } else if (regex_email.test(email)) {
        return true;
    } else {
        alert("Email is not invalid");
        return false;
    }

    return true;
}