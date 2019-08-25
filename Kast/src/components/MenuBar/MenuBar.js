import React, { memo } from "react";
import Avatar from "emerald-ui/lib/Avatar";
import DropdownButton from "emerald-ui/lib/DropdownButton";
import DropdownItem from "emerald-ui/lib/DropdownItem";
import Icon from "emerald-ui/lib/Icon";
import Nav from "emerald-ui/lib/Nav";
import Navbar from "emerald-ui/lib/Navbar";

function MenuBar() {
  return (
    <>
      <Navbar breakAt="sm" theme="dark">
        <Navbar.Brand>
          <a href="#foo">KAST {process.env.TEST_NAME}</a>
        </Navbar.Brand>

        <Nav>
          <a href="#foo">
            <Icon name="email" />
          </a>
          <DropdownButton
            noCaret
            fromRight
            id="dd2"
            title={<Avatar title="JS" />}
          ></DropdownButton>
        </Nav>
      </Navbar>
    </>
  );
}

export default memo(MenuBar);
