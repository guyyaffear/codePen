import Container from "./components/Container";
import Editor from "./components/Editor";

function App() {
  return (
    <div className="App">
      <Container>
        <Editor />
        <Editor />
        <Editor />
        <Editor />
        <Editor />
      </Container>
    </div>
  );
}

export default App;
