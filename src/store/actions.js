//ACTIONS
export default {
    deleteOrder: ({ commit,state }, order_id) => {
        commit('deleteOrder', order_id);
    }
}