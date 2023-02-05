function Flights() {
  function calculateNumberOfFlights(passengers, capacity) {
    if (passengers < 0) {
     console.log("The number of passengers must be a positive integer value")};
    if (capacity < 0) {
     console.log(
        "The capacity of the flight must be a positive integer value"
      )};

    if (passengers % capacity === 0) {
      calculateNumberOfFlights = passengers / capacity;
    } else calculateNumberOfFlights = passengers / capacity + 1;
  }
  return { calculateNumberOfFlights };
}

module.exports = Flights;
