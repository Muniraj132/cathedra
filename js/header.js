// header.js

document.addEventListener("DOMContentLoaded", function () {
    // Create an XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    
    // Define the path to your header content
    var headerPath = "header.html";

    // Fetch the header content
    xhr.open("GET", headerPath, true);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Inject the header content into the container
            document.getElementById("headerContainer").innerHTML = xhr.responseText;
        }
    };

    xhr.send();
});
