'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Card, Input, Select, Badge, Button } from '@/components/ui';
import { Provider } from '@/types';
import { 
  Search, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink,
  Building2,
  Stethoscope,
  Heart,
  Star,
  Grid3X3,
  List
} from 'lucide-react';

// Import mock data
import providersData from '@/data/providers.json';

export default function ProvidersPage() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [stateFilter, setStateFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const providers = providersData.providers as Provider[];

  const typeOptions = [
    { value: 'all', label: 'All Types' },
    { value: 'Hospital', label: 'Hospital' },
    { value: 'Clinic', label: 'Clinic' },
    { value: 'Specialist', label: 'Specialist' },
  ];

  const stateOptions = useMemo(() => {
    const states = [...new Set(providers.map(p => p.state))];
    return [
      { value: 'all', label: 'All Locations' },
      ...states.map(state => ({ value: state, label: state })),
    ];
  }, [providers]);

  const filteredProviders = useMemo(() => {
    let result = [...providers];

    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        (provider) =>
          provider.name.toLowerCase().includes(searchLower) ||
          provider.city.toLowerCase().includes(searchLower) ||
          provider.specialties?.some(s => s.toLowerCase().includes(searchLower))
      );
    }

    if (typeFilter !== 'all') {
      result = result.filter((provider) => provider.type === typeFilter);
    }

    if (stateFilter !== 'all') {
      result = result.filter((provider) => provider.state === stateFilter);
    }

    return result;
  }, [providers, search, typeFilter, stateFilter]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Hospital':
        return Building2;
      case 'Clinic':
        return Heart;
      case 'Specialist':
        return Stethoscope;
      default:
        return Building2;
    }
  };

  const openGoogleMaps = (provider: Provider) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(provider.name + ' ' + provider.address)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Provider Network</h1>
              <p className="text-gray-500 mt-1">
                Find healthcare providers in our nationwide panel
              </p>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-white shadow-sm text-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                aria-label="Grid view"
              >
                <Grid3X3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-white shadow-sm text-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                aria-label="List view"
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-100 p-4 mb-6">
          <div className="grid sm:grid-cols-3 gap-4">
            <Input
              placeholder="Search providers, cities, or specialties..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              leftIcon={<Search className="h-5 w-5" />}
            />
            <Select
              options={typeOptions}
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            />
            <Select
              options={stateOptions}
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-500">
            Showing <span className="font-medium text-gray-900">{filteredProviders.length}</span> providers
          </p>
        </div>

        {/* Providers Grid/List */}
        {filteredProviders.length > 0 ? (
          viewMode === 'grid' ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders.map((provider) => {
                const TypeIcon = getTypeIcon(provider.type);
                return (
                  <Card 
                    key={provider.id} 
                    className="group" 
                    hover 
                    padding="none"
                  >
                    {/* Card Header */}
                    <div className="p-5 border-b border-gray-100">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            provider.type === 'Hospital' 
                              ? 'bg-blue-100' 
                              : provider.type === 'Clinic' 
                                ? 'bg-teal-100' 
                                : 'bg-purple-100'
                          }`}>
                            <TypeIcon className={`h-6 w-6 ${
                              provider.type === 'Hospital' 
                                ? 'text-blue-600' 
                                : provider.type === 'Clinic' 
                                  ? 'text-teal-600' 
                                  : 'text-purple-600'
                            }`} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {provider.name}
                            </h3>
                            <Badge variant="provider" status={provider.type} className="mt-1">
                              {provider.type}
                            </Badge>
                          </div>
                        </div>
                        {provider.rating && (
                          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
                            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                            <span className="text-sm font-medium text-amber-700">{provider.rating}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-3">
                      <div className="flex items-start gap-3 text-gray-600">
                        <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <p>{provider.address}</p>
                          <p>{provider.city}, {provider.state}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        <span className="text-sm">{provider.phone}</span>
                      </div>
                      {provider.specialties && provider.specialties.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-2">
                          {provider.specialties.slice(0, 3).map((specialty, i) => (
                            <span 
                              key={i}
                              className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                          {provider.specialties.length > 3 && (
                            <span className="px-2 py-0.5 text-gray-500 text-xs">
                              +{provider.specialties.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Card Footer */}
                    <div className="px-5 py-3 border-t border-gray-100 bg-gray-50/50">
                      <button
                        onClick={() => openGoogleMaps(provider)}
                        className="w-full flex items-center justify-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View on Map
                      </button>
                    </div>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="space-y-3">
              {filteredProviders.map((provider) => {
                const TypeIcon = getTypeIcon(provider.type);
                return (
                  <div 
                    key={provider.id}
                    className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        provider.type === 'Hospital' 
                          ? 'bg-blue-100' 
                          : provider.type === 'Clinic' 
                            ? 'bg-teal-100' 
                            : 'bg-purple-100'
                      }`}>
                        <TypeIcon className={`h-6 w-6 ${
                          provider.type === 'Hospital' 
                            ? 'text-blue-600' 
                            : provider.type === 'Clinic' 
                              ? 'text-teal-600' 
                              : 'text-purple-600'
                        }`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-900 truncate">
                            {provider.name}
                          </h3>
                          <Badge variant="provider" status={provider.type}>
                            {provider.type}
                          </Badge>
                          {provider.rating && (
                            <div className="flex items-center gap-1 ml-2">
                              <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                              <span className="text-sm font-medium text-amber-700">{provider.rating}</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {provider.city}, {provider.state}
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="h-4 w-4" />
                            {provider.phone}
                          </span>
                        </div>
                      </div>

                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => openGoogleMaps(provider)}
                      >
                        <MapPin className="h-4 w-4" />
                        Map
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )
        ) : (
          <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/images/empty-state-no-data.png"
                alt="No providers found - illustration of empty search results"
                fill
                className="object-contain opacity-90"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No providers found</h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search or filter criteria
            </p>
            <Button 
              variant="outline"
              onClick={() => {
                setSearch('');
                setTypeFilter('all');
                setStateFilter('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Provider Stats */}
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Building2 className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {providers.filter(p => p.type === 'Hospital').length}
                </p>
                <p className="text-sm text-gray-500">Hospitals</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {providers.filter(p => p.type === 'Clinic').length}
                </p>
                <p className="text-sm text-gray-500">Clinics</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Stethoscope className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {providers.filter(p => p.type === 'Specialist').length}
                </p>
                <p className="text-sm text-gray-500">Specialists</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
