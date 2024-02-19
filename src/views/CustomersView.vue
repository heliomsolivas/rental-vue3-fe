<template>
  <div>
    <CommonModal :isVisible="createModalVisibility">
      <template #content>
        <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
          <h3 class="text-base font-semibold leading-6 text-gray-900 mb-3" id="modal-title">
            Cadastrar cliente
          </h3>
          <div class="flex gap-3">
            <div class="mb-3 w-1/2">
              <label class="block text-xs font-medium text-gray-900 mb-2"> Nome </label>
              <div class="relative">
                <input
                  v-model="userName"
                  class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                  type="text"
                  placeholder="Insira o nome"
                />
              </div>
            </div>
            <div class="mb-3 w-1/2">
              <label class="block text-xs font-medium text-gray-900 mb-2"> Sobrenome </label>
              <div class="relative">
                <input
                  v-model="userLastName"
                  class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                  type="text"
                  placeholder="Insira o sobrenome"
                />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label class="block text-xs font-medium text-gray-900 mb-2"> Documento (CPF) </label>
            <div class="relative">
              <input
                v-model="userDocument"
                class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                type="text"
                placeholder="Insira o documento"
              />
            </div>
          </div>
          <div class="flex gap-3">
            <div class="mb-3 w-1/2">
              <label class="block text-xs font-medium text-gray-900 mb-2"> E-mail </label>
              <div class="relative">
                <input
                  v-model="userEmail"
                  class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                  type="text"
                  placeholder="Insira o email"
                />
              </div>
            </div>
            <div class="mb-3 w-1/2">
              <label class="block text-xs font-medium text-gray-900 mb-2"> Celular </label>
              <div class="relative">
                <input
                  v-model="userPhone"
                  class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                  type="text"
                  placeholder="Insira o celular"
                />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label class="block text-xs font-medium text-gray-900 mb-2"> CEP </label>
            <div class="relative">
              <input
                v-model="userCep"
                @input="getCEP(String(userCep), 'create')"
                class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                type="text"
                placeholder="Insira o cep"
              />
            </div>
          </div>
          <div class="flex gap-3">
            <div class="mb-3 w-1/2">
              <label class="block text-xs font-medium text-gray-900 mb-2"> Logradouro </label>
              <div class="relative">
                <input
                  v-model="userStreet"
                  class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                  type="text"
                  placeholder="Insira o logradouro"
                />
              </div>
            </div>
            <div class="mb-3 w-1/2">
              <label class="block text-xs font-medium text-gray-900 mb-2"> Bairro </label>
              <div class="relative">
                <input
                  v-model="userNeighborhood"
                  class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                  type="text"
                  placeholder="Insira o bairro"
                />
              </div>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="mb-3 w-1/2">
              <label class="block text-xs font-medium text-gray-900 mb-2">Cidade</label>
              <div class="relative">
                <input
                  v-model="userCity"
                  class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                  type="text"
                  placeholder="Insira a cidade"
                />
              </div>
            </div>
            <div class="mb-3 w-1/2">
              <label class="block text-xs font-medium text-gray-900 mb-2">UF</label>
              <div class="relative">
                <input
                  v-model="userUf"
                  class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                  type="text"
                  placeholder="Insira a UF"
                />
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #actions>
        <button
          type="button"
          @click="createCustomer()"
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
        <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
          <h3 class="text-base font-semibold leading-6 text-gray-900 mb-3" id="modal-title">
            Cadastrar cliente
          </h3>
          <div class="flex gap-3">
            <div class="mb-3 w-1/2">
              <label class="block text-xs font-medium text-gray-900 mb-2"> Nome </label>
              <div class="relative">
                <input
                  v-model="editUserName"
                  class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                  type="text"
                  placeholder="Insira o nome"
                />
              </div>
            </div>
            <div class="mb-3 w-1/2">
              <label class="block text-xs font-medium text-gray-900 mb-2"> Sobrenome </label>
              <div class="relative">
                <input
                  v-model="editUserLastName"
                  class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                  type="text"
                  placeholder="Insira o nome"
                />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label class="block text-xs font-medium text-gray-900 mb-2"> Documento (CPF) </label>
            <div class="relative">
              <input
                v-model="editUserDocument"
                class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                type="text"
                placeholder="Insira o documento"
              />
            </div>
          </div>
          <div class="flex gap-3">
            <div class="mb-3 w-1/2">
              <label class="block text-xs font-medium text-gray-900 mb-2"> E-mail </label>
              <div class="relative">
                <input
                  v-model="editUserEmail"
                  class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                  type="text"
                  placeholder="Insira o email"
                />
              </div>
            </div>
            <div class="mb-3 w-1/2">
              <label class="block text-xs font-medium text-gray-900 mb-2"> Celular </label>
              <div class="relative">
                <input
                  v-model="editUserPhone"
                  class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                  type="text"
                  placeholder="Insira o celular"
                />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label class="block text-xs font-medium text-gray-900 mb-2"> CEP </label>
            <div class="relative">
              <input
                v-model="editUserCep"
                class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                type="text"
                maxlength="8"
                @input="getCEP(String(editUserCep), 'edit')"
                placeholder="Insira o CEP"
              />
            </div>
          </div>
          <div class="flex gap-3">
            <div class="mb-3 w-1/2">
              <label class="block text-xs font-medium text-gray-900 mb-2"> Logradouro </label>
              <div class="relative">
                <input
                  v-model="editUserStreet"
                  class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                  type="text"
                  placeholder="Insira o logradouro"
                />
              </div>
            </div>
            <div class="mb-3 w-1/2">
              <label class="block text-xs font-medium text-gray-900 mb-2"> Bairro </label>
              <div class="relative">
                <input
                  v-model="editUserNeighborhood"
                  class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                  type="text"
                  placeholder="Insira o bairro"
                />
              </div>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="mb-3 w-1/2">
              <label class="block text-xs font-medium text-gray-900 mb-2">Cidade</label>
              <div class="relative">
                <input
                  v-model="editUserCity"
                  class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                  type="text"
                  placeholder="Insira a cidade"
                />
              </div>
            </div>
            <div class="mb-3 w-1/2">
              <label class="block text-xs font-medium text-gray-900 mb-2">UF</label>
              <div class="relative">
                <input
                  v-model="editUserUf"
                  class="w-full rounded-md text-black py-2.5 ps-3 pe-3 shadow-md sm:text-sm"
                  type="text"
                  placeholder="Insira a UF"
                />
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #actions>
        <button
          type="button"
          @click="editCustomer()"
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

    <div class="flex w-full gap-3">
      <!-- Search Filter -->
      <CommonSearchInput
        v-model="searchString"
        label="Busque por nome ou documento do cliente"
        placeholder="Ex: Fernando..."
      />

      <!-- Select -->
      <div>
        <div class="mb-2">
          <label
            for="HeadlineAct"
            class="block text-xs font-medium text-gray-700 dark:text-gray-200"
          >
            Filtre pelo status
          </label>
        </div>

        <div class="relative">
          <select
            v-model="filterSelected"
            name="HeadlineAct"
            id="HeadlineAct"
            class="w-full rounded-md border-gray-200 py-2.5 ps-3 pe-3 shadow-sm sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            <option value="">Selecione um status</option>
            <option value="active">Ativo</option>
            <option value="inactive">Inativo</option>
          </select>
        </div>
      </div>
    </div>

    <a
      href.prevent="#"
      @click="createModalVisibility = !createModalVisibility"
      class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 my-3"
    >
      Cadastrar cliente
    </a>

    <CommonTable :theaders="userHeaders" :data="filteredData" @edit="edit" @toggle="toggle" />

    <CommonAlert
      :isVisible="createAlertVisibility"
      label="Sucesso"
      description="Cliente criado com sucesso."
    />

    <CommonAlert
      :isVisible="editAlertVisibility"
      label="Sucesso"
      description="Cliente editado com sucesso."
    />

    <CommonAlert
      :isVisible="toggleAlertVisibility"
      label="Sucesso"
      description="Status do cliente atualizado com sucesso."
    />
  </div>
</template>

<script setup lang="ts">
import CommonTable from '@/components/Common/CommonTable.vue'
import CommonModal from '@/components/Common/CommonModal.vue'
import CommonSearchInput from '@/components/Common/CommonSearchInput.vue'
import CommonAlert from '@/components/Common/CommonAlert.vue'
import type { TableHeaderInterface } from '@/types/TableHeaderInterface'
import { ref, computed } from 'vue'
import { useSearchByText } from '@/composables/searchByText'
import { useLocalStorage } from '@vueuse/core'
import { useAxios } from '@vueuse/integrations/useAxios'

const searchString = ref<string>('')
const filterSelected = ref<string>('')
let createModalVisibility = ref(false)
let createAlertVisibility = ref(false)
let editAlertVisibility = ref(false)
let toggleAlertVisibility = ref(false)
let modalEditVisibility = ref(false)

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
    prop: 'email',
    label: 'E-mail'
  },
  {
    prop: 'phone',
    label: 'Telefone'
  },
  {
    prop: 'postalCode',
    label: 'Endereço'
  },
  {
    prop: 'actions',
    label: 'Ações',
    actions: ['edit', 'toggle']
  }
]

let userName = defineModel('userName')
let userLastName = defineModel('userLastName')
let userDocument = defineModel('userDocument')
let userEmail = defineModel('userEmail')
let userPhone = defineModel('userPhone')
let userCep = defineModel('userCep')
let userStreet = defineModel('userStreet')
let userNeighborhood = defineModel('userNeighborhood')
let userCity = defineModel('userCity')
let userUf = defineModel('userUf')

let editUserId = defineModel('editUserId')
let editUserName = defineModel('editUserName')
let editUserLastName = defineModel('editUserLastName')
let editUserEmail = defineModel('editUserEmail')
let editUserDocument = defineModel('editUserDocument')
let editUserPhone = defineModel('editUserPhone')
let editUserCep = defineModel('editUserCep')
let editUserStreet = defineModel('editUserStreet')
let editUserNeighborhood = defineModel('editUserNeighborhood')
let editUserCity = defineModel('editUserCity')
let editUserUf = defineModel('editUserUf')

function toggle(data: any) {
  let findUser: any = customers.value.find((s) => s.id === data.id)
  if (findUser.status === 'active') {
    findUser.status = 'inactive'
  } else {
    findUser.status = 'active'
  }

  toggleAlertVisibility.value = true

  setTimeout(() => {
    toggleAlertVisibility.value = false
  }, 2000)
}

function edit(data: any) {
  modalEditVisibility.value = true
  editUserId.value = data.id
  editUserName.value = data.name
  editUserLastName.value = data.lastName
  editUserDocument.value = data.document
  editUserEmail.value = data.email
  editUserPhone.value = data.phone
  editUserCep.value = data.postalCode
  editUserStreet.value = data.street
  editUserUf.value = data.uf
  editUserCity.value = data.city
  editUserNeighborhood.value = data.neighborhood
  editUserPhone.value = data.phone
}

function editCustomer() {
  let findCustomer: any = customers.value.find((s) => s.id === editUserId.value)
  findCustomer.name = editUserName
  findCustomer.lastName = editUserLastName
  findCustomer.document = editUserDocument
  findCustomer.email = editUserEmail
  findCustomer.phone = editUserPhone
  findCustomer.postalCode = editUserCep
  findCustomer.street = editUserStreet
  findCustomer.uf = editUserUf
  findCustomer.city = editUserCity
  findCustomer.neighborhood = editUserNeighborhood

  editAlertVisibility.value = true

  setTimeout(() => {
    editAlertVisibility.value = false
    modalEditVisibility.value = false
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

function createCustomer() {
  let lastElement = customers.value[customers.value.length - 1]

  customers.value.push({
    id: lastElement.id + 1,
    name: String(userName.value),
    lastName: String(userLastName.value),
    document: String(userDocument.value),
    city: String(userCity.value),
    postalCode: String(userCep.value),
    street: String(userStreet.value),
    uf: String(userUf.value),
    neighborhood: String(userNeighborhood.value),
    email: String(userEmail.value),
    phone: String(userPhone.value),
    status: 'active'
  })

  createAlertVisibility.value = true

  userName.value = ''
  userDocument.value = ''
  userLastName.value = ''
  userCity.value = ''
  userCep.value = ''
  userStreet.value = ''
  userUf.value = ''
  userNeighborhood.value = ''
  userEmail.value = ''
  userPhone.value = ''

  setTimeout(() => {
    createAlertVisibility.value = false
    createModalVisibility.value = false
  }, 2000)
}

async function getCEP(cep: string, type: string) {
  if (cep.length === 8) {
    try {
      const { data } = await useAxios(`https://viacep.com.br/ws/${cep}/json`)

      if (type === 'edit') {
        editUserStreet.value = data.value.logradouro
        editUserUf.value = data.value.uf
        editUserCity.value = data.value.localidade
        editUserNeighborhood.value = data.value.bairro
      } else {
        userStreet.value = data.value.logradouro
        userUf.value = data.value.uf
        userCity.value = data.value.localidade
        userNeighborhood.value = data.value.bairro
      }
    } catch (error) {
      console.log(error)
    }
  }
}

const filteredData = computed(() => {
  if (filterSelected.value !== '') {
    return useSearchByText(customers.value, 'name', 'role', searchString.value).filter(
      (s) => s.status === filterSelected.value
    )
  }
  return useSearchByText(customers.value, 'name', 'document', searchString.value)
})
</script>

<style></style>
