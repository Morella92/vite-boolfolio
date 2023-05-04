<script>
 export default{
    props:{
        project:{
            type: Object,
            required:true
        }
    },
    
 }
</script>

<template>
    <div class="container">
        <router-link :to="{ name: 'projects.show', params: { id: project.id } }">
            <h2>{{ project.title }}</h2>
            <p>{{ project.client }}</p>
            <p>{{ project.typology ? project.typology.name : '-' }}</p>
            <p>{{ project.content }}</p> 
        </router-link>
    </div>
</template>

<style scoped>

</style>