<template>
  <div class="container">
    <form class="form-container">
      <h1 class="title text-center">
        Create Account
      </h1>
      <div class="flex">
        <div class="form-control half">
          <label for="fname">First Name</label>
          <input type="text" placeholder="First Name" id="fname" />
        </div>
        <div class="form-control half">
          <label for="lname">Last Name</label>
          <input type="text" placeholder="Last Name" id="lname" />
        </div>
      </div>
      <div class="form-control">
        <label for="username">Username</label>
        <input type="text" placeholder="Username" id="username" />
      </div>
      <div class="flex">
        <div class="form-control half">
          <label for="email">Email</label>
          <input type="text" placeholder="Email" id="email" />
        </div>
        <div class="form-control half">
          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
        </div>
      </div>
      <div class="form-control">
        <label for="phone">Phone Number</label>
        <input
          type="tel"
          placeholder="Phone Number"
          id="phone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
      </div>
      <div class="form-control">
        <label for="username">Residential Address</label>
        <input type="text" placeholder="Username" id="username" />
      </div>
      <div class="flex terms">
        <input type="checkbox" name="terms" id="terms" />
        I accept all the &nbsp; <strong>terms and conditions</strong>
      </div>
      <button class="reverse">
        Sign Up
      </button>
      <p class="text-center">
        Already have an account? Login
        <span>
          <router-link to="login">
            here
          </router-link>
        </span>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
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

.half {
  width: 50%;

  &:first-child input {
    margin-right: 16px;
  }
}

.terms strong {
  margin-left: 4px;
}

button {
  font-size: 1.2rem;
  margin-top: 2rem;
  width: 100%;
}
</style>
