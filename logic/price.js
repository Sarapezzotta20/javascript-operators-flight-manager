function Prices() {
    function calculateFinalPrice(basePrice,variationPassengerType, variationFlightType) {
        let basePrice = 0;
        let variationPassengerType = (basePrice * 5) / 100;
        let variationFlightType = (basePrice * 3) / 100;

        basePrice - (variationPassengerType + variationFlightType);
    }
    
    return {calculateFinalPrice};
}
console.log(this.calculateFinalPrice);
module.exports = Prices();
