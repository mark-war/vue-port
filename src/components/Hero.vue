<template>
  <div
    id="hero"
    class="hero route bg-image"
    :style="{
      'background-image': `url(${require('../../assets/img/hero-bg.png')})`
    }"
  >
    <div class="overlay-itro"></div>
    <div class="hero-content display-table">
      <div class="table-cell">
        <div class="container">
          <h1 class="hero-title mb-4">I am Mark Angelo Guerra</h1>
          <p class="hero-subtitle"><span class="typed"></span></p>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import Typed from "typed.js";

export default {
  name: "HeroHome",
  mounted() {
    const options = {
      strings: [
        "Software Developer",
        "Content Writer",
        "Life Coach",
        "Blogger",
        "Project Manager",
      ],
       typeSpeed: 100,
       backSpeed: 50,
       backDelay: 2000,
       loop: true
    };
    new Typed(".typed", options);
  },
};
</script>
  
  <style scoped>
.hero {
  height: 100vh;
  position: relative;
  color: #fff;
  margin: 0; /* Add this line */
  padding: 0; /* Add this line */
  border: 0;
}

.hero .hero-content {
  text-align: center;
  position: relative;
}

.overlay-itro {
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  opacity: 0.9;
}

.hero-title {
  color: #fff;
  font-weight: 600;
  font-size: 3rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
}

.bg-image {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}

.display-table {
  display: table;
  width: 100%;
  height: 100%;
}

.table-cell {
  display: table-cell;
  vertical-align: middle;
}
body {
    margin: 0; /* Add this line */
  padding: 0; /* Add this line */
  border: 0;
}
</style>
  