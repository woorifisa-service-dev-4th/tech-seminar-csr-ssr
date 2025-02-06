import { getPopularPosts } from "../lib/getData";

export default async function PopularPosts() {
    const popularPosts = await getPopularPosts();

    return (
        <div className="bg-orange-50 rounded-lg p-4">
            <h2 className="text-lg font-bold mb-4">🏆 실시간 인기글</h2>
            <div className="space-y-3">
                {popularPosts.map(post => (
                    <div key={post.id} className="bg-white rounded-lg p-3 shadow-sm">
                        <h3 className="font-medium mb-2">{post.title}</h3>
                        <div className="flex text-sm text-gray-500 space-x-3">
                            <span>👍 {post.likes}</span>
                            <span>💬 {post.comments}</span>
                            <span>👀 {post.views}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}