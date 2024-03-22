<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { BasicShadowMap, NoToneMapping, SRGBColorSpace } from 'three';

const gl = {
    clearColor: '#181C3E',
    shadows: true,
    alpha: false,
    shadowMapType: BasicShadowMap,
    outputColorSpace: SRGBColorSpace,
    toneMapping: NoToneMapping,
}

</script>

<template>
<div class="tres-container">
    <TresCanvas>
        <TresPerspectiveCamera positon="[0 0 5]" />
    </TresCanvas>
</div>
</template>

<style>
.tres-container {
    width:100%;
    height:400px;
}

canvas {
    width:100%;
    height:100%;
}
</style>