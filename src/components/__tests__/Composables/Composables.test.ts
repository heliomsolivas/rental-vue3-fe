import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest'
import { useSearchByText } from '@/composables/searchByText'

describe('searchByText', () => {
  test('should filter correctly', () => {
    const array = [
      { name: 'João', sobrenome: 'Silva' },
      { nome: 'Maria', sobrenome: 'Pereira' },
      { nome: 'Carlos', sobrenome: 'Silva' }
    ]
    const filter1 = 'nome'
    const filter2 = 'sobrenome'
    const text = 'mar'

    const resultado = useSearchByText(array, filter1, filter2, text)

    expect(resultado).toEqual([{ nome: 'Maria', sobrenome: 'Pereira' }])
  })

  test('should return empty array', () => {
    const array = [
      { nome: 'João', sobrenome: 'Silva' },
      { nome: 'Carlos', sobrenome: 'Pereira' }
    ]
    const filter1 = 'nome'
    const filter2 = 'sobrenome'
    const text = 'xyz'

    const resultado = useSearchByText(array, filter1, filter2, text)

    expect(resultado).toEqual([])
  })

  test('should handle undefined objects', () => {
    const array = [
      { nome: 'João', sobrenome: 'Silva' },
      { sobrenome: 'Pereira' },
      { nome: 'Carlos' }
    ]
    const filter1 = 'nome'
    const filter2 = 'sobrenome'
    const text = 'car'

    const resultado = useSearchByText(array, filter1, filter2, text)

    expect(resultado).toEqual([{ nome: 'Carlos' }])
  })

  test('should handle null props', () => {
    const array = [
      { nome: 'João', sobrenome: null },
      { nome: 'Maria', sobrenome: 'Pereira' }
    ]
    const filter1 = 'nome'
    const filter2 = 'sobrenome'
    const text = 'per'

    const resultado = useSearchByText(array, filter1, filter2, text)

    expect(resultado).toEqual([{ nome: 'Maria', sobrenome: 'Pereira' }])
  })
})
