<template>
  <div class="MovieSummary">
    <div class="MovieSummaryLeft">
      <div class="MovieSummaryTitle">{{ data.name }}</div>
      <div class="MovieSummarySub">{{ data.sub }}</div>
      <div class="MovieSummaryOption">
        上映する設備は劇場によって異なります。詳細は
        <a
          class="MovieSummaryOptionLink"
          href="/theater">
          各劇場のページ
        </a>
        にてご確認下さい。
      </div>
    </div>
    <div class="MovieSummaryRight">
      <div class="MovieSummaryThumbGroup">
        <div
          v-for="(thumb, thumbIdx) in data.thumb"
          :key="'MovieSummaryThumb' + thumbIdx"
          class="MovieSummaryThumbWrap">
          <img
            class="MovieSummaryThumb"
            :src="thumb.url" />
        </div>
      </div>
      <div class="MovieSummaryDesc">{{ data.description }}</div>
      <div class="MovieSummaryDirectorWrap">
        <div class="MovieSummaryHeader">監督</div>
        <div class="MovieSummaryDirector">{{ director() }}</div>
      </div>
      <div class="MovieSummaryPerformerWrap">
        <div class="MovieSummaryHeader">出演</div>
        <div class="MovieSummaryPerformer">{{ performer() }}</div>
      </div>
      <div class="MovieSummaryRunningTimeMinute">{{ runningTimeMinute() }}</div>
      <div class="MovieSummaryUrlWrap">
        <a
          class="MovieSummaryUrl"
          href="http://localhost:8080">{{ urlText() }}</a>
      </div>
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
div.MovieSummary {
  display: flex;
  margin-top: 20px;
  padding: 30px;
  background-color: #1a1a1a;
}

div.MovieSummaryLeft {
  flex-basis: 40%;
}

div.MovieSummaryTitle {
  margin-top: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
}

div.MovieSummarySub {
  margin-top: 5px;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
}

div.MovieSummaryOption {
  margin-top: 10px;
  color: #fff;
  font-size: 12px;
}

a.MovieSummaryOptionLink {
  color: #2196f3;
  text-decoration: none;
}

div.MovieSummaryRight {
  flex-basis: 60%;
}

div.MovieSummaryThumbGroup {
  display: flex;
}

div.MovieSummaryThumbWrap {
  flex-basis: 20%;
  padding: 0 5px;
}

img.MovieSummaryThumb {
  width: 100%;
  border: 1px solid #e0e0e0;
}

div.MovieSummaryDesc {
  margin-top: 40px;
  color: #fff;
}

div.MovieSummaryHeader {
  flex-basis: 25px;
  margin-top: 3px;
  padding: 3px 15px;
  color: #fff;
  background-color: gray;
  font-size: 12px;
  text-align: center;
}

div.MovieSummaryDirectorWrap {
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
}

div.MovieSummaryDirector {
  flex: 1;
  color: #fff;
  line-height: 1.5;
}

div.MovieSummaryPerformerWrap {
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
}

div.MovieSummaryPerformer {
  flex: 1;
  color: #fff;
  line-height: 1.5;
}

div.MovieSummaryRunningTimeMinute {
  margin-top: 10px;
  color: #fff;
}

div.MovieSummaryUrlWrap {
  margin-top: 10px;
}

a.MovieSummaryUrl {
  text-decoration: none;
  color: #2196f3;
  transition-property: opacity;
  transition-timing-function: ease;
  transition-duration: .3s;
}

a.MovieSummaryUrl:hover {
  opacity: .6;
}
</style>
