import Link from 'next/link';
import Image from 'next/image';
import { Button, Card } from '@/components/ui';
import { 
  ArrowRight, 
  Shield, 
  TrendingUp, 
  Users, 
  Clock,
  Building2,
  Stethoscope,
  FileCheck,
  HeartPulse,
  CheckCircle,
  BarChart3,
  Globe,
  FileUp,
  Search,
  CreditCard
} from 'lucide-react';

// Services data
const services = [
  {
    icon: Stethoscope,
    title: 'Outpatient Services',
    description: 'Streamlined processing for outpatient consultations, diagnostics, and treatments across our extensive provider network.',
    color: 'bg-blue-500',
  },
  {
    icon: Building2,
    title: 'Hospitalization',
    description: 'Comprehensive hospital admission management with real-time authorization and seamless claims settlement.',
    color: 'bg-teal-500',
  },
  {
    icon: HeartPulse,
    title: 'Wellness Programs',
    description: 'Preventive health screenings, wellness initiatives, and corporate health programs tailored to your needs.',
    color: 'bg-emerald-500',
  },
  {
    icon: FileCheck,
    title: 'Claims Audit',
    description: 'Expert medical bill auditing to ensure accuracy, prevent fraud, and optimize healthcare spending.',
    color: 'bg-purple-500',
  },
];

// How It Works steps
const howItWorks = [
  {
    step: 1,
    icon: FileUp,
    title: 'Submit Claim',
    description: 'Healthcare providers submit claims digitally through our secure portal with all required documentation.',
  },
  {
    step: 2,
    icon: Search,
    title: 'Auto-Validation',
    description: 'Our system automatically validates claims against policy rules and identifies any discrepancies.',
  },
  {
    step: 3,
    icon: CheckCircle,
    title: 'Review & Approve',
    description: 'Claims officers review flagged items while straightforward claims are auto-approved instantly.',
  },
  {
    step: 4,
    icon: CreditCard,
    title: 'Settlement',
    description: 'Approved claims are processed for payment with complete transparency and tracking.',
  },
];

// Stats data
const stats = [
  { value: '4,000+', label: 'Panel Providers', icon: Building2 },
  { value: '74%', label: 'Approval Rate', icon: CheckCircle },
  { value: '24/7', label: 'Support Available', icon: Clock },
  { value: 'RM 150K+', label: 'Monthly Savings', icon: TrendingUp },
];

// Features data
const features = [
  {
    icon: Shield,
    title: 'ISO Certified',
    description: 'Compliant with international security and quality standards.',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Data-driven insights for informed decision making.',
  },
  {
    icon: Globe,
    title: 'Nationwide Network',
    description: 'Access to providers across all Malaysian states.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Expert team available around the clock.',
  },
];

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }} />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm mb-6">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                Healthcare Administration Redefined
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Medical Claims
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  Processes Redefined
                </span>
              </h1>
              
              <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                Streamline your healthcare administration with our comprehensive claims management platform. 
                Real-time processing, transparent analytics, and a nationwide provider network.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/dashboard">
                  <Button size="lg" className="w-full sm:w-auto group">
                    Explore Dashboard
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-gray-600 text-white hover:bg-gray-800">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Visual - Healthcare Platform Illustration */}
            <div className="relative hidden lg:block">
              <div className="relative">
                <Image
                  src="/images/hero-healthcare-platform.png"
                  alt="e-MAS Healthcare Management Platform - Unified dashboard showing claims analytics, provider network, and real-time processing"
                  width={600}
                  height={500}
                  priority
                  className="rounded-2xl shadow-2xl"
                />
                
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/30 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-teal-500/30 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-12 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={index} 
                  className="text-center py-6 hover:shadow-lg transition-all duration-300"
                  hover
                >
                  <Icon className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-sm mb-4">
              <Clock className="h-4 w-4" />
              Streamlined Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From submission to settlement — experience a seamless claims journey with full visibility at every step.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Workflow Illustration */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/workflow-claims-process.png"
                  alt="e-MAS Claims Processing Workflow - Visual representation of the end-to-end claims journey from submission through validation, approval, and settlement"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative gradient */}
              <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full blur-3xl opacity-60" />
            </div>

            {/* Steps */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                {howItWorks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={index}
                      className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-blue-600">
                            {item.step}
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-8 flex gap-4">
                <Link href="/dashboard">
                  <Button className="group">
                    See It In Action
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end medical administration services designed to optimize your healthcare operations and reduce costs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="group relative overflow-hidden"
                  hover
                  padding="lg"
                >
                  <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose e-MAS?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine decades of healthcare expertise with cutting-edge technology to deliver 
                exceptional medical administration services.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Circular Progress Rings */}
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    {/* Outer ring */}
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      fill="none"
                      stroke="url(#gradient1)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="565"
                      strokeDashoffset="141"
                      className="origin-center -rotate-90"
                    />
                    
                    {/* Middle ring */}
                    <circle
                      cx="100"
                      cy="100"
                      r="70"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="70"
                      fill="none"
                      stroke="url(#gradient2)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="440"
                      strokeDashoffset="88"
                      className="origin-center -rotate-90"
                    />
                    
                    {/* Inner ring */}
                    <circle
                      cx="100"
                      cy="100"
                      r="50"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="50"
                      fill="none"
                      stroke="url(#gradient3)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="314"
                      strokeDashoffset="47"
                      className="origin-center -rotate-90"
                    />
                    
                    {/* Gradients */}
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0066cc" />
                        <stop offset="100%" stopColor="#00a3a3" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#14b8a6" />
                      </linearGradient>
                      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Center content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-900">12%</div>
                      <div className="text-sm text-gray-500">Cost Savings</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">925</div>
                    <div className="text-xs text-gray-500">Claims Approved</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">RM 1.25M</div>
                    <div className="text-xs text-gray-500">Claims Processed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-600 to-teal-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Administration?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations that trust e-MAS for their medical claims management. 
            Experience the difference of a truly digital healthcare platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto"
              >
                Get Started Today
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
              >
                View Live Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
