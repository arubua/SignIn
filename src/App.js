import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="gradient outer">
        <div className="middle">
          <div className="inner">
            <SignUp />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
