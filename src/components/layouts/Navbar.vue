<template>
  <nav class="navbar-app">
    <ul :class="nav ? 'show' : ''">
      <li class="logo">
        <router-link to="/">
          <img src="@/assets/Logo.png" />
        </router-link>
      </li>
      <li class="burger-menu" @click="toggleNav">
        <span></span>
        <span></span>
      </li>
      <div class="menu">
        <li v-scroll-to="'.navbar-app'">
          Home
        </li>
        <li v-scroll-to="'.features-app'">
          Features
        </li>
        <li v-scroll-to="'.community-app'">
          Roadmap
        </li>
        <li v-scroll-to="'.subscribe-app'">
          Contact
        </li>
      </div>
      <li>
        <router-link to="login">
          <button>
            Login
          </button>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      nav: false,
    }
  },
  methods: {
    toggleNav() {
      this.nav = !this.nav
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  margin: 0 auto;
  max-width: 980px;

  ul {
    display: flex;
    margin: 0;
    margin-top: 1rem;
    padding: 0;
    position: relative;

    .menu {
      display: flex;
      margin: 0 auto;
    }

    .burger-menu {
      display: none;
      padding: 0;
      position: absolute;
      top: 1rem;
      right: 2rem;

      span {
        background-color: #181818;
        display: block;
        height: 4px;
        width: 35px;

        &:last-child {
          margin-top: 8px;
        }
      }
    }

    li {
      align-self: center;
      cursor: pointer;
      list-style: none;
      padding: 1rem;

      &.logo {
        img {
          width: 4rem;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  nav ul {
    flex-direction: column;

    li:last-child,
    .menu {
      max-height: 0;
      transition: all 0.3s ease-out;
      opacity: 0;
    }

    .menu {
      flex-direction: column;
    }

    .burger-menu {
      display: block;
    }

    &.show {
      li:last-child,
      .menu {
        max-height: 271.5px;
        transition: all 0.3s ease-in;
        opacity: 1;
      }
    }
  }
}
</style>
