const namePlayer = document.querySelector(".player1");
    
    
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cb26bc3890msh1a25169f7044961p111163jsne079fca8966e',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    fetch('https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2022', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


function fetchPlayer(id){
    fetch('https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2022', options)
    .then(res => res.json())
    .then(response => {createPlayer(response)})
}

console.log(fetchPlayer())


function createPlayer(response){
    const name = response.response
    console.log(name)
    namePlayer.innerText = name[2].player.name;
}

createPlayer()