<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>

</style>
