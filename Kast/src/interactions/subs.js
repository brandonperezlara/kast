// the interactions are the request
// or sending of data to the API rest
export default async function AllSubs(){
    const url = 'http://localhost:3021/subUsers/user/5d56ee9bea828922ec0b0b5a';
        const response = await fetch(url)
        const data = await response.json()
        return data.datos   
}


 



