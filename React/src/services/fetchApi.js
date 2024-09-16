export async function fetchApi() {

    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=televisao`

    const response = await fetch(endpoint)
    const result = await response.json()

    return result
}