import { Suspense } from 'react';
import PostList from '../../ui/PostList';
import PopularPostsSkeleton from '../../ui/PopularPostsSkeleton';
import PopularPosts from '../../ui/PopularPosts';
import KarrotHeader from '../../ui/Header';
import PostsSkeleton from '@/app/ui/PostsSkeleton';


export default function StreamingCommunityPage() {
    return (
        <>
        <KarrotHeader/>
        <div className="p-4 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">동네생활 (Streaming SSR)</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-3">
                    <Suspense fallback={<PostsSkeleton />}>
                        <PostList />
                    </Suspense>
                </div>
                <div className="md:col-span-1">
                    <div className="sticky top-4">
                        <Suspense fallback={<PopularPostsSkeleton />}>
                            <PopularPosts />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

