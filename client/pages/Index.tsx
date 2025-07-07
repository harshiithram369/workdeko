import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Play,
  Download,
  MapPin,
  Users,
  Clock,
  Shield,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">WorkDeko</div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Download className="w-4 h-4 mr-2" />
            Download App
          </Button>
          <Button
            size="sm"
            className="bg-primary hover:bg-hover text-primary-foreground"
          >
            Post a Job
          </Button>
        </div>
      </div>
    </nav>
  );
};

const AnimatedCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-orange-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Find the Right Job—In Minutes
            </h1>
            <p className="text-lg text-secondary-foreground max-w-md">
              Connect with thousands of verified employers across India. Apply
              for free, get hired fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-hover text-primary-foreground"
              >
                Find Jobs Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                For Employers
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">
                  <AnimatedCounter value={150} suffix="K+" />
                </div>
                <div className="text-sm text-secondary-foreground">Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">
                  <AnimatedCounter value={450} suffix="+" />
                </div>
                <div className="text-sm text-secondary-foreground">
                  Companies
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">
                  <AnimatedCounter value={100} suffix="+" />
                </div>
                <div className="text-sm text-secondary-foreground">Cities</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 grid gap-6 md:gap-4 md:grid-cols-3 max-w-2xl mx-auto">
              {/* Worker Profile Card 1 */}
              <div className="transform hover:scale-105 transition-all duration-300 rotate-3 hover:rotate-0">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/4483693/pexels-photo-4483693.jpeg"
                      alt="Construction worker"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-success text-success-foreground text-xs">
                        ✓ Hired
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">
                      Rajesh Kumar
                    </h3>
                    <p className="text-sm text-secondary-foreground mb-3">
                      Construction Worker
                    </p>

                    {/* Company Match */}
                    <div className="bg-accent/10 rounded-lg p-2 mb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-4 h-4 bg-accent rounded-sm"></div>
                        <span className="text-xs font-medium text-accent">
                          Larsen & Toubro
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-success h-1.5 rounded-full animate-pulse"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>

                    {/* Status Indicator */}
                    <div className="flex items-center gap-2 text-xs text-success">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      <span>Successfully placed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Worker Profile Card 2 */}
              <div className="transform hover:scale-105 transition-all duration-300 -rotate-2 hover:rotate-0">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/5493653/pexels-photo-5493653.jpeg"
                      alt="Warehouse worker"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-accent text-accent-foreground text-xs">
                        Interview Today
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">
                      Priya Sharma
                    </h3>
                    <p className="text-sm text-secondary-foreground mb-3">
                      Warehouse Assistant
                    </p>

                    {/* Company Match */}
                    <div className="bg-primary/10 rounded-lg p-2 mb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-4 h-4 bg-primary rounded-sm"></div>
                        <span className="text-xs font-medium text-primary">
                          Amazon Fulfillment
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-accent h-1.5 rounded-full animate-[loading_2s_ease-in-out_infinite]"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>

                    {/* Status Indicator */}
                    <div className="flex items-center gap-2 text-xs text-accent">
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                      <span>Interview scheduled</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Worker Profile Card 3 */}
              <div className="transform hover:scale-105 transition-all duration-300 rotate-1 hover:rotate-0">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg"
                      alt="Factory worker"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary text-primary-foreground text-xs">
                        5 Matches
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">
                      Amit Singh
                    </h3>
                    <p className="text-sm text-secondary-foreground mb-3">
                      Factory Operator
                    </p>

                    {/* Company Match */}
                    <div className="bg-success/10 rounded-lg p-2 mb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-4 h-4 bg-success rounded-sm"></div>
                        <span className="text-xs font-medium text-success">
                          Tata Motors
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-primary h-1.5 rounded-full animate-[loading_3s_ease-in-out_infinite]"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>

                    {/* Status Indicator */}
                    <div className="flex items-center gap-2 text-xs text-primary">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span>Applications sent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustedByMarquee = () => {
  const logos = [
    "Amazon",
    "Flipkart",
    "Zomato",
    "Swiggy",
    "IKEA",
    "Walmart",
    "BigBasket",
    "Myntra",
  ];

  return (
    <section className="py-12 bg-white border-b">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm text-secondary-foreground mb-8">
          Trusted by 450+ companies
        </h3>
        <div className="overflow-hidden">
          <div className="flex animate-marquee hover:pause">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-semibold grayscale hover:grayscale-0 transition-all duration-300">
                  {logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyItsEasy = () => {
  const steps = [
    {
      icon: Download,
      title: "Download App",
      description: "Get the WorkDeko app from Play Store or App Store",
    },
    {
      icon: Users,
      title: "Apply Free",
      description: "Browse and apply to thousands of jobs for free",
    },
    {
      icon: Clock,
      title: "Talk to HR",
      description: "Connect directly with hiring managers",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why It's Easy
          </h2>
          <p className="text-secondary-foreground max-w-2xl mx-auto">
            Get hired in just 3 simple steps. No complex procedures, no hidden
            fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <step.icon className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-secondary-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-primary/30 transform translate-x-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const USPsGrid = () => {
  const usps = [
    {
      icon: Shield,
      title: "Free",
      description: "100% free for job seekers. No hidden charges ever.",
    },
    {
      icon: Zap,
      title: "Fast",
      description: "Apply to multiple jobs in minutes. Quick responses.",
    },
    {
      icon: Globe,
      title: "Multilingual",
      description: "Available in Hindi, English, and 10+ regional languages.",
    },
    {
      icon: CheckCircle,
      title: "Verified Jobs",
      description: "All jobs verified by our team. No fake postings.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose WorkDeko?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <usp.icon className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {usp.title}
                </h3>
                <p className="text-secondary-foreground text-sm">
                  {usp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const EmployerCTABanner = () => {
  return (
    <section className="py-16 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Hire the Best Blue-Collar Talent
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join 450+ companies who trust WorkDeko for their hiring needs
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold">45K+</div>
              <div className="opacity-80">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">&lt;3 Days</div>
              <div className="opacity-80">Average Hire Time</div>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-hover text-hover-foreground hover:bg-yellow-400"
          >
            Post a Job Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Warehouse Supervisor",
      content: "Found my dream job within 2 days. The process was so simple!",
      rating: 5,
      location: "Mumbai",
    },
    {
      name: "Priya Sharma",
      role: "Production Worker",
      content: "WorkDeko helped me find a job near my home with good salary.",
      rating: 5,
      location: "Bangalore",
    },
    {
      name: "Amit Singh",
      role: "Delivery Executive",
      content: "Best platform for blue-collar jobs. Genuine companies only.",
      rating: 5,
      location: "Delhi",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Users Say
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:hidden">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-foreground mb-4">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-secondary-foreground">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="hidden md:block">
            <Card className="border-border">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-xl text-foreground mb-6">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <div className="font-semibold text-foreground text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-secondary-foreground">
                    {testimonials[currentIndex].role} •{" "}
                    {testimonials[currentIndex].location}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExplainerVideo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            See How We Help Workers
          </h2>
          <p className="text-secondary-foreground">
            How We Helped 45K+ Workers Find Their Dream Jobs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl cursor-pointer group overflow-hidden"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-primary ml-1" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold">
                How We Helped 45K+ Workers
              </h3>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="aspect-video bg-black rounded-lg">
                <div className="flex items-center justify-center h-full text-white">
                  Video player would be here
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const LocationJobIndex = () => {
  const cities = [
    { name: "Mumbai", jobs: "15,234" },
    { name: "Delhi", jobs: "12,456" },
    { name: "Bangalore", jobs: "8,934" },
    { name: "Chennai", jobs: "7,123" },
    { name: "Pune", jobs: "6,789" },
    { name: "Hyderabad", jobs: "5,432" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Jobs Available in Your City
          </h2>
          <p className="text-secondary-foreground">
            Find opportunities near you across 100+ cities in India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {cities.map((city, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-border"
            >
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {city.name}
                </h3>
                <p className="text-2xl font-bold text-primary">{city.jobs}</p>
                <p className="text-sm text-secondary-foreground">
                  jobs available
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Cities
          </Button>
        </div>
      </div>
    </section>
  );
};

const NewsletterFooter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus(""), 3000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-background/80 mb-6">
              Get the latest job opportunities and career tips delivered to your
              inbox.
            </p>

            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                type="submit"
                className="bg-primary hover:bg-hover text-primary-foreground"
              >
                Subscribe
              </Button>
            </form>

            {status === "success" && (
              <p className="text-success mt-2">✓ Successfully subscribed!</p>
            )}
            {status === "error" && (
              <p className="text-destructive mt-2">
                ✗ Please enter a valid email
              </p>
            )}
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Job Seekers</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-primary">
                  Find Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Resume Builder
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Career Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-primary">
                  Post Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Search Candidates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Recruitment Solutions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-primary mb-4 md:mb-0">
            WorkDeko
          </div>
          <div className="text-background/60 text-sm">
            © 2024 WorkDeko. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TrustedByMarquee />
      <WhyItsEasy />
      <USPsGrid />
      <EmployerCTABanner />
      <TestimonialsSlider />
      <ExplainerVideo />
      <LocationJobIndex />
      <NewsletterFooter />
    </div>
  );
}
