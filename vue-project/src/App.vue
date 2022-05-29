<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/db">Data Binding</router-link> |
    <router-link to="/dbfor">V-For</router-link> |
    <router-link to="/dbif">V-If</router-link> |
    <router-link to="/dbon">V-On</router-link> |
    <router-link to="/computed">Computed</router-link> |
    <router-link to="/dbbindinglist2">DBBindingList2</router-link> |
    <router-link to="/nc">NC</router-link> |
    <router-link to="/cc">CC</router-link> |
    <router-link to="/pc">PC</router-link> |
    <router-link to="/cc2">CC2</router-link> |
    <router-link to="/pc2">PC2</router-link> |
    <router-link to="/cc3">CC3</router-link> |
    <router-link to="/pc3">PC3</router-link> |
    <router-link to="/cc4">CC4</router-link> |
    <router-link to="/pc4">PC4</router-link> |
    <router-link to="/cc5">CC5</router-link> |
    <router-link to="/pc5">PC5</router-link> |
    <router-link to="/provideinject">ProvideInject</router-link> |
    <router-link to="/calculator">Calculator</router-link> |
    <router-link to="/capi">Calculator Api</router-link> |
    <router-link to="/capi2">Calculator Api2</router-link> |
    <router-link to="/capi3">Calculator Api3</router-link> |
    <router-link to="/capi4">Calculator Api4</router-link> |
    <router-link to="/comapiprovide">Composition API Provide</router-link> |
    <router-link to="/comapiinject">Composition API Inject</router-link> |
    <router-link to="/mixins">Mixins</router-link>|
    <router-link to="/customdirective">Custom Directive</router-link>|
    <router-link to="/plugins">Plugins</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>