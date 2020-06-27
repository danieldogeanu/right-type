import {expect} from 'chai'
import {makeTitle, sectionSpacing, runBatchTypeTests} from './helper.spec'
import rightType from './index'

describe(makeTitle('Right Type'), () => {

  describe('isString()', () => {

    runBatchTypeTests('string', rightType.isString)

    it('returns true for empty string with empty flag set to true', () => {
      expect(rightType.isString('', true)).to.equal(true)
    })

    it('returns false for empty string with empty flag set to false', () => {
      expect(rightType.isString('', false)).to.equal(false)
    })

    sectionSpacing()

  })

  describe('isNumber()', () => {

    runBatchTypeTests('number', rightType.isNumber)

    it('returns true for zero with empty flag set to true', () => {
      expect(rightType.isNumber(0, true)).to.equal(true)
    })

    it('returns false for zero with empty flag set to false', () => {
      expect(rightType.isNumber(0, false)).to.equal(false)
    })

    sectionSpacing()

  })

})

