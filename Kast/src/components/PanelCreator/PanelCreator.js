//panel where tasks are created
import React, { memo } from "react";
import CardCreate from "../CardCreate";
import CardCreateUsers from "../CardCreateUsers";
import Card from "emerald-ui/lib/Card";
import styled from "styled-components";



const ContentCard = styled(Card)`


  width: 285px;
  background: #e0c6decf;
  border-radius: 11px 11px 11px 11px;
-moz-border-radius: 11px 11px 11px 11px;
-webkit-border-radius: 11px 11px 11px 11px;
border: 0px solid #000000;
`;
function PanelList({ titleList, tasks }) {

  return (
    <>
      <ContentCard>
        <h2 className="eui-card-subtitle"> </h2>
        <CardCreate tasks={tasks}/>
        <p/>
        <CardCreateUsers tasks={tasks}/>
      </ContentCard>
      
    </>
  );
}

export default memo(PanelList);
