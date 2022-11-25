<template>
    <div class="h-screen flex items-center justify-center ">
        <div class="card  w-[880px] border p-5 border-black border-solid" v-if="singleTest">
            <h2>Question   <span>{{indexOfTest}} / {{allTest.length}}</span></h2>
            <div>
                <h3 class="text-[#27272E] text-[16px] font-semibold">{{singleTest.question}}</h3>
            <el-radio-group v-model="form[singleTest?.id]" class="mt-3">
              <el-radio
                v-for="(item, index) in singleTest?.answers"
                :key="index"
                :label="index"
              >
                <template v-if="item">
                  <span class="text-blue-dark font-medium">{{ item }}</span>
                </template>
              </el-radio>
            </el-radio-group>
            </div>
            <div class="flex  gap-3 justify-end">
                <button v-if="indexOfTest > 0" class="bg-[#4C6FFF] hover:bg-[#4c70ffbd] transition-all duration-300 px-5 text-white py-2 rounded-[8px]" @click="back(singleTest?.id)">prev</button>
                <button 
                 :disabled="form[singleTest?.id] == undefined"
                 class="bg-[#4C6FFF]
                hover:bg-[#4c70ffbd]
                transition-all duration-300
                px-5 text-white py-2
                rounded-[8px]"
                @click="submit(singleTest?.id)
                ">next</button>
            </div>
        </div>

        <div v-else class="h-[200px] card w-[880px] border flex flex-col p-5 border-black border-solid">
            your score is {{ result }} / {{ allTest.length }}
        <button class="bg-[#4C6FFF] hover:bg-[#4c70ffbd] max-w-[120px] transition-all duration-300 px-5 text-white py-2 rounded-[8px] mt-5" @click="$router.push('/')">go back</button>
        </div>
    </div>
</template>

<script> 
export default {
    data() {
        return {
            allTest: [],
            indexOfTest: 0,
            result: 0,
            form: [],

        }
    },

    mounted() {
        this.allTest = this.getTest();
         const solved = JSON.parse(sessionStorage.getItem("solved")) || "";
        this.indexOfTest = JSON.parse(sessionStorage.getItem("indexOfTest")) || 0;
        this.result = JSON.parse(sessionStorage.getItem("result")) || 0;

        if (solved) {
            Object.assign(this.form, solved);
        }
    },

    computed: {
        singleTest() {
            return this.allTest[this.indexOfTest]
        }
    },

    methods: {
        getTest() {
            return JSON.parse(window.sessionStorage.getItem("test"))
        },

     submit(id) {
        if (this.form[id] != undefined) {
            this.indexOfTest++;
        }
        if (this.indexOfTest >= this.allTest.length) {
            this.result = this.getScore(this.calculateScore)
        }
       this.saveStorage()
        },
     back(id) {
        if (this.form[id] != undefined) {
            this.indexOfTest--;
        }
        if (this.indexOfTest >= this.allTest.length) {
           
        }
        this.saveStorage();
        },

        saveStorage() {
             sessionStorage.setItem("solved", JSON.stringify(this.form));
            sessionStorage.setItem("indexOfTest", JSON.stringify(this.indexOfTest));
            sessionStorage.setItem("result", JSON.stringify(this.result));
        },

         getScore(callback) {
            let result = 0;
            for (let i in this.form) {
                result += callback(i);
            }

            return result;
            },

       calculateScore(id) {
        console.log(id)
        const found = this.allTest.find((item) => item.id === id);
        console.log(found)
       if (found.settings == "radio") {
            return found.correct == this.form[id] ? 1 : 0;
        } else {
            let correct = 0;
            for (let i of found.correct) {
            if (this.form[id].includes(i)) {
                correct++;
            }
            }
            return correct == found.correct.length ? 1 : 0;
        }
        }


        
    }
}
</script> 

<style lang="scss" scoped>
    .card {
       box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
       border-radius: 16px;
    }
</style>