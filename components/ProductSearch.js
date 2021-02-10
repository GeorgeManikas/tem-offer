import React, { useEffect, useContext, useState, useRef } from "react";
import SwitchContext from "../context/SwitchContext";
import { SET_CURRENT_PRODUCT, CLEAR_PRODUCT } from "../context/types";

import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";

const ProductSearch = () => {
  const ref = useRef();
  const { state, dispatch } = useContext(SwitchContext);

  const handleChange = (e, nV) => {
    if (nV) {
      const fetcher = async () => {
        const res = await fetch(`/api/products?id=${parseInt(nV.id)}`);
        const data = await res.json();
        dispatch({ type: SET_CURRENT_PRODUCT, payload: data }); // then add current product to project
      };
      fetcher();
    }
  };

  useEffect(() => {
    ref.current.focus();
  }, [state.offerProducts.length]);

  return (
    <Autocomplete
      id="product_search"
      options={state.products}
      getOptionLabel={(option) =>
        option ? option.code + " " + option.description : ""
      }
      onChange={(e, nv) => handleChange(e, nv)}
      noOptionsText={"προϊόν"}
      renderInput={(params) => (
        <TextField inputRef={ref} {...params} variant="outlined" />
      )}
    ></Autocomplete>
  );
};

export default ProductSearch;
