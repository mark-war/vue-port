<template>
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo"><a href="index.html"><div class="brand">Coach<span class="chek">Chek</span></div>
      </a></h1>
      <nav id="navbar" class="navbar">

        <router-link
        v-for="link in links"
        :key="link.text"
        class="nav-link scrollto"
        :class="{ active: link.active }"
        :to="link.to">{{ link.text }}</router-link>
        
        <!-- <router-link class="nav-link scrollto active" to="#hero">Home</router-link> -->
        <!-- <router-link class="nav-link scrollto" :to="{name: 'home', hash: '#about'}">About</router-link> -->
        <!-- <router-link class="nav-link scrollto" :to="{name: 'home', hash: '#services'}">Services</router-link>
        <router-link class="nav-link scrollto" to="#work">Work</router-link>
        <router-link class="nav-link scrollto" to="#blog">Blogs</router-link>
        <router-link class="nav-link scrollto" to="#contact">Contact</router-link> -->
        <i class="bi bi-list mobile-nav-toggle"></i> 
      </nav>
    </div>
  </header>
</template>

<script>
export default {
    name: "PageHeader",
    data() {
    return {
      links: [
        { to: "#hero", text: "Home", active: true },
        { to: { name: 'home', hash: '#about' }, text: "About", active: false },
        { to: { name: 'home', hash: '#services' }, text: "Services", active: false },
        { to: { name: 'home', hash: '#work' }, text: "Work", active: false },
        { to: { name: 'home', hash: '#blog' }, text: "Blog", active: false },
        { to: { name: 'home', hash: '#contact' }, text: "Contact", active: false },
      ],
    };
  },
  methods: {
  updateActiveLink() {
    console.log('Updating active link'); 
    let position = window.scrollY + 200;
    this.links.forEach(link => {
      let section = document.querySelector(link.to.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        this.links.forEach(link => link.active = false); // Set all links to inactive
        link.active = true; // Set the current link to active
        console.log(link.text + ' is now active'); // Add this line
      }
    });
  },
},

    mounted() {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) window.scrollTo(0, element.offsetTop);
    }
    window.addEventListener('scroll', this.updateActiveLink);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateActiveLink);
  }
}
</script>

<style scoped>
.fixed-top {
  background-color: rgba(0,0,0,0.9);
}
a.router-link-active.router-link-exact-active {
  margin-left: 20px;
}
.nav-link.active {
  text-decoration-line: underline;
  text-decoration-style: double;
  text-decoration-thickness: 2px;
}

</style>