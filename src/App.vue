<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <servers></servers>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Servers from './controllers/servers/Servers';
import ServerDetails from './controllers/servers/ServerDetails';


export default {
  components: {
    appHeader: Header,
    Servers,
    'app-server-details': ServerDetails,
    'app-footer': Footer
  },
  data: function() {
    return {
      
    }
  }
}
</script>

<style>

</style>
