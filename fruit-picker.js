// Write a callback function called onSuccess to be called when the order is successful. It should invoke the imported notify function passing a success message to it.

function onSuccess() {
    notify({ message: 'SUCCESS' })
    }

    // Write a callback function called onError to be called when the order encounters an error. It should invoke the imported notify function passing an error message to it.
    function onError() {
        notify({ message: 'ERROR' })
        }

// The grocer's API provides a function to order from their inventory called order. It receives three arguments: a query, a callback function to be invoked when the order is successful, and a callback function to be invoked when the order encounters an error. You decide to wrap the api function call in a newly defined function orderFromGrocer to insulate your codebase from external changes. Your function should forward the arguments (which match the provided api function) to the api function.

// The query takes the form of an object


function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
    order(query, onSuccessCallback, onErrorCallback)
    }

