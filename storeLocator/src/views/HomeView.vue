<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
    <div>
        <RouterLink to="/store-locator/locations">Locations</RouterLink>
    </div>
    <div>
        <RouterLink to="/store-locator/opening-hours">Opening Hours</RouterLink>
    </div>
    <div>
        <RouterLink to="/">Home</RouterLink>
    </div>

    <div>Store Locator: /store-locator</div>

    <RouterView />
</template>