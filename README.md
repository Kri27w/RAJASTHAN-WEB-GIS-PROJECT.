# Rajasthan City GIS Web Application

A comprehensive web-based Geographic Information System (GIS) for exploring major cities across Rajasthan, India.

## 🎯 Project Overview

This project provides an interactive mapping application built with Leaflet.js that displays key cities across Rajasthan with detailed geographical and informational data.

## ✨ Features

- **Interactive Map**: Leaflet-based map with OpenStreetMap tiles
- **City Markers**: Visual markers for 10 major cities in Rajasthan
- **Search Functionality**: Filter cities by name
- **City Information Panel**: Detailed information including:
  - City description
  - Population statistics
  - Area coverage
  - Establishment date
  - Notable highlights
  - Coordinates (Latitude/Longitude)
- **Responsive Design**: Works on desktop and tablet devices
- **Smooth Navigation**: Animated map transitions when selecting cities
- **User-Friendly UI**: Intuitive sidebar with city list and search

## 📍 Included Cities

1. **Jaipur** - The Pink City (Capital)
2. **Jodhpur** - The Blue City
3. **Udaipur** - City of Lakes
4. **Ajmer** - Holy City
5. **Kota** - Coaching Capital
6. **Bikaner** - Fort City
7. **Jaisalmer** - Golden City
8. **Nagaur** - Fort & Fair City
9. **Sikar** - Business Hub
10. **Chittorgarh** - Historic Fort City

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients and animations
- **JavaScript (ES6+)**: Interactive functionality
- **Leaflet.js**: Interactive map library
- **OpenStreetMap**: Free tile layer provider

## 📁 Project Structure

```
WEB GIS PROJECT/
├── index.html       # Main HTML file with map container
├── styles.css       # Stylesheet with responsive design
├── app.js           # Main application logic
├── data.js          # City data and coordinates
└── README.md        # Project documentation
```

## 🚀 How to Use

1. **Open the Application**
   - Simply open `index.html` in a web browser

2. **Explore Cities**
   - Click on city names in the left sidebar
   - Click on map markers to view city information
   - Use the search box to filter cities by name

3. **View Details**
   - Select any city to see comprehensive information
   - The map will automatically zoom and pan to the selected city
   - A popup with key information appears on the map

## 📊 Data Format

Each city includes the following data:
- Name and description
- Coordinates (Latitude/Longitude)
- Population
- Area
- Establishment date
- Key highlights and attractions

## 🎨 Customization

### Modify City Data
Edit `data.js` to add or modify cities:
```javascript
{
    id: 11,
    name: "Your City",
    latitude: 26.xxxx,
    longitude: 75.xxxx,
    population: "X Million",
    area: "XXX km²",
    established: "YYYY",
    description: "Description here",
    highlights: "Attractions here"
}
```

### Change Colors
In `styles.css`, modify the color gradient:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Update Tile Layer
In `app.js`, change the tile provider:
```javascript
L.tileLayer('your-tile-provider-url').addTo(map);
```

## 📱 Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🌐 Dependencies

All dependencies are loaded from CDN:
- Leaflet.js (https://leafletjs.com/)
- OpenStreetMap Tiles

## 📝 License

This project is open source and available for educational and commercial use.

## 👨‍💻 Author

Created as a comprehensive GIS learning project for Rajasthan cities.

## 🔗 Resources

- [Leaflet.js Documentation](https://leafletjs.com/)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [GeoJSON Format](https://geojson.org/)

---

**Last Updated**: 2024
**Version**: 1.0
