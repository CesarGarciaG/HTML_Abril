console.log("Hello");

var hello = {
    pepe: true,
    juan: 'ok'
};

console.log(hello);
//alert("Eres el visitante nº 999,999");


/**
 * Esta función no hace na de na, es un ejemplo
 * @param  {Number} Tipo number
 * @param  {String} Tipo String
 * @param  {Object} Tipo Object
 * @return {Array} Devuelve un array
 */
function pepe(arg1, arg2, arg3) {

}

console.log(1.0 === '1');
console.log(0.1 + 0.2 === 0.3);

var items = ['h', 'o', 'l', 'a'];

function itemList() {
    items.forEach(function(item, index) {
        console.log(item);
    })
}

function removeH() {
    if (items && items.length) {
        items = items.filter(function(item, index) {
            return item !== 'h';
        });
    }
}

function removeH2() { // Hace lo mismo pero es más complejo
    var result = [];
    items.forEach(function(item, index) {
        if (item !== 'h') {
            result.push(item);
        }
    });
    return result;
}

removeH();
console.log(items);

console.log('\"Holi\"');

var fecha = '2017/05/12';
var fechaNum = fecha.split('/').map(function(item) {
    return parseInt(item); // Devuelve un array con los números parseados
});

console.log(fechaNum);

var cadena = 'Lorem ipsum dolor sit amet, consectetur adipisicing.';
console.log(cadena.slice(0, 5)); // Devuelve una cadena de 5 caracteres
console.log(cadena.slice(5)); // Devuelve una cadena a partir del 5º carácter
console.log(cadena.slice(-5)); // Devuelve una cadena con los 5 últimos caracteres

console.log(parseInt('10', 10)); // El segundo parámetro de parseInt es la base numérica (decimal es por defecto)
console.log(parseInt('10 cows', 10));
console.log(parseInt('cows 10', 10));
console.log(parseInt('09/2013', 10));

function coma1() {
    return {
        val: true
    } // ;   Javascript pone la coma aquí
}

function coma2() {
    return // ; Javascript pone la coma aquí
    {
        val: true
    }
}

var items2 = [{
    name: 'h',
    price: 8
}, {
    name: 'o',
    price: 15
}, {
    name: 'l',
    price: 12
}, {
    name: 'a',
    price: 1
}];

console.log(items2);

var sorted1 = items2.sort(function(item1, item2) {
    return item1.price > item2.price;
});
var sorted2 = items2.sort(function(item1, item2) {
    return item1.name.toLowerCase() > item2.name.toLowerCase();
});
console.log(sorted2);

function Player(name, lastName, level) {
    this.name = name;
    this.lastName = lastName;
    this.level = level;
    this.play = function() {
        console.log('play!');
    }
}

//var player = new Player('Paco', 'Jones', 'newb');
var player = Object.create(Player.prototype);
player.name = 'Charles';
player.lastName = 'Barkley';
player.level = 'Slam';
player.play = function() {
    console.log('play!');
};
Player.prototype.partner = 'Jam'
player.play();
console.log(player);

var arrayFalsy = {
    0: true,
    1: false,
    2: true
};

var obj = {
    nombre: 'Pepito',
    saludo: function() {
        return 'Hola, ' + this.nombre + '!';
    }
};
console.log(obj.nombre); // "Pepito"
console.log(obj.saludo()); // "Hola, Pepito!"
console.log(obj['saludo']()); // "Hola, Pepito!"
var fn = obj['saludo'];
console.log(fn()); // "Hola, undefined!"
console.log(fn.call(obj)); // "Hola, Pepito!"
var fn2 = fn.bind(obj);
console.log(fn2()); // "Hola, Pepito!"

var obj2 = {
    name: 'Pepo',
    saludo: function() {
        var that = this;
        document.querySelector('button').addEventListener('click', function() {
            console.log(that.name);
        });
    }
}


function test() {
    console.log(a);
    console.log(foo());

    var a = 1;

    function foo() {
        return 2;
    }
}

test();

// Estos métodos nos permiten manupilar el DOM
/*
var compraListNodeVirtual = document.createElement('ul');
compra.forEach(function(item) {
    var a = document.createElement('li');
    a.innerHTML = item;
    compraListNodeVirtual.appendChild(a);
});
compraListNode.appendChild(compraListNodeVirtual); */

var array = document.querySelectorAll('.nav a'); // Devuelve un NodeList
var newArray = Array.prototype.slice.call(array, 0); // Transformamos NodeList en Array
newArray.map(function(item) {
    item.style.color = 'red';
});

function argumentsArray() {
    console.log(arguments);
}

argumentsArray(1, 2, 3, 14);
