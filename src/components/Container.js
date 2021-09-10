import React from "react";
function Container({ children }) {
  return (
    <div className="pane top-pane">
      <div className={"pane"}>{children}</div>
      <iframe
        title="output"
        sandbox="allow-scripts"
        frameBorder={"0"}
        width={"100px"}
        height={"100px"}
      ></iframe>
    </div>
  );
}

export default Container;
