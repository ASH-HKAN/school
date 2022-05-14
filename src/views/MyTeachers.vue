<template>
  <div>
    <b-table striped hover :items="teachers">
      <template #cell(name)="data">
        <router-link :to="`/single/teachers/${data.index}`">{{
          data.value
        }}</router-link>
      </template>
    </b-table>
    <p>Count Of Teachers : {{ TehranTeachers.length }}</p>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['teachers']),
    ...mapGetters(['TehranTeachers'])
  }
}
</script>
