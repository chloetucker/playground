// Show-and-Hide Sandbox

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
