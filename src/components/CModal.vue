<template>
  <el-button text @click="dialogVisible = true">
    click to open the Dialog
  </el-button>

  <el-dialog
    v-model="dialogVisible"
    title="Add Student"
    width="40%"
    :before-close="handleClose"
  >
  <div class="flex flex-col gap-4">
    <label class="text-[14px] text-[#425466] font-medium ">
	 	Name 
	   <el-input
	   v-model="form.userName"
     :class="{'error-prefix':v$.form.userName.$error}"
     class="mt-2" 
		 placeholder="Enter name "
		  />
	 </label>
   <label class="text-[14px] text-[#425466] font-medium ">
	 	Phone
	   <el-input
	   v-model="form.userPhone"
     v-maska="'## ### ## ##'"
     :class="{'error-prefix':v$.form.userPhone.$error}"
      class="mt-2" 
		 placeholder="Enter phone number "
		  />
	 </label>
   <label class="text-[14px] text-[#425466] font-medium ">
	 	Passport
	   <el-input
	   v-model="form.userPassport"
      v-maska="'AA #######'"
      :class="{'error-prefix':v$.form.userPassport.$error}"
      class="mt-2" 
		 placeholder="Enter password number "
		  />
	 </label>
   <label class="text-[14px] text-[#425466] font-medium ">
	 	PINFL
	   <el-input
	   v-model="form.userPINFL"
      v-maska="'# ###### ### ###'"
      :class="{'error-prefix':v$.form.userPINFL.$error}"
      class="mt-2" 
		 placeholder="Enter PINFL "
		  />
	 </label>
   <label class="text-[14px] text-[#425466] font-medium ">
	 	Birth day
	   <el-input
	   v-model="form.userBirthdate"
     v-maska="'##/##/####'"
     :class="{'error-prefix':v$.form.userBirthdate.$error}"
      class="mt-2" 
		 placeholder="Enter birth date "
		  />
	 </label>
   <button  class="bg-[#4C6FFF] hover:bg-[#4c70ffbd] transition-all duration-300 px-5 text-white py-3 rounded-[8px]" type="button" @click="createStudent">Add</button>
   </div>
   
  </el-dialog>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
export default {
   props: {
    dialogVisible: Boolean
  },
  
  setup () {
    return { v$: useVuelidate() }
  },

  data() {
    return {
      dialogVisible: false,
     form: {
      userName: '',
      userPhone: '',
      userPassport: '',
      userPINFL: '',
      userBirthdate: '',
      id: Math.floor(Math.random() * 100000),
     }
    }
  },
  validations() {
	return {
    form: {
      userName: { required, minLength: minLength(3) },
      userPhone: { required, minLength: minLength(9) },
      userPassport: { required, minLength: minLength(8) },
      userPINFL: { required,minLength: minLength(8) },
      userBirthdate: { required, minLength: minLength(8), }
    }
	}
},

methods: {
 async createStudent() {
     this.v$.$validate()
    if(!this.v$.$error) {
      this.dialogVisible = false
     const students = [];
     const haveStudents =
      JSON.parse(window.sessionStorage.getItem("student")) || undefined;
     if (haveStudents) {
      students.push(...haveStudents);
    }
      students.push(this.form);
    await window.sessionStorage.setItem("student", JSON.stringify(students));
    }
  }
}
}
</script>

<style lang="scss">
  .el-input__inner {
    padding:12px 1px 16px 12px;
    background: #EDF2F7;
    height: 40px;
}
</style>