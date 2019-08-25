import React, { memo, useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import styled from "styled-components";
import { TYPE_LIST } from "../../utils/constants";
import { fetchTasks } from "../../store/Actions";

import PanelCreator from "../PanelCreator";

const ContentLists = styled.div`
  display: flow;
  justify-content: left;
  margin-top: 20px;
  float:left;
`;

const SubContentList = styled.div`
  margin: 10px;
`;

const TYPES = {
  OPEN: "Open",
  IN_PROGRESS: "In Progress",
  DONE: "Done"
};

function ListCreateTask() {
  const {
    state: { allTasks },
    dispatch
  } = useContext(GlobalContext);

  useEffect(() => {
    fetchTasks(dispatch);
  }, [dispatch]);

  return (

    
    <>
      <ContentLists>
        
        
        <SubContentList>
          <PanelCreator
            key={1}
            titleList={TYPE_LIST.OPEN}
            tasks={allTasks}
          />
        </SubContentList>
        
        
      </ContentLists>
    </>
  );
}
export default memo(ListCreateTask);
