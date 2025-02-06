export default function PostsSkeleton() {
    return (
        <div className="space-y-4">
            {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="border rounded-lg p-4 animate-pulse">
                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
            ))}
        </div>
    );
}