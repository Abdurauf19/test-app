<template>
 <div class=" h-screen flex items-center justify-center">
   <div>
	<div class="flex flex-col justify-center items-center">
		<h2 class="text-[28px] text-[#27272E] font-semibold leading-[136%] pb-3">Welcome</h2>
		<p class="text-[16px] text-[#27272E] font-normal pb-12">Let's build someting great</p>
     </div>
	<form @submit.prevent="logIn"  class="flex flex-col gap-5">
	 <label class="text-[14px] text-[#425466] font-medium ">
	 	E-mail 
	   <el-input
	   v-model="email"
        class="mt-2" 
		:class="{'error-prefix':v$.email.$error}"
		 placeholder="Type your e-mail "
		  />
	 </label>
	 <label class="text-[14px] text-[#425466] font-medium ">
	 	Password
	   <el-input
	      v-model="password"
           class="mt-2" 
		   :class="{'error-prefix':v$.password.$error}"
		  placeholder="Type your password" 
		 />
	  <span class="text-[11px] text-[#7A7A9D] leading-[12%]">
	   Must be 8 characters at least
	   </span>
	 </label>
	 <button class="w-full max-w-[425px] bg-[#4C6FFF] hover:bg-[#4c70ffc4] transition-all duration-300 py-4 rounded-[8px] text-[14px] text-white leading-[14px] font-semibold">Sign in</button>
	</form>
  </div>
	</div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email,minLength, maxLength } from '@vuelidate/validators'
export default {

  setup () {
    return { v$: useVuelidate() }
  },

data() {
	return {
		email: '',
		password: ''
	}
},

validations() {
	return {
		email: {email, required, minLength:minLength(3), maxLength:maxLength(50)},
		password: {required, minLength:minLength(8), maxLength:maxLength(50) }
	}
},

//  mounted() {
// 	 if (localStorage.getItem("auth")) {
//      this.$router.push("/");
//   }
//  },
methods: {
    logIn() {
		 this.v$.$validate()
		 if (!this.v$.$error) {
			localStorage.setItem("auth", "true");
			this.$router.push('/')
		 } 
    }
},
}
</script>

<style lang="scss">
.el-input__inner {
    padding:16px 15px 15px 15px;
    background: #EDF2F7;
    height: 46px;
}
</style>
