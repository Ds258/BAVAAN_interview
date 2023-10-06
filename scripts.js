var regex_email = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm; 
var regex_phone = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;

const cityByDistricts = {
    Hanoi: ["Cau Giay", "Ba Dinh", "Hoan Kiem", "Dong Da", "Long Bien", "Tay Ho", "Hai Ba Trung", "Hoang Mai", "Thanh Xuan", "Ha Dong", "Bac Tu Liem", "Nam Tu Liem"],
    HCM: ["District 1", "District 2", "District 3", "District 4", "District 5", "District 6", "District 7", "District 8", "District 9", "District 10", "District 11", "District 12", "Binh Thanh", "Thu Duc", "Go Vap", "Phu Nhuan", "Tan Binh", "Tan Phu", "Binh Tan"] 
}
//Only districts in the urban for testing

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("cities").addEventListener("change", function() { //select district based on the city
        var selectedCity = this.value;
        var districtsSelect = document.getElementById("districts");
        districtsSelect.innerHTML = "";
        if (selectedCity !== "") {
            const city_districts = cityByDistricts[selectedCity];
            for(var i = 0; i < city_districts.length; i++){
                var option = document.createElement("option");
                option.value = city_districts[i];
                option.text = city_districts[i];
                districtsSelect.appendChild(option);
            }
        }
    })

    document.getElementById("inputForm").addEventListener("submit", //Submit form
    function(event){
        event.preventDefault(); //Prevent the page reload
        console.log("Form submitted");
        var isValid = validateForm(event); // Check if validate true
        if(isValid) {
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
            var city = document.getElementById("cities").value;
            var district = document.getElementById("districts").value;
            document.getElementById("result-layout").style.display = "block";
            document.getElementById("form-out").style.marginBottom = "1rem";
            document.getElementById("result").innerHTML = "Email: " + email + "<br>"
                                                        + "Phone number: " + phone + "<br>"
                                                        + "City: " + city + "<br>"
                                                        + "District: " + district;
        }
    });
});

function validateForm(event) {
    var email = document.getElementById("email").value;
    //console.log(email);
    var phone = document.getElementById("phone").value;
    //console.log(phone);
    var city = document.getElementById("cities").value;
    var district = document.getElementById("districts").value;

    if (phone == null || phone == "") { //Check if phone number is null
        event.preventDefault();
        alert("Phone number can't be left blank");
        return false;
    } else if (email == null || email == "") { // Check if email is null
        event.preventDefault();
        alert("Email can't be left blank");
        return false;
    }  else if (city == null || city == "") { //Check if city is null
        event.preventDefault();
        alert("No city selected!");
        return false;
    } else if (district == null || district == "") { //Check if district is null
        event.preventDefault();
        alert("No district selected!");
        return false;
    } else if (regex_phone.test(phone) || regex_email.test(email)) { // Check validation of email and phone number
        if (!regex_phone.test(phone)){
            event.preventDefault();
            alert("Phone is not invalid");
            return false;
        } else if ((!regex_email.test(email))){
            event.preventDefault();
            alert("Email is not invalid");
            return false;
        }
        return true;
    }
    //return true;
}