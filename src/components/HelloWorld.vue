<template>
	<div class="cursor-pointer" @click="func('wassapppppp')">
		<h1>Hello world</h1>
	</div>
</template>

<script>
export default {
	props: {
		func: Function,
	},
};
</script>
