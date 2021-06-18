<template>
  <div class="MovieSchedule">
    <div class="MovieScheduleHeader">公開予定日</div>
    <div class="MoviescheduleDateGroup">
      <div class="MovieScheduleDateWrap"
        v-for="(movieScheduleDate, movieScheduleDateIdx) in getScheduleDateList(data)"
        :key="'MovieScheduleDate' + movieScheduleDateIdx"
        @click="() => tellDateIdx(movieScheduleDate)">
        <div class="MovieScheduleDate">
          {{ getDateStr(movieScheduleDate.year, movieScheduleDate.month, movieScheduleDate.day) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDateStr, getScheduleDateList } from '@/utils/coming_soon/schedule'

export default {
  name: 'MovieSchedule',
  props: {
    data: Array,
    tellDateIdxToParent: Function
  },
  methods: {
    getDateStr,
    getScheduleDateList,
    tellDateIdx: function (scheduleDate) {
      this.tellDateIdxToParent(scheduleDate.idx)
    }
  }
}
</script>

<style scoped>
div.MovieSchedule {
  margin-top: 24px;
}

div.MovieScheduleHeader {
  padding: 6px 0;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: #616161;
  text-align: center;
}

div.MoviescheduleDateGroup {
  display: flex;
  background-color: #dcdcdc;
}

div.MovieScheduleDateWrap {
  border-right: solid 1px;
  border-image: linear-gradient(to bottom,#e0e0e0 0%,#c2c2c2 80%);
  border-image-slice: 1;
}

div.MovieScheduleDate {
  padding: 18px 0 18px 0;
  width: 150px;
  background-color: #dcdcdc;
  color: #212121;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
}
</style>
