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
      <select
        name="potionBehavior"
        id="behaviorSelector"
        ref="behaviorSelector"
      >
        <option
          v-for="behavior in potionBehaviors"
          :value="behavior.value"
          v-text="behavior.label"
          :key="behavior.key"
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
import potionData from "../assets/test.csv";

console.log(potionData);

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
          key: "grn",
        },
        {
          value: "blue",
          label: "Blue",
          key: "blu",
        },
        {
          value: "yellow",
          label: "Yellow",
          key: "ylw",
        },
      ],
      potionBehaviors: [
        {
          value: "bubbling",
          label: "Bubbling",
          key: "bub",
        },
        {
          value: "splashing",
          label: "Splashing",
          key: "spl",
        },
      ],
    };
  },
  methods: {
    brew() {
      const color = this.$refs.colorSelector.value;
      const behavior = this.$refs.behaviorSelector.value;
      const potion = this.findPotion(color, behavior);
      if (potion) {
        const effect = potion.Effect;
        this.$refs.potionResult.innerHTML = `You brewed a ${color} ${behavior} potion! It ${effect}`;
      } else {
        this.$refs.potionResult.innerHTML = `You brewed nothing! I didn't plan for this!`;
      }
    },
    findPotion(color, behavior) {
      return potionData.find((potion) => {
        return (
          potion.Color.toLowerCase() === color &&
          potion.Behavior.toLowerCase() === behavior
        );
      });
    },
  },
};
</script>
