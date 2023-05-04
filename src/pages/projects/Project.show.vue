<script>
  import axios from 'axios'
  import ProjectCard from '../../components/ProjectCard.vue'
  
  export default {
    components: {
      ProjectCard
    },
    data() {
      return {
        project: {},
        relatedProjects: []
      }
    },
    mounted() {
      const projectId = this.$route.params.id
      axios.get(`http://127.0.0.1:8000/api/projects/${projectId}`)
        .then(res => {
          const { project } = res.data
          this.project = project
          this.relatedProjects = project.relatedProjects
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
</script>
  

<template>
    <div class="container">
      <h1>{{ project.title }}</h1>
      <p>{{ project.client }}</p>
      <p>{{ project.typology ? project.typology.name : '-' }}</p>
      <p>{{ project.content }}</p>
      <h2>Progetti correlati</h2>
      <div class="related-projects">
        <ProjectCard v-for="project in relatedProjects" :key="project.id" :project="project" />
      </div>
    </div>
</template>
  
  