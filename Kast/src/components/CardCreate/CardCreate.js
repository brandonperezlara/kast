//this component creates and triggers
//the action to send to the API
import React, { memo, useContext } from "react";
import Card from "emerald-ui/lib/Card";
import TextField from "emerald-ui/lib/TextField";
import Button from "emerald-ui/lib/Button";
import { AddTasks } from "../../store/Actions";
import { GlobalContext } from "../../context";
import Select from "emerald-ui/lib/Select";

var gSubsSelect = "";

async function sendData(TotalTasks, dispatch) {
  var newTasks = {};
  newTasks.title = document.getElementById("title").value;
  newTasks.description = document.getElementById("description").value;
  newTasks.user = "5d56ee9bea828922ec0b0b5a";
  newTasks.status = "Open";
  newTasks.id = Object.keys(TotalTasks).length;

  if (gSubsSelect !== "") {
    try {
      const gSubsSelect_ = gSubsSelect.map(gSubs => {
        return gSubs.value;
      });
      newTasks.users = gSubsSelect_;
      gSubsSelect = "";
    } catch (error) {}
  } else {
  }

  await AddTasks(newTasks, dispatch);

  await clearInput("title");
  await clearInput("description");
}

function clearInput(params) {
  document.getElementById(params).value = "";
}

function getValue(e) {
  if (e.type === "select") {
  } else {
    gSubsSelect = e;
  }
}

function Tasks({ tasks }) {
  const {
    state: { allSubs },
    dispatch
  } = useContext(GlobalContext);

  const itemsCombo = () => {
    try {
      let result = (
        <Select
          useAvatar={true}
          label="assign user"
          multiple
          id="s1"
          onSelect={async e => await getValue(e)}
        >
          {allSubs.map(allSub => (
            <option key={allSub._id} value={allSub._id}>
              {allSub.name}
            </option>
          ))}
        </Select>
      );
      return result;
    } catch (error) {}
  };

  return (
    <>
      <Card>
        <Card.Header style={{ height: "30px", background: "#ffffff" }}>
          <h1 className="eui-card-header-title" style={{ color: "#8f9292" }}>
            Add Tasks
          </h1>
        </Card.Header>
        <p></p>
        <TextField
          label="Title"
          name="title"
          id="title"
          style={{ marginTop: "-20px" }}
          placeholder="My new tasks"
        />
        <TextField
          label="Description"
          name="Description"
          id="description"
          style={{ marginTop: "4px" }}
          placeholder="..."
        />
        {itemsCombo()}
        <Button
          color="primary"
          style={{ marginTop: "5px" }}
          onClick={e => sendData(tasks, dispatch)}
        >
          Add
        </Button>
      </Card>
    </>
  );
}
export default memo(Tasks);
