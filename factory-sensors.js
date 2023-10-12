// Your first mission is to write a piece of software to monitor the humidity level of the production room. There is already a sensor connected to the software of the company that returns periodically the humidity percentage of the room.

// You need to implement a function in the software that will throw an error if the humidity percentage is too high. The function should be called checkHumidityLevel and take the humidity percentage as a parameter.

// You should throw an error (the message is not important) if the percentage exceeds 70%.

// checkHumidityLevel(60);
// // => undefined
// checkHumidityLevel

class OverheatingError extends Error {
    constructor(temperature) {
    super(The temperature is ${temperature} ! Overheating !);
    this.temperature = temperature;
    }
    }
    /**
    * Check if the humidity level is not too high.
    *
    */
     function checkHumidityLevel(humidityPercentage) {
    if (humidityPercentage > 70) {
    throw new Error(
    Humidity level is too high. Expected 70% or lower, actual: ${humidityPercentage}%
    );
    }
    }

    // Elena is very pleased with your first assignment and asks you to deal with the monitoring of the machines' temperature. While chatting with a technician, Greg, you are told that if the temperature of a machine exceeds 500°C, the technicians start worrying about overheating.

    // The machine is equipped with a sensor that measures its internal temperature. You should know that the sensor is very sensitive and often breaks. In this case, the technicians will need to change it.
    
    // Your job is to implement a function reportOverheating that takes the temperature as a parameter and throws an error if the sensor is broken or if the machine starts overheating. Knowing that you will later need to react differently depending on the error, you need a mechanism to differentiate the two kinds of errors. You could rely on the error messages, but this would make your code fragile as it would break if the message gets updated. So to be able to do so properly, you'll throw instances of different error class

    function reportOverheating(temperature) {
        if (temperature === null) {
        throw new ArgumentError(
        'The sensor seems broken. Expected temperature, actual null.'
        );
        }
        if (temperature < 500) {
        return;
        }
        throw new OverheatingError(temperature);
        }
        // Now that your machine can detect errors, you will implement a function that reacts to those errors in different ways :

        // If the sensor is broken, you need to warn a technician
        // If the temperature is too high, you will either shut down the machine if the temperature exceeds 600°C or turn on a warning light if it is less than that.
        // If another error happens, you'll rethrow it.
        // Implements a function monitorTheMachine that takes an argument actions.
        
        // actions is an object that has 4 properties :
        
        // check is a function that, when called, checks the temperature of the machine. It may throw vario

        function monitorTheMachine({check, alertDeadSensor, alertOverheating, shutdown}) {
            try {
            check();
            } catch (error) {
            if (error instanceof ArgumentError) {
            alertDeadSensor();
            } else if (error instanceof OverheatingError) {
            if (error.temperature < 600) {
            alertOverheating()
            } else {
            shutdown()
            }
            } else {
            throw error;
            }
            }
            }