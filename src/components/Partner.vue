<template>
  <div class="container">
    <h1 class="title text-center">
      Partners
    </h1>
    <p class="text-center">
      We focus on ergonomics and meeting you where you work.
      <br />
      It's only a keystroke away.
    </p>
    <div class="flex sponsors">
      <div class="img-container">
        <img src="@/assets/microsoft-logos-png-images-free-download-22 1.png" />
      </div>
      <div class="img-container">
        <img src="@/assets/Coca-Cola-Logo 1.png" />
      </div>
      <div class="img-container">
        <img src="@/assets/UNICEF_Logo 1.png" />
      </div>
      <div class="img-container">
        <img src="@/assets/google.png" />
      </div>
      <div class="img-container">
        <img src="@/assets/Japan Hackathon.png" />
      </div>
      <div class="img-container">
        <img src="@/assets/Kyoto.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Partner",
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 6rem;
  margin-bottom: 6rem;
}

.sponsors {
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 6rem 0;

  .img-container {
    margin-bottom: 16px;
    text-align: center;
    width: 33.3333%;

    img {
      object-fit: contain;
      width: auto;
    }
  }
}
</style>
