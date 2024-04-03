<template>
    <div class="p-3 border-b hover:bg-gray-200 dark:hover:bg-dim-200 text-gray-900 dark:text-white"
        :class="wrapperClasses">
        <slot></slot>
    </div>
</template>
<script setup>

    import useTailwindConfig from '@/composables/useTailwindConfig';
    const { defaultTransition, twitterBorderColor } = useTailwindConfig()

    const wrapperClasses = computed(() => `${defaultTransition} ${twitterBorderColor}`)

</script>