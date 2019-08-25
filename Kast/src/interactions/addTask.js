// the interactions are the request
// or sending of data to the API rest
export default async function AddTasks(dataTasks) {
    
    var url = 'http://localhost:3021/tasks/insert/';
    await console.log(dataTasks);
    const response = await fetch(url, {
        method: await 'POST',
        body: await JSON.stringify(dataTasks),
        headers: {
            'Content-Type': 'application/json'
        }
    })

}


 



