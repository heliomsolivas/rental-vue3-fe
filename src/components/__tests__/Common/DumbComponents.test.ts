import { describe, test, expect } from 'vitest'
import CommonAlert from '@/components/Common/CommonAlert.vue'
import CommonBadge from '@/components/Common/CommonBadge.vue'
import CommonModal from '@/components/Common/CommonModal.vue'
import CommonSearchInput from '@/components/Common/CommonSearchInput.vue'
import CommonTable from '@/components/Common/CommonTable.vue'

describe('Testing dumb components', () => {
  test('CommonAlert ', () => {
    expect(CommonAlert).toBeTruthy()
  })
  test('CommonBadge ', () => {
    expect(CommonBadge).toBeTruthy()
  })
  test('CommonModal ', () => {
    expect(CommonModal).toBeTruthy()
  })
  test('CommonSearchInput ', () => {
    expect(CommonSearchInput).toBeTruthy()
  })
  test('CommonTable ', () => {
    expect(CommonTable).toBeTruthy()
  })
})
