<template>
    <div class="flex gap-5">
    <CSidebar/>
        <router-view/>
    </div>
</template>

<script>
import CSidebar from "../components/CSideBar.vue"
export default {
    components: { CSidebar }
}
</script>