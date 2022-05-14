<template>
  <div>
    <div :style="{ color: ' #f67e7e' }"></div>
    <!-- <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div> -->
    <h1>Name : {{ single.name }} {{ single.family }}</h1>
    <p>Age :{{ single.age }} Years Old</p>
    <p>City : {{ single.city }}</p>
    <p1>Country : {{ single.country }} </p1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      single: {}
    }
  },

  computed: {
    ...mapState(['teachers', 'students'])
  },

  mounted () {
    const user = this[this.$route.params.cat][this.$route.params.id]
    this.single = user
  }
}
</script>
