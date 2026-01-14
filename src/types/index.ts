// Core data types for e-MAS Portal Demo

export type ClaimStatus = 'Pending' | 'Approved' | 'Rejected';
export type ProviderType = 'Hospital' | 'Clinic' | 'Specialist';

export interface Claim {
  id: string;
  patientName: string;
  patientId: string;
  provider: string;
  providerType: ProviderType;
  amount: number;
  status: ClaimStatus;
  submittedDate: string;
  processedDate?: string;
  description: string;
  diagnosisCode?: string;
}

export interface Provider {
  id: string;
  name: string;
  type: ProviderType;
  address: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  specialties?: string[];
  rating?: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface DashboardKPIs {
  totalClaims: number;
  approvedClaims: number;
  rejectedClaims: number;
  pendingClaims: number;
  totalClaimedAmount: number;
  averageClaimValue: number;
  approvalRate: number;
  estimatedSavings: number;
  savingsRate: number;
}

export interface ClaimTrend {
  date: string;
  claims: number;
  amount: number;
}

export interface ProviderCost {
  name: string;
  totalCost: number;
  claimCount: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export interface PatientAccount {
  id: string;
  name: string;
  email: string;
  memberSince: string;
  balance: number;
  policyNumber: string;
  coverageType: string;
  recentClaims: Claim[];
}
