import {
  FETCH_PRODUCTS,
  SET_CURRENT_PRODUCT,
  CLEAR_PRODUCT,
  SET_QUANTITY,
  CREATE_OFFER,
  FETCH_OFFER_PRODUCTS,
  ADD_OFFER_ITEM,
  REMOVE_OFFER_ITEM,
} from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload,
      };
    case CLEAR_PRODUCT:
      return {
        ...state,
        currentProduct: {},
      };
    case SET_QUANTITY:
      return {
        ...state,
        quantity: action.payload,
      };
    case CREATE_OFFER:
      return {
        ...state,
        offer: action.payload,
      };

    case FETCH_OFFER_PRODUCTS:
      return {
        ...state,
        offerProducts: action.payload,
      };
    case ADD_OFFER_ITEM:
      return {
        ...state,
        offerProducts: [...state.offerProducts, action.payload],
      };
    case REMOVE_OFFER_ITEM:
      return {
        ...state,
        offerProducts: state.offerProducts.filter(
          (product) => product.id !== action.payload
        ),
      };

    default:
      throw new Error("Invalid Action Type Fed ... ");
  }
};

export default reducer;
