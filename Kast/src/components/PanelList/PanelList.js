//create a panel where tasks from the
// same state are added
import React, { memo } from "react";
import Tasks from "../Tasks";
import Label from "emerald-ui/lib/Label";
import { getColorByStatus } from "../../utils";
import Card from "emerald-ui/lib/Card";
import styled from "styled-components";

const ContentCard = styled(Card)`
  width: 285px;
  background: #ffffffc7;
border-radius: 16px 16px 16px 16px;
-moz-border-radius: 16px 16px 16px 16px;
-webkit-border-radius: 16px 16px 16px 16px;
border: 0px solid #000000;
`;
function PanelList({ titleList, tasks }) {

  return (
    <>
      <ContentCard>
        <h1 className="eui-card-title">
          <Label color={getColorByStatus(titleList)}>{titleList}</Label>
        </h1>
        <h2 className="eui-card-subtitle">
          <span className="text-muted">Taks: </span> {tasks.length}
        </h2>
        <Tasks tasks={tasks} />
      </ContentCard>
    </>
  );
}

export default memo(PanelList);
