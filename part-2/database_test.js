const chai = require('chai')
const expect = chai.expect
const db = require('./database')

describe('itemsInSection()', function() {
	it('should find the IDs and names of all grocery items in the given section', function(done) {
		db.itemsInSection('bulk')
		.then(function(result) {
			expect(result.length).to.equal(3)
			done()
		})
	})
})
