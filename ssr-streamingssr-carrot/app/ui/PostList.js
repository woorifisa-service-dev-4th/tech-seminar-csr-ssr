import { getPostsList } from "@/app/lib/getData";

export default async function PostList() {
    const posts = await getPostsList();

    return (
        <div className="space-y-4">
            {posts.map(post => (
                <article key={post.id} className="border rounded-lg p-4">
                    <h2 className="text-lg font-semibold">{post.title}</h2>
                    <p className="text-gray-600 mt-2">{post.content}</p>
                    <div className="flex items-center mt-4 text-sm text-gray-500">
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                        <span className="mx-2">•</span>
                        <span>좋아요 {post.likes}</span>
                        <span className="mx-2">•</span>
                        <span>댓글 {post.comments}</span>
                    </div>
                </article>
            ))}
        </div>
    );
}