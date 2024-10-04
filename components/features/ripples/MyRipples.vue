<template>
  <!-- <TresCanvas class="ripples">
    <TresOrthographicCamera :position="[1, 1, 0]" :lookAt="[0, 0, 0]" />

    <OrbitControls />

    <TresAmbientLight intensity="0.5" />

    <TresGroup>
      <TresShaderMaterial
        :fragmentShader="fragmentShader"
        :vertexShader="vertexShader"
        :uniforms="uniforms"
        :side="THREE.DoubleSide"
        :extensions="{ derivatives: true }"
      >
        <TresCylinder
          v-for="i in instanceCount"
          :key="i"
          :position="[0, i - 5, 0]"
          :args="[2, 2, 1, 4]"
          :material="shaderMaterial"
          :instancePosition="[0, i - 5, 0]"
          :instanceColor="colors[i % colors.length]"
        />
      </TresShaderMaterial>
    </TresGroup>
  </TresCanvas> -->


  <TresCanvas clear-color="#111" shadows alpha window-size>
    <OrbitControls />
    <TresPerspectiveCamera
      :position="[50, 50, 50]"
      :fov="45"
      :aspect="1"
      :near="0.1"
      :far="1000"
    />
    <TresMesh ref="blobRef" :position="[0, 0, 0]">
      <TresSphereGeometry :args="[2, 35, 15]" />
      <TresShaderMaterial
        :vertexShader="vertexShader"
        :fragmentShader="fragmentShader"
        :uniforms="uniforms"
      />
    </TresMesh>
  </TresCanvas>
</template>

<script setup>
import { TresCanvas, useRenderLoop, extend } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';
import { Vector2 } from 'three';
// Import custom shaders
import fragmentShader from "./shaders/fragment.glsl";
import vertexShader from "./shaders/vertex.glsl";

const blobRef = shallowRef(null);


const uniforms = {
  uTime: { value: 0 },
  uAmplitude: { value: new Vector2(0.1, 0.1) },
  uFrequency: { value: new Vector2(20, 5) },
}


const { onLoop } = useRenderLoop();

onLoop(({ delta, elapsed }) => {
   if (blobRef.value) {
    blobRef.value.material.uniforms.uTime.value = elapsed
  }
});
</script>

<style scoped>
.ripples {
  position: relative;
  z-index: 0;
}
</style>