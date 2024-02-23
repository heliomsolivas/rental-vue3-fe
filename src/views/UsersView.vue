<template>
  <div>
    <CommonModal :isVisible="createModalVisibility">
      <template #content>
        <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
          <h3 class="text-base font-semibold leading-6 text-gray-900 mb-3" id="modal-title">
            Cadastrar usuário
          </h3>
          <div class="mb-3">
            <label for="delivery" class="block text-xs font-medium text-gray-900 mb-2">
              Nome
            </label>
            <div class="relative">
              <input
                v-model="userName"
                class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                type="text"
                placeholder="Insira o nome"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="delivery" class="block text-xs font-medium text-gray-900 mb-2">
              Documento
            </label>
            <div class="relative">
              <input
                v-model="userDocument"
                class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                type="text"
                placeholder="Insira o documento"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="delivery" class="block text-xs font-medium text-gray-900 mb-2">
              Senha
            </label>
            <div class="relative">
              <input
                v-model="userPassword"
                class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                type="password"
                placeholder="Insira a senha"
              />
            </div>
          </div>
        </div>
      </template>
      <template #actions>
        <button
          type="button"
          @click="createUser()"
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

    <CommonModal :isVisible="modalEditVisibility">
      <template #content>
        <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
          <h3 class="text-base font-semibold leading-6 text-gray-900 mb-3" id="modal-title">
            Editar usuário
          </h3>
          <div class="mb-3">
            <label for="delivery" class="block text-xs font-medium text-gray-900 mb-2">
              Nome
            </label>
            <div class="relative">
              <input
                v-model="editUserName"
                class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                type="text"
                placeholder="Insira o nome"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="delivery" class="block text-xs font-medium text-gray-900 mb-2">
              Documento
            </label>
            <div class="relative">
              <input
                v-model="editUserDocument"
                class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                type="text"
                placeholder="Insira o documento"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="delivery" class="block text-xs font-medium text-gray-900 mb-2">
              Senha
            </label>
            <div class="relative">
              <input
                v-model="editUserPassword"
                class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                type="password"
                placeholder="Insira a senha"
              />
            </div>
          </div>
        </div>
      </template>
      <template #actions>
        <button
          type="button"
          @click="editUser()"
          class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
        >
          Confirmar
        </button>
        <button
          @click="modalEditVisibility = !modalEditVisibility"
          type="button"
          class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          Cancelar
        </button>
      </template>
    </CommonModal>

    <!-- Busca/Filtros/Ações-->
    <div>
      <a
        href.prevent="#"
        @click="createModalVisibility = !createModalVisibility"
        class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 my-3"
      >
        Cadastrar usuário
      </a>
    </div>

    <CommonTable
      :theaders="userHeaders"
      :data="users"
      @@toggle="toggle"
      @@edit="edit"
      @@order-by="orderBy"
    />
    <CommonAlert
      :isVisible="createAlertVisibility"
      label="Sucesso"
      description="Usuário criado com sucesso."
    />
    <CommonAlert
      :isVisible="editAlertVisibility"
      label="Sucesso"
      description="Usuário editado com sucesso."
    />
    <CommonAlert
      :isVisible="toggleAlertVisibility"
      label="Sucesso"
      description="Status do usuário atualizado com sucesso."
    />
  </div>
</template>

<script setup lang="ts">
import CommonTable from '@/components/Common/CommonTable.vue'
import CommonModal from '@/components/Common/CommonModal.vue'
import CommonAlert from '@/components/Common/CommonAlert.vue'
import type { TableHeaderInterface } from '@/types/TableHeaderInterface'
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

const userHeaders: TableHeaderInterface[] = [
  {
    prop: 'id',
    label: 'ID'
  },
  {
    prop: 'name',
    label: 'Nome'
  },
  {
    prop: 'document',
    label: 'Documento'
  },
  {
    prop: 'password',
    label: 'Senha'
  },
  {
    prop: 'status',
    label: 'Status',
    isBadge: true
  },
  {
    prop: 'actions',
    label: 'Ações',
    actions: ['edit', 'toggle']
  }
]

let createModalVisibility = ref(false)
let modalEditVisibility = ref(false)
let createAlertVisibility = ref(false)
let editAlertVisibility = ref(false)
let toggleAlertVisibility = ref(false)

let userName = defineModel('userName')
let userDocument = defineModel('userDocument')
let userPassword = defineModel('userPassword')

let editUserId = defineModel('editUserId')
let editUserName = defineModel('editUserName')
let editUserDocument = defineModel('editUserDocument')
let editUserPassword = defineModel('editUserPassword')

function edit(data: any) {
  modalEditVisibility.value = true
  editUserId.value = data.id
  editUserName.value = data.name
  editUserDocument.value = data.document
  editUserPassword.value = data.password
}

function toggle(data: any) {
  let findUser: any = users.value.find((s) => s.id === data.id)
  findUser.status = findUser.status === 'active' ? 'inactive' : 'active'

  toggleAlertVisibility.value = true

  setTimeout(() => {
    toggleAlertVisibility.value = false
  }, 2000)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let users = useLocalStorage('users', [
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

function orderBy(objeto: { order: string; name: string | number }) {
  let list: any = users.value

  const orderMultiplier = objeto.order === 'asc' ? 1 : -1

  list.sort((a: any, b: any) => {
    const aValue = a[objeto.name]
    const bValue = b[objeto.name]
    return orderMultiplier * aValue.localeCompare(bValue)
  })

  users.value = list
}

function editUser() {
  let findUser: any = users.value.find((s) => s.id === editUserId.value)
  findUser.name = editUserName
  findUser.document = editUserDocument
  findUser.password = editUserPassword

  editAlertVisibility.value = true

  setTimeout(() => {
    editAlertVisibility.value = false
    modalEditVisibility.value = false
  }, 2000)
}

function createUser() {
  let lastElement = users.value[users.value.length - 1]

  users.value.push({
    id: lastElement.id + 1,
    name: String(userName.value),
    document: String(userDocument.value),
    password: String(userPassword.value),
    status: 'active'
  })

  createAlertVisibility.value = true

  userName.value = ''
  userDocument.value = ''
  userPassword.value = ''

  setTimeout(() => {
    createAlertVisibility.value = false
    createModalVisibility.value = false
  }, 2000)
}
</script>

<style></style>
