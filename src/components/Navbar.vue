<script>
     export default {
        mounted() {
        console.log('navbar')
    }
  }
</script>

<template>
    <header>
        <div class="nav">

            <router-link :to="{ name: 'home'}">Home</router-link>

            <ul class="nav__menu">
                <li>
                    <router-link :to="{name: 'portfolio'}">Portfolio</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'about'}">Chi sono</router-link>
                </li>
            </ul>

        </div>
    </header> 
</template>

<style scoped>
    .nav, .nav__menu {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    .nav__menu {
     margin-left: auto;
    }
</style>