<template>
    <div class="container mt-10">
      <div>
        <CTable v-if="students && students.length "  :data="students" @add="dialogVisible = true"  @edit="fillStudents" @delete="deleteStudent"  />
       <div v-else class="flex items-center justify-center h-screen " >
        <CNodata text="add students" @add="dialogVisible = true" />
       </div>
        
       <el-dialog
    v-model="dialogVisible"
    :title="single ?'Edit student' : 'Add Student'"
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
   <button v-if="single"  class="bg-[#4C6FFF] hover:bg-[#4c70ffbd] transition-all duration-300 px-5 text-white py-3 rounded-[8px]" type="button" @click="editStudent">Edit</button>
   <button v-if="!single"  class="bg-[#4C6FFF] hover:bg-[#4c70ffbd] transition-all duration-300 px-5 text-white py-3 rounded-[8px]" type="button" @click="createStudent">Add</button>
   </div>
   
  </el-dialog>

      </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import CTable from "../../components/CSideBar.vue"
import CNodata from "../../components/noData.vue"
export default {
 components: { CTable, CNodata },

    setup () {
        return { v$: useVuelidate() }
    },

 data() {
    return {
        single: undefined,
    dialogVisible: false,
    students: [],
    currentStudentId: undefined,
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

watch: {
   "this.$route.query.id"(value) {
    console.log(value)
    }
},

mounted() {
    this.students = this.getStudents()
 },

methods: {
   getStudents() {
        return JSON.parse(window.sessionStorage.getItem("student")) || undefined;
    },
    clearForm() {
      for(let i in this.form) {
        this.form[i] = '';
        if(i == 'id') {
          this.form[i] =  Math.floor(Math.random() * 100000)
        }
      }
    },   
 findItemById(arr,id) {
    return arr.find((el) => el.id === +id)
},


   deleteStudent(id) {
    const index = this.students.findIndex((item) => item.id == id);
    this.students.splice(index, 1);
    window.sessionStorage.setItem("student", JSON.stringify(this.students));
  },

  fillStudents(id) {
    this.dialogVisible = true
    this.currentStudentId = id
    let obj =  this.findItemById(this.students , id )
    this.single = obj
    this.form.userName =  obj.userName
    this.form.userPhone =  obj.userPhone
    this.form.userPassport =  obj.userPassport
    this.form.userPINFL =  obj.userPINFL
    this.form.userBirthdate =  obj.userBirthdate
  },

  editStudent() {
    const index = this.students.findIndex((item) => item.id == this.currentStudentId);
    this.students[index] = this.form;
    window.sessionStorage.setItem("student", JSON.stringify(this.students));
    this.dialogVisible = false
},
 async createStudent() {
     this.v$.$validate()
    if(!this.v$.$error) {
      this.dialogVisible = false
     const students = [];
     const haveStudents = JSON.parse(window.sessionStorage.getItem("student")) || undefined;
     if (haveStudents) {
      students.push(...haveStudents);
    }
      students.push(this.form);
    await window.sessionStorage.setItem("student", JSON.stringify(students));
    this.students = this.getStudents();
    }
  }
},
}
</script>


<style lang="scss">
  .el-input__inner {
    padding:12px 1px 16px 12px;
    background: #EDF2F7;
    height: 40px;
}
</style>