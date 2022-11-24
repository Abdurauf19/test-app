<template>
    <div>
            <div class="flex justify-end"><button @click="$emit('add')" class="bg-[#4C6FFF] hover:bg-[#4c70ffbd] transition-all duration-300 px-5 text-white py-3 rounded-[8px]">add</button></div>
        <table class="w-full">
            <tr>
                <th class="text-[14px] font-semibold text-[#8492A6]">№</th>
                <th class="text-[14px] font-semibold text-[#8492A6]">Name</th>
                <th class="text-[14px] font-semibold text-[#8492A6]">Phone</th>
                <th class="text-[14px] font-semibold text-[#8492A6]">Actions</th>
            </tr>
            <tr v-for="(item,index) in data" :key="index" class="rounded-[8px]" >
                <td>{{index+1}}</td>
                <td>{{item.userName}}</td>
                <td>{{item.userPhone}}</td>
                <td><icons  class="cursor-pointer" name="dots" @click="setActive(item.id)"/>
                 <span v-if="active == item.id" class="absolute z-50 flex flex-col w-[100px] bg-[#EBF1FA] overflow-hidden border border-[#EBF1FA] cursor-pointer border-solid rounded-[8px]">
                    <span class="text-[#525763] text-[12px] font-normal p-2 transition-all duration-300 hover:bg-[#8492a68e]" @click="getId(item.id)" >edit</span>
                     <span class="text-[#525763] text-[12px] font-normal p-2 transition-all duration-300 hover:bg-[#8492a68e]"  @click="deleted(item.id)">delete</span>
                </span>
                </td>
            </tr>
</table>
    </div>
</template>

<script>
import icons from "./icon.vue"
export default {
   components: { icons },
    props: {
    data: Array
  },
  
    data() {
        return {
            active: ''
        }
    },  
  
  

  methods: {
    getId(id) {
      this.$router.push(`students?id=${id}`)
      this.$emit('edit')
    },
  deleted(id) {
    this.$router.push(`students?id=${id}`)
    this.$emit('delete')
  },
    setActive(id) {
    if(this.active) {
      this.active = ""
        } else {
          this.active = id
        }
    },

  }

}
</script>

<style lang="scss" scoped>
td, th {
  text-align: left;
  padding: 8px;
}
</style>

