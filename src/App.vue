<template>
  <div id="app">
    <header-page></header-page>
    <router-view/>
  </div>
</template>

<script>
import HeaderPage from './components/Header';

export default {
  name: 'App',
  components: {
    HeaderPage
  }
}
</script>

<style lang="scss">

</style>
