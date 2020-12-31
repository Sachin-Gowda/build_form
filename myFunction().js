function myFunction(){
    var x = document.getElementById("fname").value;
    document.getElementById("displayfname").innerHTML = "First name : "+x;

    var x = document.getElementById("sname").value;
    document.getElementById("displaysname").innerHTML = "Second name : "+x;

    var x = document.getElementsByName('gender');
    for(i = 0; i<x.length; i++)
    {
        if(x[i].checked)
        document.getElementById("displaygender").innerHTML = "Gender : "+x[i].value;
    }

    var x = document.getElementById("fatname").value;
    document.getElementById("displayfatname").innerHTML = "Father name : "+x;

    var x = document.getElementById("mname").value;
    document.getElementById("displaymname").innerHTML = "Mother name : "+x;

    var x = document.getElementById("add").value;
    document.getElementById("displayadd").innerHTML = "Address : "+x;

    var x = document.getElementById("email").value;
    document.getElementById("displayemail").innerHTML = "E-mail : "+x;

    var x = document.getElementById("num").value;
    document.getElementById("displaynum").innerHTML = "Contact number : "+x;
}