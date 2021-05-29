<template>
  <div id="app">
    <header-page></header-page>
    <router-view/>
    <footer-page></footer-page>
  </div>
</template>

<script>
import HeaderPage from './components/Header';
import FooterPage from './components/Footer';

export default {
  name: 'App',
  components: {
    HeaderPage,
    FooterPage
  }
}
</script>

<style lang="scss">

</style>
