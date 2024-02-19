<template>
  <section>
    <div class="flex flex-col items-center justify-center px-6 py-6 mx-auto my-6 lg:py-0">
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Login
          </h1>
          <div class="space-y-4 md:space-y-6">
            <div>
              <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Insira seu nome</label
              >
              <input
                v-model="userName"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ex: Helio"
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Insira sua senha</label
              >
              <input
                v-model="userPassword"
                type="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <a
              href.prevent="#"
              @click="login(String(userName), String(userPassword))"
              class="block text-center rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 my-3"
            >
              Entrar
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <CommonAlert
    :isVisible="toggleAlertErrorVisibility"
    label="Erro"
    description="Usuário desabilitado no sistema ou não existe"
  />
</template>

<script lang="ts" setup>
import CommonAlert from '@/components/Common/CommonAlert.vue'
import { useLocalStorage } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const route = useRouter()
let toggleAlertErrorVisibility = ref(false)
const userName = defineModel<string>('userName')
const userPassword = defineModel<string>('userPassword')

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

function login(name: string, password: string) {
  let isValidUser: boolean = false
  let existActiveUser = users.value.find(
    (s) => s.name === name && s.password === password && s.status === 'active'
  )
  if (existActiveUser) {
    isValidUser = true
    useLocalStorage('isLoggedIn', isValidUser)
    useLocalStorage('loggedUser', {
      name: name,
      id: existActiveUser.id
    })
    route.push({ path: '/users' })
  } else {
    toggleAlertErrorVisibility.value = true
    setTimeout(() => {
      toggleAlertErrorVisibility.value = false
    }, 2000)
  }
}
</script>

<style lang="scss" scoped></style>
