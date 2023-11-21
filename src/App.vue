<script setup>
import AppHeader from '@/components/AppHeader.vue';

</script>
<template>
	<AppHeader />
	<!-- <div class="row" style="background-color:black;">
		<div class="col-sm-1" >Left pane</div>
		<div class="col-sm-10" style="background-color:#36454f; color: white;"><router-view /></div>
		<div class="col-sm-1" >Right pane</div>
	</div> -->
	<div id="page">
		<div id="content">
			<router-view />
		</div>
	</div>
</template>
<style scoped>
	#content {
		margin-left: 1%;
		margin-right: 1%;
		background-color:#36454f;
		color: white;
		min-height: 100vh;
		overflow: auto;
	}
	#page {
		min-height: 100vh;
		overflow: auto;
		background-color: black;
	}


</style>