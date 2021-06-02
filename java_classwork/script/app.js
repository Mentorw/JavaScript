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
             <td>${element.r030}</td>
             <td>${element.txt}</td>
             <td>${element.rate}</td>
             <td>${element.cc}</td>
             <td>${element.exchangedate}</td>
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
                    let { r030, txt, rate, cc, exchangedate } = course;
                    return {
                        r030, txt, rate: rate.toFixed(2), cc, exchangedate
                    };
                });
                renderRate(coursesData);
                setListeners();
            });
    }
    getData(data);
}



