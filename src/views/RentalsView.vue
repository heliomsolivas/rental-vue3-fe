<template>
  <div>
    <CommonModal :isVisible="createModalVisibility">
      <template #content>
        <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
          <h3 class="text-base font-semibold leading-6 text-gray-900 mb-3" id="modal-title">
            Cadastrar locação
          </h3>

          <div class="mb-3">
            <label for="delivery" class="block text-xs font-medium text-gray-900 mb-2">
              Cliente
            </label>

            <div class="relative">
              <select
                v-model="customer"
                class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
              >
                <option value="">Selecione um cliente</option>
                <option v-for="c in filteredCustomers" :key="c.id" :value="c.id">
                  {{ c.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="mb-3">
            <label for="delivery" class="block text-xs font-medium text-gray-900 mb-2">
              Filmes
            </label>
            <div class="relative">
              <input
                v-model="movies"
                class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                type="text"
                placeholder="Insira o nome do filme"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="delivery" class="block text-xs font-medium text-gray-900 mb-2">
              Data de locação
            </label>
            <div class="relative">
              <input
                v-model="rentalStartDate"
                class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                type="text"
                placeholder="Dade de locação"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="delivery" class="block text-xs font-medium text-gray-900 mb-2">
              Data de entrega
            </label>
            <div class="relative">
              <input
                v-model="rentalDeliverDate"
                class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                type="text"
                placeholder="Data de entrega"
              />
            </div>
          </div>
        </div>
      </template>
      <template #actions>
        <button
          type="button"
          @click="createRental()"
          class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
        >
          Confirmar
        </button>
        <button
          @click="createModalVisibility = !createModalVisibility"
          type="button"
          class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          Cancelar
        </button>
      </template>
    </CommonModal>

    <div class="flex w-full gap-3">
      <!-- Search Filter -->
      <CommonSearchInput
        v-model="searchString"
        label="Busque pelo cliente"
        placeholder="Ex: Leticia..."
      />

      <div>
        <label
          for="delivery"
          class="block text-xs font-medium text-gray-700 dark:text-gray-200 mb-2"
        >
          Data de locação
        </label>
        <div class="relative">
          <input
            v-model="startRentFilter"
            class="w-full rounded-md border-gray-200 py-2.5 ps-3 pe-3 shadow-sm sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            type="date"
            id="start"
            name="trip-start"
          />
        </div>
      </div>

      <div>
        <label
          for="delivery"
          class="block text-xs font-medium text-gray-700 dark:text-gray-200 mb-2"
        >
          Data de entrega
        </label>
        <div class="relative">
          <input
            v-model="endRentFilter"
            class="w-full rounded-md border-gray-200 py-2.5 ps-3 pe-3 shadow-sm sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            type="date"
            id="start"
            name="trip-start"
          />
        </div>
      </div>
    </div>

    <a
      href.prevent="#"
      @click="createModalVisibility = !createModalVisibility"
      class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 my-3"
    >
      Nova locação
    </a>

    <CommonTable :theaders="userHeaders" :data="filteredData" />

    <CommonAlert
      :isVisible="createAlertVisibility"
      label="Sucesso"
      description="Locação realizada com sucesso."
    />
  </div>
</template>

<script setup lang="ts">
import CommonTable from '@/components/Common/CommonTable.vue'
import CommonModal from '@/components/Common/CommonModal.vue'
import CommonAlert from '@/components/Common/CommonAlert.vue'
import CommonSearchInput from '@/components/Common/CommonSearchInput.vue'
import type { TableHeaderInterface } from '@/types/TableHeaderInterface'
import { ref, computed } from 'vue'
import { useSearchByText } from '@/composables/searchByText'
import { useLocalStorage } from '@vueuse/core'
import { getFromLocalStorage } from '@/composables/getFromLocalStorage'
import type { CustomerInterface } from '@/types/CustomerInterface'

const searchString = ref<string>('')
const startRentFilter = ref<string>('')
const endRentFilter = ref<string>('')
let createModalVisibility = ref(false)
let createAlertVisibility = ref(false)
let customer = defineModel('customer')
let movies = defineModel('movies')
let rentalStartDate = defineModel('rentalStartDate')
let rentalDeliverDate = defineModel('rentalDeliverDate')

const rentals = useLocalStorage('rentals', [
  {
    id: 1,
    customer: {
      id: 2,
      name: 'Leticia'
    },
    movies: 'Django',
    dateStartRent: '2024-02-16',
    dateEndRent: '2024-02-22',
    user: { id: 2, name: 'Funcionario Ativo	' },
    status: 'rent'
  },
  {
    id: 2,
    customer: {
      id: 4,
      name: 'Raul'
    },
    movies: 'Insidious',
    dateStartRent: '2024-02-13',
    dateEndRent: '2024-02-17',
    user: { id: 2, name: 'Funcionario Ativo	' },
    status: 'delivered'
  }
])

function createRental() {
  let lastElement = rentals.value[rentals.value.length - 1]

  let selectedCustomer: any = customers.value.find((s) => s.id === customer.value)

  let userLoggedIn = getFromLocalStorage('loggedUser')

  rentals.value.push({
    id: lastElement.id + 1,
    customer: {
      id: Number(customer.value),
      name: String(selectedCustomer.name)
    },
    dateStartRent: String(rentalStartDate.value),
    dateEndRent: String(rentalDeliverDate.value),
    movies: String(movies.value),
    user: {
      id: userLoggedIn.id,
      name: userLoggedIn.name
    },
    status: 'rent'
  })

  createAlertVisibility.value = true

  customer.value = ''
  movies.value = ''
  rentalStartDate.value = ''
  rentalDeliverDate.value = ''

  setTimeout(() => {
    createAlertVisibility.value = false
    createModalVisibility.value = false
  }, 2000)
}

const customers = useLocalStorage('customers', [
  {
    id: 1,
    name: 'Kar',
    lastName: 'Marx',
    document: '23053862816',
    email: 'karmarx@gmail.com',
    phone: '+55129998989',
    postalCode: '12235070',
    street: 'Rua Haiti',
    neighborhood: 'Jardim América',
    city: 'São José dos Campos',
    uf: 'SP',
    status: 'active'
  },
  {
    id: 2,
    name: 'Leticia',
    lastName: 'Braga',
    document: '123456789',
    email: 'leticia@gmail.com',
    phone: '+55129998989',
    postalCode: '12235070',
    street: 'Rua X',
    neighborhood: 'Jardim Europa',
    city: 'São Paulo',
    uf: 'SP',
    status: 'active'
  },
  {
    id: 3,
    name: 'Fernando',
    lastName: 'Castro',
    document: '23053862816',
    email: 'heliomsolivas@gmail.com',
    phone: '+55129998989',
    postalCode: '12235070',
    street: 'Rua Haiti',
    neighborhood: 'Jardim América',
    city: 'São José dos Campos',
    uf: 'SP',
    status: 'inactive'
  },
  {
    id: 4,
    name: 'Raul',
    lastName: 'Lima',
    document: '23053862816',
    email: 'heliomsolivas@gmail.com',
    phone: '+55129998989',
    postalCode: '12235070',
    street: 'Rua Haiti',
    neighborhood: 'Jardim América',
    city: 'São José dos Campos',
    uf: 'SP',
    status: 'inactive'
  }
])

const userHeaders: TableHeaderInterface[] = [
  {
    prop: 'id',
    label: 'ID'
  },
  {
    prop: 'customer',
    label: 'Cliente',
    isObject: true,
    objectFields: ['name']
  },
  {
    prop: 'movies',
    label: 'Filmes'
  },
  {
    prop: 'dateStartRent',
    label: 'Data de locação'
  },
  {
    prop: 'dateEndRent',
    label: 'Data de entrega'
  },
  {
    prop: 'user',
    label: 'Usuário responsável',
    isObject: true,
    objectFields: ['name']
  },
  {
    prop: 'status',
    label: 'Status',
    isBadge: true
  }
]

const filteredCustomers = computed(() => {
  let allCustomers: CustomerInterface[] = []

  for (const iterator of customers.value) {
    let existe = rentals.value.find((s) => s.customer.id === iterator.id && s.status === 'rent')
    if (!existe) {
      allCustomers.push(iterator)
    }
  }
  return allCustomers
})

const filteredData = computed(() => {
  if (startRentFilter.value !== '') {
    return useSearchByText(rentals.value, 'customer', '', searchString.value).filter(
      (s) => s.dateStartRent === startRentFilter.value
    )
  }
  if (endRentFilter.value !== '') {
    return useSearchByText(rentals.value, 'customer', '', searchString.value).filter(
      (s) => s.dateEndRent === endRentFilter.value
    )
  }
  return useSearchByText(rentals.value, 'customer', '', searchString.value)
})
</script>

<style></style>
