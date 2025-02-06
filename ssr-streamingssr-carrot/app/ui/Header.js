import { Bell, ChevronDown, Menu, Search } from 'lucide-react';
import React from 'react';


export default function KarrotHeader() {
  return (
    <header className="border-b">
      {/* Top banner */}
      <div className="bg-orange-500 text-white text-center py-2 text-sm">
        지금 당근마켓 앱을 설치해보세요! 새로운 이웃과 함께해요 🥕
      </div>
      
      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
          <div className="flex items-center space-x-8">
          <div className="flex items-center">
              <img src="/carrotlogo.svg" alt="당근마켓" className="max-w-1/2" />
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-900">중고거래</a>
              <a href="#" className="text-gray-900 font-semibold">동네생활</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">알바</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">부동산 직거래</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">중고차 직거래</a>
            </nav>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="물품이나 동네를 검색해보세요"
                  className="w-64 pl-10 pr-4 py-2 border rounded-md text-sm"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
              
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Menu className="h-5 w-5 text-gray-600" />
              </button>
              
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <span>역삼동</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Sub navigation */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-6 h-12 text-sm">
            <a href="#" className="text-gray-900 font-semibold">동네질문</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">동네맛집</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">동네소식</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">동네맘</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">해주세요</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">분실/실종센터</a>
          </div>
        </div>
      </div>
    </header>
  );
};

