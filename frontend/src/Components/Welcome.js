import React from "react";

//welcome component
export default function Welcome(props) {
  return (
    <div>
      <h1>
        Welcome{" "}
        <span style={{ textTransform: "capitalize" }}>
          {props.user.username}
        </span>
      </h1>
    </div>
  );
}
