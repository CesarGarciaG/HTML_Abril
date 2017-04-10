'use strict';

(function() {

    function validateForm() {

        // var inputs = Array.prototype.slice.call($('input'), 0);
        var inputs = $('input, textarea');

        var validity = [];
        inputs.each(function(index, elem) {
            console.log(elem.name, elem.checkValidity());
            validity.push(elem.checkValidity());
        });

        return validity.reduce(function(total, value) {
            return total && value;
        }, true);

        /* Hace lo mismo
        var i = 0;
        var result = true;
        while(result && (i < validity.length)) {
          result = result && validity[i];
          i++;
        }
        return result;
         */
    }

    var button = document.querySelector('#contact button').addEventListener('click', function(event) {
        event.preventDefault();

        var result = validateForm();
        console.log('result', result);

        if (!result) return;

        window.service = window.service || {};
        window.service.contact = window.service.contact || {};
        window.service.contact.send = function() {
            return Promise.resolve();
        }

        window.service.contact.send({
            name: $('input[name="name"]').val(),
            email: $('input[name="email"]').val(),
            message: $('input[name="message"]').val()
        }).then(function() {
            alert('Enviado!!1!');
        }).catch(function() {
            alert('Algo está mal');
        });
    });

})();
