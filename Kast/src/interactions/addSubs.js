// the interactions are the request
// or sending of data to the API rest
export default async function AddSubs(dataTasks) {
    
    var url = 'http://localhost:3021/subUsers/insert/';
    await console.log(dataTasks);
    const response = await fetch(url, {
        method: await 'POST',
        body: await JSON.stringify(dataTasks),
        headers: {
            'Content-Type': 'application/json'
        }
    })


}


 



