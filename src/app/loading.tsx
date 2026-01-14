export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header skeleton */}
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="h-8 w-32 bg-gray-200 rounded-lg animate-pulse" />
          <div className="flex gap-4">
            <div className="h-8 w-20 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-8 w-20 bg-gray-200 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                <div className="h-10 w-10 bg-gray-200 rounded-xl animate-pulse" />
              </div>
              <div className="h-8 w-20 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-3 w-32 bg-gray-100 rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* Charts skeleton */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mb-6" />
            <div className="h-64 bg-gradient-to-b from-gray-100 to-gray-50 rounded-lg animate-pulse" />
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="h-5 w-28 bg-gray-200 rounded animate-pulse mb-6" />
            <div className="h-64 bg-gradient-to-b from-gray-100 to-gray-50 rounded-lg animate-pulse" />
          </div>
        </div>

        {/* Table skeleton */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="h-6 w-40 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="divide-y divide-gray-100">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="px-6 py-4 flex items-center gap-4">
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-40 bg-gray-100 rounded animate-pulse flex-1" />
                <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
