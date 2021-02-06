<template>
  <div class="container">
    <div class="banner-text-container">
      <h1 class="title text-center">
        Easy Online Learning Solutions <br />
        for Anyone
      </h1>
      <p class="text-center">
        Provides offline access to online education platforms in near real time
        to help <br />
        rural children get easy access to online learning.
      </p>
      <div class="flex button-container">
        <button class="reverse">
          Join Now
        </button>
        <button>
          Learn More
        </button>
      </div>
    </div>
    <div class="img-container">
      <img src="@/assets/ubox-banner.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
}
</script>

<style lang="scss" scoped>
.banner-text-container {
  margin-top: 1rem;
  margin-bottom: 4rem;
}

p {
  margin: 3rem 0;
}

.button-container {
  justify-content: center;

  button {
    margin: 0 16px;
  }
}

.img-container {
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    width: 60vw;
  }
}

@media (max-width: 576px) {
  .img-container img {
    width: 100vw;
  }
}
</style>
