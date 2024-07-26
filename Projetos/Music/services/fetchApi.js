const options = {
    method: 'GET',

    headers: {
        'x-rapidapi-key': '27bb0a1793msh18efee95ca561adp17c14ejsnb2b78c9d3300',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com'
      }

  //  headers: {
    //    'x-rapidapi-key': '840375888amsh9e7173d99429233p12772cjsnd1a165ba5522',
    //    'x-rapidapi-host': 'spotify23.p.rapidapi.com'
    //}
    

   // headers: {
	//	'x-rapidapi-key': '05bbdc3f32msh45bf50fb2500b24p1e0f4djsnba4f252c1907',
	//	'x-rapidapi-host': 'spotify23.p.rapidapi.com'
//	}
   
};

export async function getArtists(){
    const artistsIds = ['0du5cEVh5yTK9QJze8zA0C','36QJpDe2go2KgaRleHCDTp','0pcoadNMmvrUyab1RxWBoV','7G1GBhoKtEPnP86X2PvEYO','3p7PcrEHaaKLJnPUGOtRlT','5eAWCfyUhZtHHtBdNk56l1' ]
    const data = []

    for (const artistId of artistsIds) {
        const url = `https://spotify23.p.rapidapi.com/artists/?ids=${artistId}`;

        try {
            const response = await fetch(url, options);
            const result = await response.json(); 
            data.push(result)
    
        } catch (error) {
            console.error(error);
        }
    }
    console.log(data)
    return data
}

export async function getAlbums(){
    const albumsIds = ['2xkZV2Hl1Omi8rk2D7t5lN','3cfAM8b8KqJRoIzt3zLKqw','3ycjBixZf7S3WpC5WZhhUK', '7aJuG4TFXa2hmE4z1yxc3n','2pKw6GERJVAD61449B1EEM','5pIlMNPZh4D9iJSoCfMzGi' ]

    const data = []

    for (const albumId of albumsIds) {
        const url = `https://spotify23.p.rapidapi.com/albums/?ids=${albumId}`;

        try {
            const response = await fetch(url, options);
            const result = await response.json(); 
            data.push(result)
    
        } catch (error) {
            console.error(error);
        }
    }
    console.log(data)
    return data
}



