<script setup lang="ts">
const router = useRouter()

const title = ref<string>("")
const url = computed(() => `/search?title=${title.value}`)

const onSubmit = () => {
    if (!title.value) return;
    router.push(url.value)
}

</script>

<template>
    <form class="flex items-center justify-center w-[210px] h-8" @submit.prevent="onSubmit">
        <Button 
            type="submit"
            class="bg-orange-600 w-[15%] h-full p-0 hover:bg-orange-200 transition duration-700 rounded-none">
            <Search class="w-5 h-5 text-semibold text-white" />
        </Button>
        <input 
        v-model="title" type="text"
        class="w-[80%] bg-white border-orange-600 border text-orange-600 rounded-r items-center gap-1 p-2 text-sm h-full focus:outline-none" >
    </form>
</template>