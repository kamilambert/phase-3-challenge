	const chai = require("chai")
	const expect = chai.expect
	const db = require("./database")

	describe("itemsInSection()", () => {
		it("should find the IDs and names of all grocery items in the given section", (done) => {
			db.itemsInSection("bulk", (result) => {
				expect(result).to.eql(
					[{id: 16, name: 'Flour'}, {id:33, name: 'Pasta'}, {id: 36, name: 'Rice'}]
				)
			})
			done()
		})
	})

	describe("cheapItems()", () => {
		it("should find the IDs and prices of all grocery items that cost less than $10.00, ordered from lowest to highest price", (done) => {
			db.cheapItems(), (result) => {
				expect(result[0]).to.eql({id: 15, price: '0.49'})
	      expect(result[result.length - 1]).to.eql({id: 22, price: '9.31'})
			}
			done()
		})
	})

	describe("countItemsInSection()", () => {
		it("should get the count of all grocery items in the given section", (done) => {
			db.countItemsInSection("packaged", (result) => {
				expect(result.length).to.eql(5)
			})
			done()
		})
	})
