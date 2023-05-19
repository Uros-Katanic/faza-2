// import {
//     FETCH_PRODUCTS_SUCCESS,
//     UPDATE_PRODUCT_SUCCESS,
//     DELETE_PRODUCT_SUCCESS,
//     CREATE_PRODUCT_SUCCESS,
//   } from './actions';
  
//   const initialState = {
//     products: [],
//   };
  
//   const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case FETCH_PRODUCTS_SUCCESS:
//         return {
//           ...state,
//           products: action.payload,
//         };
//       case UPDATE_PRODUCT_SUCCESS:
//         return {
//           ...state,
//           products: state.products.map((product) =>
//             product.id === action.payload.id ? action.payload : product
//           ),
//         };
//       case DELETE_PRODUCT_SUCCESS:
//         return {
//           ...state,
//           products: state.products.filter(
//             (product) => product.id !== action.payload
//           ),
//         };
//       case CREATE_PRODUCT_SUCCESS:
//         return {
//           ...state,
//           products: [...state.products, action.payload],
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default reducer;