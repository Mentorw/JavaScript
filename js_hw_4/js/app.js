const renderCountries = countries => {
    console.log(countries);
    let htmlStr = '';
    for (let country of countries) {
        
        htmlStr += `<tr>
            <td>${country.region}</td>
            <td>${country.currencies.map(el => el.name).join(',')}</td>
            <td>${country.languages.map(el => el.name).join(',')}<td>
            <td><img src="${country.flag}" height="50px" "></img>
        </tr>`
    }
    console.log(htmlStr);
    document.querySelector('table > tbody').innerHTML = htmlStr;

}
const getData = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json()).then(data => {
            countries = data.map(country => {
                return {
                    region: country.region,
                    currencies: country.currencies,
                    languages: country.languages,
                    flag: country.flag
                };
            });
            renderCountries(countries);
        });
}
document.querySelector('.render_countries').onclick = e => {
    getData();
}