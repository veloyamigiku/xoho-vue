<template>
  <div>
    <div class="MovieSummaryTitle">{{ data.name }}</div>
    <div class="MovieSummarySub">{{ data.sub }}</div>
    <div>上映する設備は劇場によって異なります。詳細は各劇場のページにてご確認下さい。</div>
    <div class="MovieSummaryDesc">{{ data.description }}</div>
    <div class="MovieSummaryDirector">{{ director() }}</div>
    <div class="MovieSummaryPerformer">{{ performer() }}</div>
    <div class="MovieSummaryRunningTimeMinute">{{ runningTimeMinute() }}</div>
    <div>
      <a
        class="MovieSummaryUrl"
        href="http://localhost:8080">{{ urlText() }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieSummary',
  props: {
    data: Object
  },
  methods: {
    director: function () {
      var director = null
      if (this.data.director && this.data.director.length > 0) {
        this.data.director.forEach(function (d) {
          if (director == null) {
            director = d.name
          } else {
            director += '、' + d.name
          }
        })
      }
      return director
    },
    performer: function () {
      var performer = null
      if (this.data.performer && this.data.performer.length > 0) {
        this.data.performer.forEach(function (p) {
          if (performer == null) {
            performer = p.name
          } else {
            performer += '、' + p.name
          }
        })
      }
      return performer
    },
    runningTimeMinute: function () {
      return '[' + this.data.name + '  上映時間：' + this.data.runningTimeMinute + '分 ]'
    },
    urlText: function () {
      return this.data.name + '：公式サイト'
    }
  }
}
</script>

<style scoped>
</style>
