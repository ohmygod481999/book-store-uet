import { toast } from "react-toastify";

const initialState = {
    products: [],
    isOpen: false,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            for (let product of state.products) {
                if (product.id === action.payload.id) {
                    toast["error"]("Sản phẩm đã tồn tại");
                    return state;
                }
            }
            const newProducts = [...state.products];
            newProducts.push(action.payload);
            toast["success"]("Thêm sản phẩm vào giỏ thành công");
            return {
                ...state,
                products: newProducts,
            };
            break;
        case "DELETE_PRODUCT":
            return {
                ...state,
                products: state.products.filter(
                    (product) => product.id !== action.payload
                ),
            };
            break;
        case "TOGGLE_CART":
            return {
                ...state,
                isOpen: action.payload ? action.payload : !state.isOpen,
            };
            break;
        case "SET_PRODUCT":
            return {
                ...state,
                products: [...action.payload],
            };
            break;

        default:
            return state;
            break;
    }
};

export default cartReducer;
