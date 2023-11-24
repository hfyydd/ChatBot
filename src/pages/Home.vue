<script setup lang="ts">
import { ref, watch } from "vue";
import { invoke } from "@tauri-apps/api/tauri";
import { IosSend, MdSend } from '@vicons/ionicons4'
import ChatBubble from '../components/ChatBubble.vue';
import { defineComponent } from 'vue'
import {
  NButton,
  NInput,
  NDivider,
  NIcon,
  NSpace,
  NLayout,
  NLayoutSider,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NTooltip
} from 'naive-ui'


defineComponent({
  components: {
    IosSend,
    MdSend
  }
})
const greetMsg = ref("");
const inputText = ref("");
const disabledButton = ref(true);
const messages = ref([{ text: 'Hello, world!', sender: 'bot' }, { text: '你好', sender: 'bot' }]);


watch(inputText, (newVal) => {
  disabledButton.value = !newVal.trim()
})

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsg.value = await invoke("greet", { name: name.value });
}

const sendMessage = () => {
  if (!inputText.value.trim()) {
    return
  }

  messages.value.push({ text: inputText.value, sender: 'user' })
  inputText.value = ''
}
</script>



<template>
  <div class="flex flex-row h-full bg-gray-100">
    <div class="w-64 bg-gray-200 h-screen overflow-auto">
      <!-- Add your left sidebar content here -->
      <div class="p-4">
        <h2 class="text-lg font-semibold text-gray-700 flex items-center">
          New Chat
          <i class="icon ion-md-create ml-2"></i>
        </h2>
        <ul class="mt-4 space-y-4">
          <li><a href="#" class="text-gray-600 hover:text-gray-900"> 今天天气如何</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">怎么写这段程序..</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">什么是巴以冲突</a></li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col w-full relative">
      <!-- Your main content here -->

      <div class="w-full px-5 flex flex-col justify-between">
        <div class="flex flex-col mt-5">
          <ChatBubble v-for="(message, index) in messages" :key="index" :message="message" />
        </div>
      </div>
      <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0 absolute bottom-0 w-full"
        style="padding-bottom: 16px;"> <!-- Change 'fixed' to 'absolute' here -->
        <div class="relative flex">
          <input v-model="inputText" type="text"
            class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-3"
            placeholder="Write Something" />
          <div class="absolute right-0 top-0 bottom-0 mr-4 flex items-center">
            <n-tooltip v-if="disabledButton">
              <template #trigger>
                <n-icon size="25" :component="MdSend" @click="sendMessage" :class="{ 'text-gray-500': disabledButton }">
                </n-icon>
              </template>
              请输入您的问题
            </n-tooltip>
            <n-icon v-else size="25" :component="MdSend" @click="sendMessage"
              :class="{ 'text-gray-500': disabledButton }"></n-icon>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
