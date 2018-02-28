<template>
  <div>
    <h1>VUE!</h1>
    <butter-passer v-bind:text="text"></butter-passer>
  </div>
</template>

<script>
export default {
  name: 'vue-app',
  data() {
    return { text: "Pass the Butter"};
  },
  methods: {
  }
};
</script>