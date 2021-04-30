const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sayan:h37ZxOEjaW1kUOj7@cluster0.cmd0v.mongodb.net/form?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
