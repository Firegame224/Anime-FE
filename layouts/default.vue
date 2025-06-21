<script setup lang="ts">
</script>

<template>
    <div class="w-full min-h-screen flex flex-col bg-black">
        <Navbar />
        <div class="w-full">
            <slot />
        </div>
        <Footer/>
    </div>
</template>