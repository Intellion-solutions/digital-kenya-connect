
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Eye, ExternalLink, Calendar, User, Tag, Filter, Search } from 'lucide-react';
import { useSecureForm } from '../hooks/useSecureForm';
import { useToast } from "@/hooks/use-toast";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const { toast } = useToast();

  const categories = [
    { id: 'all', name: 'All Projects', count: 24 },
    { id: 'web-development', name: 'Web Development', count: 8 },
    { id: 'graphic-design', name: 'Graphic Design', count: 6 },
    { id: 'printing', name: 'Printing Services', count: 5 },
    { id: 'ecitizen', name: 'eCitizen Solutions', count: 3 },
    { id: 'training', name: 'Digital Training', count: 2 }
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Business Website",
      description: "Complete web development solution for a local business including e-commerce functionality",
      category: "web-development",
      image: "https://www.blendb2b.com/hs-fs/hubfs/blog-images/Modern%20Website%20Designs/Screenshot%202025-01-23%20at%2015.07.56-min.png?width=3544&height=1750&name=Screenshot%202025-01-23%20at%2015.07.56-min.png",
      client: "Intellion Ltd",
      date: "2024-01-15",
      technologies: ["React", "Node.js", "MongoDB"],
      status: "Completed"
    },
    {
      id: 2,
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo, business cards, and marketing materials",
      category: "graphic-design",
      image: "https://graphicdesigneye.com/front-end/assets/images/banner/branding-design.png",
      client: "Creative Agency",
      date: "2024-02-10",
      technologies: ["Photoshop", "Illustrator", "InDesign"],
      status: "Completed"
    },
    {
      id: 3,
      title: "Large Format Printing Project",
      description: "High-quality banner and poster printing for marketing campaign",
      category: "printing",
      image: "https://www.pdcgraphics.com/wp-content/uploads/2019/07/Large-format-inkjet-printer-1.jpg",
      client: "Marketing Pro",
      date: "2024-02-20",
      technologies: ["Large Format Printer", "Adobe Creative Suite"],
      status: "Completed"
    },
    {
      id: 4,
      title: "eCitizen Application System",
      description: "Streamlined process for handling government document applications",
      category: "ecitizen",
      image: "https://www.yu.co.ke/wp-content/uploads/2019/07/Ecitizen-Login-1.png",
      client: "Government Services",
      date: "2024-03-01",
      technologies: ["Digital Forms", "Document Processing"],
      status: "Ongoing"
    },
    {
      id: 5,
      title: "E-commerce Platform",
      description: "Full-featured online store with payment integration and inventory management",
      category: "web-development",
      image: "https://helpiewp.com/wp-content/uploads/2018/08/Create-a-free-ecommerce-website-1024x650.png.webp",
      client: "Retail Plus",
      date: "2024-03-15",
      technologies: ["React", "Express", "Stripe", "PostgreSQL"],
      status: "Completed"
    },
    {
      id: 6,
      title: "Digital Marketing Campaign",
      description: "Complete digital marketing package including social media graphics and web banners",
      category: "graphic-design",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      client: "StartUp Co",
      date: "2024-04-01",
      technologies: ["Photoshop", "After Effects", "Figma"],
      status: "Completed"
    }
  ];

  const contactForm = useSecureForm({
    onSubmit: async (data) => {
      console.log('Secure form submission:', data);
      await new Promise(resolve => setTimeout(resolve, 1000));
    },
    requiredFields: ['name', 'email', 'project'],
    rateLimitKey: 'portfolio-contact',
    maxAttempts: 3
  });

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-black to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Showcasing our expertise in web development, design, printing, and digital services
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-orange-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => openProjectModal(project)}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-100 transform scale-90 group-hover:scale-100"
                    >
                      <Eye className="w-5 h-5" />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-green-600 font-medium">
                      {categories.find(cat => cat.id === project.category)?.name}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(project.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="w-4 h-4 mr-1" />
                      {project.client}
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 2).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-500 text-xl mb-4">No projects found</div>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeProjectModal}
        >
          <div className="relative max-w-4xl max-h-full bg-white rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeProjectModal}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center z-10 transition-colors"
            >
              <span className="text-gray-600">×</span>
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Project Image */}
              <div className="h-96 lg:h-full">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Project Details */}
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-sm text-green-600 font-medium">
                    {categories.find(cat => cat.id === selectedProject.category)?.name}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mt-2">
                    {selectedProject.title}
                  </h2>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="text-gray-700">Client: {selectedProject.client}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="text-gray-700">Date: {new Date(selectedProject.date).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Tag className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="text-gray-700">Status: {selectedProject.status}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                    <ExternalLink className="w-5 h-5" />
                    <span>Start Similar Project</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Start Your Project Today
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to bring your ideas to life? Contact us to discuss your project requirements.
            </p>
            
            <form onSubmit={contactForm.handleSubmit} className="space-y-6">
              <input type="hidden" name="_token" value={contactForm.csrfToken} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={contactForm.formData.name || ''}
                    onChange={(e) => contactForm.updateField('name', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      contactForm.errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {contactForm.errors.name && (
                    <p className="mt-1 text-sm text-red-500">{contactForm.errors.name}</p>
                  )}
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.formData.email || ''}
                    onChange={(e) => contactForm.updateField('email', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      contactForm.errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {contactForm.errors.email && (
                    <p className="mt-1 text-sm text-red-500">{contactForm.errors.email}</p>
                  )}
                </div>
              </div>
              
              <div>
                <select
                  value={contactForm.formData.project || ''}
                  onChange={(e) => contactForm.updateField('project', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    contactForm.errors.project ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Project Type</option>
                  <option value="web-development">Web Development</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="printing">Printing Services</option>
                  <option value="ecitizen">eCitizen Solutions</option>
                  <option value="training">Digital Training</option>
                  <option value="other">Other</option>
                </select>
                {contactForm.errors.project && (
                  <p className="mt-1 text-sm text-red-500">{contactForm.errors.project}</p>
                )}
              </div>
              
              <div>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={contactForm.formData.message || ''}
                  onChange={(e) => contactForm.updateField('message', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                disabled={contactForm.isSubmitting}
                className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {contactForm.isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
