import React, { useEffect, useState, useContext } from "react";
import SwitchContext from "../../../context/SwitchContext";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Delete } from "@material-ui/icons";
import { REMOVE_OFFER_ITEM } from "../../../context/types";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "80%",
    // margin: "auto",
    // padding: "0.6rem",
  },
  tb: {
    // margin: "0.2rem",
    width: "60%",
    position: "relative",
  },
  tbhead: {
    background: theme.palette.primary.dark,
    "& > .MuiTableCell-head": {
      color: "white",
    },
  },
  total: {
    fontWeight: "800",
    marginRight: "1rem",
    background: "rgba(0,0,0,0.4)",
    color: "green",
    fontSize: "1.2rem",
  },
}));

const OfferItems = () => {
  const { state, dispatch } = useContext(SwitchContext);
  const classes = useStyles();

  const [total, setTotal] = useState(0);
  useEffect(() => {
    const fetchTotals = async () => {
      const total_res = await fetch(
        `/api/offer/offertotal?id=${state.offer.id}`
      );
      const totals = await total_res.json();

      await setTotal(parseFloat(totals[0].sum).toFixed(2));
    };
    if (state.offerProducts.length > 0) {
      fetchTotals();
    }
  }, [state.offerProducts.length]);

  const handleDelete = async (id) => {
    const res = await fetch(`/api/offer/deleteitem?id=${id}`);
    dispatch({ type: REMOVE_OFFER_ITEM, payload: id });
  };

  return (
    <Paper>
      <Table
        className={classes.paper}
        style={{ margin: "auto", overflowX: "auto" }}
      >
        <TableHead>
          <TableRow className={classes.tbhead}>
            <TableCell>Κωδικός </TableCell>
            <Hidden smDown>
              <TableCell>Τιμή τμχ </TableCell>
            </Hidden>
            <TableCell>Ποσότητα </TableCell>
            <TableCell></TableCell>
            <TableCell>Τιμή </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.offerProducts.map((row) => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.product_offer_productToproduct.code}
                </TableCell>
                <Hidden smDown>
                  <TableCell component="th" scope="row">
                    {row.product_offer_productToproduct.price}
                  </TableCell>
                </Hidden>
                <TableCell component="th" scope="row">
                  {row.quantity}
                </TableCell>
                <TableCell component="th" scope="row">
                  <IconButton onClick={() => handleDelete(row.id)}>
                    <Delete style={{ color: "red" }} />
                  </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                  {parseFloat(
                    row.quantity * row.product_offer_productToproduct.price
                  ).toFixed(2)}
                </TableCell>
              </TableRow>
            );
          })}
          <TableRow>
            <TableCell></TableCell>
            <Hidden smDown>
              <TableCell></TableCell>
            </Hidden>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell className={classes.total}>{total} </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default OfferItems;
