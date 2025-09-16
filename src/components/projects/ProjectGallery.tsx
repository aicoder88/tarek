'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, Star, Calendar, MapPin, Eye, ArrowRight } from 'lucide-react';

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [beforeAfterPosition, setBeforeAfterPosition] = useState(50);

  const projects = [
    {
      id: 1,
      title: 'Luxury Kitchen Transformation',
      category: 'Kitchen Remodeling',
      location: 'Beverly Hills, CA',
      date: '2024',
      rating: 5,
      beforeImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&sat=2&brightness=1.1',
      images: [
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&sat=2',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&brightness=1.2'
      ],
      description: 'Complete kitchen renovation featuring custom cabinetry, quartz countertops, and premium appliances. This project transformed a dated kitchen into a modern culinary masterpiece.',
      features: ['Custom Cabinetry', 'Quartz Countertops', 'Premium Appliances', 'LED Lighting'],
      testimonial: {
        text: "The team exceeded our expectations! Our kitchen is now the heart of our home.",
        author: "Sarah Johnson",
        rating: 5
      },
      duration: '6 weeks',
      budget: '$45,000 - $60,000'
    },
    {
      id: 2,
      title: 'Spa-Like Bathroom Retreat',
      category: 'Bathroom Renovation',
      location: 'Manhattan, NY',
      date: '2024',
      rating: 5,
      beforeImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80&sat=2&brightness=1.1',
      images: [
        'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80',
        'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80&sat=2',
        'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80&brightness=1.2'
      ],
      description: 'Luxury bathroom transformation with heated floors, rainfall shower, and premium fixtures creating a spa-like experience.',
      features: ['Heated Floors', 'Rainfall Shower', 'Premium Fixtures', 'Natural Stone'],
      testimonial: {
        text: "It feels like having a luxury spa in our own home. Absolutely stunning work!",
        author: "Michael Chen",
        rating: 5
      },
      duration: '4 weeks',
      budget: '$35,000 - $50,000'
    },
    {
      id: 3,
      title: 'Modern Basement Entertainment',
      category: 'Basement Finishing',
      location: 'Chicago, IL',
      date: '2024',
      rating: 5,
      beforeImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&sat=2&brightness=1.1',
      images: [
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&sat=2',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&brightness=1.2'
      ],
      description: 'Complete basement transformation into a modern entertainment space with home theater, bar area, and game room.',
      features: ['Home Theater', 'Wet Bar', 'Game Area', 'Surround Sound'],
      testimonial: {
        text: "Our basement went from storage space to our favorite room in the house!",
        author: "David Wilson",
        rating: 5
      },
      duration: '8 weeks',
      budget: '$55,000 - $75,000'
    },
    {
      id: 4,
      title: 'Outdoor Living Paradise',
      category: 'Outdoor & Landscaping',
      location: 'Austin, TX',
      date: '2024',
      rating: 5,
      beforeImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&sat=2&brightness=1.1',
      images: [
        'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
        'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&sat=2',
        'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&brightness=1.2'
      ],
      description: 'Custom deck and outdoor kitchen with integrated lighting, fire pit, and landscaping for year-round entertainment.',
      features: ['Custom Deck', 'Outdoor Kitchen', 'Fire Pit', 'Landscape Lighting'],
      testimonial: {
        text: "Perfect for entertaining! The craftsmanship and attention to detail is outstanding.",
        author: "Lisa Rodriguez",
        rating: 5
      },
      duration: '5 weeks',
      budget: '$40,000 - $55,000'
    }
  ];

  const BeforeAfterSlider = ({ beforeImage, afterImage, title }) => {
    return (
      <div className="relative w-full h-64 overflow-hidden rounded-xl before-after-slider">
        <div className="absolute inset-0">
          <img 
            src={afterImage} 
            alt={`${title} - After`}
            className="w-full h-full object-cover"
          />
        </div>
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - beforeAfterPosition}% 0 0)` }}
        >
          <img 
            src={beforeImage} 
            alt={`${title} - Before`}
            className="w-full h-full object-cover"
          />
        </div>
        <div 
          className="slider-handle"
          style={{ left: `${beforeAfterPosition}%` }}
          onMouseDown={(e) => {
            const rect = e.currentTarget.parentElement.getBoundingClientRect();
            const handleMouseMove = (e) => {
              const x = e.clientX - rect.left;
              const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
              setBeforeAfterPosition(percentage);
            };
            const handleMouseUp = () => {
              document.removeEventListener('mousemove', handleMouseMove);
              document.removeEventListener('mouseup', handleMouseUp);
            };
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
          }}
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-black/70 text-white">Before</Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge className="bg-amber-600 text-white">After</Badge>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our latest transformations and see how we bring dreams to life
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['All', 'Kitchen', 'Bathroom', 'Basement', 'Outdoor'].map((filter) => (
            <Button
              key={filter}
              variant={filter === 'All' ? 'default' : 'outline'}
              className={`${filter === 'All' ? 'bg-amber-600 hover:bg-amber-700' : 'hover:bg-amber-50 dark:hover:bg-amber-900/20'} transition-all duration-200`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover-lift bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
              <div className="relative">
                <BeforeAfterSlider 
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  title={project.title}
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-amber-600 text-white shadow-lg">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="flex items-center space-x-1 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>{project.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => setSelectedProject(project)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl gradient-text">{project.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <img 
                              src={project.images[currentImageIndex]} 
                              alt={project.title}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                            <div className="flex justify-center mt-4 space-x-2">
                              {project.images.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => setCurrentImageIndex(index)}
                                  className={`w-3 h-3 rounded-full transition-colors ${
                                    index === currentImageIndex ? 'bg-amber-600' : 'bg-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4" />
                                <span>{project.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{project.date}</span>
                              </div>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                            <div>
                              <h4 className="font-semibold mb-2">Key Features:</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.features.map((feature, index) => (
                                  <Badge key={index} variant="outline" className="border-amber-200 text-amber-700">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-semibold">Duration:</span>
                                <p className="text-gray-600 dark:text-gray-300">{project.duration}</p>
                              </div>
                              <div>
                                <span className="font-semibold">Budget Range:</span>
                                <p className="text-gray-600 dark:text-gray-300">{project.budget}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Client Testimonial</h4>
                          <blockquote className="italic text-gray-700 dark:text-gray-300 mb-2">
                            "{project.testimonial.text}"
                          </blockquote>
                          <div className="flex items-center justify-between">
                            <cite className="text-sm font-medium">- {project.testimonial.author}</cite>
                            <div className="flex items-center space-x-1">
                              {[...Array(project.testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {project.testimonial.author}
                    </span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 dark:hover:bg-amber-900/20"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-6 opacity-90">
              Let's transform your space into something extraordinary
            </p>
            <Button 
              size="lg" 
              className="bg-white text-amber-600 hover:bg-gray-100 font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Get Your Free Quote
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}