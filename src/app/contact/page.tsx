'use client';

import { useState } from 'react';
import { Card, Input, Button, ToastContainer } from '@/components/ui';
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  Building2,
  MessageSquare
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: 'general',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toasts, setToasts] = useState<Array<{ id: string; message: string; type: 'success' | 'error' }>>([]);

  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'demo', label: 'Request Demo' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership Opportunity' },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Log form data (in real app, would send to API)
    console.log('Form submitted:', formData);

    // Show success toast
    const toastId = Date.now().toString();
    setToasts((prev) => [
      ...prev,
      { id: toastId, message: 'Thank you! Your message has been sent successfully.', type: 'success' },
    ]);

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: 'general',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast Container */}
      <ToastContainer toasts={toasts} onClose={removeToast} />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have questions about our healthcare administration solutions? 
              We&apos;re here to help. Reach out and let&apos;s discuss how we can support your organization.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card padding="lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Level 10, Wisma UOA II<br />
                    21 Jalan Pinang<br />
                    50450 Kuala Lumpur<br />
                    Malaysia
                  </p>
                </div>
              </div>
            </Card>

            <Card padding="lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600 text-sm">+603-2166 2233</p>
                  <p className="text-gray-500 text-xs mt-1">Mon - Fri, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </Card>

            <Card padding="lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600 text-sm">info@emastpa.com.my</p>
                  <p className="text-gray-500 text-xs mt-1">We&apos;ll respond within 24 hours</p>
                </div>
              </div>
            </Card>

            <Card padding="lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card padding="lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Send us a Message</h2>
                  <p className="text-sm text-gray-500">Fill out the form below and we&apos;ll get back to you</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    label="Full Name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                  />
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    label="Company Name"
                    name="company"
                    placeholder="Your company (optional)"
                    value={formData.company}
                    onChange={handleChange}
                  />
                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="+60 12-345 6789 (optional)"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition-all duration-200"
                  >
                    {subjectOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 text-gray-900 bg-white border rounded-lg transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                      errors.message 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 inline mr-1 text-emerald-500" />
                    We respect your privacy
                  </p>
                  <Button type="submit" isLoading={isSubmitting} size="lg">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>

            {/* FAQ Section */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    q: 'How quickly can we get started?',
                    a: 'Implementation typically takes 2-4 weeks depending on your requirements.',
                  },
                  {
                    q: 'Do you offer a trial period?',
                    a: 'Yes, we offer a 30-day pilot program to evaluate our services.',
                  },
                  {
                    q: 'What support is included?',
                    a: '24/7 technical support and a dedicated account manager.',
                  },
                  {
                    q: 'Can you integrate with our systems?',
                    a: 'We support REST APIs and common healthcare integrations.',
                  },
                ].map((faq, index) => (
                  <Card key={index} padding="md" className="hover:shadow-md transition-shadow">
                    <h4 className="font-medium text-gray-900 mb-1">{faq.q}</h4>
                    <p className="text-sm text-gray-600">{faq.a}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
