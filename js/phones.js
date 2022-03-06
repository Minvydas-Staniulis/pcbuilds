function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            perDetails(this);
        }
    };
    xmlhttp.open("GET", "../xml/data.xml", true);
    xmlhttp.send();
}
function perDetails(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table =`<tr><th>Title</th><th>Model</th><th>Price(EUR)</th><th>Delivery Time</th>
    <th>In Stock</th><th></th></tr>`;
    var x = xmlDoc.getElementsByTagName("phones");
    console.log(x);
    // Start to fetch the data by using TagName 
    for (i = 0; i < x.length; i++) {
        let btn = document.createElement("button");
        btn.type = "add";
        btn.name = "addBtn";
        table += "<tr><td>" +
            x[i].getElementsByTagName("title")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("model")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("item_price")[0].childNodes[0].nodeValue
             + "</td><td>" + 
            x[i].getElementsByTagName("delivery_text")[0].childNodes[0].nodeValue +
            "</td><td>" + 
            x[i].getElementsByTagName("stock")[0].childNodes[0].nodeValue + "</td>" + 
            "<td><button type='buttonAdd' id=buttonAdd'>Pridėti</button></td></tr>";
    // Print the xml data in table form
    document.getElementById("table").innerHTML = table;
}
}
