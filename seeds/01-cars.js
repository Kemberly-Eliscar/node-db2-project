exports.seed = function(knex, Promise) {
  // truncate refreshes instead of deleting all existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { make: 'Honda-01', model: 'Accord', vin: 17715, mileage: 0007, transmission: "cool", title: "valid" },
        { make: 'Honda-02', model: 'Pilot', vin: 11575, mileage: 00247, transmission: "broke", title: "expired" },
        { make: 'Mercedes-03', model: 'CLA 250', vin: 10029, mileage: 01234, transmission: "foreign", title: "valid" },
      ]);
    });
};