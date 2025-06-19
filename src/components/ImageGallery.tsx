
import React, { useState } from 'react';
import { X, ZoomIn, Eye } from 'lucide-react';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageData, setSelectedImageData] = useState<any>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "High-Quality Document Printing",
      description: "Professional printing services for all your document needs",
      category: "printing"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Large Format Printing",
      description: "Banners, posters, and large-scale printing solutions",
      category: "printing"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Bulk Photocopying Services", 
      description: "Fast and efficient bulk copying for businesses and students",
      category: "printing"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "eCitizen Form Assistance",
      description: "Customers getting help with government online services",
      category: "ecitizen"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Scanning & Lamination",
      description: "Document scanning and professional lamination services",
      category: "printing"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Creative Design in Progress",
      description: "Professional graphic design and branding services",
      category: "design"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Poster & Banner Production",
      description: "Custom poster and banner design and printing",
      category: "printing"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Student Typing Services",
      description: "Students working on assignments and projects",
      category: "training"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Government Office Support",
      description: "Assistance with various government office procedures",
      category: "ecitizen"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
