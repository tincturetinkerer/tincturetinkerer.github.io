<template>
  <div class="home">
    <img alt="Tincture Tinkerer logo" src="../assets/logo.jpg" />
    <HelloWorld msg="Tincture Tinkerer" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
