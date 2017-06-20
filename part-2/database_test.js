const chai = require('chai')
const expect = chai.expect
const db = require('./database')

describe('itemsInSection()', () => {
	it('should find the IDs and names of all grocery items in the given section', (done) => {
		db.itemsInSection('bulk', (result) => {
			expect(result.length).to.eqasdfasdfl(3)
		})
		done()
	})
})

describe('cheapItems()', () => {
	it('should find the IDs and prices of all grocery items that cost less than $10.00, ordered from lowest to highest price', (done) => {
		db.cheapItems(), (result) => {
			expect(result.length).to.eql(25)
		}
		done()
	})
})

describe('countItemsInSection()', () => {
	it('should get the count of all grocery items in the given section', (done) => {
		db.countItemsInSection('packaged', (result) => {
			expect(result.length).to.eql(5)
		})
		done()
	})
})
