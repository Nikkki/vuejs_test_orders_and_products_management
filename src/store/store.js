import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        orders: [
            {
                id: 1,
                title: 'Ну очень длинющее название прихода, что аж не влазит в одну строчку, настолько длинное, что заняло аж 3 строки, да нет же, похоже и 3-ох строк мало',
                date: '2017-06-29 12:09:33',
                description: 'desc'
            },
            {
                id: 2,
                title: 'Order 2',
                date: '2017-06-29 12:09:33',
                description: 'desc'
            },
            {
                id: 5,
                title: 'Order 3',
                date: '2017-06-29 12:09:33',
                description: 'desc'
            }
        ],
        products: [
            {
                id: 1,
                serialNumber: 1234,
                isNew: 1,
                photo: 'pathToFile.jpg',
                title: 'Product 1',
                type: 'Monitors',
                specification: 'Specification 1',
                isWork: 'under_repair',
                guarantee: {
                    start: '2017-06-29 12:09:33',
                    end: '2017-06-29 12:09:33'
                },
                price: [
                    { value: 100, symbol: 'USD', isDefault: 0 },
                    { value: 260000000, symbol: 'UAH', isDefault: 1 }
                ],
                order: 1,
                date: '2017-06-29 12:09:33'
            },
            {
                id: 2,
                serialNumber: 1234,
                isNew: 1,
                photo: 'pathToFile.jpg',
                title: 'Product 2',
                type: 'Monitors',
                specification: 'Specification 1',
                isWork: 'under_repair',
                guarantee: {
                    start: '2017-06-29 12:09:33',
                    end: '2019-06-29 12:09:33'
                },
                price: [
                    { value: 100, symbol: 'USD', isDefault: 0 },
                    { value: 2600, symbol: 'UAH', isDefault: 1 }
                ],
                order: 2,
                date: '2017-06-29 12:09:33'
            },
            {
                id: 3,
                serialNumber: 1234,
                isNew: 0,
                photo: 'pathToFile.jpg',
                title: 'Product 3',
                type: 'Comp',
                specification: 'Specification 1',
                isWork: 'free',
                guarantee: {
                    start: '2017-06-29 12:09:33',
                    end: '2020-06-29 12:09:33'
                },
                price: [
                    { value: 100, symbol: 'USD', isDefault: 0 },
                    { value: 2600, symbol: 'UAH', isDefault: 1 }
                ],
                order: 2,
                date: '2017-06-29 12:09:33'
            },
            {
                id: 4,
                serialNumber: 1234,
                isNew: 1,
                photo: 'pathToFile.jpg',
                title: 'Product 4',
                type: 'Monitors',
                specification: 'Specification 4',
                isWork: 'under_repair',
                guarantee: {
                    start: '2017-06-29 12:09:33',
                    end: '2017-06-29 12:09:33'
                },
                price: [
                    { value: 100, symbol: 'USD', isDefault: 0 },
                    { value: 2600, symbol: 'UAH', isDefault: 1 }
                ],
                order: 5,
                date: '2017-06-29 12:09:33'
            },
            {
                id: 5,
                serialNumber: 1234,
                isNew: 1,
                photo: 'pathToFile.jpg',
                title: 'Product 5',
                type: 'Monitors',
                specification: 'Specification 1',
                isWork: 'free',
                guarantee: {
                    start: '2017-06-29 12:09:33',
                    end: '2017-06-29 12:09:33'
                },
                price: [
                    { value: 200, symbol: 'USD', isDefault: 0 },
                    { value: 2000, symbol: 'UAH', isDefault: 1 }
                ],
                order: 2,
                date: '2017-06-29 12:09:33'
            },
            {
                id: 5,
                serialNumber: 1234,
                isNew: 1,
                photo: 'pathToFile.jpg',
                title: 'Product 1',
                type: 'Monitors',
                specification: 'Specification 1',
                isWork: 'free',
                guarantee: {
                    start: '2017-06-29 12:09:33',
                    end: '2017-06-29 12:09:33'
                },
                price: [
                    { value: 0, symbol: 'USD', isDefault: 0 },
                    { value: 1340, symbol: 'UAH', isDefault: 1 }
                ],
                order: 2,
                date: '2017-06-29 12:09:33'
            }
        ],
        selected_order_products: []
    },
    getters,
    actions,
    mutations
});