'use client';

import { useState } from 'react';
import { 
  FileText, 
  CheckCircle, 
  XCircle, 
  Clock, 
  TrendingUp,
  DollarSign,
  Download,
  RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui';
import { 
  KPICard, 
  ClaimsTable, 
  StatusChart, 
  TrendChart, 
  TopProvidersChart,
  ClaimDetailModal 
} from '@/components/dashboard';
import { Claim } from '@/types';
import { formatCurrency, formatPercentage } from '@/lib/utils';

// Import mock data
import claimsData from '@/data/claims.json';

export default function DashboardPage() {
  const [selectedClaim, setSelectedClaim] = useState<Claim | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { claims, kpis, trends, topProviders } = claimsData;

  const handleViewClaim = (claim: Claim) => {
    setSelectedClaim(claim);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Corporate Dashboard</h1>
              <p className="text-gray-500 mt-1">
                Real-time overview of claims and analytics
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4" />
                Refresh
              </Button>
              <Button variant="primary" size="sm">
                <Download className="h-4 w-4" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <KPICard
            title="Total Claims"
            value={kpis.totalClaims.toLocaleString()}
            subtitle="Last 30 days"
            icon={FileText}
            trend={{ value: 8.2, isPositive: true }}
            colorScheme="blue"
          />
          <KPICard
            title="Approval Rate"
            value={formatPercentage(kpis.approvalRate)}
            subtitle={`${kpis.approvedClaims} approved`}
            icon={CheckCircle}
            trend={{ value: 2.1, isPositive: true }}
            colorScheme="emerald"
          />
          <KPICard
            title="Average Claim"
            value={formatCurrency(kpis.averageClaimValue)}
            subtitle="Per submission"
            icon={DollarSign}
            trend={{ value: 1.5, isPositive: false }}
            colorScheme="purple"
          />
          <KPICard
            title="Estimated Savings"
            value={formatCurrency(kpis.estimatedSavings)}
            subtitle={`${kpis.savingsRate}% of total`}
            icon={TrendingUp}
            trend={{ value: 12.0, isPositive: true }}
            colorScheme="teal"
          />
        </div>

        {/* Secondary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <Clock className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending</p>
              <p className="text-lg font-semibold text-gray-900">{kpis.pendingClaims}</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <XCircle className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Rejected</p>
              <p className="text-lg font-semibold text-gray-900">{kpis.rejectedClaims}</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Claimed</p>
              <p className="text-lg font-semibold text-gray-900">
                {formatCurrency(kpis.totalClaimedAmount)}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Approved</p>
              <p className="text-lg font-semibold text-gray-900">{kpis.approvedClaims}</p>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <TrendChart data={trends} />
          </div>
          <div>
            <StatusChart 
              data={{
                approved: kpis.approvedClaims,
                rejected: kpis.rejectedClaims,
                pending: kpis.pendingClaims,
              }} 
            />
          </div>
        </div>

        {/* Top Providers Chart */}
        <div className="mb-8">
          <TopProvidersChart data={topProviders} />
        </div>

        {/* Claims Table */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Claims</h2>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          <ClaimsTable 
            claims={claims as Claim[]} 
            onViewClaim={handleViewClaim}
          />
        </div>

        {/* Business Insights Section */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span className="text-2xl">💡</span> Business Insights
            </h3>
            <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">
              AI-Generated
            </span>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                <p className="text-amber-400 text-sm font-medium">Action Required</p>
              </div>
              <p className="text-white text-sm leading-relaxed">
                <strong>{kpis.pendingClaims} claims pending</strong> — Average processing time is 2.3 days. 
                Focus on high-value claims (above RM 5,000) to improve turnaround.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <p className="text-emerald-400 text-sm font-medium">Savings Opportunity</p>
              </div>
              <p className="text-white text-sm leading-relaxed">
                Top 5 providers = <strong>42% of total cost</strong>. Renegotiating rates with 
                Provider Hospital A alone could save an estimated RM 25K/month.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <p className="text-blue-400 text-sm font-medium">Performance Metric</p>
              </div>
              <p className="text-white text-sm leading-relaxed">
                Approval rate <strong>{formatPercentage(kpis.approvalRate)}</strong> is above industry 
                benchmark (68%). Audit workflows saved {formatCurrency(kpis.estimatedSavings)} this period.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Claim Detail Modal */}
      <ClaimDetailModal
        claim={selectedClaim}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedClaim(null);
        }}
      />
    </div>
  );
}
