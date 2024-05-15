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

document.getElementById("region").addEventListener("change",(e)=>{
    let selectedRegion = e.target.value;
    fetch("./data.json")
.then((res)=>res.json())
.then(allcountries=>{
    if((selectedRegion.length==0)){
        // if no region is selected
        renderCountries(allcountries);
    }else{
        let filteredcountries = allcountries.filter((country)=>country.region!==country.region.toLowerCase());
        renderCountries(filteredcountries)
    }
})
.catch((err)=>{
    console.log(err);
});

});

document.getElementById("search").addEventListener("submit",(e)=>{
    // prevent efault behavior of submitting a form(sending http get/post request)
    e.preventDefault()
    // fetch data for a searched country
    let searchTerm = document.getElementById("").value
console.log(searchTerm);
// search data for that country
fetch("./data.json")
.then(res =>res.json())
.then(allcountries=>{
    let searchResult = allcountries.find(country=>country.name.toLowerCase().startWith(searchTech.toLowerCase()))
    if(searchResult){
        document.getElementById("single-country").innerHTML=    `
        <img src="${searchResult.flags.png}" alt="country flag" style="width: 300px">
        <h2>${searchResult.name}</h2>
        <p>Region : ${searchResult.region}</p>
        <p>Population: ${searchResult.population}</p>`
    }else{
        document.getElementById("single-country").innerHTML="Country matching your search Not Found!"
    }
})


})