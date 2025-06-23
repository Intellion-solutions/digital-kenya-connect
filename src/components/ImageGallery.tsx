
import React, { useState } from 'react';
import { X, ZoomIn, Eye } from 'lucide-react';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageData, setSelectedImageData] = useState<any>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://i.pinimg.com/736x/60/9a/18/609a18f71e22e009879358829659c4e0.jpg",
      title: "High-Quality Document Printing",
      description: "Professional printing services for all your document needs",
      category: "printing"
    },
    {
      id: 2,
      src: "https://i.pinimg.com/736x/27/5c/fa/275cfae092575a8c3419441a0fcc1483.jpg", 
      title: "Large Format Printing",
      description: "Banners, T-shirts and large-scale printing solutions",
      category: "printing"
    },
    {
      id: 3,
      src: "https://i.pinimg.com/736x/34/66/1b/34661b2521176c600b2e807700637e0a.jpg",
      title: "Bulk Photocopying Services", 
      description: "Fast and efficient bulk copying for businesses and students",
      category: "printing"
    },
    {
      id: 4,
      src: "https://i.pinimg.com/736x/90/9d/a4/909da49a9878ca2888fede5fe5468586.jpg",
      title: "eCitizen Form Assistance",
      description: "Customers getting help with government online services",
      category: "ecitizen"
    },
    {
      id: 5,
      src: "https://i.pinimg.com/736x/d1/93/dc/d193dcaebd633a934e0ec6b8773eb1b5.jpg",
      title: "Scanning & Lamination",
      description: "Document scanning and professional lamination services",
      category: "printing"
    },
    {
      id: 6,
      src: "https://i.pinimg.com/736x/e1/2a/31/e12a313ae5262c8f8170a9a631e333b0.jpg",
      title: "Creative Design in Progress",
      description: "Professional graphic design and branding services",
      category: "design"
    },
    {
      id: 7,
      src: "https://i.pinimg.com/736x/78/ee/c7/78eec7ba702529cf9bab472e17c19341.jpg",
      title: "Poster & Banner Production",
      description: "Custom poster and banner design and printing",
      category: "printing"
    },
    {
      id: 8,
      src: "https://i.pinimg.com/736x/4a/af/ab/4aafabe4718808e2f254fee72325224f.jpg",
      title: "Student Typing Services",
      description: "Students working on assignments and projects",
      category: "training"
    },
    {
      id: 9,
      src: "https://i.pinimg.com/736x/74/ee/72/74ee72b93217a851f7ebdf47b5016793.jpg",
      title: "Government Office Support",
      description: "Assistance with various government office procedures",
      category: "ecitizen"
    },
    {
      id: 10,
      src: "https://i.pinimg.com/736x/ab/62/2c/ab622c35f3451361637a5d2a49999907.jpg",
      title: "Personal Computer Assistance",
      description: "Staff helping customers with computer tasks and training",
      category: "training"
    }
  ];

  const openModal = (imageSrc: string, imageData: any) => {
    setSelectedImage(imageSrc);
    setSelectedImageData(imageData);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedImageData(null);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See Our Services in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a visual tour of our modern facilities and see how we help 
            thousands of customers with their digital service needs every day.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Real Image */}
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay with View Button */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <button
                  onClick={() => openModal(image.src, image)}
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-100 transform scale-90 group-hover:scale-100"
                >
                  <Eye className="w-5 h-5" />
                  <span>View</span>
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">{image.title}</h3>
                <p className="text-sm text-gray-600">{image.description}</p>
                <div className="mt-3">
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal */}
        {selectedImage && selectedImageData && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-200 z-10"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Image Container */}
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={selectedImage} 
                  alt={selectedImageData.title}
                  className="w-full h-96 md:h-[600px] object-cover"
                />
                
                {/* Image Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedImageData.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {selectedImageData.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      {selectedImageData.category}
                    </span>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      Book This Service
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience Our Services?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Visit our modern facility and see why thousands of Kenyans trust us 
              with their digital service needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                Visit Our Center
              </button>
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
                Book a Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
