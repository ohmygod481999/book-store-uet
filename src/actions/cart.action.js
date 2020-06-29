export const setProducts = (products) => {
    return {
        type: "SET_PRODUCT",
        payload: products,
    };
};

export const addProduct = (product) => {
    return {
        type: "ADD_PRODUCT",
        payload: product,
    };
};

export const deleteProduct = (productId) => {
    return {
        type: "DELETE_PRODUCT",
        payload: productId,
    };
};

export const toggleCart = (isOpen) => {
    return {
        type: "TOGGLE_CART",
        payload: isOpen,
    };
};
