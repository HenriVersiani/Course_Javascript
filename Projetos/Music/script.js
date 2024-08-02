import { getArtists, getAlbums } from "./services/fetchApi.js";


const divArtists = document.getElementById('artists')
const divAlbums = document.getElementById('albums')

let artists = null
let albums = null

if (artists === null) {
    divArtists.innerHTML = `
       <div class="spinner-border text-white" role="status">
            <span class="visually-hidden">Loading...</span>
        </div> 
    ` 
}

if (albums === null) {
    divAlbums.innerHTML = `
       <div class="spinner-border text-white" role="status">
            <span class="visually-hidden">Loading...</span>
        </div> 
    ` 
}

function handleClick(event, id){
    
}

async function main() {

    artists = await getArtists()
    albums = await getAlbums()

    divArtists.innerHTML = ""
    divAlbums.innerHTML = ""

    artists.forEach(element => {
        const id = element.artists[0].id
      
        const divsArtists = document.createElement('div')
        divsArtists.className = "card col-sm-12 col-md-4 col-lg-2"

        divsArtists.addEventListener('click', (event) => handleClick(event, id))
        divsArtists.innerHTML += `
            <img class=" img-fluid" src="${element.artists[0].images[1].url}"/>
            <h3>${element.artists[0].name}</h3>
        `
        divArtists.appendChild(divsArtists)
        }
     )

    albums.map(element => divAlbums.innerHTML += `
        <div class="card col-sm-12 col-md-4 col-lg-2">
            <img class="img-fluid" src="${element.albums[0].images[1].url}"/>
            <h3>${element.albums[0].name}</h3>
            <p>${element.albums[0].artists[0].name}</p>
        </div>
        `)
}


main()

