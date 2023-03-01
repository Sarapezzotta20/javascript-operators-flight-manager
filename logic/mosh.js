const address = {
  street: "911 Rockdale",
  city: "Sydney",
  zipCode: 2216,
};

function showAdderess(address) {
  for (let key in address) console.log(key, address[key]);
}
