$("#btnIniciar").click(function () {

    let comando = {
        "usuario": $("#email").val(),
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
                    alert("resultado exitoso");                      
                } else {
                    alert(result.return);
                }
            };
        },
        error: function (error) { console.log(error); }
    });
})