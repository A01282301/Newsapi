APIKEY = '70f9810e1061463389c8a576521884b6';

function DisplayResults(responseJSON){
    let results = document.querySelector('.results');
    results.innerHTML = "";
    console.log('articles')
    responseJSON.articles.forEach(element => {
        results.innerHTML += `<div> 
        <h2> Title: ${element.title}</h2> 
        <img src = "${element.urlToImage}"> Image </img>    
        <p> Description: ${element.description} </p>
        </div>`
    });
}

function fetchNews(searchterm){
    let url = `https://newsapi.org/v2/top-headlines?apiKey=${APIKEY}&q=${searchterm}`;
    let settings = {
        method : 'GET'
    }

    fetch (url, settings).then(
        response =>{
            if(response.ok){
                return response.json();

            }
            throw Error(response.statusText);
        })
        .then( responseJSON => {
            DisplayResults(responseJSON);

        })
        .catch (err => {

            console.log(err.message);
       
        })
    
}


function Watchform(){
    let btn = document.querySelector('.Submitbtn');

    btn.addEventListener('click', (event) => {
        event.preventDefault();

        let searchterm = document.querySelector('#term').value;

        console.log(searchterm);
        fetchNews(searchterm);

    })

}



function init(){
    Watchform();
}

init();