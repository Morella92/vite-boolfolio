<script>
import axios from 'axios'
import ProjectCard from './ProjectCard.vue'

export default {
    components:{
        ProjectCard
    },
  data(){
    return{
        projects: []
    }
  },
  methods:{
    fetchProjects(){
        axios.get('http://127.0.0.1:8000/api/projects')
        .then(res=>{
            // console.log(res)
            const{results} = res.data
            this.projects=results
            console.log(results)
        })
        .catch(err=>{
            console.log(err)
        })
    }
  },
  mounted(){
    this.fetchProjects()
  },
}
</script>

<template>

  <div class="container">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project"/>
  </div>
  
</template>

<style scoped>

</style>
