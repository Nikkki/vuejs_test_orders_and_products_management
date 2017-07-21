<template>
    <nav class="menu-nav">
        <div class="menu-nav__photo">

        </div>
        <ul>
            <li class="menu-nav__item"><router-link to="orders">приход</router-link></li>
            <li class="menu-nav__item">группы</li>
            <li class="menu-nav__item">
                <router-link to="products">продукты</router-link>
            </li>
            <li class="menu-nav__item">пользователи</li>
            <li class="menu-nav__item">настройки</li>
        </ul>
    </nav>
</template>

<script>
    export default {
    


    };
    
</script>


<style scoped>
    .menu-nav{
        margin-top: -15px; 
        display: block;
        width: 200px;
        min-height: 100vh;
        max-height: 100%;
        background-color: #fff;
        -webkit-box-shadow: 8px 0 25px 5px rgba(222,227,231,.6);
        -moz-box-shadow: 8px 0 25px 5px rgba(222,227,231,.6);
        box-shadow: 8px 0 25px 5px rgba(222,227,231,.6);
        z-index: 5;
        float: left;
    }
</style>
