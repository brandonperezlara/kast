import React, { memo, useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import PanelList from "../PanelList";
import styled from "styled-components";
import { filterByList, map } from "../../utils";
import { TYPE_LIST } from "../../utils/constants";
import { fetchTasks } from "../../store/Actions";

const ContentLists = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  float:center;
`;

const SubContentList = styled.div`
  margin: 10px;
`;

const TYPES = {
  OPEN: "Open",
  IN_PROGRESS: "In Progress",
  DONE: "Done"
};

//the function gets the tasks and
// filters them by state
 function  Lists() {
  const {
    state: { allTasks },
    dispatch
  } = useContext(GlobalContext);
   //triggers the action that gets
   // the database tasks
  useEffect(() => {
    fetchTasks(dispatch);
  }, [dispatch]);


  return (
    <>
      <ContentLists>
        <SubContentList>
          <PanelList
            key={1}
            titleList={TYPE_LIST.OPEN}
            tasks={filterByList(TYPES.OPEN, map(allTasks))}
          />
        </SubContentList>
        <SubContentList>
          <PanelList
            key={2}
            titleList={TYPE_LIST.IN_PROGRESS}
            tasks={filterByList(TYPES.IN_PROGRESS, map(allTasks))}
          />
        </SubContentList>
        <SubContentList>
          <PanelList
            key={3}
            titleList={TYPE_LIST.DONE}
            tasks={filterByList(TYPES.DONE, map(allTasks))}
          />
        </SubContentList>
      </ContentLists>
    </>
  );
}
export default memo(Lists);
