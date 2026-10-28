import { expect, test, describe } from 'vitest'
import { getCueNumbers } from '../getCueNumbers.js'

const timer = (_id) => ({ _id, type: 'timer' })
const marker = (_id) => ({ _id, type: 'marker', data: { markerType: 'END_OF_DAY', time: null } })
const section = (_id) => ({ _id, type: 'section', data: { title: _id } })
const sectionEnd = (sectionId) => ({ _id: `end-${sectionId}`, type: 'section-end', data: { sectionId } })

const asObject = (numbers) => Object.fromEntries(numbers)

describe('getCueNumbers', () => {
  test('numbers a group n and its timers n.1, n.2 in one count with other timers', () => {
    const rundown = [timer('T1'), section('G'), timer('T2'), timer('T3'), sectionEnd('G'), timer('T4')]
    expect(asObject(getCueNumbers(rundown))).toEqual({ T1: '1', G: '2', T2: '2.1', T3: '2.2', T4: '3' })
  })

  test('gives a heading without timers, a section end and a marker no number', () => {
    const rundown = [timer('T1'), section('E'), sectionEnd('E'), marker('M'), timer('T2')]
    expect(asObject(getCueNumbers(rundown))).toEqual({ T1: '1', T2: '2' })
  })

  test('starts the child count again in each group', () => {
    const rundown = [section('A'), timer('T1'), timer('T2'), sectionEnd('A'), section('B'), timer('T3'), sectionEnd('B')]
    expect(asObject(getCueNumbers(rundown))).toEqual({ A: '1', T1: '1.1', T2: '1.2', B: '2', T3: '2.1' })
  })

  test('counts past nine in a group', () => {
    const members = Array.from({ length: 10 }, (_, i) => timer(`T${i + 1}`))
    const numbers = getCueNumbers([section('G'), ...members, sectionEnd('G')])
    expect(numbers.get('T10')).toBe('1.10')
  })

  test('keys ObjectId-like ids by their string', () => {
    const id = { toString: () => '63f59467d68bfdeef6b3bfc3' }
    expect(getCueNumbers([{ _id: id, type: 'timer' }]).get('63f59467d68bfdeef6b3bfc3')).toBe('1')
  })

  test('returns an empty map for an empty or missing rundown', () => {
    expect(getCueNumbers([]).size).toBe(0)
    expect(getCueNumbers().size).toBe(0)
  })
})
