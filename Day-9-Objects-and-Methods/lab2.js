/**
 * Create an object mobile with properties brand, model, and methods makeCall() and sendMessage(). Use the this keyword inside these methods.
 */

const mobile = {
    brand: "Techoford",
    model: "T-7.0",
    makeCall: function(){
        console.log(`Make call from ${this.brand} and ${this.model}  model phone.`);
    },
    sendMessage: function(){
        console.log(`Send MSG from ${this.brand} and ${this.model}  model phone.`);
    }
}

mobile.makeCall();      // Make call from Techoford and T-7.0  model phone.

mobile.sendMessage();   // Send MSG from Techoford and T-7.0  model phone.
