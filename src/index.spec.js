import {expect} from 'chai'
import {makeTitle, runBatchTypeTests} from './helper.spec'
import rightType from './index'

describe(makeTitle('Right Type'), () => {

  describe('isString', () => {

    runBatchTypeTests('string', rightType.isString)

  })

  describe('isNumber', () => {

    runBatchTypeTests('number', rightType.isNumber)

    it('returns true for zero with empty flag set to true', () => {
      expect(rightType.isNumber(0, true)).to.equal(true)
    })

    it('returns false for zero with empty flag set to false', () => {
      expect(rightType.isNumber(0, false)).to.equal(false)
    })

  })

})

