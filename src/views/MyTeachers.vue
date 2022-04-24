<template>
  <div>
    <b-table striped hover :items="teachers">
      <template #cell(name)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <router-link :to="`/single/teachers /${data.index}`">{{
          data.value
        }}</router-link>
      </template>
    </b-table>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['teachers'])
  }
}
</script>
