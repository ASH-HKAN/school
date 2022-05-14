 <template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/MyTeachers">Teacher</router-link> |
      <router-link to="/MYStudents">Students</router-link> |
      <router-link to="/Register">Register</router-link> |
      <router-link to="/Login">Login</router-link> |
    </nav>
    <b-container>
      <router-view />
    </b-container>
    <sidebar-menu-akahon @search-input-emit="search" />
  </div>
</template>

<script>
import SidebarMenuAkahon from '@/components/Sidebar-menu-akahon.vue'
export default {
  name: 'App',
  components: {
    SidebarMenuAkahon
  },
  methods: {
    search (val) {}
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #11b1d5;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: red;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}
body {
  background: rgb(4, 1, 18);
  overflow: hidden;
  height: 100vh;
}

// i {
//   position: absolute;
//   height: 200px;
//   background: linear-gradient(trasnparent, #fff);
//   border-bottom-left-radius: 5px;
//   border-bottom-right-radius: 5px;
//   animation: animate 5s linear infinite;
// }
// i:nth-child(3n + 1) {
//   background: linear-gradient(trasnparent, #0ff);
// }
// i:nth-child(3n + 2) {
//   background: linear-gradient(trasnparent, #0f0);
// }
// i:nth-child(3n + 3) {
//   background: linear-gradient(trasnparent, #f00);
// }
// @keyframes animate {
//   0% {
//     transform: translate(-200px);
//   }
//   100% {
//     transform: translate(calc(100vh + 200px));
//   }
// }
</style>
