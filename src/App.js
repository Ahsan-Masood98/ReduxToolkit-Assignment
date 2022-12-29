import "./App.css";
import { Container } from "reactstrap";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";

function App() {
  return (
    <div className="App">
      <Container>
        <ComponentA />
        <hr style={{ width: "50%", marginRight: "auto", marginLeft: "auto" }} />
        <ComponentB />
      </Container>
    </div>
  );
}

export default App;
