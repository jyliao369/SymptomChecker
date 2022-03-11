<template>
  <SymptomChecker />
</template>

<script>
import SymptomChecker from "./components/SymptomChecker.vue";

export default {
  components: {
    SymptomChecker,
  },
};
</script>

<style>
body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
