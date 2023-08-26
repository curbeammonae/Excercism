// Write a callback function called onSuccess to be called when the order is successful. It should invoke the imported notify function passing a success message to it.

function onSuccess() {
    notify({ message: 'SUCCESS' })
    }