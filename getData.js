$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "data.php",
        data: "data",
        dataType: "json",
        success: function ( data ) {
            var allData = JSON.parse(JSON.stringify(data));
            Morris.Line({
                element: 'stats',
                data: allData,
                xkey: 'post',
                ykeys: ['likes', 'comments', 'shares', 'reports'],
                labels: ['likes', 'comments', 'shares', 'reports'],
                hideHover:'auto'
            });
            Morris.Area({
                element: 'stats1',
                data: allData,
                xkey: 'post',
                ykeys: ['likes', 'comments', 'shares', 'reports'],
                labels: ['likes', 'comments', 'shares', 'reports'],
                hideHover: 'auto'
            });
        }
    });
});