// footer.js

document.addEventListener("DOMContentLoaded", function () {
    // Create an XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    
    // Define the path to your header content
    var headerPath = "footer.html";

    // Fetch the header content
    xhr.open("GET", headerPath, true);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Inject the header content into the container
            document.getElementById("footercontainer").innerHTML = xhr.responseText;
        }
    };

    xhr.send();
});
