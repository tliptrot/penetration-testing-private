var xhr = new XMLHttpRequest();
xhr.open("POST", "https://mc.manuscriptcentral.com/psrm", true);

console.log("Opening request.");

xhr.setRequestHeader("Content-Type", "multipart/form-data; boundary=----WebKitFormBoundaryXYZ");
xhr.withCredentials = true;

// Log successful completion of the request
xhr.onload = function() {
    console.log("Request completed with status: " + xhr.status);
};

// Log any errors that occur during the request
xhr.onerror = function() {
    console.log("Request failed.");
};

var body = "------WebKitFormBoundaryXYZ\r\n";
body += "Content-Disposition: form-data; name=\"data\"\r\n\r\n";
body += "plumbus\r\n";
body += "------WebKitFormBoundaryXYZ--";

console.log("Sending request.");
xhr.send(body);

console.log("Reached the end of the script.");
