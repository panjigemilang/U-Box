<template>
  <div id="app">
    <navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

@font-face {
  font-family: "Product Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Product Sans"),
    url("./assets/fonts/Product-Sans-Regular.ttf") format("truetype")
      /* Safari, Android, iOS */,
    url("./assets/fonts/product_sans_regular-webfont.woff") format("woff")
      /* Pretty Modern Browsers */,
    url("./assets/fonts/product_sans_regular-webfont.woff2") format("woff2"); /* Super Modern Browsers */
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}

body {
  font-family: "Product Sans";
  overflow-x: hidden;
}

button {
  background-color: white;
  border: 1px black solid;
  border-radius: 0;
  cursor: pointer;
  padding: 0.5rem 1.5rem;

  &.reverse {
    background-color: #4452fd;
    border: 0;
    color: white;
  }

  &:hover {
    filter: brightness(0.9);
  }
}

input {
  border: 0;

  &:focus {
    background-color: white !important;
    color: black !important;
    outline: 1px #949dff solid;
  }
}

h1.title {
  font-size: 3rem;
  font-weight: 100;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.text-center {
  text-align: center;
}

.flex {
  display: flex;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
</style>
