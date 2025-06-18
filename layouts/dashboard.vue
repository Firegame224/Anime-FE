<script setup lang="ts">
</script>

<template>
    <div class="w-full min-h-screen flex">
        <aside class="w-[30%] h-full bg-blue-500 flex flex-col fixed">
            <p>Haloo</p>
            <p>Holaa</p>
        </aside>
        <div class="w-full pl-[30%]">
            <slot />
        </div>
    </div>
</template>