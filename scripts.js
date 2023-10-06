var regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
var regex_phone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("inputForm").addEventListener("submit", 
    function(event){
        event.preventDefault();
        console.log("Form submitted");
        var isValid = validateForm(event); // Call validateForm function here
        if(isValid) {
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
            var city = document.getElementById("cities").value;
            var district = document.getElementById("districts").value;
            if (document.getElementById("result").style.display == "none") {
                document.getElementById("result").style.display = "";
            }
            document.getElementById("result").innerHTML = email + " " + city;
        }
    });
});



function validateForm(event) {
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
    if (phone == null || phone == "") {
        event.preventDefault();
        alert("Phone number can't be left blank");
        return false;
    } else if (email == null || email == "") {
        event.preventDefault();
        alert("Email can't be left blank");
        return false;
    } else if (regex_phone.test(phone) && regex_email.test(email)) {
        return true;
    } else if (!regex_phone.test(phone)){
        event.preventDefault();
        alert("Phone is not invalid");
        return false;
    } else if ((!regex_email.test(email))){
        event.preventDefault();
        alert("Email is not invalid");
        return false;
    }
    //return true;
}



