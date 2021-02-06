<template>
  <div class="home">
    <banner />
    <features />
    <community />
    <partner />
    <subscribe />
  </div>
</template>

<script>
import Banner from "@/components/Banner"
import Features from "@/components/Features"
import Community from "@/components/Community"
import Partner from "@/components/Partner"
import Subscribe from "@/components/Subscribe"

export default {
  name: "Home",
  components: {
    Banner,
    Features,
    Community,
    Partner,
    Subscribe,
  },
}
</script>

<style lang="scss" scoped></style>
