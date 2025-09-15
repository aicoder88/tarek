import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  testimonial?: {
    quote: string;
    author: string;
  };
}

interface ProjectGalleryProps {
  projects?: Project[];
  categories?: string[];
}

const ProjectGallery = ({
  projects = [
    {
      id: "1",
      title: "Kitchen Renovation",
      category: "Kitchen Remodeling",
      description:
        "Complete kitchen renovation with custom cabinets, quartz countertops, and new appliances.",
      beforeImage:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
      testimonial: {
        quote:
          "The transformation is incredible! Our kitchen is now the heart of our home.",
        author: "Sarah Johnson",
      },
    },
    {
      id: "2",
      title: "Bathroom Remodel",
      category: "Bathroom Renovation",
      description:
        "Modern bathroom remodel with walk-in shower, floating vanity, and heated floors.",
      beforeImage:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      testimonial: {
        quote:
          "Our bathroom feels like a luxury spa now. Couldn't be happier with the results!",
        author: "Michael Davis",
      },
    },
    {
      id: "3",
      title: "Basement Finishing",
      category: "Basement Finishing",
      description:
        "Unfinished basement transformed into a comfortable living space with home theater.",
      beforeImage:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1591247378418-c77db4bd45b6?w=800&q=80",
      testimonial: {
        quote:
          "The basement is now our favorite place to spend time as a family. Amazing work!",
        author: "Robert Wilson",
      },
    },
    {
      id: "4",
      title: "Exterior Painting",
      category: "Painting & Drywall",
      description:
        "Complete exterior repaint with premium weather-resistant paint and trim restoration.",
      beforeImage:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=800&q=80",
      testimonial: {
        quote:
          "Our home looks brand new! The attention to detail was impressive.",
        author: "Jennifer Adams",
      },
    },
  ],
  categories = [
    "All",
    "Kitchen Remodeling",
    "Bathroom Renovation",
    "Basement Finishing",
    "Painting & Drywall",
  ],
}: ProjectGalleryProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const projectsPerPage = 1;

  // Filter projects by category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSliderPosition(50); // Reset slider position when changing projects
  };

  // Handle slider change
  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newPosition = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  // Navigate to previous project
  const prevProject = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    } else {
      handlePageChange(totalPages);
    }
  };

  // Navigate to next project
  const nextProject = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    } else {
      handlePageChange(1);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-background">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse our portfolio of completed projects. See the dramatic before
          and after transformations we've achieved for our clients.
        </p>
      </div>

      {/* Category Filter */}
      <Tabs
        defaultValue="All"
        value={activeCategory}
        onValueChange={handleCategoryChange}
        className="mb-8"
      >
        <TabsList className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="px-4 py-2">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Project Display */}
      {currentProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-8">
          {currentProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border-none shadow-lg"
            >
              <CardContent className="p-0">
                {/* Before/After Slider */}
                <div
                  className="relative h-[500px] w-full cursor-pointer"
                  onClick={handleSliderChange}
                >
                  {/* Before Image (Full Width) */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.beforeImage})` }}
                  />

                  {/* After Image (Partial Width based on slider) */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${project.afterImage})`,
                      width: `${sliderPosition}%`,
                      overflow: "hidden",
                    }}
                  />

                  {/* Slider Handle */}
                  <div
                    className="absolute top-0 bottom-0"
                    style={{ left: `calc(${sliderPosition}% - 2px)` }}
                  >
                    <div className="absolute inset-y-0 w-1 bg-white"></div>
                    <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                      <ChevronLeft className="w-4 h-4 text-gray-700" />
                      <ChevronRight className="w-4 h-4 text-gray-700" />
                    </div>
                  </div>

                  {/* Before/After Labels */}
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">
                    Before
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">
                    After
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {project.category}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevProject}
                        aria-label="Previous project"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextProject}
                        aria-label="Next project"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <p className="mb-6">{project.description}</p>

                  {/* Testimonial */}
                  {project.testimonial && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-muted p-4 rounded-lg flex gap-4 items-start"
                    >
                      <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="italic text-sm">
                          {project.testimonial.quote}
                        </p>
                        <p className="text-sm font-medium mt-2">
                          — {project.testimonial.author}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p>No projects found in this category.</p>
        </div>
      )}

      {/* Pagination */}
      {filteredProjects.length > projectsPerPage && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  prevProject();
                }}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === index + 1}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(index + 1);
                  }}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  nextProject();
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default ProjectGallery;
