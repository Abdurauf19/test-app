<template>
    <div class="container mt-10">
         <div class="flex justify-end"><button  class="bg-[#4C6FFF] hover:bg-[#4c70ffbd] transition-all duration-300 px-5 text-white py-3 rounded-[8px]" @click="$router.push('/tests/add')">add</button></div>
        <table class="w-full">
            <tr>
                <th v-for="item in tableText" :key="item" class="text-[14px] font-semibold text-[#8492A6]">{{item.text}}</th>
            </tr>
            <tr v-for="(item, index) in getTest" :key="index" class="rounded-[8px]" >
                <td>{{index+1}}</td>
                <td>{{item.title}}</td>
                <td>
                <icons  class="cursor-pointer" name="dots" @click="setActive(item.id)" />
                 <span v-if="active == item.id" class="absolute z-50 flex flex-col w-[100px] bg-[#EBF1FA] overflow-hidden border border-[#EBF1FA] cursor-pointer border-solid rounded-[8px]">
                    <span class="text-[#525763] text-[12px] font-normal p-2 transition-all duration-300 hover:bg-[#8492a68e]" @click="$router.push(`/tests/${item.id}`)" >edit</span>
                     <span class="text-[#525763] text-[12px] font-normal p-2 transition-all duration-300 hover:bg-[#8492a68e]" >delete</span>
                </span>
                </td>
            </tr>
</table>
    </div>
</template>

<script>
import icons from "../components/icon.vue"
export default {
    components: { icons },
   data() {
     return {
         active: '',
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

   computed: {
    getTest() {
        return JSON.parse(window.sessionStorage.getItem("test")) || undefined;
    },
   },

methods: {
    setActive(id) {
    if(this.active) {
      this.active = ""
        } else {
          this.active = id
        }
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

