var db = require('db');

var kittySchema = new mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

