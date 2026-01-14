import Link from 'next/link';
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
  Globe
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

            {/* Hero Visual - Dashboard Preview */}
            <div className="relative hidden lg:block">
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 shadow-2xl">
                {/* Mini Dashboard Preview */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg" />
                      <div>
                        <div className="h-3 w-24 bg-gray-600 rounded" />
                        <div className="h-2 w-16 bg-gray-700 rounded mt-1" />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-gray-700 rounded-lg" />
                      <div className="w-8 h-8 bg-gray-700 rounded-lg" />
                    </div>
                  </div>
                  
                  {/* KPI Cards Preview */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Total Claims', value: '1,250', color: 'from-blue-500 to-blue-600' },
                      { label: 'Approved', value: '74%', color: 'from-emerald-500 to-emerald-600' },
                      { label: 'Savings', value: 'RM 150K', color: 'from-teal-500 to-teal-600' },
                    ].map((kpi, i) => (
                      <div key={i} className="bg-gray-700/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400 mb-1">{kpi.label}</div>
                        <div className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${kpi.color}`}>
                          {kpi.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart Preview */}
                  <div className="bg-gray-700/50 rounded-lg p-4 h-32 flex items-end justify-center gap-1">
                    {[40, 65, 45, 80, 55, 70, 60, 85, 50, 75, 65, 90].map((h, i) => (
                      <div 
                        key={i}
                        className="w-4 bg-gradient-to-t from-blue-500 to-teal-400 rounded-t"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl" />
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
