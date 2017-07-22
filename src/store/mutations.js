//MUTATIONS
export default {
    deleteOrder: (state, order_id) => {
        state.orders.forEach((order, i, ord_arr) => {
            if (order.id === order_id) {
                console.log(order_id);
                ord_arr.splice(i, 1);
            }
        });
    }
}