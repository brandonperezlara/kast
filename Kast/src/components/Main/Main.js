//Here we assemble the body of the page, 
//one of the main components
import React, { lazy, memo } from "react";
const MenuBar = lazy(() => import("../MenuBar"));
const List = lazy(() => import("../Lists"));
const ListCreateTask = lazy(() => import("../ListCreateTask"));

function Main() {
  return (
    <>
        <MenuBar />
        <ListCreateTask />
        <List />   
    </>
  );
}
export default memo(Main);
