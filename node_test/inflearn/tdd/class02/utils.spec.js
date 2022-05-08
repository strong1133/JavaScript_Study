const utils = require('./utils')
const should = require('should');

describe('utils.js 모듈의 Capitalize 함수는 ', ()=>{
    it('문자열의 첫번째 문자를 대문자로 변환한다.',() =>{

        const result = utils.capitalize('hello');
        // asert.equal(result,'Hello');
        result.should.be.equal('Hello');
    });
});

