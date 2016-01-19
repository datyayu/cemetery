var mongoose = require('mongoose');

// Create a model.
var todo = mongoose.model('Todo', {
              content: String
          });

module.exports = todo;
