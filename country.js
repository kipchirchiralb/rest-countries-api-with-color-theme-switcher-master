fetch("./data.json")
.then(res=>res.json())
.then(allcountries=>{
    renderCountries(allcountries)

})
.catch(err=>{
    console.log(err);
})

const allcountriesDiv = document.getElementById("all-countries")
function renderCountries(countries){
    allcountriesDiv.innerHTML = ""
    countries.forEach(country=>{
        let countryDiv = document.createElement("div")
        countryDiv.innerHTML = `
        <img src= ${country.flags.png} alt=${country.name + "flag"}>
        <h2>Name:${country.name} </h2>
        <p> Population: ${country.population} </p>`;
             
        allcountriesDiv.appendChild(countryDiv);
    });
}
