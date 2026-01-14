'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ProviderCost } from '@/types';
import { formatCurrency } from '@/lib/utils';

interface TopProvidersChartProps {
  data: ProviderCost[];
}

const TopProvidersChart = ({ data }: TopProvidersChartProps) => {
  const colors = ['#0066cc', '#0077dd', '#0088ee', '#0099ff', '#00aaff'];

  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ payload: ProviderCost }> }) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      return (
        <div className="bg-white px-4 py-3 shadow-lg rounded-lg border border-gray-100">
          <p className="text-sm font-medium text-gray-900">{item.name}</p>
          <p className="text-sm text-gray-600">Total: {formatCurrency(item.totalCost)}</p>
          <p className="text-sm text-gray-600">Claims: {item.claimCount}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Providers by Cost</h3>
      <div style={{ width: '100%', height: 256 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data} 
            layout="vertical"
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={true} vertical={false} />
            <XAxis 
              type="number"
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
              tick={{ fontSize: 12, fill: '#6b7280' }}
              tickLine={false}
              axisLine={{ stroke: '#e5e7eb' }}
            />
            <YAxis 
              type="category"
              dataKey="name"
              tick={{ fontSize: 12, fill: '#6b7280' }}
              tickLine={false}
              axisLine={false}
              width={100}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} />
            <Bar 
              dataKey="totalCost" 
              radius={[0, 4, 4, 0]}
              animationDuration={800}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Total from top 5</span>
          <span className="font-semibold text-gray-900">
            {formatCurrency(data.reduce((sum, p) => sum + p.totalCost, 0))}
          </span>
        </div>
      </div>
    </div>
  );
};

export { TopProvidersChart };
