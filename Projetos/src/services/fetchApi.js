const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '840375888amsh9e7173d99429233p12772cjsnd1a165ba5522',
        'x-rapidapi-host': 'basketapi1.p.rapidapi.com'
    }
};

export async function fetchAllTeams() {
    const endpoint = 'https://basketapi1.p.rapidapi.com/api/basketball/tournament/132/season/38191/standings/total';

    try {
        const response = await fetch(endpoint, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
        return error
    }
};

export async function getTeamById(id) {
    const endpoint = `https://basketapi1.p.rapidapi.com/api/basketball/team/${id}`;
    
    try {
        const response = await fetch(endpoint, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};
