// user Avatar
import React, { memo } from "react";
import Avatar from "emerald-ui/lib/Avatar";

function User({ title }) {
  return (
    <>
      <Avatar style={{ marginRight: "10px" }} title={title} size="xs" />
    </>
  );
}
