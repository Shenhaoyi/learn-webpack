<template>
  <HelloWorld />
  <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/about">About</router-link></li>
  </ul>
  <router-view></router-view>
</template>

<script setup>
import HelloWorld from './components/HelloWorld';
</script>

<style scoped lang="less"></style>
