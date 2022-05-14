<template>
  <div>
    <b-table striped hover :items="students">
      <template #cell(name)="data">
        <router-link :to="`/single/students/${data.index}`">{{
          data.value
        }}</router-link>
      </template>
    </b-table>
    <p> Count Of  Students : {{TehranStudents.length}} </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['students']),
    ...mapGetters(['TehranStudents'])
  }
}
</script>
