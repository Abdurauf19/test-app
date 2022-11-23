<template>
    <div class="grid grid-cols-2">
    <CSidebar/>
        <router-view/>
    </div>
</template>

<script>
import CSidebar from "../components/sideBar.vue"
export default {
    components: { CSidebar }
}
</script>