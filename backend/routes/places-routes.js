const express = require('express');

const router = express.Router();

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        location : {
            lat: 40.7484474,
            lng: -73.9871516
        },
        address : '20 W 34th St, New York, NY 10001',
        creator: 'u1'
    }
];

// Place ID
router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid; // { pid: 'p1 }
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    const error = new Error("Could not find a place for the provided ID");
    error.code = 404;
    throw error;
  }

  // console.log('GET request in Places');
  res.json({ place }); // => { place } => { place: place }
});

//User (creator) ID
router.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userId;
  });

  if (!place) {
    const error = new Error("Could not find a place for the provided user ID");
    error.code = 404;
    return next(error);
  }

  res.json({ place });
});

module.exports = router;