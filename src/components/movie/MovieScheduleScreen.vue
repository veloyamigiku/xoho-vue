<template>
  <div class="MovieScheduleScreenRoot">
    <div class="MovieScheduleScreenDate">
      {{ data.month + "月" + data.day + "日(" + data.d + ")"}}
    </div>
    <div class="MovieScheduleScreenTitle">{{ data.title }}</div>
    <div>
      <div
        v-for="(movieScheduleScreen, movieScheduleScreenIdx) in data.screen"
        :key="'MovieScheduleScreen' + movieScheduleScreenIdx"
        class="MovieScheduleScreen">
        <div class="MovieScheduleScreenName">SCREEN{{ movieScheduleScreen.screen }}</div>
        <div class="MovieScheduleScreenTermRoot">
          <div
            v-for="(movieScheduleScreenTerm, movieScheduleScreenTermIdx) in movieScheduleScreen.term"
            :key="'MovieScheduleScreenTerm' + movieScheduleScreenTermIdx"
            class="MovieScheduleScreenTerm">
            <div>
              <span class="MovieScheduleScreenTermStart">
                {{
                  String(movieScheduleScreenTerm.startHour).padStart(2, '0') +
                  ":" +
                  String(movieScheduleScreenTerm.startMinute).padStart(2, '0')
                }}
              </span>
              <span class="MovieScheduleScreenTermInterval"> ~ </span>
              <span class="MovieScheduleScreenTermEnd">
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
div.MovieScheduleScreenRoot {
  margin-top: 18px;
}

div.MovieScheduleScreenDate {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  font-size: 26px;
  font-weight: 700;
  color: #b71c1c;
}

div.MovieScheduleScreenTitle {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  font-size: 22px;
  font-weight: 700;
}

div.MovieScheduleScreen {
  margin-top: 2px;
  padding-top: 16px;
  padding-left: 14px;
  padding-right: 14px;
  padding-bottom: 13px;
  background-color: #333;
}

div.MovieScheduleScreenName {
  margin-right: 15px;
  font-size: 14px;
  color: #fff;
}

div.MovieScheduleScreenTermRoot {
  margin-top: 10px;
  padding: 0 5px;
  width: 14.6666%;
}

div.MovieScheduleScreenTerm {
  padding: 10px 0;
  background: #fff;
  text-align: center;
  border-radius: 4px;
}

span.MovieScheduleScreenTermStart {
  margin-right: 5px;
  font-size: 20px;
  font-weight: 700;
  color: #212121;
}

span.MovieScheduleScreenTermInterval {
  font-size: 12px;
  font-weight: 700;
  color: #9e9e9e;
}

span.MovieScheduleScreenTermEnd {
  margin-left: 5px;
  font-size: 12px;
  font-weight: 700;
  color: #9e9e9e;
}

</style>
