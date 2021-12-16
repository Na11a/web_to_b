const defaultState = {
  order: [],
};

const ADD_PRODUCT = "ADD_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const cardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log(state.order);
      if (!state.order.find((product) => product.id === action.payload.id)) {
        return { ...state, order: [...state.order, action.payload] };
      }
      return { ...state };
    case DELETE_PRODUCT:
      return {
        ...state,
        order: state.order.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
export default cardReducer;
export const addProduct = (payload) => ({ type: ADD_PRODUCT, payload });
export const deleteProduct = (payload) => ({ type: DELETE_PRODUCT, payload });
