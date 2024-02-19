<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useLocalStorage } from '@vueuse/core'

const route = useRouter()

function logout() {
  localStorage.removeItem('isLoggedIn')
  localStorage.removeItem('loggedUser')
  route.push({ name: 'home' })
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const users = useLocalStorage('users', [
  {
    id: 1,
    name: 'Helio',
    document: '123456789',
    password: '123',
    status: 'active'
  },
  { id: 2, name: 'Funcionario Ativo', document: '123456789', password: '123', status: 'active' },
  { id: 3, name: 'Funcionario Inativo', document: '959595959', password: '123', status: 'inactive' }
])

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const rentals = useLocalStorage('rentals', [
  {
    id: 1,
    customer: 'Leticia Braga',
    movies: ['Django'],
    dateStartRent: '2024-02-16',
    dateEndRent: '2024-02-22',
    user: { id: 4, name: 'Zyon', document: '4646464646', password: '123456', status: 'active' },
    status: 'rent'
  },
  {
    id: 2,
    customer: 'Jon Snow',
    movies: ['Insidious'],
    dateStartRent: '2024-02-13',
    dateEndRent: '2024-02-17',
    user: { id: 4, name: 'Zyon', document: '4646464646', password: '123456', status: 'active' },
    status: 'delivered'
  }
])

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
</script>

<template>
  <div class="container px-3 mx-auto">
    <header class="mt-6 mb-3">
      <div class="flex justify-between w-full">
        <div class="block" v-if="$route.name !== 'home'">
          <div class="border-b border-gray-200 dark:border-gray-700">
            <nav class="-mb-px flex gap-6" aria-label="Tabs">
              <RouterLink
                to="/users"
                class="inline-flex shrink-0 items-center gap-2 border-b-2 px-1 pb-4 text-sm font-medium"
                :class="[
                  $route.name === 'users'
                    ? 'border-sky-500 text-sky-600 dark:border-sky-400 dark:text-sky-300'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-200'
                ]"
              >
                Usuários
              </RouterLink>

              <RouterLink
                to="customers"
                class="inline-flex shrink-0 items-center gap-2 border-b-2 px-1 pb-4 text-sm font-medium"
                :class="[
                  $route.name === 'customers'
                    ? 'border-sky-500 text-sky-600 dark:border-sky-400 dark:text-sky-300'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-200'
                ]"
              >
                Clientes
              </RouterLink>

              <RouterLink
                to="/movies"
                class="inline-flex shrink-0 items-center gap-2 border-b-2 px-1 pb-4 text-sm font-medium"
                :class="[
                  $route.name === 'movies'
                    ? 'border-sky-500 text-sky-600 dark:border-sky-400 dark:text-sky-300'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-200'
                ]"
              >
                Filmes
              </RouterLink>

              <RouterLink
                to="/rentals"
                class="inline-flex shrink-0 items-center gap-2 border-b-2 px-1 pb-4 text-sm font-medium"
                :class="[
                  $route.name === 'rentals'
                    ? 'border-sky-500 text-sky-600 dark:border-sky-400 dark:text-sky-300'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-200'
                ]"
              >
                Locações
              </RouterLink>
            </nav>
          </div>
        </div>
        <a
          v-if="$route.name !== 'home'"
          href.prevent="#"
          @click="logout()"
          class="inline-block rounded px-4 py-2 text-xs font-medium text-white bg-red-600 hover:bg-red-700"
          >Logout</a
        >
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
