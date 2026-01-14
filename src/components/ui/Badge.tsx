import { HTMLAttributes, forwardRef } from 'react';
import { cn, getStatusColor, getProviderTypeColor } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'status' | 'provider';
  status?: string;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', status, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors';
    
    let variantStyles = 'bg-gray-100 text-gray-800 border-gray-200';
    
    if (variant === 'status' && status) {
      variantStyles = getStatusColor(status);
    } else if (variant === 'provider' && status) {
      variantStyles = getProviderTypeColor(status);
    }

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variantStyles, className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
