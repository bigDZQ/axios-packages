<template>
  <div id="app">
    <button @click="submit">登录</button>
  </div>
</template>
<script>
export default {
  methods: {
    async submit () {
      let params = {
        userName: 'admin',
        password: '123456'
      }
      let rsp = await this.$http.login(params)
      console.log(rsp)
    }
  }
}
</script>>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
