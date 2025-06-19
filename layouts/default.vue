<script setup lang="ts">
</script>

<template>
    <div class="w-full min-h-screen flex flex-col bg-black">
        <navbar />
        <div class="w-full p-5">
            <slot />
        </div>
    </div>
</template>