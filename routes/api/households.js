const router = require("express").Router();
const householdController = require("../../controllers/householdController");
const transactionController = require("../../controllers/transactionsController")
// Matches with "/api/households"
router.route("/")
  .get(householdController.findAll)
  .post(householdController.create);

// Matches with "/api/households/:id"
router
  .route("/:id")
  .get(householdController.findById)
  .put(householdController.update)
  .delete(householdController.remove);

router.route("/:id/transaction")
.get(transactionController.findAll)
.post(transactionController.create)
.delete(transactionController.remove);

module.exports = router;
