//ACTIONS
export default {
    deleteOrder: ({ commit, state }, order_id) => {
        commit('deleteOrder', order_id);
    },
    deleteProduct: ({ commit, state }, product_id) => {

        commit('deleteProduct', product_id);
    },
    deleteProductsByOrderId({ commit, state }, order_id)  {
        commit('deleteProductsByOrderId', order_id);
    }
};