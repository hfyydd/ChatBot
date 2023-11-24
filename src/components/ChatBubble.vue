<template>
    <!-- <div class="flex items-end"
        :class="{ 'justify-start': message.sender === 'bot', 'justify-end': message.sender === 'user' }">
        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div
                :class="{ 'bg-blue-600 rounded': message.sender === 'bot', 'bg-green-600 rounded': message.sender === 'user' }">
                <span class="px-4 py-2 rounded-lg inline-block rounded-br-none text-white text-sm">{{ message.text }}</span>
            </div>
        </div>
        <img :class="{ 'order-1': message.sender === 'bot', 'order-2': message.sender === 'user' }"
            src="https://i.imgur.com/8Km9tLL.jpg" class="w-6 h-6 rounded-full" />
    </div> -->

    <div class="flex mb-4 justify-end" v-if="message.sender === 'user'">
        <div class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
            {{ message.text }}
        </div>
        <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600" class="object-cover h-8 w-8 rounded-full" alt="" />
    </div>
    <div class="flex mb-4 justify-start" v-else>
        <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600" class="object-cover h-8 w-8 rounded-full" alt="" />
        <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
            {{ message.text }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['message']
}
</script>