import React, { memo, useContext, useEffect } from "react";
import Card from "emerald-ui/lib/Card";
import TextField from 'emerald-ui/lib/TextField';
import Button from 'emerald-ui/lib/Button';
import { GlobalContext } from "../../context";
import { fetchSubs, AddSubs } from "../../store/Actions";
import TableUsers from "../TableUsers";

async function sendData(Totalsubs, dispatch) {

  var newTasks = {};
  newTasks.name = document.getElementById("name").value;
  newTasks.user = "5d56ee9bea828922ec0b0b5a";
  newTasks.id = Object.keys(Totalsubs).length;

  await AddSubs(newTasks, dispatch);
  await fetchSubs(dispatch);
  await clearInput("name");


}
async function clearInput(params) {
  document.getElementById(params).value = await '';
}

  function Tasks({ tasks }) {

    const {
      state: { allSubs },
      dispatch
    } = useContext(GlobalContext);

    useEffect(() => {
      fetchSubs(dispatch);
    }, [dispatch]);
    
  return (
    <>
      <Card>
        <Card.Header
          style={{ height: "30px", background: "#ffffff" }} >
          <h1 className="eui-card-header-title" style={{ color: "#8f9292" }}>Add Users</h1>
        </Card.Header>
        <p></p>
        <TextField label="Name" name="name" id="name" style={{ marginTop: '-20px' }}  />
        <Button color="primary" style={{ marginTop: '5px' }} onClick={e => sendData(allSubs, dispatch)}>Add</Button>
        
        <TableUsers subs={allSubs} />
      
        

      </Card>
    </>
  );
}
export default memo(Tasks);
