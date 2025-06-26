/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { X, ZoomIn, Filter } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Images', count: 20 },
    { id: 'printing', name: 'Printing Services', count: 6 },
    { id: 'ecitizen', name: 'eCitizen Assistance', count: 4 },
    { id: 'training', name: 'Computer Training', count: 5 },
    { id: 'office', name: 'Office Work', count: 3 },
    { id: 'facility', name: 'Our Facility', count: 2 }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://i.pinimg.com/736x/7d/f7/14/7df7140ccf1e34fe9f5e5f8d1f41c495.jpg",
      title: "High-Quality Document Printing",
      description: "Professional printing services for all your document needs",
      category: "printing"
    },
    {
      id: 2,
      src: "https://i.pinimg.com/736x/c8/de/0c/c8de0cc91bc4f5d45f5c7f69d6671391.jpg", 
      title: "Large Format Printing",
      description: "Banners, posters, and large-scale printing solutions",
      category: "printing"
    },
    {
      id: 3,
      src: "https://i.pinimg.com/736x/8b/4c/71/8b4c71200d684b57eb2e69d25866104d.jpg",
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
      src: "https://i.pinimg.com/736x/69/5f/6f/695f6f560d705f1c4d2faf02fc59c977.jpg",
      title: "Scanning & Lamination",
      description: "Document scanning and professional lamination services",
      category: "printing"
    },
    {
      id: 6,
      src: "https://i.pinimg.com/736x/f2/40/5b/f2405b87c8e41bfe64cf80312576d523.jpg",
      title: "Creative Design in Progress",
      description: "Professional graphic design and branding services",
      category: "office"
    },
    {
      id: 7,
      src: "https://i.pinimg.com/736x/34/cb/6e/34cb6ee4d0ae22b591c2df5ee67c7ec3.jpg",
      title: "Poster & Banner Production",
      description: "Custom poster and banner design and printing",
      category: "printing"
    },
    {
      id: 8,
      src: "https://i.pinimg.com/736x/fa/cd/57/facd57dbefed9ef0f27690ba5d4c521a.jpg",
      title: "Student Typing Services",
      description: "Students working on assignments and projects",
      category: "training"
    },
    {
      id: 9,
      src: "https://i.pinimg.com/736x/f8/ff/2b/f8ff2b262e4bb46bdfbad821613841cd.jpg",
      title: "Government Office Support",
      description: "Assistance with various government office procedures",
      category: "ecitizen"
    },
    {
      id: 10,
      src: "https://i.pinimg.com/736x/df/91/4e/df914e0a1d89bd09408b57463bea2fe6.jpg",
      title: "Personal Computer Assistance",
      description: "Staff helping customers with computer tasks and training",
      category: "training"
    },
    {
      id: 11,
      src: "https://i.pinimg.com/736x/67/66/81/676681ec1bc06dfeb3d76261a73d50af.jpg",
      title: "Business Card Printing",
      description: "Professional business cards with quality printing",
      category: "printing"
    },
    {
      id: 12,
      src: "https://i.pinimg.com/736x/38/b2/43/38b2434d83d052629900f2ed12351cb4.jpg",
      title: "Passport Photo Services",
      description: "Professional passport and ID photos taken on-site",
      category: "ecitizen"
    },
    {
      id: 13,
      src: "https://i.pinimg.com/736x/fa/cd/57/facd57dbefed9ef0f27690ba5d4c521a.jpg",
      title: "Computer Training Class",
      description: "Group training sessions for digital literacy",
      category: "training"
    },
    {
      id: 14,
      src: "https://i.pinimg.com/736x/7a/36/5b/7a365b6154aafb0c9b45d51ea9f83c07.jpg",
      title: "Modern Office Environment",
      description: "Clean and professional workspace for all customers",
      category: "facility"
    },
    {
      id: 15,
      src: "https://i.pinimg.com/736x/fe/b3/c6/feb3c651a54034998584ea0b71e2f060.jpg",
      title: "Fleet Management",
      description: "Dedicated service counters for different needs",
      category: "Fleet"
    },
    {
      id: 16,
      src: "https://i.pinimg.com/736x/8f/bf/a9/8fbfa90d55b7d830220c89be428ac157.jpg",
      title: "Building and construction",
      description: "Professional CV and resume writing assistance",
      category: "Building"
    },
    {
      id: 17,
      src: "https://i.pinimg.com/736x/33/49/c8/3349c88048230b08c3ebe89ffdbe376c.jpg",
      title: "Microsoft Office Training",
      description: "Learning Word, Excel, and PowerPoint applications",
      category: "training"
    },
    {
      id: 18,
      src: "https://i.pinimg.com/736x/e5/0e/8b/e50e8b6208600fbd9cb798b9317a8901.jpg",
      title: "Business Consultancy services",
      description: "Helping customers with national ID applications",
      category: "office"
    },
    {
      id: 19,
      src: "https://i.pinimg.com/736x/88/fb/d5/88fbd57f6e87b4a008f7e6671e1d44c8.jpg",
      title: "Business Consultation",
      description: "Professional business advice and planning sessions",
      category: "office"
    },
    {
      id: 20,
      src: "https://i.pinimg.com/736x/ea/f7/15/eaf71559bb15eacb3be429046839f029.jpg",
      title: "Internet Browsing Assistance",
      description: "Teaching customers how to navigate the internet safely",
      category: "training"
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-black to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Gallery
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Take a visual tour of our services, facilities, and satisfied customers in action
          </p>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Images</h2>
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {galleryImages.slice(0, 8).map((image: any) => (
                  <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300">
                        <div className="aspect-[4/3] bg-gray-100">
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-gray-900 mb-2">{image.title}</h3>
                          <p className="text-sm text-gray-600">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Filter className="w-6 h-6 text-gray-600 mr-3" />
            <h3 className="text-xl font-bold text-gray-900">Filter by Category</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category: any) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image: any) => (
              <div
                key={image.id}
                className="relative bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 animate-fade-in"
              >
                <div className="absolute top-3 left-3 z-10">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    image.category === 'printing' ? 'bg-blue-500 text-white' :
                    image.category === 'ecitizen' ? 'bg-green-500 text-white' :
                    image.category === 'training' ? 'bg-orange-500 text-white' :
                    image.category === 'office' ? 'bg-purple-500 text-white' :
                    'bg-gray-500 text-white'
                  }`}>
                    {categories.find((cat: any) => cat.id === image.category)?.name || 'Other'}
                  </span>
                </div>
                <div className="aspect-[4/3] bg-gray-100">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-600">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 via-black to-red-600 rounded-2xl shadow-xl p-8 max-w-3xl mx-auto text-white">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Experience Our Services?
              </h3>
              <p className="text-lg mb-6">
                Visit Mutunga Enterprise and see why thousands of Kenyans trust us 
                with their digital service needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Visit Our Center
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200">
                  Book a Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
