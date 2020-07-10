const express = require("express");
const router = express.Router();
const DB = require("../data/DB");


router.get("/api/tables", async (req, res) => {
    try {
        const availableTables = await DB.readTables();
    } catch (e) {
        return res.status(500).json({
            success:false,
            error: e
        })
    }
 
  res.json(availableTables);
});

router.get("/api/waitlist", async (req, res) =>
  res.json(await DB.readWaiting())
);

router.post("/api/tables", async (req, res) => {
  const newRes = req.body;

  const availableTables = await DB.readTables();

  if (availableTables.length < 5) {
    newRes.hasTable = true;
    await DB.writeTables([newRes, ...availableTables]);
  } else {
    const waitingList = await DB.readWaiting();
    newRes.hasTable = false;
    await DB.writeWaiting([newRes, ...waitingList]);
  }
  res.json(newRes);
});

module.exports = router;
