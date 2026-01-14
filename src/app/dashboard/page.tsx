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
        <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">💡 Business Insights</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-blue-100 text-sm mb-1">Pre-authorization Opportunity</p>
              <p className="text-white">
                Approval rate of {formatPercentage(kpis.approvalRate)} suggests room for 
                pre-authorization improvements to reduce downstream audit workload.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-blue-100 text-sm mb-1">Provider Concentration</p>
              <p className="text-white">
                Top 5 providers account for 42% of total cost. Targeted negotiations 
                could yield significant savings.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-blue-100 text-sm mb-1">Audit ROI</p>
              <p className="text-white">
                Estimated {formatPercentage(kpis.savingsRate)} savings ({formatCurrency(kpis.estimatedSavings)}) 
                demonstrates direct financial impact from audit workflows.
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
