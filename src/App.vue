<template>
    <div id="app">
        <app-menu-top></app-menu-top>
        <app-menu-nav></app-menu-nav>
        <div class="main">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
import MenuTop from './components/menu-top/MenuTop.vue';
import MenuNav from './components/menu-nav/MenuNav.vue';


export default {
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {
    },

    components: {
        appMenuTop: MenuTop,
        appMenuNav: MenuNav
    }
}
</script>

<style>
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

#app {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
