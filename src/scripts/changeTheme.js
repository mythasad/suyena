function changeThemeColor() {
    var dayMode = document.getElementById("dayMode");
    var nightMode = document.getElementById("nightMode");
    var body = document.body;
    if (dayMode.style.display == "none") {
        dayMode.style.display = "inline-block";
        nightMode.style.display = "none";
        body.style.backgroundColor = "#cbeec3";
    }
    else {
        dayMode.style.display = "none";
        nightMode.style.display = "inline-block";
        body.style.backgroundColor = "#1f1f1f";
    }
}