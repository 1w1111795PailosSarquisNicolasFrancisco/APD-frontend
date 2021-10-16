$("#btnIniciar").click(function () {

    let comando = {
        "user": $("#email").val(),
        "password": $("#password").val(),
    }
    console.log(comando)


    $.ajax({
        url: "https://localhost:5001/Usuario/login",
        type: "POST",
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify(comando),
        success: function (result) {
            console.log(result); {
                if (result.ok) {
                    window.location.repacle("../inicio/inicio.html")                 
                } else {
                    alert(result.return);
                }
            };
        },
        error: function (error) { console.log(error); }
    });
})