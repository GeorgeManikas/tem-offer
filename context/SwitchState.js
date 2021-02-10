import SwitchContext from "./SwitchContext";
import { useReducer } from "react";
import reducer from "./reducer";

const SwitchState = ({ children }) => {
  const initialState = {
    products: [],
    currentProduct: {},
    qty: 0,
    offer: {},
    offerProducts: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SwitchContext.Provider value={{ state, dispatch }}>
      {children}
    </SwitchContext.Provider>
  );
};

export default SwitchState;
