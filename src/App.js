import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

const App_style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  // border: "1px solid red",
  // height: "100vh",
};

const headerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  margin: "20px"
};

const innerDiv_style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  margin: "10px 45px 0px" ,
  // maxHeight: "calc(100vh - 72px)",
};

function App() {
  return (
    <div className="App" style={App_style}>
      <header style={headerStyle}>
        <h1>Resume Builder</h1>
      </header>
      <div className="innerDiv" style={innerDiv_style}>
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
