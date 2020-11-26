import React, { useState, useMemo } from "react";
import { useStore, useStoreDispatch } from "./store";

//https://github.com/facebook/react/issues/15156
//https://stackoverflow.com/questions/51317371/react-context-api-and-avoiding-re-renders

//1st approach
// const Bikes = () => {
//   const { bikes } = useStore();

//   console.log("Bikes top part rerendered.");
//   return useMemo(() => {
//     console.log("Bikes rerendered inside memo");

//     // The rest of your rendering logic
//     return (
//       <div style={{ width: "200px", height: "100px" }}>
//         Bikes
//         <br />
//         {bikes.map(car => (
//           <div key={car}>{car}</div>
//         ))}
//       </div>
//     );
//   }, [bikes]);
// };
// export default Bikes;

//2nd approach
function select() {
  const { bikes } = useStore();
  return {
    bikes: bikes
  };
}

function connectToContext(WrappedComponent, select) {
  return function(props) {
    const selectors = select();
    return <WrappedComponent {...selectors} {...props} />;
  };
}

const Bikes = ({ bikes }) => {
  // The rest of your rendering logic
  return (
    <div style={{ width: "200px", height: "100px" }}>
      Bikes
      <br />
      {bikes.map(car => (
        <div key={car}>{car}</div>
      ))}
    </div>
  );
};

export default connectToContext(Bikes, select);
