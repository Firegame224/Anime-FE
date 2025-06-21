<script setup lang="ts">
</script>

<template>
    <div class="w-full min-h-screen flex flex-col bg-black">
        <Navbar />
        <div class="w-full min-h-screen">
            <slot />
        </div>
        <Footer/>
    </div>
</template>