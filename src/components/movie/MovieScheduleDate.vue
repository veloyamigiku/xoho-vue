<template>
  <div>
    <div class="MovieScheduleDateGroup">
      <div
        v-for="(scheduleDate, scheduleDateIdx) in data"
        class="MovieScheduleDate"
        :key="'MovieScheduleDate' + scheduleDateIdx">
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
  </div>
</template>

<script>
export default {
  name: 'MovieScheduleDate',
  props: {
    data: Array
  }
}
</script>

<style scoped>
div.MovieScheduleDateGroup {
  display: flex;
  overflow: hidden;
}

div.MovieScheduleDate {
  width: calc(100% / 7);
  flex-shrink: 0;
  background-color: #616161;
}

div.MovieScheduleDate:nth-of-type(n+2) {
  border-left: 1px solid #cacaca;
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
