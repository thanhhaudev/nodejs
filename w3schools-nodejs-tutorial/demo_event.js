var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler:
var myEventHandler = function () {
    console.log('I hear a scream!');
}

// Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

// Fire the 'scream' event:
eventEmitter.emit('scream'); // <= I hear a scream!

eventEmitter.on('greet', (name) => {
    console.log('Hello, ' + name);
});

eventEmitter.emit('greet', 'John'); // <= Hello, John

// Registering for the event to be fired only once using once() method, automatically removes the event listener after it has been fired.
eventEmitter.once('welcome', () => {
    console.log('Welcome to the event!');
});

eventEmitter.emit('welcome'); // <= Welcome to the event!
eventEmitter.emit('welcome'); // <= (no output)

var sayHello = function () {
    console.log('Hello!');
}

eventEmitter.on('hello', sayHello);
eventEmitter.removeListener('hello', sayHello); // <= removes the event listener
eventEmitter.emit('hello'); // <= (no output)
