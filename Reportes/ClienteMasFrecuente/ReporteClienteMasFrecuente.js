$(document).ready(function () {
    var nombres = [];
    var cantidades = [];

    $.ajax({
        url: "https://localhost:5001/Cliente/ObtenerClientes",
        type: "GET",
        dataType: "json",
        contentType: 'application/json',
        success: function (result) {
            {
                if (result.ok) {
                    result.return.forEach(element => {
                        nombres.push(element.nombre);
                        cantidades.push(element.cantidadPedidos);
                    });
                    const ctx = document.getElementById('myChart').getContext('2d');
                    const myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: nombres,
                            datasets: [{
                                label: 'Cantidad de Compras',
                                data: cantidades,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true,
                                }
                            }
                        }
                    });
                } else {
                }
            };
        },
        error: function (error) { console.log(error); }
    });
    
});
$("#btnFiltrarFecha").click(function () {

    let fechaInicial = $("#dtpFechaInicial").val();
    let fechaFinal = $("#dtpFechaFinal").val();

    console.log(fechaInicial);
    console.log(fechaFinal);

    filtrarFecha(fechaInicial, fechaFinal);
  });

  function filtrarFecha(fechaInicial, fechaFinal) {
    var nombres = [];
    var cantidades = [];
    $.ajax({
        url: "https://localhost:5001/Clientes/reporteClientes?lim_inf=" + fechaInicial + "&lim_sup=" + fechaFinal,
        type: "GET",
        dataType: "json",
        contentType:"application/json",
        success: function (result) {
            if(result.ok) {
                $('#myChart').remove();
                $('#canva').append("<canvas id=\"myChart\"></canvas>");

                result.return.forEach(element => {
                    nombres.push(element.nombre);
                    cantidades.push(element.cantidad);
                });
                const ctx = document.getElementById('myChart').getContext('2d');
                const myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: nombres,
                        datasets: [{
                            label: 'Cantidad de Compras',
                            data: cantidades,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true,
                            }
                        }
                    }
                });
            } else {
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
  }

