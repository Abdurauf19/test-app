<template>
    <div class="container mt-10">
        <div v-if="tests && tests.length">
         <div class="flex justify-end"><button  class="bg-[#4C6FFF] hover:bg-[#4c70ffbd] transition-all duration-300 px-5 text-white py-2 rounded-[8px]" @click="$router.push('/tests/add')">add</button></div>
        <table class="w-full">
            <tr>
                <th v-for="item in tableText" :key="item" class="text-[14px] font-semibold text-[#8492A6]">{{item.text}}</th>
            </tr>
            <tr v-for="(item, index) in tests" :key="index" class="rounded-[8px]" >
                <td>{{index+1}}</td>
                <td>{{item.question}}</td>
                <td>
                <icons  class="cursor-pointer" name="dots" @click="setActive(item.id)" />
                 <span v-if="active == item.id" class="absolute z-50 flex flex-col w-[100px] bg-[#EBF1FA] overflow-hidden border border-[#EBF1FA] cursor-pointer border-solid rounded-[8px]">
                    <span class="text-[#525763] text-[12px] font-normal p-2 transition-all duration-300 hover:bg-[#8492a68e]" @click="$router.push(`/tests/${item.id}`)" >edit</span>
                     <span class="text-[#525763] text-[12px] font-normal p-2 transition-all duration-300 hover:bg-[#8492a68e]" @click="deletedTest(item.id)" >delete</span>
                </span>
                </td>
            </tr>
    </table>
           <div class="flex justify-end mt-5"> <button class="bg-[#4C6FFF] hover:bg-[#4c70ffbd] transition-all duration-300 px-5 text-white py-2 rounded-[8px]" @click="$router.push('/tests/solve/')">start test</button></div>
        </div>
        <div v-else class="flex items-center justify-center h-screen " >
        <CNodata text="add test" @add="$router.push('/tests/add')" />
       </div>
    </div>
</template>

<script>
import CNodata from "../components/noData.vue"
import icons from "../components/icon.vue"
export default {
    components: { icons, CNodata },
   data() {
     return {
         active: '',
         tests : [],
         singleTest: undefined,
        tableText: [
            {
                text: "№"
            },
             {
                text: "Questions"
            },
             {
                text: "Actions"
            },
        ]
    }
   },

 mounted() {
    this.tests = this.getTest()
 },

methods: {
    getTest() {
        return JSON.parse(window.sessionStorage.getItem("test")) || undefined;
    },

    setActive(id) {
    if(this.active) {
      this.active = ""
        } else {
          this.active = id
        }
    },

     deletedTest(id) {
    const index = this.tests.findIndex((item) => item.id == id);
    this.tests.splice(index, 1);
    window.sessionStorage.setItem("test", JSON.stringify(this.tests));
  }

}
}
</script>

<style lang="scss" scoped>
td, th {
  text-align: left;
  padding: 8px;
}
</style>

