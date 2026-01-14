'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Claim } from '@/types';
import { Badge, Input, Select, Button } from '@/components/ui';
import { formatCurrency, formatDate } from '@/lib/utils';
import { Search, ChevronUp, ChevronDown, Eye, FileText, Download } from 'lucide-react';

interface ClaimsTableProps {
  claims: Claim[];
  onViewClaim?: (claim: Claim) => void;
}

type SortField = 'id' | 'patientName' | 'amount' | 'submittedDate' | 'status';
type SortDirection = 'asc' | 'desc';

const ClaimsTable = ({ claims, onViewClaim }: ClaimsTableProps) => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortField, setSortField] = useState<SortField>('submittedDate');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Approved', label: 'Approved' },
    { value: 'Rejected', label: 'Rejected' },
  ];

  const filteredAndSortedClaims = useMemo(() => {
    let result = [...claims];

    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        (claim) =>
          claim.id.toLowerCase().includes(searchLower) ||
          claim.patientName.toLowerCase().includes(searchLower) ||
          claim.provider.toLowerCase().includes(searchLower)
      );
    }

    // Filter by status
    if (statusFilter !== 'all') {
      result = result.filter((claim) => claim.status === statusFilter);
    }

    // Sort
    result.sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case 'id':
          comparison = a.id.localeCompare(b.id);
          break;
        case 'patientName':
          comparison = a.patientName.localeCompare(b.patientName);
          break;
        case 'amount':
          comparison = a.amount - b.amount;
          break;
        case 'submittedDate':
          comparison = new Date(a.submittedDate).getTime() - new Date(b.submittedDate).getTime();
          break;
        case 'status':
          comparison = a.status.localeCompare(b.status);
          break;
      }
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [claims, search, statusFilter, sortField, sortDirection]);

  const paginatedClaims = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedClaims.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedClaims, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedClaims.length / itemsPerPage);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? (
      <ChevronUp className="h-4 w-4" />
    ) : (
      <ChevronDown className="h-4 w-4" />
    );
  };

  const exportToCSV = () => {
    const headers = ['Claim ID', 'Patient', 'Provider', 'Amount (RM)', 'Status', 'Submitted Date', 'Description'];
    const rows = filteredAndSortedClaims.map(claim => [
      claim.id,
      claim.patientName,
      claim.provider,
      claim.amount.toString(),
      claim.status,
      claim.submittedDate,
      claim.description || ''
    ]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `claims_export_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      {/* Table Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search by ID, patient, or provider..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              leftIcon={<Search className="h-5 w-5" />}
            />
          </div>
          <div className="w-full sm:w-48">
            <Select
              options={statusOptions}
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          <Button variant="outline" onClick={exportToCSV} className="whitespace-nowrap">
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th
                className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('id')}
              >
                <div className="flex items-center gap-1">
                  Claim ID
                  <SortIcon field="id" />
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('patientName')}
              >
                <div className="flex items-center gap-1">
                  Patient
                  <SortIcon field="patientName" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Provider
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('amount')}
              >
                <div className="flex items-center gap-1">
                  Amount
                  <SortIcon field="amount" />
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('submittedDate')}
              >
                <div className="flex items-center gap-1">
                  Date
                  <SortIcon field="submittedDate" />
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('status')}
              >
                <div className="flex items-center gap-1">
                  Status
                  <SortIcon field="status" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {paginatedClaims.length > 0 ? (
              paginatedClaims.map((claim) => (
                <tr
                  key={claim.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gray-400" />
                      <span className="font-medium text-gray-900 text-sm">
                        {claim.id}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium text-gray-900 text-sm">
                        {claim.patientName}
                      </p>
                      <p className="text-xs text-gray-500">{claim.patientId}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div>
                      <p className="text-sm text-gray-900">{claim.provider}</p>
                      <Badge variant="provider" status={claim.providerType} className="mt-1">
                        {claim.providerType}
                      </Badge>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(claim.amount)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-gray-600">
                      {formatDate(claim.submittedDate)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant="status" status={claim.status}>
                      {claim.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => onViewClaim?.(claim)}
                      className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      aria-label={`View claim ${claim.id}`}
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-4 py-12 text-center">
                  <div className="flex flex-col items-center max-w-sm mx-auto">
                    <div className="relative w-48 h-48 mb-4">
                      <Image
                        src="/images/empty-state-no-data.png"
                        alt="No claims found - illustration of empty search results"
                        fill
                        className="object-contain opacity-90"
                      />
                    </div>
                    <p className="text-gray-700 font-medium text-lg">No claims match your criteria</p>
                    <p className="text-sm text-gray-500 mt-2 text-center">
                      {search && statusFilter !== 'all' 
                        ? `No results for "${search}" with status "${statusFilter}"`
                        : search 
                        ? `No results found for "${search}"`
                        : statusFilter !== 'all'
                        ? `No ${statusFilter.toLowerCase()} claims at this time`
                        : 'Try adjusting your search or filter criteria'}
                    </p>
                    {(search || statusFilter !== 'all') && (
                      <button
                        onClick={() => { setSearch(''); setStatusFilter('all'); }}
                        className="mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Clear all filters
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing {((currentPage - 1) * itemsPerPage) + 1} to{' '}
            {Math.min(currentPage * itemsPerPage, filteredAndSortedClaims.length)} of{' '}
            {filteredAndSortedClaims.length} claims
          </p>
          <div className="flex gap-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { ClaimsTable };
