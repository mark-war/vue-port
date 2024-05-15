<template>
  <PageHeader />
  <router-view/>
  <PageFooter />
</template>

<script>
import PageHeader from './components/Header'
import PageFooter from './components/Footer'

export default {
  name: 'app',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style>
@import '../assets/vendor/bootstrap/css/bootstrap.min.css';
@import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
@import '../assets/vendor/glightbox/css/glightbox.min.css';
@import '../assets/vendor/swiper/swiper-bundle.min.css';
@import '../assets/css/style.css'
</style>
