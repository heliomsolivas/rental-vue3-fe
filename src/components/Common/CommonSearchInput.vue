<template>
  <div>
    <div class="mb-2">
      <label for="Search" class="block text-xs font-medium text-gray-700 dark:text-gray-200">
        {{ props.label }}
      </label>
    </div>
    <div class="relative">
      <input
        type="text"
        v-model="searchString"
        id="Search"
        :placeholder="props.placeholder"
        class="w-full rounded-md border-gray-200 py-2.5 ps-3 shadow-sm sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      />

      <span class="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button
          type="button"
          class="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <span class="sr-only">Search</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
const searchString = defineModel<string>()

const props = defineProps({
  placeholder: {
    required: false,
    type: String
  },
  label: {
    required: true,
    type: String
  }
})
</script>
