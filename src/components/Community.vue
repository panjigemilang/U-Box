<template>
  <div class="community-app container">
    <div class="flex">
      <div class="left-side">
        <h1 class="title">
          Road Map
        </h1>
        <p>
          Lorem Ipsum
        </p>
      </div>
      <div class="right-side">
        <img src="@/assets/Roadmap.jpg" />
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

@media (max-width: 768px) {
  .left-side,
  .right-side {
    width: 100%;
  }

  .left-side {
    margin-bottom: 1.67rem;
    text-align: center;
  }
}
</style>
