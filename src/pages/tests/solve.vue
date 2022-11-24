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
                <button v-if="indexOfTest > 1" class="bg-[#4C6FFF] hover:bg-[#4c70ffbd] transition-all duration-300 px-5 text-white py-2 rounded-[8px]" @click="">prev</button>
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

        <div v-else class="h-[200px] card w-[880px] border p-5 border-black border-solid">
            your score is {{ result }} / {{ allTest.length }}
            <span v-if="result <= 0">Awfull</span>
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
        this.allTest = this.getTest()
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
            this.result
        }
        // saveData();
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