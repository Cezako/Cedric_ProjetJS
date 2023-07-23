

// request GET a partir de mon url
export const request = async(url) => {

    const response = await fetch(url)
    console.log(response)

    const data = await response.json()
    console.log(data)

    return data
}
// return data