// Rajasthan Cities GIS Data
const rajasthanCities = [
    {
        id: 1,
        name: "Jaipur",
        latitude: 26.9124,
        longitude: 75.7873,
        population: "3.1 Million",
        area: "468 km²",
        established: "1727",
        description: "The capital and largest city of Rajasthan, known as the Pink City.",
        highlights: "Hawa Mahal, City Palace, Jantar Mantar"
    },
    {
        id: 2,
        name: "Jodhpur",
        latitude: 26.2389,
        longitude: 73.0243,
        population: "1.0 Million",
        area: "202 km²",
        established: "1459",
        description: "The Blue City, famous for its blue-painted buildings and desert location.",
        highlights: "Mehrangarh Fort, Umaid Bhawan Palace"
    },
    {
        id: 3,
        name: "Udaipur",
        latitude: 24.5854,
        longitude: 73.7125,
        population: "0.5 Million",
        area: "90 km²",
        established: "1559",
        description: "City of Lakes, famous for its romantic settings and palaces.",
        highlights: "City Palace, Lake Pichola, Jagdish Temple"
    },
    {
        id: 4,
        name: "Ajmer",
        latitude: 26.4499,
        longitude: 74.6399,
        population: "0.5 Million",
        area: "132 km²",
        established: "1113",
        description: "A holy city in the Aravalli Mountains, center of pilgrimage.",
        highlights: "Ajmer Sharif Dargah, Ana Sagar Lake"
    },
    {
        id: 5,
        name: "Kota",
        latitude: 25.2138,
        longitude: 75.8648,
        population: "1.0 Million",
        area: "248 km²",
        established: "1264",
        description: "Known as the coaching capital and famous for bani thani paintings.",
        highlights: "Kota Barrage, City Palace"
    },
    {
        id: 6,
        name: "Bikaner",
        latitude: 28.0229,
        longitude: 73.3119,
        population: "0.6 Million",
        area: "260 km²",
        established: "1488",
        description: "Desert city known for its forts, havelis, and Rajasthani culture.",
        highlights: "Junagarh Fort, Laxmi Niwas Palace"
    },
    {
        id: 7,
        name: "Jaisalmer",
        latitude: 26.9124,
        longitude: 70.9215,
        population: "0.08 Million",
        area: "6298 km²",
        established: "1156",
        description: "The Golden City in the heart of the Thar Desert.",
        highlights: "Jaisalmer Fort, Sam Sand Dunes, Patwon ki Haveli"
    },
    {
        id: 8,
        name: "Nagaur",
        latitude: 27.1981,
        longitude: 73.7297,
        population: "0.15 Million",
        area: "1624 km²",
        established: "1100",
        description: "Historical city known for Nagaur Fort and livestock fair.",
        highlights: "Nagaur Fort, Cattle Fair, Sheikh Alam Tomb"
    },
    {
        id: 9,
        name: "Sikar",
        latitude: 27.6161,
        longitude: 75.1314,
        population: "0.35 Million",
        area: "3000 km²",
        established: "1686",
        description: "Region known for business and industrial development.",
        highlights: "Khimsar Fort, Osian Temples"
    },
    {
        id: 10,
        name: "Chittorgarh",
        latitude: 24.8945,
        longitude: 75.1412,
        population: "0.2 Million",
        area: "2309 km²",
        established: "7th Century",
        description: "Historic city with magnificent fort and palace ruins.",
        highlights: "Chittorgarh Fort, Rani Padmini Palace"
    }
];

// Export data for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = rajasthanCities;
}
