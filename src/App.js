import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DogDetails from "./DogDetails";
import DogList from "./DogList";
// Import images
import perry from "./assets/perry.jpg";
import duke from "./assets/duke.jpg";
import whiskey from "./assets/whiskey.jpg";
import tubby from "./assets/tubby.jpg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/dogs"
            element={<DogList dogs={App.defaultProps.dogs} />}
          />
          <Route
            path="/dogs/:name"
            element={<DogDetails dogs={App.defaultProps.dogs} />}
          />
          <Route path="/*" element={<DogList dogs={App.defaultProps.dogs} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ],
};

export default App;
