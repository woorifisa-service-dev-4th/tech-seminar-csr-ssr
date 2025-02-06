import KarrotHeader from "../../ui/Header";
import PostList from "@/app/ui/PostList";
import PopularPosts from "@/app/ui/PopularPosts";

export default async function StaticCommunityPage() {

    return (
        <>
        <KarrotHeader/>
        <div className="p-4 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">동네생활 (Static SSR)</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-3">
                    <PostList />
                </div>
                <div className="md:col-span-1">
                    <div className="sticky top-4">
                        <PopularPosts/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}