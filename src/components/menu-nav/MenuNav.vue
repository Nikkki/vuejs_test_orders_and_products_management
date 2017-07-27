<template>
    <nav class="menu-nav">
        <div class="menu-nav__photo">
            <img src="dist/img/photo.jpg" alt="user_photo"> 
            <span class="menu-nav-photo__settings">
                <icon name="gear"></icon>
            </span>
        </div>
        <ul class="menu-nav__list">
            <li class="menu-nav__item">
                <router-link to="orders">приход</router-link>
            </li>
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
import Icon from 'vue-awesome/components/Icon.vue';
import 'vue-awesome/icons/gear';


export default {

components: {
    Icon
}   

};

</script>


<style scoped>
html {
    height: 100%;
    width: 100%;
    background-color: #eff3f6;
}

body {
    margin: 0;
    width: 100%;
    height: 100%;
}

.menu-nav {
    margin-top: -15px;
    display: block;
    width: 200px;
    min-height: 100vh;
    height: 100%;
    background-color: #fff;
    -webkit-box-shadow: 8px 0 25px 5px rgba(222, 227, 231, .6);
    -moz-box-shadow: 8px 0 25px 5px rgba(222, 227, 231, .6);
    box-shadow: 8px 0 25px 5px rgba(222, 227, 231, .6);
    z-index: 21;
    float: left;
}

.menu-nav__photo {
    background-color: #fff;
    border-radius: 100px;    
    height: 100px;
    width: 100px;
    position: relative;
    margin: 60px auto 40px auto;
}
.menu-nav__photo img{
    height: 100px;
    width: 100px;
    border-radius: 100px;
}

.menu-nav__list {
    padding-left: 0;
}

.menu-nav-photo__settings {
    position: absolute;
    width: 33px;
    height: 33px;
    border-radius: 30px;
    background-color: #fff;
    cursor: pointer;
    right: -5px;
    bottom: -5px;
    box-shadow: 0 0 10px rgba(222, 227, 231, 1);
    border: 1px solid #d7dee2;
    line-height: 38px;
    text-align: center;
}

.menu-nav__item {
    list-style-type: none;
    text-align: center;
    padding: 10px;
    color: #36454d;
    font: 14px Arial, sans-serif;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
}

.menu-nav__item a {
    text-decoration: none;
    color: #36454d;
    position: relative;
    padding: 10px 20px;
}

.menu-nav__item a:before {
    content: "";
    position: absolute;
    width: 70%;
    height: 2px;
    margin-bottom: -2px;
    bottom: 5px;
    left: 15%;
    background-color: #5c8e29;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}

.menu-nav__item a:hover:before {
    visibility: visible;
    opacity: 1;
    bottom: 10px;
}
</style>
