

<template>
    <div>
        <!-- MODAL WINDOW  -->
        <app-modal v-if="showModal">
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
                    <icon name="trash"></icon> Удалить
                </button>
    
            </div>
        </app-modal>
        <!-- -MODAL-WINDOW-END-->
    
        <!--  -->
    
        <!--  -->
    
        <main class="orders">
            <div class="orders__title">
                <span class="orders__add">&#43;</span>
                <span class="orders__amount">Приходы / {{ amountOfOrders }}</span>
            </div>
    
            <div class="b-order-product">
                                
            <!-- 
                Список приходов 
                -->
                
                <transition-group name="slide-fade2" tag="div"> <!-- Анимация списка заказов --> 
                    <div class="order__item" v-for="order in orders" v-bind:key="order.id">
    
                        <transition name="slide-fade">
                            <span v-if="!showOrderProductsBoolean" class="order-item__title"> {{ order.title }} </span>
                        </transition>
    
                        <span class="order-item__prod-btn" @click="showOrderProducts(order)">
                            <icon name="list-ul"></icon>
                        </span>
    
                        <span class="order-item-amount">
                            <span class="order-item-amount__amount"> {{ getOrderProducts[order.id].length }} </span>
                            <span class="order-item-amount__name"> {{ correctCase(correctCase_product, getOrderProducts[order.id].length) }} </span>
                        </span>
    
                        <span class="order__date">
                            <span class="order__date_short"> {{ getDate(order.date) }} / {{getMonth(order.date)}} </span>
                            <span class="order__date_long"> {{ getDate(order.date) }} / {{getMonthName(order.date)}} / {{getYear(order.date)}}</span>
                        </span>
                        <transition name="slide-fade">
                            <span v-if="!showOrderProductsBoolean" class="orders__cost">
                                <span class="orders__cost_usd">
                                    {{getOrderCost([order.id], 'USD')}} &#36;
                                </span>
                                <span class="orders__cost_uah">
                                    {{getOrderCost([order.id], 'UAH')}} uah
                                </span>
                            </span>
                        </transition>
                        <transition name="slide-fade">
                            <span v-if="!showOrderProductsBoolean" @click="clickDeleteBtn(order)" class="order-item__btn-delete">
                                <icon name="trash"></icon>
                            </span>
                        </transition>

                        <transition name="order-active-arrow">
                            <span class="orders__active-arrow" v-if="showOrderProductsBoolean">
                                <icon name="chevron-right"></icon>
                            </span>
                        </transition>
    
                    </div>
                </transition-group>
                <!-- КОНЕЦ Список приходов -->

                <!-- 
                    Список продуктов 
                    -->
                <transition name="slide-products">
                    <div v-if="showOrderProductsBoolean" class="order-products">
                        <!-- 
                            Header списка продуктов  
                            -->
                        <button class="close-btn" @click="closeProductsBtn">
                            <icon name="close"></icon>
                        </button>
                        <header>
                            <h3 class="header__title">{{ this.selected_order.title }}</h3>
        
                            <div class="header__add-product">
                                <span class="header__add-sign">&#43;</span>
                                <i class="header__add-text">Добавить продукт</i>
                            </div>
                        </header>
                        <!-- КОНЕЦ Header списка продуктов    -->
                        
                        
                        <app-order-products v-for="product in this.selected_order_with_products" v-bind:key="product.id"
                        @closeBtn="closeProductsBtn" 
                        v-bind:productName="product.title" 
                        v-bind:productSpecification="product.specification"
                        v-bind:isWork="product.isWork"
                        >
                        </app-order-products>
                    </div>
                </transition>
                
                    <!-- Список продуктов КОНЕЦ-->
            </div>
    
        </main>
    </div>
</template>

<script>

import Modal from '../additional-components/Modal.vue';
import Icon from 'vue-awesome/components/Icon.vue';
import OrderProducts from './OrderProducts.vue';


import 'vue-awesome/icons/list-ul';
import 'vue-awesome/icons/trash';
import 'vue-awesome/icons/close';
import 'vue-awesome/icons/chevron-right';



export default {
    data() {
        return {
            month_arr: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            orders: this.$store.state.orders,
            correctCase_product: ['Продукт', 'Продукта', 'Продуктов'],
            order_id: 0,
            showModal: false,
            showOrderProductsBoolean: false,
            selected_order: {},
            selected_order_with_products: {}
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
        //  подсчет стоимости всех продуктов 
        getOrderCost(order_id, symbol) {
            // выборка продуктов из прихода
            var products = this.getOrderProducts[order_id],
                cost = 0,
                symbol_lowerCase = symbol;

            products.forEach(function (product) {
                //подсчет суммы в конкретной валюте 
                product.price.forEach(function (each_price) { //each_price  -- obj
                    if (each_price.symbol == symbol) {
                        cost = each_price.value + cost;
                    }
                });
            });
            return cost;
        },

        closeProductsBtn() {
            this.showOrderProductsBoolean = false;
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
            this.$store.dispatch('deleteOrder', order.id);
            this.showModal = false;
        },
        clickDeleteBtn(order) {
            this.selected_order = order;
            this.showModal = true;
        },
        //возвращаем продукты конкретного прихода
        showOrderProducts(order) {
            let orderProducts = this.getOrderProducts,
                id = order.id;
            this.order_id = id;
            if (!this.showOrderProductsBoolean) {
                // меняем эту переменную, чтобы блок с прихода сузился
                this.showOrderProductsBoolean = true;
            }
            if (orderProducts[id]) {
                this.selected_order = order;
                this.selected_order_with_products = orderProducts[id];
                return orderProducts[id];
            }
        },


        //-----EVENTS--END-----
    },
    computed: {
        amountOfOrders() {
            return this.$store.getters.getOrders.length;
        },
        getOrderProducts() {
            return this.$store.getters.getOrdersProductsObj;
        }
    },
    watch: {
        order_id: function(value){
            console.log(value);
        },
        showOrderProductsBoolean: function (value) {
            let order_items = document.getElementsByClassName("order__item");
            //setTimeout нужен для анимации
            setTimeout(() => {
                if (value) {
                    for (let ord of order_items) {
                        ord.style.width = '320px';
                    }
                }
            }, 300);
            if (!value) {
                for (let ord of order_items) {
                    ord.style.width = '920px';
                }
            }
            //-------------
        }
    },
    components: {
        'app-modal': Modal,
        'icon': Icon,
        'app-order-products': OrderProducts
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





.b-order-product {
    display: flex;
    flex-direction: row;
    width: 940px;
    align-items: baseline;
}


/*----Order styles----*/

.order__item {
    min-height: 60px;
    width: auto;
    width: 920px;
    overflow: hidden;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transition: all .2s ease-out;
}

.order-item__prod-btn:hover {
    cursor: pointer;
    box-shadow: 0 0 10px rgba(222, 227, 231, 1);
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
    justify-content: flex-start;
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
    margin-left: 46px;
    width: 110px;
    text-align: left
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
    margin-left: 10px;
}

.order-item__btn-delete:hover {
    cursor: pointer;
}

.orders__active-arrow{
    position: absolute;
    color: #fff;
    height: 70px;
    width: 40px;
    right: 0px;
    line-height: 75px;
    text-align: center;
    background-color: #cfd8dc;
}

.order-active-arrow-enter-active{
    transition: all .3s ease-out .45s;
}
.order-active-arrow-leave-active{
    transition: all .3s ease-out;
}
.order-active-arrow-leave,
.order-active-arrow-enter-to{
    right: 0;
}
.order-active-arrow-leave-to,
.order-active-arrow-enter{
    right: -40px;
}




/* ----VUE----ANIMATION----  */


/* Animation order`s info */

.slide-fade-enter-active {
    transition: all .3s ease .3s;
    max-height: 110px;
}

.slide-fade-leave-active {
    transition: all .3s ease;
}

.slide-fade-enter-active .order-item__title {
    display: none;
    /*Убираем название прихода 
                     до полного выезжания строки с полной инфо о заказе*/
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}





/*END  Animation order`s info */


/* Animation of order deleting */

.slide-fade2-leave-active {
    transition: all .3s ease-out;
}

.slide-fade2-leave {
    transform: scaleY(1);
}

.slide-fade2-leave-to {
    transform: scaleY(0);
}



/* Animation of order deleting END */


/*  ---------PRODUCTS-----  */

.order-products {
    top: 6px;
    width: 600px;
    display: inline-block;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #dfe3e6;
    position: relative;
}

.close-btn {
    outline: 0;
    height: 30px;
    width: 30px;
    position: absolute;
    top: -15px;
    right: -15px;
    color: #9da3a8;
    background-color: #fff;
    border: 0;
    border-radius: 20px;
    font-weight: normal;
    box-shadow: 2px 3px 7px 2px rgba(197, 201, 204, .8);
}

header {
    padding: 14px 10px 10px 32px;
}

.header__title {
    line-height: 18px;
    font: 18px Arial, sans-serif;
    font-weight: bold;
}

.header__add-sign {
    color: #fff;
    line-height: 20px;
    display: inline-block;
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 10px;
    background-color: #8bc34a;
}

.header__add-text {
    color: #8bc34a;
    font: 12px Arial, sans-serif;
}

/*  ------END---PRODUCTS-----  */
.slide-products-enter-active{
    transition: all .3s ease-out .3s;
    display: none;
}
/*  */
.slide-products-leave {
    display: none;
}

</style>
