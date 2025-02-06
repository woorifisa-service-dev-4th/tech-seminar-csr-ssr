import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10); 
  const limit = parseInt(searchParams.get("limit") || "3", 10); 

  // Array of image paths
  const imagePaths = [
    "/images/1.PNG",
    "/images/3.PNG",
    "/images/4.PNG",
    "/images/5.PNG",
    "/images/6.PNG",
    "/images/7.PNG",
    "/images/8.PNG",
    "/images/9.PNG",
    "/images/2.PNG",
    "/images/10.PNG",
    "/images/11.PNG",
    "/images/12.PNG",
    "/images/13.PNG",
    "/images/14.PNG",
    "/images/15.PNG",
  ];


  const allShows = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    title: `트렌딩 쇼 ${i + 1}`,
    image: imagePaths[i % imagePaths.length],
   
  }));

  const startIndex = 0; 
  const endIndex = page * limit; 
  const paginatedShows = allShows.slice(startIndex, endIndex);

  await new Promise((resolve) => setTimeout(resolve, 2000)); 
  return NextResponse.json(paginatedShows);
}
