<template>
	<div class="bg-white h-screen w-[251px] max-w-[251px] flex flex-col justify-between p-6 border border-[#EDF2F7] border-solid sidebar">
      <div class="flex flex-col gap-8">
			<a v-for="(item,index) in links" :href="item.link" :key="index" 
			class="flex items-center gap-5 text-[15px] text-[#425466]"
			 >
				<icons :name="item.icon" />
				{{item.name}}
			 </a>
	   </div>
		<h2 @click="logout" class="flex items-center gap-5 cursor-pointer text-[15px] text-[#425466]">
		<icons name="logOut"/>
		Logout
		</h2>
	  
	</div>
</template>

<script>
import icons from "./icon.vue"
export default {
	components: { icons },
	data() {
		return {
			links: [
				{
					link: '/',
					name: 'Tests',
					icon: 'testsIcon'
				},
				{
					link: '/students',
					name: 'Students',
					icon: 'students'
				},
			]
		}
	},

	methods: {
 logout() {
    localStorage.clear();
    sessionStorage.clear();
     this.$router.push("/login");
}
	}
	
}
</script>

<style lang="scss" scoped>
.sidebar {
	border-radius: 0 0 0 0
}
</style>
