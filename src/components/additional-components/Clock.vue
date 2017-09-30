<template>
	<div class="clock">
		<div class="clock-day" v-cloak>
			<p>{{ dayName }}</p>
		</div>
		<div>
		</div>
		<div >
			<p>{{ day }} {{ month }}, {{ year }}
				<span class="clock__icon"><icon  name="clock-o"></icon></span> {{ hours }}:{{ minutes }}</p>
		</div>
	
	</div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon.vue';

import 'vue-awesome/icons/clock-o';
export default {

	data() {
		return {
			minutes: '',
			hours: '',
			day: '',
			dayName: '',
			month: '',
			year: ''
		}
	},

	mounted() {
		setInterval(this.updateDateTime, 1000);
	},

	methods: {
		updateDateTime() {
			let now = new Date();
			let day_arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
				month_arr = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

			this.minutes = now.getMinutes();
			this.hours = now.getHours();
			this.dayName = day_arr[now.getDay()];
			this.day = now.getDate();
			this.month = month_arr[now.getMonth()];
			this.year = now.getYear() + 1900;
		}
	},
	components: {
		Icon
	}
}
</script>

<style scoped>
	.clock__icon{
		position: relative;
		margin: 0 3px 0 13px;
		top: 3px;
		color: #91BE66;
	}
	p {
		margin: 3px 0;
	}
</style>
