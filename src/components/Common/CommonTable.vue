<template>
  <div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
    <table
      class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm dark:divide-gray-700 dark:bg-gray-900"
    >
      <thead class="text-left">
        <tr>
          <th
            v-for="(h, $h) in props.theaders"
            :key="$h"
            class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
          >
            {{ h.label }}
          </th>
        </tr>
      </thead>

      <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
        <tr v-for="dt in props.data" :key="dt.id">
          <td
            v-for="(h, $h) in props.theaders"
            :key="$h"
            class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
          >
            <!-- Common fields-->
            <span v-if="dt[h.prop] && !h.isObject && !h.isBadge">
              {{ dt[h.prop] }}
            </span>

            <!-- Grouped fields -->
            <span class="flex gap-1" v-else>
              <span v-for="(fields, $f) in h.objectFields" :key="$f">
                <span>{{ dt[h.prop][fields] }}</span>
              </span>
            </span>

            <!-- Status -->
            <span class="flex gap-3" v-if="h['prop'] === 'status'">
              <CommonBadge v-if="dt[h.prop] === 'rent'" label="Alugado" badgeType="success" />
              <CommonBadge v-if="dt[h.prop] === 'delivered'" label="Entregue" badgeType="warning" />
              <CommonBadge v-if="dt[h.prop] === 'active'" label="Ativo" badgeType="success" />
              <CommonBadge v-if="dt[h.prop] === 'inactive'" label="Inativo" badgeType="danger" />
            </span>

            <!-- Actions -->
            <span class="flex gap-3" v-if="h['prop'] === 'actions'">
              <a
                v-if="h.actions?.includes('edit')"
                href.prevent="#"
                @click="$emit('edit', dt)"
                class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
              >
                Editar
              </a>
              <a
                v-if="h.actions?.includes('toggle')"
                href.prevent="#"
                @click="$emit('toggle', dt)"
                class="inline-block rounded px-4 py-2 text-xs font-medium text-white"
                :class="[
                  dt['status'] === 'active'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-green-600 hover:bg-green-700'
                ]"
              >
                <span>{{ dt['status'] === 'active' ? 'Desativar' : 'Ativar' }}</span>
              </a>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { TableHeaderInterface } from '@/types/TableHeaderInterface'
import CommonBadge from '@/components/Common/CommonBadge.vue'
import type { PropType } from 'vue'

const props = defineProps({
  theaders: {
    required: true,
    type: Array as PropType<TableHeaderInterface[]>
  },
  data: {
    required: true
  }
})
</script>
