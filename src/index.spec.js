import {expect} from 'chai'
import {makeTitle} from './helper.spec'
import rightType from './index'

describe(makeTitle('Right Type'), () => {

  describe('isString', () => {

    it('returns true for string', () => {
      expect(rightType.isString('test string')).to.equal(true)
    })

    it('returns false for empty string', () => {
      expect(rightType.isString('')).to.equal(false)
    })

    it('returns true for empty string with the empty flag set', () => {
      expect(rightType.isString('', true)).to.equal(true)
    })

    it('returns false for number', () => {
      expect(rightType.isString(5)).to.equal(false)
    })

    it('returns false for array', () => {
      expect(rightType.isString([])).to.equal(false)
    })

    it('returns false for function', () => {
      expect(rightType.isString(() => {})).to.equal(false)
    })

    it('returns false for object', () => {
      expect(rightType.isString({})).to.equal(false)
    })

  })

})

