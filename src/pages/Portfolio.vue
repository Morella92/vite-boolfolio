<script>
 export default {
    props:{
        project:{
            type: Object,
            required:true
        }
    }
 }
</script>

<template>
    <div class="container">
        <h2>{{ project.title }}</h2>
        <p>{{ project.client }}</p>
        <p>{{ project.typology ? project.typology.name : '-' }}</p>
        <p>{{ project.content }}</p> 
    </div>
</template>

<style scoped>

</style>