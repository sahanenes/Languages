import "./App.css";
import Card from "./components/card/Card";
import { languages } from "./helper/data";

function App() {
  return (
    <div className="wrapper">
      <h1>Languages</h1>
      <div className="App">
        {languages.map((languages, index) => {
          return <Card key={index} languages={languages} />;
        })}
      </div>
    </div>
  );
}

export default App;
