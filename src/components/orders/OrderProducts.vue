<template>
    <!--fa-times  -->
    <div class="order-product">
        
            <span class="product__is-work-sign">
                <slot name="is-work-sign"></slot>
            </span>
            <span class="product__img">
                <slot name="product-img"></slot>
            </span>
            <div class="product-title">
                <span class="product__name">
                    {{productName}}
                </span>
                <span class="product__specification">
                    {{productSpecification}}
                </span>
            </div>
    
            <span class="product__is-work-name">
                <slot name="is-work-name"></slot>
            </span>
            <button class="trash-btn">
                <icon name="trash"></icon>
            </button>
    </div>
</template>

<script>

import Icon from 'vue-awesome/components/Icon.vue';

import 'vue-awesome/icons/trash';
export default {
    data: function(){
        return {
            closeBtnData: ''
        }
    },
    methods: {
        closeBtn: function() {
            this.$emit('closeBtn', this.closeBtnData);
        }
    },
    props:[
        'productName',
        'productSpecification'
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
    padding: 5px 30px 5px 25px;
}

.order-product:hover {

    z-index: 5;
    box-shadow: 10px 10px 30px 5px rgba(222, 227, 231, .7);
}

.order-product:last-child{
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;    
}

.product__is-work-sign{
    margin-left: 28px;
    width: 6px;
}
.product__img{
    margin-left: 18px;
    width: 39px;
}
.product-title{
    margin-left: 16px;
    width: 304px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    font: 15px Arial,sans-serif;
}
.product__name{
    color: #2c3c44;
    text-decoration: underline;
}
.product__specification{
    color: #99abb4;
}
.product__is-work-name{
    margin-left: 14px;
    width: 89px;
}
.trash-btn{
    margin-left: 52px;
    width: 10px;
    color: #90a4ae;
    background-color: #fff;
    border: 0;
    outline: 0;
}
</style>
