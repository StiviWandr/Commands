import React from "react";
import TableAdaptive from "./components/Table/Table";
function App() {
  const fullAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }
    function generateId(){
      return fullAlphabet[getRandomNumber(1, 52)] + getRandomNumber(1, 1000000) + fullAlphabet[getRandomNumber(1, 52)] + fullAlphabet[getRandomNumber(1, 52)];
    }
  return (
    <div className="App">
      <TableAdaptive
      key = {generateId}
      
      />
    </div>
  );
}

export default App;
