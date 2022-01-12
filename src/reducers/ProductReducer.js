import types from "../types";

const initialProductsState = {
    products:[
        {id:1, title:"Product #1"},
        {id:2, title:"Product #2 "}
    ],
    cart :[
        {id:1, title:"Product #1", quantity:1}
    ],
    activeProduct: {id:2, title:"Product #2"}
}

const productReducer = (state, action) => {
  switch(action.type){
      case types.productShow:
          return  {
              ...state,
              activeProduct: action.payload
          }
      case types.productAddToCart:
          return  {
              ...state,
              cart:[
                   ...state.cart,
                    action.payload
              ]
          }
      default:
        return state;
  }
};
export {initialProductsState}
export default productReducer;
