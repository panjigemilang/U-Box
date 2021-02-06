<template>
  <div class="container text-center">
    <h1 class="title">
      Be the first to know the <br />
      latest updates
    </h1>
    <p>
      Lorem Ipsum
    </p>
    <div class="flex subscribe-container">
      <input type="email" placeholder="Email" />
      <button class="reverse">Subscribe</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subscribe",
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 6rem;
  margin-bottom: 6rem;
}

.subscribe-container {
  justify-content: center;

  input,
  button {
    font-size: 1rem;
  }

  input {
    background-color: rgb(185, 185, 185);
    color: white;
    padding: 0.8rem;
    padding-left: 1.3rem;
    width: 30%;

    &::placeholder {
      color: white;
    }

    &:-moz-placeholder {
      color: white;
    }
  }

  button {
    margin-left: 16px;
  }
}
</style>
