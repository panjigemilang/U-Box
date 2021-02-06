<template>
  <footer>
    <div class="container flex">
      <div class="left-side">
        <div class="logo">
          <img src="@/assets/Logo-reverse.png" />
        </div>
        <ul class="flex">
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
        </ul>
        <p>
          &copy; Copyright 2021. All Rights Reserved.
        </p>
      </div>
      <div class="right-side">
        <p>
          <span>
            <img src="@/assets/icons/location.svg" />
          </span>
          7480 Mockingbird Hill
        </p>
        <p>
          <span>
            <img src="@/assets/icons/phone.svg" />
          </span>
          (239) 555-0108
        </p>
        <div class="flex sosmed">
          <img src="@/assets/icons/twitter.svg" alt="twitter" />
          <img src="@/assets/icons/facebook.svg" alt="facebook" />
          <img src="@/assets/icons/linkedin.svg" alt="linkedin" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<style lang="scss" scoped>
footer {
  background-color: #181818;
  color: white;
}

.container {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.left-side,
.right-side {
  display: flex;
  flex-direction: column;
}

.left-side {
  width: 70%;

  ul {
    padding: 0;

    li {
      list-style: none;
      margin-right: 16px;
    }
  }
}

.right-side {
  width: 30%;

  p {
    align-items: center;
    display: flex;
    margin: 0;
    margin-bottom: 8px;

    span {
      margin-right: 8px;
    }
  }

  img {
    width: 30px;
  }

  .sosmed {
    img {
      cursor: pointer;
      margin-right: 16px;
    }
  }
}

@media (max-width: 576px) {
  .container {
    flex-direction: column;
  }

  .left-side,
  .right-side {
    text-align: center;
    width: 100%;
  }

  .left-side .flex {
    justify-content: center;
  }

  .right-side p {
    margin: 8px auto;
    width: max-content;
  }

  .sosmed {
    justify-content: center;
    margin: 8px auto;
  }
}
</style>
