<template>
  <div class="MovieScheduleDateRoot">
    <div class="MovieScheduleDatePrev">
      <FontAwesomeIcon :icon="['fas', 'chevron-left']" />
    </div>
    <div class="MovieScheduleDateGroup">
      <div
        v-for="(scheduleDate, scheduleDateIdx) in data"
        :class="activeDateIdx === scheduleDateIdx ? 'MovieScheduleDateActive' : 'MovieScheduleDate'"
        :key="'MovieScheduleDate' + scheduleDateIdx"
        @click="() => onClickDate(scheduleDateIdx)">
        <div class="MovieScheduleDateTitle">
          <span>{{ scheduleDate.month + "/" }}</span>
          <span class="MovieScheduleDateTitleDay">{{ scheduleDate.day }}</span>
          <span>{{ "(" + scheduleDate.d + ")" }}</span>
        </div>
        <div class="MovieScheduleDateOptionWrap">
          <div class="MovieScheduleDateOption">{{ scheduleDate.option }}</div>
        </div>
      </div>
    </div>
    <div class="MovieScheduleDateNext">
      <FontAwesomeIcon :icon="['fas', 'chevron-right']" />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'MovieScheduleDate',
  props: {
    data: Array
  },
  methods: {
    onClickDate: function (clickDateIdx) {
      this.activeDateIdx = clickDateIdx
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
  display: flex;
  overflow: hidden;
}

div.MovieScheduleDate {
  width: calc(100% / 7);
  flex-shrink: 0;
  background-color: #616161;
  cursor: pointer;
}

div.MovieScheduleDate:nth-of-type(n+2) {
  border-left: 1px solid #cacaca;
}

div.MovieScheduleDateActive {
  width: calc(100% / 7);
  flex-shrink: 0;
  background-color: #d32f2f;
  cursor: pointer;
}

div.MovieScheduleDateTitle {
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  text-align: center;
}

span.MovieScheduleDateTitleDay {
  font-size: 22px;
}

div.MovieScheduleDateOptionWrap {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}

div.MovieScheduleDateOption {
  padding-top: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  border-top: 1px solid rgba(255,255,255,.3);
  text-align: center;
}
</style>
