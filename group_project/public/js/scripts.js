let input_username = document.getElementById("uname");
let input_password = document.getElementById("psw");

// default login info: username = login_user; password = login_password
function signIn() {
    let login_username = input_username.value;
    let login_password = input_password.value;
  
    if (login_username === "" || login_password === "") {
        alert("Please fill in the login details!")
        return;
    }
    if (login_username !== "login_user" || login_password !== "login_password") {
        alert("Incorrect login information!")
        return;
    }
    if (login_username === "login_user" && login_password === "login_password") {
        window.open("/admin.html")
        return;
    }
}

$(document).ready(function () {
    $('.modal').modal();

    $('#button_intro_video').click(() => {
        window.open("https://www.youtube.com/watch?v=VYyb7VO5DBA");
    })

    $('#button_drawing').click(() => {
        window.open("/drawing.html")
    })

    $('#submit_login').click(() => {
        signIn();
    })

    $('#reset_login').click(() => {
        alert("The user reset login information will be implemented later.");
    })

    $('#user_logout').click(() => {
        window.open("/index.html")
    })
});
