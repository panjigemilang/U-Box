<template>
  <div class="partner-app container">
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
        <img src="@/assets/Japan Hackathon.png" />
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
    width: 100%;

    img {
      object-fit: contain;
      width: auto;
    }
  }
}

@media (max-width: 576px) {
  .sponsors {
    flex-wrap: nowrap;
    overflow-x: auto;
  }
}
</style>
