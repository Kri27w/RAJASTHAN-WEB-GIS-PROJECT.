// Rajasthan City GIS Application
let map;
let markers = {};
let currentSelectedCity = null;

// Initialize the map
function initMap() {
    // Center coordinates for Rajasthan
    const rajasthanCenter = [26.9124, 75.2055];
    
    // Create map
    map = L.map('map').setView(rajasthanCenter, 7);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
        maxNativeZoom: 18
    }).addTo(map);
    
    // Add a simple scale control
    L.control.scale().addTo(map);
}

// Create custom marker icon
function getMarkerIcon(isActive = false) {
    const color = isActive ? '#764ba2' : '#667eea';
    return L.divIcon({
        html: `<div style="background-color: ${color}; border: 3px solid white; border-radius: 50%; 
                width: 30px; height: 30px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);"></div>`,
        iconSize: [30, 30],
        className: 'city-marker'
    });
}

// Add markers to map
function addMarkers() {
    rajasthanCities.forEach(city => {
        const marker = L.marker([city.latitude, city.longitude], {
            icon: getMarkerIcon(false)
        }).addTo(map);
        
        // Create popup content
        const popupContent = `
            <div style="min-width: 200px;">
                <h4>${city.name}</h4>
                <p><strong>Population:</strong> ${city.population}</p>
                <p><strong>Area:</strong> ${city.area}</p>
                <p><strong>Established:</strong> ${city.established}</p>
                <p><strong>Highlights:</strong> ${city.highlights}</p>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        
        // Add click event
        marker.on('click', () => selectCity(city.id));
        
        // Store marker for later reference
        markers[city.id] = marker;
    });
}

// Populate city list in sidebar
function populateCityList() {
    const cityList = document.getElementById('cityList');
    cityList.innerHTML = '';
    
    rajasthanCities.forEach(city => {
        const cityItem = document.createElement('div');
        cityItem.className = 'city-item';
        cityItem.innerHTML = `
            <div class="city-item-name">${city.name}</div>
            <div class="city-item-info">Population: ${city.population}</div>
        `;
        
        cityItem.addEventListener('click', () => selectCity(city.id));
        cityList.appendChild(cityItem);
    });
}

// Select city and update UI
function selectCity(cityId) {
    const city = rajasthanCities.find(c => c.id === cityId);
    
    if (!city) return;
    
    // Update current selection
    currentSelectedCity = cityId;
    
    // Update city list UI
    document.querySelectorAll('.city-item').forEach((item, index) => {
        if (rajasthanCities[index].id === cityId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Update map marker
    Object.keys(markers).forEach(id => {
        markers[id].setIcon(getMarkerIcon(parseInt(id) === cityId));
    });
    
    // Update info panel
    updateInfoPanel(city);
    
    // Pan and zoom to city
    map.flyTo([city.latitude, city.longitude], 11, {
        duration: 1.5
    });
    
    // Show popup
    markers[cityId].openPopup();
}

// Update information panel
function updateInfoPanel(city) {
    const infoPanel = document.getElementById('cityInfo');
    infoPanel.innerHTML = `
        <div>
            <h4 style="color: #667eea; font-size: 18px; margin-bottom: 10px;">${city.name}</h4>
            <p><strong>Description:</strong></p>
            <p style="color: #666; font-size: 13px; margin-bottom: 10px;">${city.description}</p>
            
            <p class="info-label">📊 Statistics:</p>
            <p><strong>Population:</strong> ${city.population}</p>
            <p><strong>Area:</strong> ${city.area}</p>
            <p><strong>Established:</strong> ${city.established}</p>
            
            <p class="info-label">🎯 Latitude:</p>
            <p>${city.latitude.toFixed(4)}</p>
            
            <p class="info-label">🎯 Longitude:</p>
            <p>${city.longitude.toFixed(4)}</p>
            
            <p class="info-label">✨ Highlights:</p>
            <p style="color: #666; font-size: 13px;">${city.highlights}</p>
        </div>
    `;
}

// Search functionality
document.getElementById('searchCity').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    document.querySelectorAll('.city-item').forEach((item, index) => {
        const cityName = rajasthanCities[index].name.toLowerCase();
        if (cityName.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// Initialize app on page load
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    addMarkers();
    populateCityList();
    
    // Select Jaipur by default
    selectCity(1);
});

// Refresh markers when map updates (for responsiveness)
window.addEventListener('resize', () => {
    if (map) {
        map.invalidateSize();
    }
});
