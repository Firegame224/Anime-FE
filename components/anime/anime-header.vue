<script setup lang="ts">
const router = useRouter()

const { text } = defineProps<{
    text: string
}>()
</script>

<template>
    <div class="w-full bg-[#232323] flex justify-between items-center p-5 fixed z-40">
        <p class="text-orange-600 font-bold text-lg">{{ text }}</p>
        <Button class="group hover:opacity-90 transition duration-700 cursor-pointer" @click="router.back()">
            <p class="text-white font-semibold group-hover:text-orange-600 transition duration-700">Kembali</p>
            <ArrowBigLeft class="text-white group-hover:text-orange-600 transition duration-700"/>
        </Button>
    </div>
</template>