<template>
  <div class="features-app container">
    <h1 class="title text-center">
      Features
    </h1>
    <p class="text-center description">
      Lorem ipsum
    </p>
    <div class="flex features-container">
      <img class="left-image" src="@/assets/features.png" />
      <div class="lists-feature">
        <p>
          <span><img src="@/assets/icons/centang.svg"/></span>
          Zero-cost to users
        </p>
        <p>
          <span><img src="@/assets/icons/centang.svg"/></span>
          Offline Availability
        </p>
        <p>
          <span><img src="@/assets/icons/centang.svg"/></span>
          Personalized Learning
        </p>
        <p>
          <span><img src="@/assets/icons/centang.svg"/></span>
          Privacy Protection
        </p>
        <p>
          <span><img src="@/assets/icons/centang.svg"/></span>
          Multimedia Contents
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Features",
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 6rem;
  margin-bottom: 6rem;
}

p.description {
  margin: 2.5rem 0;
}

.features-container {
  img.left-image {
    padding: 2rem;
    width: 50%;
  }

  .lists-feature {
    align-self: center;
    display: flex;
    flex-wrap: wrap;
    height: 10rem;
    justify-content: space-between;
    padding-left: 3rem;
    width: 50%;

    p {
      align-self: center;
      width: 50%;

      span {
        margin-right: 8px;

        img {
          width: 15px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .features-container {
    img.left-image {
      max-height: 260px;
      object-fit: contain;
      width: 100%;
    }

    .lists-feature {
      width: 100%;
    }
  }
}

@media (max-width: 425px) {
  .features-container .lists-feature {
    padding-left: 0;

    p {
      font-size: 0.87rem;
    }
  }
}
</style>
