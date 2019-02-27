const events = require('events');

class Person extends events.EventEmitter {
    constructor(name){
        super();
        this.name = name;
    }
}

const james = new Person('james'),
    ryu = new Person('ryu'),
    shaun = new Person('shaun');

const people = [james, ryu, shaun];

people.forEach(function(person){
    person.on("speak", function(mssg){
        console.log( `${person.name} said ${mssg}` );
    });
});

james.emit('speak', 'hi dudes');
ryu.emit('speak', 'hi dawgs');
