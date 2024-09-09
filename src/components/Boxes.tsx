import { useState } from "react";
import boxes from "../boxes";
import Boxe from "./Boxe";

const Boxes = () => {
  const [squares, setSquares] = useState(boxes);

  const toggle = (id: number): void => {
    console.log(` ${id} has been Clicked!`)
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : {...square};
      });
    });
  }

  const squareElements = squares.map((square) => {
    return (
      <Boxe
        key={square.id}
        id={square.id}
        on={square.on}
        toggle={toggle}
      />);
  });

  return (
    <main>
      {squareElements}
    </main>
  );
}

export default Boxes;