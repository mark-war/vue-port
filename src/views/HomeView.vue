<template>
  <div class="home">
    <HeroHome />
    <AboutView />
    <ServicesView />
    <WorkView />
    <BlogView />
    <ContactView />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroHome from '@/components/Hero'
import AboutView from './AboutView';
import ServicesView from './ServicesView'
import WorkView from './WorkView'
import BlogView from './BlogView'
import ContactView from './ContactView'

export default {
  name: 'HomeView',
  components: {
    HeroHome,
    AboutView,
    ServicesView,
    WorkView,
    BlogView,
    ContactView
  }
}
</script>

<style scoped>

</style>