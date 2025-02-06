
import Link from "next/link";


export default function Home() {
  return (
    <main className="p-4">
    <img src="/carrotlogo.svg" alt="당근마켓" className="max-w-1/2 p-8" />
    <div className="space-y-4">
      <Link 
        href="/community/static" 
        className="block p-4 border rounded hover:bg-orange-50"
      >
        Static SSR 동내생활
      </Link>
      <Link 
        href="/community/streaming" 
        className="block p-4 border rounded hover:bg-orange-50"
      >
        Streaming SSR 동내생활
      </Link>
    </div>
  </main>
);
  
}
