<template>
    <div>
        <!-- MODAL WINDOW  -->
    <app-modal v-if="showModal" >
        <div slot="header">
            <p>Вы уверенны, что хотите удалить этот приход?</p>
        </div>

        <div slot="body">
            <p>
                {{ selected_order.title }}
            </p>
        </div>

        <div slot="footer">
            <button class="modal-default-button" @click="showModal = false">
                Отмена
            </button>
            <button class="modal-default-button" @click="deleteOrderAsync(selected_order)">
                Удалить
            </button>

        </div>
    </app-modal>
    <!-- -MODAL-WINDOW-END-->
    
    
    
    <main class="orders">
        <div class="orders__title">
            <span class="orders__add">+</span>
            <span class="orders__amount">Приходы / {{ amountOfOrders }}</span>
        </div>
    
        <div class="order__item" v-for="order in orders">
            <span class="order-item__title"> {{ order.title }} </span>
            <span class="order-item__prod-btn"> </span>
            <span class="order-item-amount">
                <span class="order-item-amount__amount"> {{ getOrderProducts[order.id].length }} </span>
                <span class="order-item-amount__name"> {{ correctCase(correctCase_product, getOrderProducts[order.id].length) }} </span>
            </span>
    
            <span class="order__date">
                <span class="order__date_short"> {{ getDate(order.date) }} / {{getMonth(order.date)}} </span>
                <span class="order__date_long"> {{ getDate(order.date) }} / {{getMonthName(order.date)}} / {{getYear(order.date)}}</span>
            </span>
            <span class="orders__cost">
                <span class="orders__cost_usd">
                    {{getOrderCost([order.id], 'USD')}} &#36;
                </span>
                <span class="orders__cost_uah">
                    {{getOrderCost([order.id], 'UAH')}} uah
                </span>
            </span>
    
            <span @click="clickDeleteBtn(order)" class="order-item__btn-delete">
                d
            </span>
        </div>
    </main>
    </div>
</template>

<script>

import Modal from '../additional-components/Modal.vue';


export default {
    data() {
        return {
            month_arr: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            orders: this.$store.state.orders,
            correctCase_product: ['Продукт', 'Продукта', 'Продуктов'],
            order_id: 0,
            showModal: false,
            selected_order: {}
        }
    },
    methods: {
        getDate(date) {
            var d = new Date(date);
            return d.getDate();
        },
        getMonth(date) {
            var d = new Date(date);
            return d.getMonth() + 1;
        },
        getMonthName(date) {
            var d = new Date();
            return this.month_arr[this.getMonth(date)];
        },
        getYear(date) {
            var d = new Date(date);
            return d.getYear() + 1900;
        },
        // get total product`s cost 
        getOrderCost(order_id, symbol) {
            var products = this.getOrderProducts[order_id],
                cost = 0,
                symbol_lowerCase = symbol;
            products.forEach(function (product) {
                product.price.forEach(function (each_price) { //each_price  -- obj
                    if (each_price.symbol == symbol) {
                        cost = each_price.value + cost;
                    }
                });
            });
            return cost;
        },


        // Правильный падеж
        correctCase(correctCases, amount) {
            // Отделяем последнюю цифру от количества продуктов в приходу
            var last_numeral = parseInt(amount.toString().split('').reverse()[0]);
            if (last_numeral === 1) {
                return correctCases[0];
            } else if (last_numeral >= 2 && last_numeral <= 4) {
                return correctCases[1];
            } else {
                return correctCases[2];
            }
        },
        //-------EVENTS---------
        deleteOrderAsync(order) {
            console.log(order.id);
            this.$store.dispatch('deleteOrder', order.id);
            this.showModal = false;
        },
        clickDeleteBtn(order){
           this.selected_order = order;
           this.showModal = true;
           
        }

        //-----EVENTS--END-----
    },
    computed: {
        amountOfOrders() {
            return this.$store.getters.getOrders.length;
        },
        getOrderProducts() {
            return this.$store.getters.getOrderProducts;
        }
    },	
	components: {
		'app-modal': Modal
	}
}
</script>

<style scoped>
.orders {
    display: block;
    margin: 58px 0 0 263px;
}

.orders__title {
    display: block;
    margin-bottom: 38px;
}

.orders__add {
    color: #fff;
    height: 30px;
    width: 30px;
    background-color: rgb(139, 195, 74);
    border: 5px solid rgb(125, 174, 75);
    display: inline-block;
    border-radius: 20px;
    font-size: 18px;
    text-align: center;
    line-height: 30px;
    box-shadow: 0 5px 25px rgba(222, 227, 231, 1);
    transition: all .3s ease-out;
}

.orders__add:hover {
    cursor: pointer;
    background-color: rgb(125, 174, 75);
    border: 5px solid rgb(139, 195, 74);
}

.orders__amount {
    font: 24px Arial, sans-serif;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 0 0 0 10px;
}



/*----Order styles----*/

.order__item {
    min-height: 60px;
    width: 920px;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #fff;
    border: 1px solid #cfd8dc;
    border-radius: 4px;
    font-family: Arial, Helvetica, sans-serif;
    color: #546e7a;
    margin-bottom: 10px;
    padding: 5px 0;
    transition: all .2s ease-out;
}

.order__item:hover {
    z-index: 5;
    box-shadow: 10px 10px 30px 5px rgba(222, 227, 231, .7);
}

.order-item__prod-btn {
    margin-left: 20px;
    height: 27px;
    width: 27px;
    border-radius: 20px;
    border: 1px solid #d7dee2;
    color: #526c78;
}

.order-item__title {
    margin: 0 24px 0 24px;
    width: 416px;
    text-decoration: underline;
    font-size: 18px;
}

.order-item-amount {
    margin-left: 14px;
    width: 44px;
    display: flex;
    flex-direction: column;
    text-align: left;
}

.order-item-amount__amount {
    font-size: 18px;
}

.order-item-amount__name {
    font-size: 14px;
    opacity: .6;
}

.orders__cost,
.order__date {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.order__date {
    margin-left: 37px;
}

.orders__cost {
    margin-left: 56px;
    width: 110px;
}



.order__date_long,
.orders__cost_uah {
    font-size: 15px;
    opacity: 1;
}

.order__date_short,
.orders__cost_usd {
    font-size: 13px;
    opacity: .7;
}

.order-item__btn-delete {
    width: 10px;
}

.order-item__btn-delete:hover {
    cursor: pointer;
}
</style>
