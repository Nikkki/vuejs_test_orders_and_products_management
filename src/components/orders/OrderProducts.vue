<template>
    <!--fa-times  -->
    <div class="order-product">
        <!-- В это длинном :class мы определяем статус работы продукта, 
            и вставляем соответсвующий класс, который отвечает за цвет -->
        <span class="product__is-work-sign" :class="isWorkClass(watch_work_status)">
            <icon name="circle" class="fa-icon-circle"></icon>
        </span>
        <span class="product__img">
            <img src="dist/img/monitor.png">    
        </span>
        <div class="product-title">
            <span class="product__name">
                {{productName}}
            </span>
            <span class="product__specification">
                {{productSpecification}}
            </span>
        </div>
    
        <span class="product__is-work-name" :class="isWorkClass(watch_work_status)">
            {{ workName(watch_work_status) }}
        </span>
        <button class="trash-btn">
            <icon name="trash"></icon>
        </button>
    </div>
</template>

<script>

import Icon from 'vue-awesome/components/Icon.vue';

import 'vue-awesome/icons/trash';
import 'vue-awesome/icons/circle';

export default {
    data: function () {
        return {

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
            watch_work_status: this.$props.isWork
        }
    },
    methods: {
        isWorkClass(work_status) {
            if (work_status === 'free') {
                return this.work_status.is_free.className;
            } else if (work_status === 'under_repair') {
                return this.work_status.under_repair.className;
            } else if (work_status === 'is_work') {
                return this.work_status.is_work.className;
            } else {
                return this.work_status.unknown.className;
            }
        },
        workName(work_status) {
            if (work_status === 'free') {
                return this.work_status.is_free.name;
            } else if (work_status === 'under_repair') {
                return this.work_status.under_repair.name;
            } else if (work_status === 'is_work') {
                return this.work_status.is_work.name;
            } else {
                return this.work_status.unknown.name;
            }
        }
    },
    props: [
        'productName',
        'productSpecification',
        'isWork'
    ],
    components: {
        'icon': Icon
    }
}
</script>

<style scoped>
.order-product {
    width: 545px;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-top: 1px solid #dfe3e6;
    position: relative;
    padding: 7px 30px 7px 25px;
}

.order-product:hover {
    z-index: 5;
    transform: translateY(-2px);
    box-shadow: 10px 10px 30px 5px rgba(222, 227, 231, .7);
    transition: all .2s ease-out;
}

.order-product:last-child {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
}

.product__is-work-sign {
    margin-left: 11px;
    width: 6px;
}
.fa-icon-circle{
    width: 10px;
}

.product__img {
    margin-left: 22px;
    width: 39px;
}


.product__img img {
    width: 39px;
}

.product-title {
    margin-left: 20px;
    width: 304px;
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

.trash-btn {
    margin-left: 25px;
    width: 10px;
    color: #90a4ae;
    background-color: #fff;
    border: 0;
    outline: 0;
}
</style>
