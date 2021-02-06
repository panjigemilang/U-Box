<template>
  <nav>
    <ul>
      <li class="logo">
        <img src="@/assets/Logo.png" />
      </li>
      <div class="menu">
        <li>
          Home
        </li>
        <li>
          Product
        </li>
        <li>
          About Us
        </li>
        <li>
          Contact
        </li>
      </div>
      <li>
        <button>
          Login
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
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

    .menu {
      display: flex;
      margin: 0 auto;
    }

    li {
      align-self: center;
      cursor: pointer;
      list-style: none;
      padding: 1rem;

      &.logo {
        pointer-events: none;

        img {
          width: 4rem;
        }
      }
    }
  }
}
</style>
