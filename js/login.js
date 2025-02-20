document.addEventListener('DOMContentLoaded', function() {
    var selectElement = document.getElementById('mySelect');
    var buttonElement = document.getElementById('myButton');
    var codemeli = document.getElementById("input_code");
    var name = document.getElementById("input_name");

    buttonElement.addEventListener('click', function() {
        var selectedValue = selectElement.value;
        var url;

        switch (selectedValue) {
            case 'option1':
                url = (String)(window.location.href).replace("login.html", "main.html");
                break;
            case 'option2':
                url = (String)(window.location.href).replace("login.html", "main.html");
                break;
            default:
                url = null;
        }

        if (url && name.value != "" && (String)(codemeli.value).length == 10) {
           window.location.href=url;
        } else {
            alert('Please fill them all');
        }
    });
});