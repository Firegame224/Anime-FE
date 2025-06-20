<!-- eslint-disable vue/require-default-prop -->
<script setup>
const props = defineProps({
    apiData: Array
})

const router = useRouter()

</script>

<template>
    <div class="w-full grid grid-cols-6 gap-5">
        <Card 
            v-for="anime in props.apiData" :key="anime.mal_id"
            class="group relative bg-transparent border-none text-white p-2 items-center cursor-pointer"
            @click="router.push(`/detail/${anime.mal_id}`)">
            <CardContent class="w-full items-center justify-between flex flex-col gap-1 p-0">
                <img class="w-full h-[340px] object-cover" :src="anime.images.webp.large_image_url" :alt="anime.title">
                <p class="text-white font-semibold text-start w-full">{{ anime.title }}</p>
            </CardContent>
            <div
                class="w-full p-5 h-full absolute opacity-0 flex flex-col items-start bg-[#202020] group-hover:opacity-95 transition duration-700">
                <p class="font-semibold text-white mb-5">{{ anime.title }}</p>
                <div class="flex items-center justify-center gap-2">
                    <p class="text-gray-500">{{ anime.score }}</p>
                    <svg 
                    id="star" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 opacity-60" fill="white" viewBox="0 0 24 24" >
                        <path
                            d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z" />
                    </svg>
                </div>
                <p class="text-gray-500 mb-1">Episodes :{{ anime.episodes }}</p>
                <p class="font-semibold text-white line-clamp-4">{{ anime.synopsis }}</p>
            </div>
        </Card>
    </div>
</template>