import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

const Skeleton = ({ className, variant = 'text' }: SkeletonProps) => {
  const variants = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  return (
    <div
      className={cn(
        'animate-pulse bg-gray-200',
        variants[variant],
        className
      )}
    />
  );
};

// Pre-built skeleton patterns
const TableRowSkeleton = () => (
  <tr className="border-b border-gray-100">
    <td className="px-4 py-3"><Skeleton className="w-24" /></td>
    <td className="px-4 py-3"><Skeleton className="w-32" /></td>
    <td className="px-4 py-3"><Skeleton className="w-36" /></td>
    <td className="px-4 py-3"><Skeleton className="w-20" /></td>
    <td className="px-4 py-3"><Skeleton className="w-24" /></td>
    <td className="px-4 py-3"><Skeleton className="w-20 h-6 rounded-full" /></td>
  </tr>
);

const CardSkeleton = () => (
  <div className="bg-white rounded-xl border border-gray-100 p-5 space-y-3">
    <Skeleton className="w-1/3 h-5" />
    <Skeleton className="w-full h-8" />
    <Skeleton className="w-2/3 h-4" />
  </div>
);

const KPICardSkeleton = () => (
  <div className="bg-white rounded-xl border border-gray-100 p-5 space-y-3">
    <div className="flex items-center justify-between">
      <Skeleton className="w-24 h-4" />
      <Skeleton variant="circular" className="w-10 h-10" />
    </div>
    <Skeleton className="w-28 h-8" />
    <Skeleton className="w-20 h-4" />
  </div>
);

export { Skeleton, TableRowSkeleton, CardSkeleton, KPICardSkeleton };
