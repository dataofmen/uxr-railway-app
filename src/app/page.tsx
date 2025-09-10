'use client';

import UXResearchDesignTool from '@/components/UXResearchDesignTool';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          UX 리서치 설계 문서 생성기
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI 기반 가이드로 체계적이고 전문적인 UX 리서치 계획을 수립하세요. 
          학술적 엄격성을 바탕으로 한 방법론 추천과 이해관계자 방어 전략을 제공합니다.
        </p>
        <div className="mt-6 flex justify-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            100+ 학술 논문 기반
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            AI 추천 시스템
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            즉시 문서 생성
          </div>
        </div>
      </div>
      
      <UXResearchDesignTool />
    </div>
  );
}