// Write a callback function called onSuccess to be called when the order is successful. It should invoke the imported notify function passing a success message to it.

function onSuccess() {
    notify({ message: 'SUCCESS' })
    }

    // Write a callback function called onError to be called when the order encounters an error. It should invoke the imported notify function passing an error message to it.
    function onError() {
        notify({ message: 'ERROR' })
        }