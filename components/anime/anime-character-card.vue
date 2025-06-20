<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">

defineProps<{
    characters : any[]
}>()

</script>

<template>
    <div class="w-full grid grid-cols-2 md:grid-cols-5">
        <Card v-for="char in characters" :key="char.mal_id">
            
        </Card>
    </div>
</template>