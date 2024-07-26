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

function handleClick(id){
    console.log(id)
}

async function main() {

    window.handleClick = handleClick

    artists = await getArtists()
    albums = await getAlbums()

    divArtists.innerHTML = ""
    divAlbums.innerHTML = ""

    artists.forEach(element => {
        const id = element.artists[0].id
        divArtists.innerHTML += `
        <div name="${id}" class="handleClick card col-sm-12 col-md-4 col-lg-2">
            <img class="img-fluid" src="${element.artists[0].images[1].url}"/>
            <h3>${element.artists[0].name}</h3>
        </div>
            `
        }
     )

    const divsArtists = document.querySelectorAll(".handleClick");

    divsArtists.forEach((element) => {
        element.addEventListener("click", () =>{
        const id = element.getAttribute("name")    
            alert(id)
        })
    })

    albums.map(element => divAlbums.innerHTML += `
        <div class="card col-sm-12 col-md-4 col-lg-2">
            <img class="img-fluid" src="${element.albums[0].images[1].url}"/>
            <h3>${element.albums[0].name}</h3>
            <p>${element.albums[0].artists[0].name}</p>
        </div>
        `)
}


main()

