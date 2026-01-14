import { Claim } from '@/types';
import { Badge } from '@/components/ui';
import { formatCurrency, formatDate } from '@/lib/utils';
import { X, Calendar, Building2, User, FileText, DollarSign } from 'lucide-react';

interface ClaimDetailModalProps {
  claim: Claim | null;
  isOpen: boolean;
  onClose: () => void;
}

const ClaimDetailModal = ({ claim, isOpen, onClose }: ClaimDetailModalProps) => {
  if (!isOpen || !claim) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-lg bg-white rounded-xl shadow-xl animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Claim Details</h2>
            <p className="text-sm text-gray-500">{claim.id}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Status Banner */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium text-gray-600">Status</span>
            <Badge variant="status" status={claim.status} className="text-sm px-3 py-1">
              {claim.status}
            </Badge>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-gray-500">
                <User className="h-4 w-4" />
                <span className="text-xs uppercase tracking-wide">Patient</span>
              </div>
              <p className="font-medium text-gray-900">{claim.patientName}</p>
              <p className="text-sm text-gray-500">{claim.patientId}</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-gray-500">
                <Building2 className="h-4 w-4" />
                <span className="text-xs uppercase tracking-wide">Provider</span>
              </div>
              <p className="font-medium text-gray-900">{claim.provider}</p>
              <Badge variant="provider" status={claim.providerType} className="mt-1">
                {claim.providerType}
              </Badge>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-gray-500">
                <DollarSign className="h-4 w-4" />
                <span className="text-xs uppercase tracking-wide">Amount</span>
              </div>
              <p className="font-semibold text-gray-900 text-lg">
                {formatCurrency(claim.amount)}
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-gray-500">
                <Calendar className="h-4 w-4" />
                <span className="text-xs uppercase tracking-wide">Submitted</span>
              </div>
              <p className="font-medium text-gray-900">
                {formatDate(claim.submittedDate)}
              </p>
              {claim.processedDate && (
                <p className="text-sm text-gray-500">
                  Processed: {formatDate(claim.processedDate)}
                </p>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-500">
              <FileText className="h-4 w-4" />
              <span className="text-xs uppercase tracking-wide">Description</span>
            </div>
            <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">
              {claim.description}
            </p>
          </div>

          {/* Diagnosis Code */}
          {claim.diagnosisCode && (
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm text-blue-700">ICD-10 Code</span>
              <span className="font-mono font-medium text-blue-900">
                {claim.diagnosisCode}
              </span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Close
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export { ClaimDetailModal };
