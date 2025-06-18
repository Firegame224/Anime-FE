<script setup lang="ts">
import { Button } from '~/components/ui/button/index'
import { Separator } from '~/components/ui/separator/index'
import { Card, CardContent, CardDescription }  from '~/components/ui/card/index'
definePageMeta({
    layout: "dashboard"
})

</script>

<template>
    <div class="w-full gap-2 p-5">
        <Button class="bg-blue-500 hover:bg-blue-200 transition duration-700">
            <p>Mangeak</p>
        </Button>
        <Separator/>
        <Card>
            <cardContent>
                <p>Haloo</p>
                <CardDescription>
                    <p>Benarrr</p>
                </CardDescription>
            </cardContent>
        </Card>
    </div>
</template>