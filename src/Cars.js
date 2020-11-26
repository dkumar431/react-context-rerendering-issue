import React, { useState } from "react";
import { useStore, useStoreDispatch } from "./store";

const Cars = () => {
  console.log("Cars rerendered.");
  const { cars } = useStore();
  const dispatch = useStoreDispatch();

  const [newcar, setNewCar] = useState("");
  return (
    <div style={{ width: "200px", height: "100px" }}>
      {cars.map(car => (
        <div key={car}>{car}</div>
      ))}
      <input
        type="text"
        value={newcar}
        onChange={e => setNewCar(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADD_CAR", payload: newcar });
          setNewCar("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Cars;
