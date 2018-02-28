<template>
  <div>
    <div style="margin-left: 50%; margin-bottom:1em;">
      <h4><img src="https://vuejs.org/images/logo.png"  
        style="width: 50px; margin-bottom:-10px"/><span style="margin-bottom=5px">This is a Vue App</span></h4>
    </div>
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