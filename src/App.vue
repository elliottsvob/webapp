<template>
  <div id="app">

    <b-navbar class="top-nav-bar" toggleable="md"  >

      <b-navbar-brand href="#">Inform</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>{{user}}</em>
            </template>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <b-nav vertical class="side-nav-bar">
      <b-nav-item href="#/dashboard">Dashboard</b-nav-item>
    </b-nav>

    <div class="app-container">
      <b-container>
        <router-view/>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return { user: window.user };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.top-nav-bar{
  position:fixed;
  left:0;
  width:100%;
  height: 4rem;
  background-color: rgba(0,87,142,0.9)

}
.side-nav-bar{
  position:fixed;
  left:0;
  top:4rem;
  bottom:0;
  width: 10%;
  text-align: left;
  background-color: rgba(47,60,68,0.9);
}
.app-container{
  position:fixed;
  left:10%;
  top:4rem;
  padding-top: 10px;
  width:90%;
}

</style>
