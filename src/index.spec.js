import {expect} from 'chai'
import {makeTitle, runBatchTypeTests} from './helper.spec'
import rightType from './index'

describe(makeTitle('Right Type'), () => {

  describe('isString', () => {

    runBatchTypeTests('string', rightType.isString)

  })

})

