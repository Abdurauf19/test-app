<template>
    <div class="ml-[100px] h-screen flex flex-center justify-center" >
        <div class="card w-[780px] p-10 flex flex-col gap-4">
           <div>
            <h2>Write  Question</h2>
            <label class="text-[14px] text-[#425466] font-medium ">
               Question
            <el-input
                v-model="form.question"
               :class="{'error-prefix':v$.form.question.$error}"
                class="mt-2" 
                placeholder="write question"
            />
            </label>
           </div>

            <div class="flex flex-col">
             <label class="text-[14px] text-[#425466] font-medium ">
                Answer
            <el-input
                 v-for="(item, index) in form.answers"
                 :key="index"
                 v-model="form.answers[index]"
                class="mt-2" 
                placeholder="write question"
                 @focus="handleFocus(index)"
            > 
                <template #prefix>
                     <el-radio
                      v-model="form.correct"
                      :label="index"
                      :disabled="!form.answers[index].length"
                      name="correct"
                      ><span></span
                    ></el-radio>
                </template>
            </el-input>
            </label>

        <button v-if="!singleTest" class="bg-[#4C6FFF] hover:bg-[#4c70ffbd] transition-all duration-300 px-5 text-white py-2 rounded-[8px] mt-3" type="button" @click="AddTest">Add test</button>
        <button v-if="singleTest" class="bg-[#4C6FFF] hover:bg-[#4c70ffbd] transition-all duration-300 px-5 text-white py-2 rounded-[8px] mt-3" type="button" @click="editTest">Edit test</button>
          
        </div>
        </div>
    </div>
</template>

<script> 
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
     setup () {
    return { v$: useVuelidate() }
  },
    data() {
        return {
            tests: [],
            singleTest: [],
            form: {
               question: "",
                settings: "radio",
                answers: [""],
                correct: 0,
                id: Math.floor(Math.random() * 100000),
            }
        }
    },
    validations() {
	return {
        form: {
            question: {required},
            correct: {required}
        }
	}
},

   mounted() {
    this.tests = this.getTest();
    this.singleTest = this.getSingleTest()
    if(this.singleTest){
         this.updateTest();
    }
 },

    methods: {
    handleFocus(index) {
            if (index == this.form.answers.length - 1 && this.form.answers.length < 3) {
                this.form.answers.push("");
            }
        },

    updateTest() {
        this.form.question = this.singleTest?.question
       this.form.answers = this.singleTest?.answers
       this.form.id = this.singleTest?.id,
       this.form.correct = this.singleTest?.correct
    },
     getTest() {
        return JSON.parse(window.sessionStorage.getItem("test")) || undefined;
    },
    getSingleTest() {
        return this.findItemById( this.getTest(), this.$route.params.id )
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
            return arr?.find((el) => el.id === +id)
        },

     async AddTest () {
            this.v$.$validate()
            if(!this.v$.$error) {
            for (const index in this.form.answers) {
            if (!this.form.answers[index]) {
                this.form.answers.splice(index, 1);
            }
            }

            const allTest = [];
            const parsedTests =
            JSON.parse(window.sessionStorage.getItem("test")) || undefined;
                if (parsedTests) {
            allTest.push(...parsedTests);
            }

            allTest.push(this.form);
            await window.sessionStorage.setItem("test", JSON.stringify(allTest));
            this.$router.push('/')
             this.clearForm();
        }
     },

    editTest() {
         this.v$.$validate()
          if(!this.v$.$error) {
            for (const i in this.form.answers) {
            if (!this.form.answers[i]) {
                this.form.answers.splice(i, 1);
            }
            }
            const index = this.tests.findIndex((item) => item.id == this.form.id);
            this.tests[index] = this.form;
            window.sessionStorage.setItem("test", JSON.stringify(this.tests));
            this.tests = this.getTest();
            // this.clearForm();
            this.$router.push('/');
        }
    },

    
}



}
</script> 

<style lang="scss">
.el-input__inner {
    padding:16px 15px 15px 15px;
    background: #EDF2F7;
    height: 35px;
    border-radius: 2px;
}

.el-input__prefix-inner {
    padding: 0px 0px 0px 10px;
}
.el-input__wrapper {
    background: #EDF2F7;
}

.card {
    box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
border-radius: 16px;
}
</style>




