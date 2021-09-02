<template>
  <div>
    <div class="MovieScheduleScreenDate">
      {{ data.month + "月" + data.day + "日(" + data.d + ")"}}
    </div>
    <div class="MovieScheduleScreenTitle">{{ data.title }}</div>
    <div>
      <div
        v-for="(movieScheduleScreen, movieScheduleScreenIdx) in data.screen"
        :key="'MovieScheduleScreen' + movieScheduleScreenIdx">
        <div class="MovieScheduleScreenName">SCREEN{{ movieScheduleScreen.screen }}</div>
        <div>
          <div
            v-for="(movieScheduleScreenTerm, movieScheduleScreenTermIdx) in movieScheduleScreen.term"
            :key="'MovieScheduleScreenTerm' + movieScheduleScreenTermIdx"
            class="MovieScheduleScreenTerm">
            <div>
              <span>
                {{
                  String(movieScheduleScreenTerm.startHour).padStart(2, '0') +
                  ":" +
                  String(movieScheduleScreenTerm.startMinute).padStart(2, '0')
                }}
              </span>
              <span> ~ </span>
              <span>
                {{
                  String(movieScheduleScreenTerm.endHour).padStart(2, '0') +
                  ":" +
                  String(movieScheduleScreenTerm.endMinute).padStart(2, '0')
                }}
              </span>
            </div>
            <div>〇販売中</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieScheduleScreen',
  props: {
    data: Object
  }
}
</script>

<style scoped>
</style>
