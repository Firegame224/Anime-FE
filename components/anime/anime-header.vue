<script setup lang="ts">
const router = useRouter()

const { text } = defineProps<{
    text: string
}>()
</script>

<template>
    <div class="w-full bg-[#232323] flex justify-between items-center p-5 fixed z-40">
        <p class="text-orange-600 font-bold text-lg">{{ text }}</p>
        <Button class="hover:opacity-70 transition duration-700 cursor-pointer" @click="router.back()">
            <p class="text-white font-semibold">Kembali</p>
            <ArrowBigLeft />
        </Button>
    </div>
</template>