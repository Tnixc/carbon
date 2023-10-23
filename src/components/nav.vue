<template>
  <nav class="bg-gradient-to-r from-indigo-800 to-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
        <a href="#" class="text-white text-xl font-bold">My Website</a>
        <div class="hidden md:flex space-x-4">
            <a href="#" class="text-white">Thing</a>
            <a href="#" class="text-white">Thing</a>
            <a href="#" class="text-white">Thing</a>
            <a href="#" class="text-white">Thing</a>
        </div>
        <div class="md:hidden flex items-center">
            <button class="text-white p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
    </div>
</nav>
</template>

<script lang="ts">
export default {
  name: 'Nav',
}
</script>
