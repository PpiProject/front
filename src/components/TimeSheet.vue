<template>
  <CalendarMonth/>
<!--  <div class="headerLogin">расписание занятий</div>-->
<!--  <div class="contBtn">-->
<!--    <button class="btnMoth" @click="prevMonth">Предыдущий месяц</button>-->
<!--    <div class="headerLogin">{{ nameMonth }} {{currYear}} года</div>-->
<!--    <button class="btnMoth" @click="nextMonth">Следующий месяц</button>-->
<!--  </div>-->

<!--  <table class="sheet">-->
<!--    <tr>-->
<!--      <td v-for="day in this.daysWeek" :key="day.id">{{ day.name }}</td>-->
<!--    </tr>-->
<!--    <tbody>-->
<!--    <tr>-->
<!--      <template v-for="numDay in this.containerCalendar" :key="numDay.numDay">-->
<!--        <td  v-if="numDay.numDay === 0">{{numDay.date}}</td>-->
<!--        <td  v-else-if="numDay.numDay !== 0">-->
<!--          {{numDay.date}}</td>-->
<!--      </template>-->
<!--    </tr>-->

<!--    </tbody>-->

<!--    <tr >-->
<!--    </tr>-->
<!--  </table>-->

</template>

<script>
import CalendarMonth from "@/components/calendar/CalendarMonth";
export default {
  name: "TimeSheet",
  components: {CalendarMonth},
  // data() {
  //   return {
  //     daysWeek: [
  //       {'id': 1, name: 'Понедельник'},
  //       {'id': 2, name: 'Вторник'},
  //       {'id': 3, name: 'Среда'},
  //       {'id': 4, name: 'Четверг'},
  //       {'id': 5, name: 'Пятница'},
  //       {'id': 6, name: 'Суббота'},
  //       {'id': 0, name: 'Воскресение'},
  //     ],
  //     moths: [
  //       {'id': 0, name: 'Январь'},
  //       {'id': 1, name: 'Февраль'},
  //       {'id': 2, name: 'Март'},
  //       {'id': 3, name: 'Апрель'},
  //       {'id': 4, name: 'Май'},
  //       {'id': 5, name: 'Июнь'},
  //       {'id': 6, name: 'Июль'},
  //       {'id': 7, name: 'Август'},
  //       {'id': 8, name: 'Сентябрь'},
  //       {'id': 9, name: 'Октябрь'},
  //       {'id': 10, name: 'Ноябрь'},
  //       {'id': 11, name: 'Декабрь'}],
  //     currMonth: 0,
  //     currYear: '',
  //     currDay: '',
  //     nameMonth:'',
  //     containerCalendar: []
  //   }
  // },
}
</script>

<style scoped>
.headerLogin {
  padding-top: 1rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #727272;
}

.contBtn {
  margin: 0 auto;
  padding-top: 0.5rem;
  width: 700px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
}

.btnMoth {
  border: none;
  background-color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  line-height: 26px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #2c9437;
}

.sheet {
  padding-top: 2rem;
  margin: 0 auto;
  width: 100%;
}

.sheet tr {
  border: 2px solid gray;
}

.sheet td {
  width: 100px;
  border-bottom: 2px solid #6a866b;;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 26px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #727272;
}
</style>