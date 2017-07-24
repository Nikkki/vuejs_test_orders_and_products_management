<template>
	<div class="menu-top">
        <div class="wrap">
			<div class="menu-top_logo">
				<p> inventory </p>
			</div>
			<div class="menu-top_search">
				<input type="text" placeholder="Поиск">
			</div>

			<app-clock>
			</app-clock>

		</div>
	</div>
</template>


<script>
	import Clock from '../additional-components/Clock.vue';
		
	export default {
		

		data() {
			return {

			}
		},


		methods: {

		},	
			components: {
			'app-clock': Clock
		}
	}
</script>
	
<style  scoped>
    .wrap{
		width: 1024px;
		margin: 0 auto;
    }
	.menu-top {
		width: 100%;
		height: 75px;
		position: relative;
		display: block;
		background-color: #fff;
		box-shadow: 0 5px 25px rgba(222,227,231,.8);
		z-index: 21;

		display: flex;
		

	}

	.menu-top .wrap{
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: space-between;
	}

	.menu-top_logo{
		font: 13px Arial, sans-serif;
		font-weight: bold;
		color: #91BE66;
		text-transform: uppercase;
		display: block;
		float: left;
	}
		
	.menu-top_search input{
		max-width: 412px;
		min-width: 300px;
		height: 24px;
		background-color: #F0F3F5;
		border-radius: 5px;
		color: #000;
		font: 12px Arial, sans-serif;
		font-weight: bold;	
		display: flex;
		padding-left: 13px; 
		margin-left: -200px;

		-webkit-box-shadow: inset 0px 7px 3px -6px rgba(222,227,231,1);
		-moz-box-shadow: inset 0px 7px 3px -6px rgba(222,227,231,1);
		box-shadow: inset 0px 7px 3px -6px rgba(222,227,231,1);
		border:0;
		border-top: 1px solid rgba(222,227,231,1);		
		border-left: 1px solid rgba(222,227,231,.7);
		border-right: 1px solid rgba(222, 227, 231, .7);
		
		
	}
	.menu-top_search input:focus{
		outline: 0;
	}
	.menu-top_search input::-webkit-input-placeholder,
	.menu-top_search input::-moz-input-placeholder{
		color: #000;
	}

	.menu-top .clock{
		font: 12px Arial, sans-serif;
		font-weight: bold;
		display: block;
		float: right;
	}

</style>