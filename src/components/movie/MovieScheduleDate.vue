<template>
  <div class="MovieScheduleDateRoot">
    <div
      class="MovieScheduleDatePrev"
      @click="() => {onClickPrevScroll()}">
      <FontAwesomeIcon :icon="['fas', 'chevron-left']" />
    </div>
    <div class="MovieScheduleDateGroup">
      <div
        class="MovieScheduleDateGroupContent"
        ref="dateGroupContent">
        <div
          v-for="(scheduleDate, scheduleDateIdx) in data"
          :class="activeDateIdx === scheduleDateIdx ? 'MovieScheduleDateActive' : 'MovieScheduleDate'"
          :style="{width: 'calc(100% / ' + data.length + ')'}"
          :key="'MovieScheduleDate' + scheduleDateIdx"
          @click="() => onClickDate(scheduleDateIdx)">
          <div class="MovieScheduleDateTitleWrap">
            <div class="MovieScheduleDateTitle">
              <span>{{ scheduleDate.month + "/" }}</span>
              <span class="MovieScheduleDateTitleDay">{{ scheduleDate.day }}</span>
              <span>{{ "(" + scheduleDate.d + ")" }}</span>
            </div>
          </div>
          <div class="MovieScheduleDateOptionWrap">
            <div class="MovieScheduleDateOption">{{ scheduleDate.option }}</div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="MovieScheduleDateNext"
      @click="() => {onClickNextScroll()}">
      <FontAwesomeIcon :icon="['fas', 'chevron-right']" />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'MovieScheduleDate',
  props: {
    data: Array,
    onClick: Function
  },
  methods: {
    onClickDate: function (clickDateIdx) {
      this.activeDateIdx = clickDateIdx
      this.onClick()
    },
    onClickPrevScroll: function () {
      console.log('onClickPrevScroll')
    },
    onClickNextScroll: function () {
      console.log('onClickNextScroll')
    }
  },
  data () {
    return {
      activeDateIdx: 0
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
div.MovieScheduleDateRoot {
  position: relative;
}

div.MovieScheduleDatePrev {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 5px;
  top: 10px;
  bottom: 10px;
  width: 20px;
  height: calc(100% - 20px);
  border-radius: 5px;
  transition-property: background-color;
  transition-timing-function: ease;
  transition-duration: .3s;
  color: #9e9e9e;
}

div.MovieScheduleDatePrev:hover {
  color: white;
  background-color: #9e9e9e;
}

div.MovieScheduleDateNext {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 5px;
  top: 10px;
  bottom: 10px;
  width: 20px;
  height: calc(100% - 20px);
  border-radius: 5px;
  transition-property: background-color;
  transition-timing-function: ease;
  transition-duration: .3s;
  color: #9e9e9e;
}

div.MovieScheduleDateNext:hover {
  color: white;
  background-color: #9e9e9e;
}

div.MovieScheduleDateGroup {
  margin: 0 30px;
  overflow: hidden;
}

div.MovieScheduleDateGroupContent {
  width: calc(100% * 2);
  transition-property: margin-left;
  transition-timing-function: ease;
  transition-duration: .6s;
}

div.MovieScheduleDateGroupContent::after {
  display: block;
  content: '';
  clear: both;
}

div.MovieScheduleDate {
  float: left;
  background-color: #616161;
  cursor: pointer;
  box-sizing: border-box;
}

div.MovieScheduleDate:nth-of-type(n+2) {
  border-left: 1px solid #cacaca;
}

div.MovieScheduleDateActive {
  float: left;
  background-color: #d32f2f;
  cursor: pointer;
  box-sizing: border-box;
}

div.MovieScheduleDateTitleWrap {
  padding: 15px 10px;
}

div.MovieScheduleDateTitle {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  text-align: center;
}

span.MovieScheduleDateTitleDay {
  font-size: 22px;
}

div.MovieScheduleDateOptionWrap {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
}

div.MovieScheduleDateOption::before {
  position: absolute;
  display: block;
  top: 0;
  left: 10px;
  right: 10px;
  content: '';
  border-top: 1px solid rgba(255,255,255,.3);
}

div.MovieScheduleDateOption {
  font-size: 14px;
  font-weight: 700;
  color: #fff;
}
</style>
