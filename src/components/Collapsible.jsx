import { React, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const box_style = {
  minHeight: "8vh",
  width: "100%",
  backgroundColor: "black",
  color: "white",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

const innerBox_style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "90%",
};

const icon_style = {
  color: "white",
  fontSize: "extra-large",
  cursor: "pointer",
  transition: "transform 0.5s ease",
};

const collapsed_style = {
  transition: "max-height .5s ease-in",
  overflow: "hidden",
  maxHeight: "0",
};

const expanded_style = {
  transition: "min-height .5s ease-out",
  minHeight: "300px",
  maxHeight: "300px",
  overflowY: "auto",
};

function Collapsible(props) {
  const [expanded, setExpanded] = useState(false);

  const toggleCollapse = () => {
    setExpanded(!expanded);
  };

  const currentStyle = {
    ...(expanded ? expanded_style : collapsed_style),
  };

  const iconRotationStyle = {
    ...icon_style,
    transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
  };

  return (
    <>
      <div style={box_style}>
        <div style={innerBox_style}>
          {props.name}
          {<ExpandMoreIcon sx={iconRotationStyle} onClick={toggleCollapse} />}
        </div>
      </div>
      <div style={currentStyle}>
        <div className={props.className}>{props.children}</div>
      </div>
    </>
  );
}

export default Collapsible;
