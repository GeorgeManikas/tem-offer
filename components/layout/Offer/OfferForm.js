import React, { useState, useEffect, useContext } from "react";
import SwitchContext from "../../../context/SwitchContext";
import {
  FETCH_PRODUCTS,
  SET_QUANTITY,
  CREATE_OFFER,
  ADD_OFFER_ITEM,
} from "../../../context/types";
import ProductSearch from "../../ProductSearch";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Grid, Paper } from "@material-ui/core";
import OfferItems from "./OfferItems";

const OfferForm = () => {
  const { state, dispatch } = useContext(SwitchContext);
  const [loaded, setLoaded] = useState(false);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    const fetch_products = async () => {
      const res = await fetch(`/api/products`);
      const data = await res.json();
      dispatch({ type: FETCH_PRODUCTS, payload: data });
    };
    const create_offer = async () => {
      const offer_response = await fetch(
        `/api/offer/newoffer?description=test2`
      );
      const offer = await offer_response.json();
      dispatch({ type: CREATE_OFFER, payload: offer });
    };
    fetch_products();
    if (!state.offer.id) {
      create_offer();
    }
    setLoaded(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const item_response = await fetch(
      `/api/offer/additem?offer=${state.offer.id}&product=${state.currentProduct[0].id}&qty=${qty}`,
      { method: "POST", headers: { "content-type": "Application/json" } }
    );
    const item = await item_response.json();

    await dispatch({ type: ADD_OFFER_ITEM, payload: item });
  };

  return (
    <Paper square elevation={4} style={{ width: "97%", margin: "auto" }}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid
          container
          spacing={1}
          justify="center"
          align="center"
          style={{ padding: "0.2rem" }}
        >
          <Grid item xs={8}>
            {loaded && <ProductSearch />}
          </Grid>
          <Grid item xs={2}>
            <TextField
              type="number"
              id="gty"
              label="ποσότητα"
              value={qty}
              onChange={(e) => {
                setQty(e.target.value);
                dispatch({ type: SET_QUANTITY, payload: e.target.value });
              }}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              disabled={qty <= 0}
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              style={{ height: "100%" }}
            >
              προσθήκη
            </Button>
          </Grid>
        </Grid>
      </form>
      <br />
      <Grid item xs={12}>
        {state.offerProducts.length > 0 && <OfferItems />}
      </Grid>
    </Paper>
  );
};

export default OfferForm;
