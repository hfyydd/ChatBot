<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Home from "./pages/Home.vue";
import { invoke } from "@tauri-apps/api/tauri";

const {width, height} = await invoke('window_size')

// 监听大小变化
window.addEventListener('resize', () => {
  const {width, height} = windo