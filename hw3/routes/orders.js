//created by Malia Lundstrom
var express = require('express');
var router = express.Router();

var orders = [
	{
		"Topping": "chocolate",
		"Quantity": "3"
	},
	{
		"Topping": "cherry",
		"Quantity": "1"
	},
	{
		"Topping": "plain",
		"Quantity": "2"
	},
	{
		"Topping": "chocolate",
		"Quantity": "1"
	}
	];
	var myJSONOrders = JSON.stringify(orders);
	
/*GET orders listing. */
router.get('/orders', function(req, res, next) {
	res.send(myJSONOrders);
});

router.post('/orders',(req, res) => {
  res.send(myJSONOrders);
});

module.exports = router;