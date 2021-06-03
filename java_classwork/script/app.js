window.onload = function () {
    const setListeners = () => {
        $("#date").change(e => {
            data = moment($("#date").val()).format('YYYYMMDD');
            // console.log(data);
            getData(data);
        });
    }

    const renderRate = coursesData => {
        let htmlStr = '';
        for (let element of coursesData) {
            htmlStr += `<tr>
           
             <td>${element.txt}</td>
             <td>${element.rate}</td>
         </tr>`;
        }
        if (!coursesData.length) {
            htmlStr = '<tr><td colspan="8" class="text-center">Не найдено</td></tr>'
        }
        $('table > tbody').html(htmlStr);

    };
    let data = moment().format('YYYYMMDD');
    $("#date").val(moment().format('YYYY-MM-DD'));
    const getData = (data) => {
        let coursesData = [];
        fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${data}&json`)
            .then(res => res.json()).then(data => {
                coursesData = data.map(course => {
                    let { txt, rate, cc } = course;
                    return {
                        txt, rate: rate.toFixed(2)
                    };
                });
                renderRate(coursesData);
                setListeners();
            });
    }
    getData(data);
}



