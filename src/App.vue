<template>
  <div id="app">
    <Resume />
  </div>
</template>

<script>
import Resume from './Resume.vue'

export default {
  name: 'App',
  components: { Resume }
}
</script>

<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #0d0d0d; margin: 0; }
</style>
