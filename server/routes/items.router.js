const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
 router.get('/recentItems', rejectUnauthenticated, (req, res) => {
  const queryText = `
  SELECT * FROM "items"
  JOIN "user" ON "items".user_id = "user".id
  JOIN "containers" ON "items".container_id = "containers".container_id
  JOIN "locations" ON "containers".location_id = "locations".location_id
  WHERE "user".id = $1 AND "isActive" = TRUE
  ORDER BY "date_added" DESC LIMIT 5;`;

  pool.query(queryText, [req.user.id])
    .then(response => {
      // console.log('data from server is', response.rows)
      res.send(response.rows)
    }).catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
});

router.get('/numAssets', rejectUnauthenticated, (req, res) => {
  const queryText = `
  SELECT COUNT(*) FROM "items"
  JOIN "locations" ON "items".user_id = "locations".user_id
  WHERE "items".user_id = $1 AND "locations"."isActive" = TRUE;`;

  const queryValues = [req.user.id];

  pool.query(queryText, queryValues)
    .then(response => {
      // console.log('data from server is', response.rows[0].count)
      res.send(response.rows[0].count)
    }).catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
});

router.get('/numLosses', rejectUnauthenticated, (req, res) => {
  const queryText = `
  SELECT COUNT(*) FROM "items"
  JOIN "user" ON "items".user_id = "user".id
  JOIN "containers" ON "items".container_id = "containers".container_id
  JOIN "locations" ON "containers".location_id = "locations".location_id
  WHERE "locations"."isActive" = TRUE AND "locations".user_id = $1 AND "items".state = 'LOST' OR "locations"."isActive" = TRUE AND "locations".user_id = $1 AND "items".state = 'STOLEN';`;

  const queryValues = [req.user.id];

  pool.query(queryText, queryValues)
    .then(response => {
      // console.log('data from server is', response.rows[0].count)
      res.send(response.rows[0].count)
    }).catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
