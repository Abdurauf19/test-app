<template>
    <div class="container mt-10">
         <div class="flex justify-end"><button  class="bg-[#4C6FFF] hover:bg-[#4c70ffbd] transition-all duration-300 px-5 text-white py-3 rounded-[8px]">add</button></div>
        <table class="w-full">
            <tr>
                <th v-for="item in tableText" :key="item" class="text-[14px] font-semibold text-[#8492A6]">{{item.text}}</th>
            </tr>
            <tr class="rounded-[8px]" >
                <td></td>
                
                <td>
                <icons  class="cursor-pointer" name="dots" />
                 <span  class="absolute z-50 flex flex-col w-[100px] bg-[#EBF1FA] overflow-hidden border border-[#EBF1FA] cursor-pointer border-solid rounded-[8px]">
                    <span class="text-[#525763] text-[12px] font-normal p-2 transition-all duration-300 hover:bg-[#8492a68e]"  >edit</span>
                     <span class="text-[#525763] text-[12px] font-normal p-2 transition-all duration-300 hover:bg-[#8492a68e]" >delete</span>
                </span>
                </td>
            </tr>
</table>
    </div>
</template>

<script>
export default {
   data() {
     return {
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
   }
}
</script>

