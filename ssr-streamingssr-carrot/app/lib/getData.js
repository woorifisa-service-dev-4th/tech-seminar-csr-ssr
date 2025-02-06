export async function getPopularPosts() {
    // 인기글은 빠르게 로드되도록 0.5초 지연
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return Array.from({ length: 5 }, (_, i) => ({
      id: `popular-${i + 1}`,
      title: `🔥 인기글 ${i + 1}`,
      likes: Math.floor(Math.random() * 500 + 300),
      comments: Math.floor(Math.random() * 100 + 50),
      views: Math.floor(Math.random() * 1000 + 500),
    }));
  }
  
  export async function getPostsList() {
    // 일반 게시글은 2초 지연
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      title: `동내생활 게시글 ${i + 1}`,
      content: `이것은 ${i + 1}번째 게시글의 내용입니다.`,
      author: `이웃${i + 1}`,
      likes: Math.floor(Math.random() * 100),
      comments: Math.floor(Math.random() * 50),
      createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString()
    }));
  }