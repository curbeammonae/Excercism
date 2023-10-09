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