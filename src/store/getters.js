//GETTERS
export default {
    getOrders: state => {
        return state.orders;
    },
    //возвращает объект, в котором название свойства - это id прихода, 
    //а значение - массив с продуктами 
    getOrdersProductsObj: state => {
        let order_products = {};
        state.orders.forEach(order => {
            order_products[order.id] = [];
        });
        
        state.products.forEach(product => {
            if(order_products[product.order]){
                order_products[product.order].push(product);
            }

        });
        return order_products;
    },
    // возвращает объект прихода по id 
    getOrder: state => (order_id) =>{
        return state.orders.find(order => order.id === order_id)
    },
    getProducts: state =>{
        return state.products;
    },
    getAmountProducts: state => {
        return state.products.length;
    }    
}