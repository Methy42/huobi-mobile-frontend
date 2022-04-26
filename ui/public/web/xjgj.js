(function () {
    var ctx = document.getElementById('myChart');
    var legendItems = document.querySelectorAll('#legendItems .chart-item')
    var tokenChart = new Chart(ctx, {
        type: 'doughnut',
        // plugins: [{
        //     id: 'myChart',
        //     beforeDraw: chart => {
        //         var ctx = chart.canvas.getContext('2d');;
        //         ctx.save();
        //         var image = new Image();
        //         image.src = 'img/pie.webp';
        //         var imageSize = 140;
        //         ctx.drawImage(image, chart.width / 2 - imageSize / 2, chart.height / 2 - imageSize / 2, imageSize, imageSize);
        //         ctx.restore();
        //     } // background: transparent url('img/dogracedefi_icon_alpha_2048.png') no-repeat center 80px;
        // }],
        data: {
            labels: [
                'Exchange and public offering',
                'Ecosystem',
                'Adviser',
                'Game rewards',
                'Community',
                'Market',
                'Team',
                'Private placement',
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [10, 10, 3, 40, 7, 5, 10, 15],
                backgroundColor: "rgba(6, 15, 18, 1)",
                borderWidth: 3,
                borderColor: "rgb(92, 105, 248)",
                hoverBackgroundColor: "rgba(147, 211, 255, 0.3)",
                // hoverOffset: 3
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return tooltipItem.label + ':' + tooltipItem.formattedValue + '%';
                        }
                    }
                },
            },
            onHover: function (evt, elements) {
                // console.log('on hover, element = ', elements);
                if (elements && elements.length) {
                    var segment = elements[0];
                    // console.log("index = " + segment["index"]);
                    var selectedIndex = segment["index"];
                    legendItems.forEach(function (item, itemIndex) {
                        if (itemIndex == selectedIndex) {
                            item.classList.add('token-chart-active');
                        } else {
                            item.classList.remove('token-chart-active');
                        }
                    });
                } else {
                    legendItems.forEach(function (item) {
                        item.classList.remove('token-chart-active');
                    });
                }
            }
        }
    });

})()