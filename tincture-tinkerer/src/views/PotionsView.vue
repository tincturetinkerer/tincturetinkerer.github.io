<template>
  <div class="potions">
    <h1>Potion Creator</h1>
    <p>
      For simply experimenting with the game's potion creator, use this tool!
    </p>
    <section class="potions__brewer">
      <potion-brewer></potion-brewer>
    </section>
  </div>
</template>

<script>
import PotionBrewer from "@/components/PotionBrewer.vue";

export default {
  name: "PotionView",
  components: {
    PotionBrewer,
  },
};
</script>
