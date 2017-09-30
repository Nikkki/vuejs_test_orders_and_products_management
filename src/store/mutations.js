//MUTATIONS
export default {
    deleteOrder: (state, order_id) => {
        state.orders.forEach((order, i, ord_arr) => {
            if (order.id === order_id) {
                ord_arr.splice(i, 1);
                return;
            }
        });
    },
    deleteProduct: (state, product_id) => {
        state.products.forEach((product, i, products_arr) => {
            if (product.id === product_id) {
                products_arr.splice(i, 1);
                return;
            }
        });
    },
    deleteProductsByOrderId: (state, order_id) => {
        let products = state.products;
        for (var i = 0; i < products.length; i++) {
                if(products[i].order === order_id){
                    state.products.splice(i, 1);
                    i--;
                }
        }
    }
};