'use strict';

module.exports = function (req, res, next) {
  let words = req.query.words;
  res.send(words);
};