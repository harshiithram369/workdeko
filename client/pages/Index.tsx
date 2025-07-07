import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Brain,
  Target,
  TrendingUp,
  Award,
  MessageSquare,
  Search,
  Filter,
  BarChart3,
  Briefcase,
  UserCheck,
  Calendar,
  Video,
  BookOpen,
  Lightbulb,
  Layers,
  Scale,
  Building2,
  Gauge,
  Sparkles,
  Bot,
  Headphones,
  FileText,
  ThumbsUp,
  ArrowUpRight,
  ChevronDown,
  Menu,
  Phone,
  Mail,
} from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-300 ${isScrolled ? "shadow-lg border-b" : ""}`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <Briefcase className="w-4 h-4 text-white" />
          </div>
          <div className="text-2xl font-bold text-primary">WorkDeko</div>
          <Badge className="bg-success/10 text-success border-success/20 text-xs">
            🤖 AI Powered
          </Badge>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            🎯 Smart Features
          </a>
          <a
            href="#jobs"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            💼 Find Jobs
          </a>
          <a
            href="#ai-tools"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            🤖 AI Tools
          </a>
          <a
            href="#trends"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            📈 Trends
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Download className="w-4 h-4 mr-2" />
            📱 Get App
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white"
          >
            🚀 Post Job
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-4 h-4" />
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

const FloatingCard = ({ children, delay = 0 }) => (
  <div className="animate-float" style={{ animationDelay: `${delay}s` }}>
    {children}
  </div>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-orange-50 to-blue-50 py-20 lg:py-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-success/10 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-1 gap-12 items-center max-w-4xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20">
                🎯 India's #1 AI-Powered Job Platform
              </Badge>
              <h1 className="text-4xl lg:text-7xl font-bold text-foreground leading-tight">
                🚀 Find Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-success">
                  {" "}
                  Dream Job
                </span>
                <br />
                in Minutes! ⚡
              </h1>
              <p className="text-lg text-secondary-foreground max-w-md">
                🤖 AI-powered matching, 🎤 mock interviews, 📚 skill coaching,
                and 📊 trend analysis - all in one platform designed for
                blue-collar professionals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                🎯 Smart Job Match
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
              >
                🤖 Try AI Interview
                <Bot className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-3 gap-3 pt-8 max-w-md">
              <div className="text-center p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg border border-primary/30">
                <div className="text-lg font-bold text-primary">
                  <AnimatedCounter value={250} suffix="K+" />
                </div>
                <div className="text-xs text-primary font-medium">💼 Jobs</div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg border border-accent/30">
                <div className="text-lg font-bold text-accent">
                  <AnimatedCounter value={850} suffix="+" />
                </div>
                <div className="text-xs text-accent font-medium">
                  🏢 Companies
                </div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-success/20 to-success/10 rounded-lg border border-success/30">
                <div className="text-lg font-bold text-success">
                  <AnimatedCounter value={150} suffix="+" />
                </div>
                <div className="text-xs text-success font-medium">
                  🌍 Cities
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories Cards - Positioned in top right */}
          <div className="absolute top-8 right-4 lg:right-8 z-10 hidden md:block">
            <div className="grid grid-cols-2 gap-3 w-80">
              <FloatingCard delay={0}>
                <Card className="transform hover:scale-105 transition-all duration-300 border-2 border-success/20 w-36">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
                    <img
                      src="https://images.pexels.com/photos/4483693/pexels-photo-4483693.jpeg"
                      alt="Construction worker"
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-1 left-1 bg-success text-white text-xs px-1 py-0.5">
                      ✅ Hired
                    </Badge>
                  </div>
                  <CardContent className="p-2">
                    <h3 className="font-semibold text-xs">Rajesh Kumar</h3>
                    <p className="text-xs text-secondary-foreground mb-1">
                      🏗️ Construction
                    </p>
                    <div className="bg-success/10 rounded p-1">
                      <div className="flex items-center gap-1 mb-0.5">
                        <Building2 className="w-2 h-2 text-success" />
                        <span className="text-xs font-medium text-success">
                          L&T
                        </span>
                      </div>
                      <div className="text-xs text-success">💰 ₹45K/mo</div>
                    </div>
                  </CardContent>
                </Card>
              </FloatingCard>

              <FloatingCard delay={0.5}>
                <Card className="transform hover:scale-105 transition-all duration-300 border-2 border-accent/20 w-36">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
                    <img
                      src="https://images.pexels.com/photos/6169151/pexels-photo-6169151.jpeg"
                      alt="Warehouse worker"
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-1 left-1 bg-accent text-white text-xs px-1 py-0.5">
                      🎤 Interview
                    </Badge>
                  </div>
                  <CardContent className="p-2">
                    <h3 className="font-semibold text-xs">Priya Sharma</h3>
                    <p className="text-xs text-secondary-foreground mb-1">
                      📦 Warehouse
                    </p>
                    <div className="bg-accent/10 rounded p-1">
                      <div className="flex items-center gap-1 mb-0.5">
                        <Building2 className="w-2 h-2 text-accent" />
                        <span className="text-xs font-medium text-accent">
                          Amazon
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-0.5">
                        <div className="bg-accent h-0.5 rounded-full animate-pulse w-3/4"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FloatingCard>

              <FloatingCard delay={1}>
                <Card className="transform hover:scale-105 transition-all duration-300 border-2 border-primary/20 w-36">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
                    <img
                      src="https://images.pexels.com/photos/6169634/pexels-photo-6169634.jpeg"
                      alt="Delivery worker"
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-1 left-1 bg-primary text-white text-xs px-1 py-0.5">
                      🎯 8 Matches
                    </Badge>
                  </div>
                  <CardContent className="p-2">
                    <h3 className="font-semibold text-xs">Amit Singh</h3>
                    <p className="text-xs text-secondary-foreground mb-1">
                      🚛 Delivery
                    </p>
                    <div className="bg-primary/10 rounded p-1">
                      <div className="flex items-center gap-1 mb-0.5">
                        <Building2 className="w-2 h-2 text-primary" />
                        <span className="text-xs font-medium text-primary">
                          Flipkart
                        </span>
                      </div>
                      <div className="text-xs text-primary">🏆 95% Match</div>
                    </div>
                  </CardContent>
                </Card>
              </FloatingCard>

              <FloatingCard delay={1.5}>
                <Card className="transform hover:scale-105 transition-all duration-300 border-2 border-success/20 w-36">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
                    <img
                      src="https://images.pexels.com/photos/5493653/pexels-photo-5493653.jpeg"
                      alt="Factory worker"
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-1 left-1 bg-success text-white text-xs px-1 py-0.5">
                      🎓 Trained
                    </Badge>
                  </div>
                  <CardContent className="p-2">
                    <h3 className="font-semibold text-xs">Sita Devi</h3>
                    <p className="text-xs text-secondary-foreground mb-1">
                      ⚙️ Quality
                    </p>
                    <div className="bg-success/10 rounded p-1">
                      <div className="flex items-center gap-1 mb-0.5">
                        <Building2 className="w-2 h-2 text-success" />
                        <span className="text-xs font-medium text-success">
                          Tata
                        </span>
                      </div>
                      <div className="text-xs text-success">📈 Upgraded</div>
                    </div>
                  </CardContent>
                </Card>
              </FloatingCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SmartFeatures = () => {
  const features = [
    {
      icon: Brain,
      emoji: "🤖",
      title: "AI Smart Recommendations",
      description:
        "Our AI analyzes your skills, experience, and preferences to match you with perfect job opportunities.",
      gradient: "from-primary to-accent",
    },
    {
      icon: Video,
      emoji: "🎤",
      title: "AI Mock Interviews",
      description:
        "Practice with our AI interviewer in your language. Get instant feedback and confidence boost.",
      gradient: "from-accent to-primary",
    },
    {
      icon: BookOpen,
      emoji: "📚",
      title: "AI Skill Coaching",
      description:
        "Personalized skill development plans created by AI to fast-track your career growth.",
      gradient: "from-success to-primary",
    },
    {
      icon: TrendingUp,
      emoji: "📊",
      title: "Job Trend Analysis",
      description:
        "Stay ahead with real-time job market trends, salary insights, and demand forecasts.",
      gradient: "from-primary to-success",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20 mb-4">
            🚀 Revolutionary AI Features
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            🤖 Smart Features That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {" "}
              Change Everything
            </span>
          </h2>
          <p className="text-xl text-secondary-foreground max-w-3xl mx-auto">
            🎯 Experience the future of job searching with AI-powered tools
            designed specifically for blue-collar professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20 hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-secondary-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const JobCategories = () => {
  const categories = [
    { name: "🏗️ Construction", jobs: "45K+", growth: "+15%", icon: "🏗️" },
    { name: "🚛 Logistics", jobs: "32K+", growth: "+22%", icon: "🚛" },
    { name: "⚙️ Manufacturing", jobs: "28K+", growth: "+18%", icon: "⚙️" },
    { name: "🍽️ Hospitality", jobs: "25K+", growth: "+12%", icon: "🍽️" },
    { name: "⚡ Electrical", jobs: "18K+", growth: "+25%", icon: "⚡" },
    { name: "🔧 Maintenance", jobs: "15K+", growth: "+20%", icon: "🔧" },
    { name: "🚗 Automotive", jobs: "22K+", growth: "+16%", icon: "🚗" },
    { name: "🏭 Factory", jobs: "35K+", growth: "+14%", icon: "🏭" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            💼 Explore Job Categories
          </h2>
          <p className="text-xl text-secondary-foreground">
            🎯 Find opportunities in your field with real-time job counts and
            growth trends
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/20"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="font-bold text-foreground mb-2">
                  {category.name}
                </h3>
                <div className="text-2xl font-bold text-primary mb-1">
                  {category.jobs}
                </div>
                <div className="text-sm text-success">
                  📈 {category.growth} growth
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white"
          >
            🔍 View All Categories
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const TrendingSkills = () => {
  const skills = [
    { skill: "🔧 Machine Operation", demand: 95, salary: "₹35K-50K" },
    { skill: "⚡ Electrical Safety", demand: 88, salary: "₹30K-45K" },
    { skill: "📱 Digital Literacy", demand: 92, salary: "₹25K-40K" },
    { skill: "🏗️ Site Management", demand: 85, salary: "₹40K-60K" },
    { skill: "🚛 Fleet Management", demand: 78, salary: "₹35K-55K" },
    { skill: "⚙️ Quality Control", demand: 82, salary: "₹30K-48K" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            📈 Trending Skills & Roles
          </h2>
          <p className="text-xl text-secondary-foreground">
            🎯 Stay ahead with the most in-demand skills and their earning
            potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-4">{item.skill}</h3>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>🔥 Market Demand</span>
                    <span className="font-bold">{item.demand}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${item.demand}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary-foreground">
                    💰 Salary Range
                  </span>
                  <span className="font-bold text-success">{item.salary}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const AITools = () => {
  return (
    <section
      id="ai-tools"
      className="py-20 bg-gradient-to-br from-primary/5 to-accent/5"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              🤖 AI-Powered Career Tools
            </h2>

            <div className="space-y-6">
              <Card className="p-6 border-2 border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      🎯 Smart Job Matching
                    </h3>
                    <p className="text-secondary-foreground">
                      AI analyzes 50+ factors to find your perfect job match
                      with 95% accuracy.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-accent/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      🎤 AI Interview Coach
                    </h3>
                    <p className="text-secondary-foreground">
                      Practice interviews in Hindi, English, or regional
                      languages with instant feedback.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-success/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-success to-primary rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      📚 Skill Development AI
                    </h3>
                    <p className="text-secondary-foreground">
                      Personalized learning paths to upgrade your skills and
                      increase salary potential.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Button
              size="lg"
              className="mt-8 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white"
            >
              🚀 Try AI Tools Free
              <Bot className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-primary/10">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  🤖 AI Career Assistant
                </h3>
                <p className="text-secondary-foreground">
                  Available 24/7 in your language
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-white rounded-lg p-3 flex-1 shadow-sm">
                    <p className="text-sm">
                      "मुझे construction में job चाहिए" 🏗️
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 justify-end">
                  <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-3 text-white max-w-xs shadow-sm">
                    <p className="text-sm">
                      Found 156 construction jobs near you! 🎯 Top match: Site
                      Supervisor at L&T (₹45K/month) 💰
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <Button className="w-full mt-6 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white">
                💬 Start Chatting with AI
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const JobComparison = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ⚖️ Side-by-Side Job Comparison
          </h2>
          <p className="text-xl text-secondary-foreground">
            🎯 Compare jobs instantly to make the best career decision
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardTitle className="flex items-center gap-2">
                  🏗️ Construction Supervisor
                  <Badge className="bg-primary text-white">Recommended</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>🏢 Company:</span>
                    <span className="font-bold">L&T Construction</span>
                  </div>
                  <div className="flex justify-between">
                    <span>💰 Salary:</span>
                    <span className="font-bold text-success">
                      ₹45,000/month
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>📍 Location:</span>
                    <span className="font-bold">Mumbai, Maharashtra</span>
                  </div>
                  <div className="flex justify-between">
                    <span>⏰ Experience:</span>
                    <span className="font-bold">3-5 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🎯 Match Score:</span>
                    <span className="font-bold text-primary">95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>📅 Joining:</span>
                    <span className="font-bold">Immediate</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                  🚀 Apply Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🏗️ Site Engineer
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>🏢 Company:</span>
                    <span className="font-bold">DLF Limited</span>
                  </div>
                  <div className="flex justify-between">
                    <span>💰 Salary:</span>
                    <span className="font-bold text-success">
                      ₹38,000/month
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>📍 Location:</span>
                    <span className="font-bold">Gurgaon, Haryana</span>
                  </div>
                  <div className="flex justify-between">
                    <span>⏰ Experience:</span>
                    <span className="font-bold">2-4 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🎯 Match Score:</span>
                    <span className="font-bold text-accent">78%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>📅 Joining:</span>
                    <span className="font-bold">15 days notice</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-6">
                  📋 View Details
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              ⚖️ Compare More Jobs
              <Scale className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustedEmployers = () => {
  const employers = [
    { name: "Tata Group", logo: "🏢", jobs: "2.5K+" },
    { name: "L&T", logo: "🏗️", jobs: "1.8K+" },
    { name: "Amazon", logo: "📦", jobs: "3.2K+" },
    { name: "Flipkart", logo: "🛒", jobs: "2.1K+" },
    { name: "Mahindra", logo: "🚗", jobs: "1.5K+" },
    { name: "Reliance", logo: "⚡", jobs: "2.8K+" },
    { name: "Asian Paints", logo: "🎨", jobs: "900+" },
    { name: "Maruti Suzuki", logo: "🚙", jobs: "1.2K+" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            🏆 Trusted by Leading Employers
          </h2>
          <p className="text-xl text-secondary-foreground">
            🤝 850+ companies trust WorkDeko for their blue-collar hiring needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16">
          {employers.map((employer, index) => (
            <Card
              key={index}
              className="text-center p-4 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-2">{employer.logo}</div>
              <h3 className="font-bold text-sm mb-1">{employer.name}</h3>
              <div className="text-xs text-primary font-medium">
                {employer.jobs} jobs
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">850+</div>
                <div className="text-sm text-secondary-foreground">
                  🏢 Companies
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">45K+</div>
                <div className="text-sm text-secondary-foreground">
                  ✅ Placements
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success">2.5 days</div>
                <div className="text-sm text-secondary-foreground">
                  ⚡ Avg. Hire Time
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
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
    <footer className="bg-gradient-to-br from-foreground to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <div className="text-2xl font-bold">WorkDeko</div>
              <Badge className="bg-success/20 text-success border-success/30">
                🤖 AI Powered
              </Badge>
            </div>

            <p className="text-gray-300 mb-6 max-w-md">
              🚀 India's most advanced AI-powered job platform for blue-collar
              professionals. Find your dream job with smart matching, AI
              interviews, and skill coaching.
            </p>

            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="📧 Enter your email for job alerts"
                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary"
              >
                🔔 Subscribe
              </Button>
            </form>

            {status === "success" && (
              <p className="text-success mt-2">
                ✅ Successfully subscribed to job alerts!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 mt-2">❌ Please enter a valid email</p>
            )}
          </div>

          <div>
            <h3 className="font-bold mb-4">🎯 For Job Seekers</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  🔍 Find Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  🤖 AI Interview Practice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  📚 Skill Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  📊 Career Insights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  💬 Career Guidance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">🏢 For Employers</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  📝 Post Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  🎯 Smart Hiring
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  📈 Analytics Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  💼 Bulk Hiring
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  🤝 Partnership
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              WorkDeko
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 WorkDeko. All rights reserved. 🇮🇳 Made in India
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              📞 Support
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
            >
              <Mail className="w-4 h-4 mr-2" />
              📧 Contact
            </Button>
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
      <SmartFeatures />
      <JobCategories />
      <TrendingSkills />
      <AITools />
      <JobComparison />
      <TrustedEmployers />
      <Footer />
    </div>
  );
}
