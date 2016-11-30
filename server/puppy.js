const router = require('express').Router();
module.exports = router;
const data = require('./data');

router.get('/', (req, res, next) => {

  const idsAndNames = data.map(p => {
    return {id: p.id, name: p.name};
  });

  res.send(idsAndNames);

});

router.get('/:id', (req, res, next) => {
  const puppy = data.find(p => p.id === +req.params.id);
  res.send(puppy);
});

router.put('/:id/like', (req, res, next) => {
  const puppy = data.find(p => p.id === +req.params.id);
  puppy.likes++;
  res.sendStatus(204);
});