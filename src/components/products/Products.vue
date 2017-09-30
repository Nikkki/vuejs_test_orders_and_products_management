<template>
    <div>
        <!--HEADER  -->
        <div class="products__header">
            <span class="products__amount">Продукты / {{ filteredProducts.length }}</span>
            <!--  FILTERS  -->
            <span class="products__filter">
                <span class="products-filter__name">Тип:</span>
                <select v-model="selected_filter_option" class="products-filter__select">
                    <option class="products-filter__option" :key="option.id" v-for="option in prod_filter_option" v-bind:value="option.value">
                        {{ option.text }}
                    </option>
                </select>
                <!-- END FILTERS  -->
            </span>
        </div>
        <!-- END HEADER  -->
        <div class="products">
            <div class="product__item" :key="product.id" v-for="product in filteredProducts">
    
                <span class="product__is-work-sign" :class="isWorkClass(product.isWork)">
                    <icon name="circle" class="fa-icon-circle"></icon>
                </span>
                <span class="product__img">
                    <img src="dist/img/monitor.png">
                </span>
                <div class="product-title">
                    <span class="product__name">
                        {{product.title}}
                    </span>
                    <span class="product__specification">
                        {{ product.specification }}
                    </span>
                </div>
                <span class="product__is-work-name" :class="isWorkClass(product.isWork)">
                    {{ workName(product.isWork) }}
                </span>
                <div class="product-guarantee">
                    <span class="product-guarantee__start">
                        c {{ getDate(product.guarantee.start) }} / {{ getMonth(product.guarantee.start) }} / {{ getYear(product.guarantee.start) }}
                    </span>
                    <span class="product-guarantee__end">
                        по {{ getDate(product.guarantee.end) }} / {{ getMonth(product.guarantee.end) }} / {{ getYear(product.guarantee.end) }}
                    </span>
                </div>
                <div class="product-novelty">
                    {{ productNovelty(product.isNew) }}
                </div>
                <span class="products__cost">
                    <span class="products__cost_usd">
                        {{ product.price[0].value }} &#36;
                    </span>
                    <span class="products__cost_uah">
                        {{ product.price[1].value }} uah
                    </span>
                </span>
                <!-- СО СЛЕДУЮЩИМИ ПАРАМЕТРАМИ ПОЛУЧАЕТСЯ БЕСКОНЕЧНЫЙ ЦИКЛ И НЕ ПОНЯТНО ПОЧЕМУ,
                МОЖЕТ ВОТЧЕР ЗАЦИКЛИВАЕТСЯ ЧТО ЛИ   -->
                  <span class="order-name" >
                    {{getOrder(product.order).title}}
                </span>  
    
                 <span class="order__date">
                    <span class="order__date_short"> {{ getDate(getOrder(product.order).date) }} / {{getMonth(getOrder(product.order).date)}} </span>
                    <span class="order__date_long"> {{ getDate(getOrder(product.order).date) }} / {{getMonthName(getOrder(product.order).date)}} / {{getYear(getOrder(product.order).date)}}</span>
                </span>  
                <!-- ////////   -->
                <button class="trash-btn">
                    <icon name="trash"></icon>
                </button>
    
            </div>
        </div>
    </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon.vue';

import 'vue-awesome/icons/circle';
import 'vue-awesome/icons/trash';



export default {
    data() {
        return {
            products: this.$store.getters.getProducts,
            selected_order: {},
            month_arr: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            work_status: {
                is_work: {
                    className: 'is_work',
                    name: 'В работе'
                },
                is_free: {
                    className: 'is_free',
                    name: 'Свободен'
                },
                under_repair: {
                    className: 'under_repair',
                    name: 'В ремонте'
                },
                unknown: {
                    className: 'unknown',
                    name: 'Неизвестно'
                }
            },

            selected_filter_option: 'All',
            prod_filter_option: [
                { text: 'Все', value: 'All', id:  Math.random()},
                { text: 'Мониторы', value: 'Monitors', id: Math.random()}
            ],
            orders: []
        }

    },

    methods: {
        productNovelty(status) {
            if (status === 1) {
                return 'Новый';
            } else if (status === 0) {
                return 'Б / y';
            } else {
                return 'Неизвестно';
            }
        },
        getDate(date) {
            return new Date(date).getDate();
        },
        getMonth(date) {
            return new Date(date).getMonth() + 1;
        },
        getMonthName(date) {
            return this.month_arr[this.getMonth(date)];
        },
        getYear(date) {
            return new Date(date).getYear() + 1900;
        },

        isWorkClass(work_status) {
            let workStatus = this.work_status;
            switch (work_status) {
                case 'free':
                    return workStatus.is_free.className;                    
                case 'under_repair':
                    return workStatus.under_repair.className;
                case 'is_work':
                    return workStatus.is_work.className;
                default:
                    return workStatus.unknown.className;
            }
        },
        workName(work_status) {
            let workStatus = this.work_status;
            switch (work_status) {
                case 'free':
                    return workStatus.is_free.name;                    
                case 'under_repair':
                    return workStatus.under_repair.name;
                case 'is_work':
                    return workStatus.is_work.name;
                default:
                    return workStatus.unknown.name;
            }
        },

        getOrder(order_id) {
            if(this.selected_order.id === order_id){
                return this.selected_order;
            };
            this.orders.forEach(order => {
                if(order.id === order_id){
                    this.selected_order = order;
                    return order;
                }  
            });
             return this.selected_order;
        }
    },

    computed: {
        getAmountProducts: function () {
            return this.$store.getters.getAmountProducts
        },
        // Функция фильтрации продуктов по типу продукта
        filteredProducts: function () {
            let select_filter = this.selected_filter_option;
            return this.products.filter(function (product) {
                if (select_filter === 'All') {
                    return product
                }
                if (product.type === select_filter) {
                    return product
                }
            })
        }

    },
    beforeCreate() {
        this.orders = () => {
            return this.$store.getters.getOrders;
        }
    },
    components: {
        Icon
    }
}
</script>
    
<style  scoped>
@media only screen and (min-width: 1100px) {
    .products {
    width: 920px;        
    }
}
.products {
    display: block;
    margin: 58px 0 0 263px;
    overflow-x: scroll;
}

.products__header {
    display: block;
    margin-bottom: 38px;
    margin: 58px 0 0 263px;
}

.products__amount {
    font: 24px Arial, sans-serif;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 0 0 0 10px;
}






/* FILTERS */

.products__filter {
    margin-left: 35px;
}

.products-filter__name {
    font: 13px Arial, sans-serif;
    color: #96a9b2;
}

.products-filter__select {
    width: 150px;
    outline: 0;
    border-radius: 4px;
    border: 1px solid #dae1e4;
    padding: 3px;
    font: 14px Arial, sans-serif;
    font-weight: bold;
}

.products-filter__option {
    font: 14px Arial, sans-serif;
}

/* END FILTERS */



.product__item {
    min-height: 60px;
    width: auto;
    width: 1250px;
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
    padding: 5px 15px;
    transition: all .2s ease-out;
}

.order__item:hover {
    z-index: 5;
    box-shadow: 10px 10px 30px 5px rgba(222, 227, 231, .7);
}

.product__is-work-sign {
    width: 20px;
    margin-left: 20px;
}

.fa-icon-circle{
    width: 10px;
}

.product__img{
    width: 100px;
    margin-left: 28px;
}

.product__img img{
    width: 65px;

}

.product-title {
    margin-left: 10px;
    width: 240px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    font: 15px Arial, sans-serif;
}

.product__name {
    color: #2c3c44;
    margin-bottom: 3px;
    text-decoration: underline;
}

.product__specification {
    color: #99abb4;
    font-size: 14px;
}

.product__is-work-name {
    margin-left: 14px;
    width: 100px;
}

.product-novelty {
    margin-left: 20px;
    width: 80px;
}

.is_work {
    color: #409e11;
}

.is_free {
    color: #cddc39;
}

.under_repair {
    color: #2f3f47;
}

.unknown {
    color: #e0143f;
}

.product-guarantee {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 120px;
    margin-left: 25px;
}










/* ORDER COST */

.products__cost,
.order__date {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.order__date {
    margin-left: 20px;
}

.products__cost {
    margin-left: 20px;
    width: 110px;
    text-align: left
}

.order__date_long,
.products__cost_uah {
    font-size: 15px;
    opacity: 1;
}

.order__date_short,
.products__cost_usd {
    font-size: 13px;
    opacity: .7;
}










/* END ORDERS COST */

.order-name {
    margin-left: 30px;
    width: 250px;
    text-decoration: underline;
}

.trash-btn {
    margin-left: 25px;
    width: 20px;
    color: #90a4ae;
    background-color: #fff;
    border: 0;
    outline: 0;
}
</style>
    
