<template>
  <div class="container">
    <div class="flex">
      <div class="left-side">
        <h1 class="title">
          Community
        </h1>
        <p>
          Lorem Ipsum
        </p>
      </div>
      <div class="right-side">
        <img src="@/assets/Community.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Community",
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 6rem;
  margin-bottom: 6rem;
}

.left-side {
  width: 45%;
}

.right-side {
  width: 55%;

  img {
    object-fit: contain;
    width: 100%;
  }
}
</style>
