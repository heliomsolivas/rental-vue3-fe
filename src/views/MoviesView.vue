<template>
  <div>
    
    <div class="flex w-full gap-3">
      <CommonSearchInput
        v-model="searchString"
        label="Busque pelo nome do filme"
        placeholder="Ex: Avengers..."
      />

      <div>
        <label class="block text-xs font-medium text-gray-700 dark:text-gray-200 mb-2">
          Ano de lançamento
        </label>
        <div class="relative">
          <input
            class="w-full rounded-md border-gray-200 py-2.5 ps-3 pe-3 shadow-sm sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            type="number"
            min="1930"
            max="2024"
            step="1"
            v-model="movieYearString"
          />
        </div>
      </div>
    </div>
    <a
      href.prevent="#"
      @click="getMovies(searchString, movieYearString)"
      class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 my-3"
    >
      Buscar
    </a>

    <CommonTable :theaders="userHeaders" :data="movies" />
    <div v-if="movies.length === 0" class="my-3">
      Nenhum filme encontrado
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAxios } from '@vueuse/integrations/useAxios'
import CommonTable from '@/components/Common/CommonTable.vue'
import CommonSearchInput from '@/components/Common/CommonSearchInput.vue'
import type { TableHeaderInterface } from '@/types/TableHeaderInterface'

const userHeaders: TableHeaderInterface[] = [
  {
    prop: 'title',
    label: 'Nome'
  },
  {
    prop: 'year',
    label: 'Ano'
  },
  {
    prop: 'director',
    label: 'Diretor'
  }
]

const searchString = ref<string>('Avengers')
const movieYearString = ref<string>('2018')
const movies = ref<Object[]>([])

async function getMovies(movieName: string, movieYear?: string) {
  try {
    let qsName = ``
    if (movieName !== '') {
      qsName = `&t=${movieName}`
    }
    let qsYear = ``
    if (movieYear !== '') {
      qsYear = `&y=${movieYear}`
    }
    const { data } = await useAxios(`http://www.omdbapi.com/?apikey=4d60cd38${qsName}${qsYear}`)

    let normalizedMovieData = []
    normalizedMovieData.push({
      title: data.value['Title'],
      year: data.value['Year'],
      director: data.value['Director']
    })
    movies.value = normalizedMovieData
  } catch (error) {
    console.log(error)
  }
}
</script>

<style></style>
