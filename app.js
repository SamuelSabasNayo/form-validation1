var username = document.getElementById("username");
    var password = document.getElementById("password");

    function validate() {
        if (username.value.trim() == "" || password.value.trim() == "") {
            alert("No blank values are allowed");
            return false;
        } else {
            true;
        }
    }