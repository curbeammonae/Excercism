// // When visitors come to the amusement park for the first time, 
// they need to register by entering their name and age in a terminal 
// and agreeing to the terms and conditions. Of course, they also need to buy a ticket. Each ticket has an identifier like H32AZ123.

// // Write a function createVisitor that accepts three arguments.

// // The name of the visitor.
// // The age of the visitor.
// // The identifier of the ticket that the visitor bought.
// // The function should return an object that holds this information. The keys in the object should be called name, age and ticketId.

// // createVisitor('Verena Nardi', 45, 'H32AZ123');
// // // => { name: 'Verena Nardi', age: 45, ticketId: 'H3

function createVisitor(name, age, ticketId) {
    return {
        'name': name,
        'age': age,
        'ticketId' : ticketId,
    }

}

// When people leave the amusement park, their ticket gets revoked. If they come back, they need to buy a new one. To save regular visitors some time, they only need to register once and the visitor information will be kept for subsequent visits.

// That means when a visitor leaves the park, only their ticket should be invalidated but the rest of the visitor object should stay the same. Implement the function revokeTicket that accepts a visitor object, sets the ticket identifier to null and returns the object afterwards.

// const visitor = {
//   name: 'Verena Nardi',
//   age: 45,
//   ticketId: 'H32AZ123',
// };

// revokeTicket(visitor);

function revokeTicket(visitor) {
    visitor.ticketId = null
    return visitor
  }