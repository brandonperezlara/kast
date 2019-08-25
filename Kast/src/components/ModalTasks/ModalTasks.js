import React, { memo, useContext, useState, useEffect } from "react";
import Button from "emerald-ui/lib/Button";
import Modal from "emerald-ui/lib/Modal";
import TextField from "emerald-ui/lib/TextField";
import { GlobalContext } from "../../context";
import Select from "emerald-ui/lib/Select";
import { UpdateTask } from "../../store/Actions";

function clearInput(params) {
  document.getElementById(params).value = "";
}
var gSubsSelect = "";

async function sendData(TotalTasks, task, dispatch) {
  var newTasks = {};
  newTasks.title = document.getElementById("update-title").value;
  newTasks.description = document.getElementById("update-description").value;
  newTasks.user = "5d56ee9bea828922ec0b0b5a";
  newTasks.status = task.status;
  newTasks.id = task.id;
  newTasks._id = task._id;

  if (gSubsSelect != "") {
    try {
      const gSubsSelect_ = gSubsSelect.map(gSubs => {
        return gSubs.value;
      });
      newTasks.users = gSubsSelect_;
      gSubsSelect = "";
    } catch (error) {}
  } else {
  }
  await UpdateTask(newTasks, dispatch);
  await clearInput("title");
  await clearInput("description");
  window.location.reload();
}

function TaskCard({ showElement, task, callback }) {
  const {
    state: { allSubs, allTasks },
    dispatch
  } = useContext(GlobalContext);
  const tasks = allTasks;
  var showe = showElement;
  var aes = false;
  const [showOptions, setshowOptions] = useState(aes ? true : false);

  const close = () => {
    var aes = false;
    console.log("cerrando" + showOptions);
    setshowOptions(false);
    showElement = false;
    window.location.reload();
  };
  const Open = () => {};

  function getValue(e) {
    if (e.type == "select") {
    } else {
      gSubsSelect = e;
    }
  }
  const itemsCombo = task => {
    const filterByList = (type, tasks) => {
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i]._id == type) {
          return true;
        } else {
          return false;
        }
      }
    };

    try {
      let result = (
        <Select
          useAvatar={true}
          label="assign user"
          multiple
          id="s1"
          onSelect={async e => getValue(e)}
        >
          {allSubs.map(allSub => (
            <option
              key={allSub._id}
              selected={filterByList(allSub._id, task.users)}
              value={allSub._id}
            >
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
      <Modal hideOnOutsideClick={true} show={showElement} centered={true}>
        <Modal.Header>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: "flex", alignItems: "center" }}></div>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <TextField
              style={{ width: "100%" }}
              label="Title"
              id="update-title"
              defaultValue={task.title}
            />
          </div>
          <div>
            <TextField
              label="Description"
              id="update-description"
              defaultValue={task.description}
              style={{ marginTop: "30px" }}
            />

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end"
              }}
            ></div>
          </div>
          {itemsCombo(task)}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={e => close()} shape="flat" color="info">
            Cancel
          </Button>
          <Button
            onClick={() => sendData(tasks, task, dispatch)}
            color="primary"
          >
            Accept
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default memo(TaskCard);
