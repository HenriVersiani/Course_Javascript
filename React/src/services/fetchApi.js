export async function fetchTvs() {

    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=televisao`

    const response = await fetch(endpoint)
    const result = await response.json()

    return result
}

export async function fetchPhones() {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=smartphones`

    const response = await fetch(endpoint)
    const result = await response.json()

    return result
}

export async function fetchTech() {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=informatica`

    const response = await fetch(endpoint)
    const result = await response.json()

    return result
}