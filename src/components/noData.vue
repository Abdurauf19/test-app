<template>
    <div class="flex flex-col items-center justify-center">
        <img src="../assets/image/noData.png" alt="noData">
        <button @click="$emit('add')" class="mt-9 bg-[#4C6FFF] hover:bg-[#4c70ffbd] transition-all duration-300 px-5 text-white py-3 rounded-[8px]" type="button">{{text}}</button>
        </div>
</template>

<script>
export default {
    props: {
        text: {
            type:String,
            default: 'add '
        }
    }
}
</script>