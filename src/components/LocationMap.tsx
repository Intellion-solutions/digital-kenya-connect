
import React from 'react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

const LocationMap = () => {
  const businessLocation = {
    latitude: -0.4593609250568846,
    longitude: 34.16816707445387,
    address: "Main Street, Nairobi, Kenya",
    name: "Mutunga Enterprise Ltd"
  };

  const handleDirections = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${businessLocation.latitude},${businessLocation.longitude}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleOpenMaps = () => {
    const mapsUrl = `https://www.google.com/maps?q=${businessLocation.latitude},${businessLocation.longitude}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Find Us Here</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit our digital center for personalized assistance with all your service needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Location Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-50 to-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">{businessLocation.address}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Coordinates: {businessLocation.latitude.toFixed(6)}, {businessLocation.longitude.toFixed(6)}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600">Open 24/7</p>
                    <p className="text-sm text-green-600 font-medium">Always available for your convenience</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Contact</h4>
                    <p className="text-gray-600">+254 726 564 132</p>
                    <p className="text-sm text-gray-500">Call us for directions or assistance</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleDirections}
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Navigation className="w-5 h-5" />
                  <span>Get Directions</span>
                </button>
                <button
                  onClick={handleOpenMaps}
                  className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <MapPin className="w-5 h-5" />
                  <span>View on Maps</span>
                </button>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-green-200 via-gray-200 to-red-200 h-96 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="text-center text-gray-700 z-10">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
              <p className="text-lg">{businessLocation.name}</p>
              <p className="text-sm text-gray-600 mt-2">{businessLocation.address}</p>
              <button
                onClick={handleOpenMaps}
                className="mt-4 bg-white text-gray-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Open in Google Maps
              </button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-green-500 rounded-full opacity-30"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-red-500 rounded-full opacity-20"></div>
            <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-black rounded-full opacity-25"></div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Easy to Find</h3>
            <p className="text-gray-600">Located in the heart of Nairobi with excellent public transport access</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Always Open</h3>
            <p className="text-gray-600">24/7 operations mean we're always here when you need us</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Navigation className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Accessible</h3>
            <p className="text-gray-600">Wheelchair accessible with parking available nearby</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
