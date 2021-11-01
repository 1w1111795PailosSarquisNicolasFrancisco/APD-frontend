$("#btnIniciar").click(function () {

    let comando = {
        "user": $("#email").val(),
        "password": $("#password").val(),
    }


    $.ajax({
        url: "https://localhost:5001/Usuario/login",
        type: "POST",
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify(comando),
        success: function (result) {
            {
                if (result.ok) {
                    localStorage.setItem("tokenSesion" ,JSON.stringify(result.return.tokenSesion));
                    window.location.repacle("../inicio/inicio.html")                 
                } else {
                    alert(result.return.tokenSesion);
                }
            };
        },
        error: function (error) { console.log(error); }
    });
})