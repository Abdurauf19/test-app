<template>
    <div class="container mt-10">
        <CTable @edit="''" @delete="''" :data="students"/>
    </div>
</template>

<script>
import CTable from "../components/CTable.vue"
export default {
 components: { CTable },
 data() {
    return {
        students: [
            {
                name: "A",
                phone: "99999999",
                birthdate: "19.12.2002",
                id: '12'
            },
              {
                name: "A",
                phone: "99999999",
                birthdate: "19.12.2002",
                id: '11'
            },
        ]
    }
 }
}
</script>