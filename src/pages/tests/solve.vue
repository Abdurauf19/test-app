<template>
    <div class="h-screen flex items-center justify-center ">
        <div class="card  w-[880px] border p-5 border-black border-solid" v-if="getTest">
            <h2>Question   <span>{{index + 1}} / {{allTest.length}}</span> {{this.current}}</h2>
            <div>
                <h3 class="text-[#27272E] text-[16px] font-semibold">{{getTest.question}}</h3>
            <el-radio-group v-if="getTest.settings === 'radio'"  v-model="current[getTest?.id]" class="mt-3">
              <el-radio
                v-for="(item, idx) in getTest?.answers"
                :key="idx"
                :label="idx"
              >
                <template v-if="item">
                  <span class="text-blue-dark font-medium">{{ item }}</span>
                </template>
              </el-radio>
            </el-radio-group>

               <el-checkbox-group v-if="getTest.settings === 'checkbox'"  v-model="current[getTest?.id]">
              <el-checkbox
                v-for="(item, idx) in getTest?.answers"
                :key="idx"
                :label="idx"
                >{{ item }}</el-checkbox
              >
            </el-checkbox-group>
    <div class="mb-2" v-if="getTest.settings === 'textarea'">
            <el-input
              class="mt-3 resize-none"
               v-model="current[getTest?.id]"
              type="textarea"
              placeholder="Write answer"
            />
    </div>
            </div>
            <div class="flex  gap-3 justify-end">
                <button 
                 :disabled="current[getTest?.id] == undefined"
                 class="bg-[#4C6FFF]
                hover:bg-[#4c70ffbd]
                transition-all duration-300
                px-5 text-white py-2
                rounded-[8px]"
                @click="submit(getTest?.id)
                ">submit</button>
            </div>
        </div>

        <div v-else class="h-[200px] card w-[880px] border flex flex-col p-5 border-black border-solid">
            your score is {{ result }} / {{ allTest.length }}
        <button class="bg-[#4C6FFF] hover:bg-[#4c70ffbd] max-w-[120px] transition-all duration-300 px-5 text-white py-2 rounded-[8px] mt-5" @click="pushToIndex">go back</button>
        </div>
    </div>
</template>

<script> 
export default {
    data() {
        return {
            allTest: [],
            index: 0,
            result: 0,
            current: {},
        }
    },

    mounted() {
        this.allTest = JSON.parse(sessionStorage.getItem('test')) ;
        const solved = JSON.parse(sessionStorage.getItem("solved")) || "";
        this.index = JSON.parse(sessionStorage.getItem("testIndex")) || 0;
        this.result = JSON.parse(sessionStorage.getItem("result")) || 0;

        
        solved && (this.current = solved ) 
        
    },
    computed: {
        getTest() {
            return this.allTest[this.index];
        },
       
    },
    methods: {
        submit(id) {
            if (this.current[id] != undefined) {
                this.index++
            }

            if (this.index >= this.allTest.length) {
                this.result = this.getResult();
            }

            this.saveData();
        },

        saveData() {
            sessionStorage.setItem("solved", JSON.stringify(this.current));
            sessionStorage.setItem("testIndex", JSON.stringify(this.index));
            sessionStorage.setItem("result", JSON.stringify(this.result));
        }, 

        getResult() {
            let res = 0;
            for (let i in this.current) {
                const found = this.allTest.find((item) => item.id === +i);
                res += found.correct == this.current[i] ? 1 : 0
            }

            return res;
        },





        pushToIndex() {
            sessionStorage.removeItem("solved");
            sessionStorage.removeItem("result");
            sessionStorage.removeItem("testIndex");
            this.$router.push('/')
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