<template>
  <div class="brew">
    <section class="brew__inputs">
      <select name="potionColor" id="colorSelector" ref="colorSelector">
        <option
          v-for="color in potionColors"
          :value="color.value"
          v-text="color.label"
          :key="color.key"
        ></option>
      </select>
      <button v-on:click="brew">Brew</button>
    </section>
    <section class="brew__output">
      <p class="potion-result" ref="potionResult"></p>
    </section>
  </div>
</template>

<script>
export default {
  name: "PotionBrewer",
  data() {
    return {
      potionColors: [
        {
          value: "red",
          label: "Red",
          key: "red",
        },
        {
          value: "green",
          label: "Green",
          key: "green",
        },
        {
          value: "blue",
          label: "Blue",
          key: "blue",
        },
      ],
    };
  },
  methods: {
    brew() {
      const color = this.$refs.colorSelector.value;
      this.$refs.potionResult.innerHTML = `You brewed a ${color} potion!`;
    },
  },
};
</script>
