// the interactions are the request
// or sending of data to the API rest
export default async function DeleteTasks(dataTasks, URL_API) {
  var url = URL_API + "tasks/remove/";
  const response = await fetch(url, {
    method: await "POST",
    body: await JSON.stringify(dataTasks),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  return data.datos;
}
