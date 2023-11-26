import { Editor } from "./components/Editor";

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
  margin: "20px",
};

function App() {
  return (
    <div className="App" style={App_style}>
      <header style={headerStyle}>
        <h1>Resume Builder</h1>
      </header>
      <Editor />
    </div>
  );
}

export default App;
