function data() {
    let formData = [];
    var fname = formData.push(document.getElementById("firstname").value);
    var mname = formData.push(document.getElementById("middlename").value);
    var lname = formData.push(document.getElementById("lastname").value);
    var email = formData.push(document.getElementById("emailID").value);
    for (i = 0; i < formData.length; i++) {
        console.log(formData[i]);
    }
}