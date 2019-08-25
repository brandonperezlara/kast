import React, { memo, useContext, useState, useCallback } from "react";
import Card from "emerald-ui/lib/Card";
import styled from "styled-components";
import DropdownItem from "emerald-ui/lib/DropdownItem";
import IconDropdown from "emerald-ui/lib/IconDropdown";
import { getColorByStatus } from "../../utils/index";
import { MoveTask } from "../../store/Actions";
import { DeleteTasks } from "../../store/Actions";
import { GlobalContext } from "../../context";
import { fetchTasks } from "../../store/Actions";
import Avatar from "emerald-ui/lib/Avatar";
import ModalsTasks from "../ModalTasks";

const ContentCard = styled.div`
  margin-top: 10px;
  width: 240px;

  opacity: 0.8;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
const pStyle = {
  background: "#ecebeffa"
};

const statuses = ["Open", "In Progress", "Done"];

const TaskCard = ({ title, description, _id, id, status, users, task_ }) => {
  const [showOptions, setshowOptions] = useState(false);

  const OptionsToEdit = () => {
    return (
      <DropdownItem onClick={e => setshowOptions(true)}>EDIT</DropdownItem>
    );
  };

  var task = {};
  task._id = _id;
  const { dispatch } = useContext(GlobalContext);

  const OptionsToMove = () => {
    let result = statuses
      .filter(generalStatus => generalStatus !== status)
      .map(statusResult => (
        <DropdownItem
          key={statusResult}
          eventKey={statusResult}
          onClick={e =>
            TaskMove(
              { id, newStatus: e.target.text },
              task,
              statusResult,
              dispatch
            )
          }
        >
          {statusResult}
        </DropdownItem>
      ));
    return result;
  };
  const TaskMove = async (e, task, taskStatus, dispatch) => {
    task.status = taskStatus;
    MoveTask(e, task, dispatch);
  };
  //Delete Tasks
  const OptionsToDelete = async () => {
    fetchTasks(dispatch);
    await DeleteTasks(task, dispatch);
  };
  return (
    <>
      <ContentCard>
        <Card>
          <Card.Header
            color={getColorByStatus(status)}
            style={{ height: "30px" }}
          >
            <h1 className="eui-card-header-title">{title}</h1>
            <IconDropdown icon="more_horiz">
              <DropdownItem key="title-drop" header>
                MOVE TO
              </DropdownItem>
              {OptionsToMove()}
              <DropdownItem key="title-drop-options" header>
                OPTIONS
              </DropdownItem>
              <DropdownItem
                key="title-delete-tasks"
                onClick={e =>
                  OptionsToDelete({ id, newStatus: e.target.text }, dispatch)
                }
              >
                DELETE
              </DropdownItem>
              {OptionsToEdit()}
            </IconDropdown>
          </Card.Header>
          <p>{description}</p>
          <div style={{ display: "flex" }}>
            {users.map(user => (
              <Avatar key={user._id + "" + task._id} title={user.name} />
            ))}
          </div>
        </Card>
        <ModalsTasks style={pStyle} showElement={showOptions} task={task_} />
      </ContentCard>
    </>
  );
};

export default memo(TaskCard);
