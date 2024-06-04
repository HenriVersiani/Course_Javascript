const url = 'https://basketapi1.p.rapidapi.com/api/basketball/team/3436/transfers';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '840375888amsh9e7173d99429233p12772cjsnd1a165ba5522',
        'x-rapidapi-host': 'basketapi1.p.rapidapi.com'
    }
};

export async function getTransfersAPI(){
    const response = await fetch(url, options);
    const result = await response.json();
    return result
}

