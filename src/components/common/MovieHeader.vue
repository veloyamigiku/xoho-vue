<template>
  <div class="MovieHeader">
    <div class="MovieHeaderTitle">
      {{ data.month }}/{{ data.day }}({{ dayOfWeekStr }})
    </div>
  </div>
</template>

<script>
import { getDayOfWeekStr } from '@/utils/date'

export default {
  name: 'MovieHeader',
  props: {
    data: Object
  },
  data () {
    return {
      dayOfWeekStr: getDayOfWeekStr(
        this.data.year,
        this.data.month,
        this.data.day)
    }
  }
}
</script>

<style scoped>
div.MovieHeader {
  padding: 15px 18px;
  background: linear-gradient(160deg,#eee 0%,#f5f5f5 100%);
}

div.MovieHeaderTitle {
  font-size: 20px;
  font-weight: 700;
}
</style>
