function Flights() {
    function calculateNumberOfFlights(numberOfPassengers, flightCapacity){ 
        if (numberOfPassengers % flightCapacity === 0);
        return numberOfPassengers/flightCapacity;

        if (numberOfPassengers < 0) console.log("The number of passengers must be a positive integer value");
        if (flightCapacity < 0) console.log("The capacity of the flight must be a positive integer value");    

        }

        
    }
    return {calculateNumberOfFlights};
}

module.exports = Flights();

