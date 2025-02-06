export default function PopularPostsSkeleton() {
    return (
      <div className="bg-orange-50 rounded-lg p-4">
        <h2 className="text-lg font-bold mb-4">🏆 실시간 인기글</h2>
        <div className="space-y-3">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="bg-white rounded-lg p-3 shadow-sm animate-pulse">
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="flex space-x-3">
                <div className="h-4 bg-gray-200 rounded w-16"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  