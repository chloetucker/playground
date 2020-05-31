// (1) Show-and-Hide Sandbox

function showAndHide() {
    var x = document.getElementById("show");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showAndHideInner() {
    var x = document.getElementById("showinner");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// (4) Math Sandbox

function math() {
    var y = document.getElementById("value1").value;
    var z = document.getElementById("value2").value;
    var x = +y + +z;
    document.getElementById("math").innerHTML = x;
}
