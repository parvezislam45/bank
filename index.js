document.getElementById('btn').addEventListener('click', function (){
    const emailField = document.getElementById('login');
    const userEmail = emailField .value;
    const passwardField = document.getElementById('give-passward');
    const userPassward = passwardField .value;
    if (userEmail == "aurthohinparvez@gmail.com" && userPassward=="01683338523"){
        {window.location.href = "page-2.html"}
    }
})