<template>
  <div class="container">
    <form class="form-container">
      <h1 class="title text-center">
        Log In
      </h1>
      <div class="form-control">
        <label for="email">Email/Phone Number</label>
        <input type="text" placeholder="Email/Phone Number" id="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
      </div>
      <button class="reverse">
        Login
      </button>
      <p class="text-center">
        Don't have an account? Register
        <span>
          <router-link to="register">
            here
          </router-link>
        </span>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 3rem;
  margin-bottom: 5rem;
  min-height: 50vh;
}

.form-container {
  border: 1px rgba($color: #000000, $alpha: 0.2) solid;
  margin: 0 auto;
  max-width: 538px;
  padding: 0 3rem;
}

button {
  font-size: 1.2rem;
  margin-top: 2rem;
  width: 100%;
}
</style>
