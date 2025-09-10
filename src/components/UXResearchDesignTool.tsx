'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, AlertCircle, FileText, Users, Target, BarChart, HelpCircle, Lightbulb, Clock, DollarSign } from 'lucide-react';

interface ResearchData {
  projectName: string;
  projectType: string;
  currentPhase: string;
  stakeholders: string;
  researchPurpose: string;
  businessProblem: string;
  userProblem: string;
  researchQuestions: string[];
  hypothesis: string[];
  successMetrics: string;
  targetUser: string;
  userSegments: string;
  recruitmentCriteria: string;
  timeline: string;
  budget: string;
  resources: string;
  limitations: string;
  selectedMethods: string[];
  methodRationale: string;
  designDetails: {
    participants: string;
    recruitmentMethod: string;
    duration: string;
    schedule: string;
    tools: string;
    location: string;
    dataCollection: string;
    analysisMethod: string;
    deliverables: string;
    risks: string;
  };
}

interface ResearchMethod {
  id: string;
  name: string;
  description: string;
  bestFor: string[];
  notGoodFor: string[];
  timeframe: string;
  participants: string;
  cost: string;
  skills: string[];
  deliverables: string[];
}

interface ContextualQuestion {
  id: string;
  question: string;
  show: boolean;
  type: string;
  followUp: string;
}

const UXResearchDesignTool = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showQuestions, setShowQuestions] = useState<Record<string, boolean>>({});
  const [researchData, setResearchData] = useState<ResearchData>({
    projectName: '',
    projectType: '',
    currentPhase: '',
    stakeholders: '',
    researchPurpose: '',
    businessProblem: '',
    userProblem: '',
    researchQuestions: [''],
    hypothesis: [''],
    successMetrics: '',
    targetUser: '',
    userSegments: '',
    recruitmentCriteria: '',
    timeline: '',
    budget: '',
    resources: '',
    limitations: '',
    selectedMethods: [],
    methodRationale: '',
    designDetails: {
      participants: '',
      recruitmentMethod: '',
      duration: '',
      schedule: '',
      tools: '',
      location: '',
      dataCollection: '',
      analysisMethod: '',
      deliverables: '',
      risks: ''
    }
  });

  const steps = [
    { title: '프로젝트 이해', icon: Target, description: '프로젝트 맥락과 배경 파악' },
    { title: '문제 정의', icon: AlertCircle, description: '해결하고자 하는 문제 명확화' },
    { title: '리서치 설계', icon: BarChart, description: '적절한 조사 방법 선택' },
    { title: '실행 계획', icon: Users, description: '구체적인 실행 방안 수립' },
    { title: '문서 완성', icon: FileText, description: '최종 설계 문서 생성' }
  ];

  const getContextualQuestions = (step: number, data: ResearchData): ContextualQuestion[] => {
    switch (step) {
      case 0:
        return [
          {
            id: 'project-clarity',
            question: '이 프로젝트의 최종 목표가 명확하게 정의되어 있나요?',
            show: !data.projectName,
            type: 'clarification',
            followUp: '구체적으로 어떤 제품/서비스에 대한 리서치인지 설명해주세요.'
          },
          {
            id: 'stakeholder-alignment',
            question: '주요 이해관계자들이 이 리서치의 필요성에 동의하고 있나요?',
            show: !!data.projectName && !data.stakeholders,
            type: 'concern',
            followUp: '누가 이 리서치 결과를 사용할 예정인지 명시해주세요.'
          }
        ];
      case 1:
        return [
          {
            id: 'problem-evidence',
            question: '현재 문제가 실제로 존재한다는 증거가 있나요?',
            show: !!data.businessProblem && !data.userProblem,
            type: 'validation',
            followUp: '사용자 데이터, 고객 피드백, 분석 결과 등이 있다면 공유해주세요.'
          },
          {
            id: 'assumption-check',
            question: '현재 가설이 팀의 추측에 기반한 것은 아닌가요?',
            show: data.hypothesis.some(h => h.trim()),
            type: 'challenge',
            followUp: '가설의 근거나 기존 데이터가 있다면 알려주세요.'
          }
        ];
      default:
        return [];
    }
  };

  const researchMethods: ResearchMethod[] = [
    {
      id: 'user-interview',
      name: '사용자 심층 인터뷰',
      description: '1:1 대화를 통한 깊이 있는 사용자 이해',
      bestFor: ['사용자 니즈 탐색', '동기와 감정 이해', '미충족 요구사항 발견'],
      notGoodFor: ['정량적 검증', '대규모 의견 수집'],
      timeframe: '2-4주',
      participants: '5-12명',
      cost: '중간',
      skills: ['인터뷰 진행', '질적 분석'],
      deliverables: ['사용자 여정맵', '페르소나', '인사이트 리포트']
    },
    {
      id: 'survey',
      name: '정량적 설문조사',
      description: '구조화된 질문을 통한 대규모 데이터 수집',
      bestFor: ['가설 검증', '선호도 측정', '시장 크기 파악'],
      notGoodFor: ['심층적 이해', '새로운 발견'],
      timeframe: '1-3주',
      participants: '100명 이상',
      cost: '낮음-중간',
      skills: ['설문 설계', '통계 분석'],
      deliverables: ['통계 리포트', '트렌드 분석', '세그멘테이션']
    },
    {
      id: 'usability-test',
      name: '사용성 테스트',
      description: '실제 사용 과정 관찰을 통한 문제점 발견',
      bestFor: ['UI/UX 문제 발견', '태스크 완료율 측정', '개선점 도출'],
      notGoodFor: ['컨셉 검증', '브랜드 인식'],
      timeframe: '1-2주',
      participants: '5-8명',
      cost: '중간',
      skills: ['테스트 설계', '행동 관찰'],
      deliverables: ['문제점 리스트', '개선 권장사항', '우선순위']
    },
    {
      id: 'field-study',
      name: '현장 관찰조사',
      description: '자연스러운 환경에서의 사용자 행동 관찰',
      bestFor: ['실제 사용 컨텍스트', '무의식적 행동', '환경적 요인'],
      notGoodFor: ['빠른 결과', '통제된 환경'],
      timeframe: '3-6주',
      participants: '8-15명',
      cost: '높음',
      skills: ['관찰 기법', '맥락적 분석'],
      deliverables: ['컨텍스트 맵', '행동 패턴', '환경 분석']
    },
    {
      id: 'card-sorting',
      name: '카드 소팅',
      description: '사용자의 정보 분류 체계 이해',
      bestFor: ['정보 구조 설계', '메뉴 체계', '분류 논리'],
      notGoodFor: ['감정적 반응', '사용성 문제'],
      timeframe: '1-2주',
      participants: '15-30명',
      cost: '낮음',
      skills: ['분류 분석', 'IA 설계'],
      deliverables: ['정보 구조도', '분류 체계', '네비게이션 권장사항']
    },
    {
      id: 'ab-test',
      name: 'A/B 테스트',
      description: '두 가지 안의 성과 비교를 통한 최적화',
      bestFor: ['디자인 검증', '전환율 개선', '정량적 비교'],
      notGoodFor: ['탐색적 연구', '정성적 피드백'],
      timeframe: '2-8주',
      participants: '수백-수천명',
      cost: '중간-높음',
      skills: ['실험 설계', '통계 분석'],
      deliverables: ['성과 비교', '최적 솔루션', '개선 효과']
    },
    {
      id: 'diary-study',
      name: '일기 연구',
      description: '장기간에 걸친 사용자 경험 추적',
      bestFor: ['장기 행동 패턴', '시간에 따른 변화', '일상적 사용'],
      notGoodFor: ['즉시 결과', '단기 프로젝트'],
      timeframe: '4-12주',
      participants: '10-20명',
      cost: '중간',
      skills: ['장기 연구 설계', '패턴 분석'],
      deliverables: ['행동 변화 추적', '사용 패턴', '장기 인사이트']
    }
  ];

  const getRecommendedMethods = (): string[] => {
    const { researchPurpose, projectType, currentPhase, timeline, budget } = researchData;
    const scores: Record<string, number> = {};
    
    researchMethods.forEach(method => {
      scores[method.id] = 0;
    });

    // 목적 기반 추천
    if (researchPurpose.includes('사용자 니즈') || researchPurpose.includes('동기')) {
      scores['user-interview'] += 3;
      scores['diary-study'] += 2;
    }
    if (researchPurpose.includes('사용성') || researchPurpose.includes('문제점')) {
      scores['usability-test'] += 3;
      scores['field-study'] += 2;
    }
    if (researchPurpose.includes('검증') || researchPurpose.includes('측정')) {
      scores['survey'] += 3;
      scores['ab-test'] += 2;
    }
    if (researchPurpose.includes('정보구조') || researchPurpose.includes('분류')) {
      scores['card-sorting'] += 3;
    }

    // 프로젝트 단계 기반 추천
    if (currentPhase === 'concept') {
      scores['user-interview'] += 2;
      scores['field-study'] += 2;
    } else if (currentPhase === 'design') {
      scores['usability-test'] += 2;
      scores['card-sorting'] += 2;
    } else if (currentPhase === 'validation') {
      scores['ab-test'] += 2;
      scores['survey'] += 1;
    }

    // 제약사항 기반 조정
    if (timeline === 'urgent') {
      scores['survey'] += 1;
      scores['usability-test'] += 1;
      scores['field-study'] -= 2;
      scores['diary-study'] -= 3;
    }
    if (budget === 'limited') {
      scores['survey'] += 1;
      scores['card-sorting'] += 1;
      scores['field-study'] -= 2;
    }

    return Object.entries(scores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([id]) => id);
  };

  const updateResearchData = (field: keyof ResearchData, value: any) => {
    setResearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateArrayField = (field: 'researchQuestions' | 'hypothesis', index: number, value: string) => {
    setResearchData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field: 'researchQuestions' | 'hypothesis') => {
    setResearchData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field: 'researchQuestions' | 'hypothesis', index: number) => {
    setResearchData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const toggleQuestion = (questionId: string) => {
    setShowQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const generateDetailedDocument = (): string => {
    const selectedMethodDetails = researchMethods.filter(method => 
      researchData.selectedMethods.includes(method.id)
    );

    return `# UX 리서치 설계 문서

## 📋 프로젝트 개요
**프로젝트명**: ${researchData.projectName}
**프로젝트 유형**: ${researchData.projectType}
**현재 단계**: ${researchData.currentPhase}
**작성일**: ${new Date().toLocaleDateString('ko-KR')}
**주요 이해관계자**: ${researchData.stakeholders}

---

## 🎯 리서치 목적 및 배경

### 해결하려는 비즈니스 문제
${researchData.businessProblem}

### 사용자 문제
${researchData.userProblem}

### 리서치 목적
${researchData.researchPurpose}

### 성공 지표
${researchData.successMetrics}

---

## ❓ 리서치 질문
${researchData.researchQuestions.map((q, i) => `${i + 1}. ${q}`).filter(q => q.trim() !== '1. ').join('\n')}

## 💡 가설
${researchData.hypothesis.map((h, i) => `${i + 1}. ${h}`).filter(h => h.trim() !== '1. ').join('\n')}

---

## 👥 타겟 사용자

### 주요 타겟
${researchData.targetUser}

### 사용자 세그먼트
${researchData.userSegments}

### 모집 기준
${researchData.recruitmentCriteria}

---

## 🔬 조사 방법론

### 선택된 방법
${selectedMethodDetails.map(method => `
#### ${method.name}
- **목적**: ${method.description}
- **적합한 상황**: ${method.bestFor.join(', ')}
- **예상 소요시간**: ${method.timeframe}
- **참가자 수**: ${method.participants}
- **예상 비용**: ${method.cost}
- **필요 역량**: ${method.skills.join(', ')}
- **결과물**: ${method.deliverables.join(', ')}
`).join('\n')}

### 방법 선택 근거
${researchData.methodRationale}

---

## 📅 실행 계획

### 전체 일정
${researchData.designDetails.schedule}

### 참가자 모집
- **모집 방법**: ${researchData.designDetails.recruitmentMethod}
- **참가자 수**: ${researchData.designDetails.participants}

### 조사 환경
- **장소/환경**: ${researchData.designDetails.location}
- **사용 도구**: ${researchData.designDetails.tools}

### 데이터 수집 및 분석
- **수집 방법**: ${researchData.designDetails.dataCollection}
- **분석 방법**: ${researchData.designDetails.analysisMethod}

---

## 📊 결과물 및 보고

### 예상 결과물
${researchData.designDetails.deliverables}

### 보고 계획
- 중간 보고: 조사 진행 상황 및 초기 발견사항
- 최종 보고: 상세 분석 결과 및 권장사항
- 실행 가이드: 구체적인 개선 방안

---

## ⚠️ 제약사항 및 위험요소

### 프로젝트 제약사항
- **일정**: ${researchData.timeline}
- **예산**: ${researchData.budget}
- **리소스**: ${researchData.resources}
- **기타 제한사항**: ${researchData.limitations}

### 예상 위험요소 및 대응방안
${researchData.designDetails.risks}

---

## 📈 후속 계획
- [ ] 이해관계자 검토 및 승인
- [ ] IRB 승인 (필요시)
- [ ] 참가자 모집 시작
- [ ] 조사 도구 및 가이드 준비
- [ ] 파일럿 테스트 실시
- [ ] 본 조사 진행
- [ ] 데이터 분석 및 보고서 작성
- [ ] 결과 공유 및 후속 액션 계획

---

**문서 버전**: 1.0
**최종 수정**: ${new Date().toLocaleDateString('ko-KR')}
**작성자**: UX 리서치 설계 도구

*이 문서는 프로젝트 진행에 따라 지속적으로 업데이트될 예정입니다.*`;
  };

  const renderStep = () => {
    const contextualQuestions = getContextualQuestions(currentStep, researchData);
    
    switch (currentStep) {
      case 0: // 프로젝트 이해
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-bold text-blue-800 mb-2">💭 시작하기 전에...</h2>
              <p className="text-blue-700">프로젝트의 맥락을 이해하는 것이 성공적인 리서치의 첫걸음입니다. 아래 질문들을 통해 명확하게 정의해보세요.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  프로젝트명 *
                </label>
                <input
                  type="text"
                  value={researchData.projectName}
                  onChange={(e) => updateResearchData('projectName', e.target.value)}
                  className="form-input"
                  placeholder="예: 모바일 쇼핑앱 결제 프로세스 개선"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  프로젝트 유형 *
                </label>
                <select
                  value={researchData.projectType}
                  onChange={(e) => updateResearchData('projectType', e.target.value)}
                  className="form-select"
                >
                  <option value="">선택하세요</option>
                  <option value="new-product">신제품 개발</option>
                  <option value="feature-improvement">기능 개선</option>
                  <option value="user-research">사용자 조사</option>
                  <option value="market-research">시장 조사</option>
                  <option value="competitive-analysis">경쟁사 분석</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  현재 프로젝트 단계 *
                </label>
                <select
                  value={researchData.currentPhase}
                  onChange={(e) => updateResearchData('currentPhase', e.target.value)}
                  className="form-select"
                >
                  <option value="">선택하세요</option>
                  <option value="concept">컨셉 단계</option>
                  <option value="design">설계 단계</option>
                  <option value="development">개발 단계</option>
                  <option value="validation">검증 단계</option>
                  <option value="optimization">최적화 단계</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  주요 이해관계자 *
                </label>
                <input
                  type="text"
                  value={researchData.stakeholders}
                  onChange={(e) => updateResearchData('stakeholders', e.target.value)}
                  className="form-input"
                  placeholder="예: 제품팀, 개발팀, 마케팅팀, CEO"
                />
              </div>
            </div>

            {/* 제약사항 */}
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-3">⏰ 프로젝트 제약사항</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">일정</label>
                  <select
                    value={researchData.timeline}
                    onChange={(e) => updateResearchData('timeline', e.target.value)}
                    className="form-select"
                  >
                    <option value="">선택하세요</option>
                    <option value="urgent">긴급 (1-2주)</option>
                    <option value="normal">보통 (3-4주)</option>
                    <option value="flexible">여유 (5주 이상)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">예산</label>
                  <select
                    value={researchData.budget}
                    onChange={(e) => updateResearchData('budget', e.target.value)}
                    className="form-select"
                  >
                    <option value="">선택하세요</option>
                    <option value="limited">제한적</option>
                    <option value="moderate">보통</option>
                    <option value="sufficient">충분</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">리소스</label>
                  <select
                    value={researchData.resources}
                    onChange={(e) => updateResearchData('resources', e.target.value)}
                    className="form-select"
                  >
                    <option value="">선택하세요</option>
                    <option value="solo">혼자</option>
                    <option value="small-team">소규모 팀</option>
                    <option value="dedicated-team">전담 팀</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 동적 질문 표시 */}
            {contextualQuestions.map(question => (
              <div key={question.id} className={`border-l-4 pl-4 py-3 ${
                question.type === 'concern' ? 'border-red-400 bg-red-50' :
                question.type === 'clarification' ? 'border-yellow-400 bg-yellow-50' :
                'border-blue-400 bg-blue-50'
              }`}>
                <div className="flex items-start">
                  <HelpCircle className="w-5 h-5 mt-1 mr-2 text-gray-600" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{question.question}</p>
                    <button
                      onClick={() => toggleQuestion(question.id)}
                      className="text-sm text-gray-600 hover:text-gray-800 mt-1"
                    >
                      {showQuestions[question.id] ? '접기' : '도움말 보기'}
                    </button>
                    {showQuestions[question.id] && (
                      <div className="mt-2 text-sm text-gray-700 bg-white p-3 rounded border">
                        {question.followUp}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 1: // 문제 정의
        return (
          <div className="space-y-6">
            <div className="bg-orange-50 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-bold text-orange-800 mb-2">🎯 문제를 명확히 정의해보세요</h2>
              <p className="text-orange-700">구체적이고 측정 가능한 문제 정의가 효과적인 리서치로 이어집니다.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                비즈니스 문제 *
              </label>
              <textarea
                value={researchData.businessProblem}
                onChange={(e) => updateResearchData('businessProblem', e.target.value)}
                className="form-textarea"
                rows={3}
                placeholder="예: 모바일 앱의 결제 완료율이 지난 3개월간 15% 감소했습니다."
              />
              <p className="text-xs text-gray-500 mt-1">💡 가능하면 구체적인 수치나 데이터를 포함해주세요</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                사용자 문제 *
              </label>
              <textarea
                value={researchData.userProblem}
                onChange={(e) => updateResearchData('userProblem', e.target.value)}
                className="form-textarea"
                rows={3}
                placeholder="예: 사용자들이 결제 과정에서 어려움을 겪고 있는 것으로 추정됩니다."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                리서치 목적 *
              </label>
              <textarea
                value={researchData.researchPurpose}
                onChange={(e) => updateResearchData('researchPurpose', e.target.value)}
                className="form-textarea"
                rows={4}
                placeholder="예: 결제 프로세스에서 사용자가 겪는 구체적인 어려움을 파악하고, 개선 방안을 도출하고자 합니다."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                리서치 질문 *
              </label>
              {researchData.researchQuestions.map((question, index) => (
                <div key={index} className="flex mb-2">
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => updateArrayField('researchQuestions', index, e.target.value)}
                    className="form-input flex-1"
                    placeholder={`예: 사용자들이 결제 과정 중 어느 단계에서 가장 많이 이탈하는가?`}
                  />
                  {researchData.researchQuestions.length > 1 && (
                    <button
                      onClick={() => removeArrayItem('researchQuestions', index)}
                      className="ml-2 px-3 py-1 text-red-600 hover:bg-red-50 rounded"
                    >
                      제거
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={() => addArrayItem('researchQuestions')}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                + 질문 추가
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                가설 *
              </label>
              {researchData.hypothesis.map((hyp, index) => (
                <div key={index} className="flex mb-2">
                  <input
                    type="text"
                    value={hyp}
                    onChange={(e) => updateArrayField('hypothesis', index, e.target.value)}
                    className="form-input flex-1"
                    placeholder={`예: 결제 정보 입력 단계가 너무 복잡해서 사용자들이 포기한다`}
                  />
                  {researchData.hypothesis.length > 1 && (
                    <button
                      onClick={() => removeArrayItem('hypothesis', index)}
                      className="ml-2 px-3 py-1 text-red-600 hover:bg-red-50 rounded"
                    >
                      제거
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={() => addArrayItem('hypothesis')}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                + 가설 추가
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                성공 지표
              </label>
              <textarea
                value={researchData.successMetrics}
                onChange={(e) => updateResearchData('successMetrics', e.target.value)}
                className="form-textarea"
                rows={2}
                placeholder="예: 결제 완료율 20% 증가, 사용자 만족도 4.0 이상"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                타겟 사용자 *
              </label>
              <textarea
                value={researchData.targetUser}
                onChange={(e) => updateResearchData('targetUser', e.target.value)}
                className="form-textarea"
                rows={3}
                placeholder="예: 20-40대 직장인, 월 1회 이상 온라인 쇼핑 경험, 모바일 결제 사용 경험"
              />
            </div>

            {contextualQuestions.map(question => (
              <div key={question.id} className={`border-l-4 pl-4 py-3 ${
                question.type === 'validation' ? 'border-green-400 bg-green-50' :
                question.type === 'challenge' ? 'border-orange-400 bg-orange-50' :
                'border-blue-400 bg-blue-50'
              }`}>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 mt-1 mr-2 text-gray-600" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{question.question}</p>
                    <button
                      onClick={() => toggleQuestion(question.id)}
                      className="text-sm text-gray-600 hover:text-gray-800 mt-1"
                    >
                      {showQuestions[question.id] ? '접기' : '자세히 보기'}
                    </button>
                    {showQuestions[question.id] && (
                      <div className="mt-2 text-sm text-gray-700 bg-white p-3 rounded border">
                        {question.followUp}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 2: // 리서치 설계
        const recommendedMethods = getRecommendedMethods();
        return (
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-bold text-purple-800 mb-2">🔬 가장 적합한 조사 방법을 선택하세요</h2>
              <p className="text-purple-700">입력하신 정보를 바탕으로 최적의 리서치 방법을 추천해드립니다.</p>
            </div>

            {recommendedMethods.length > 0 && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Lightbulb className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-blue-800">AI 추천 방법</h3>
                </div>
                <p className="text-blue-700 text-sm mb-3">
                  프로젝트 특성과 제약사항을 고려한 추천 방법입니다
                </p>
                <div className="flex flex-wrap gap-2">
                  {recommendedMethods.map(methodId => {
                    const method = researchMethods.find(m => m.id === methodId);
                    return (
                      <span key={methodId} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        ⭐ {method?.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 gap-4">
              {researchMethods.map((method) => (
                <div
                  key={method.id}
                  className={`method-card p-4 border-2 rounded-lg cursor-pointer ${
                    researchData.selectedMethods.includes(method.id)
                      ? 'selected'
                      : 'border-gray-200 hover:border-gray-300'
                  } ${
                    recommendedMethods.includes(method.id) ? 'ring-2 ring-blue-200' : ''
                  }`}
                  onClick={() => {
                    const isSelected = researchData.selectedMethods.includes(method.id);
                    const newSelected = isSelected
                      ? researchData.selectedMethods.filter(id => id !== method.id)
                      : [...researchData.selectedMethods, method.id];
                    updateResearchData('selectedMethods', newSelected);
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-800">{method.name}</h3>
                        {recommendedMethods.includes(method.id) && (
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">AI 추천</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </div>
                    <div className="flex gap-2 text-xs">
                      <span className={`px-2 py-1 rounded ${
                        method.cost === '낮음' ? 'bg-green-100 text-green-800' :
                        method.cost === '중간' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        <DollarSign className="w-3 h-3 inline mr-1" />
                        {method.cost}
                      </span>
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {method.timeframe}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="font-medium text-green-700 mb-1">✅ 적합한 경우:</p>
                      <ul className="text-green-600 space-y-1">
                        {method.bestFor.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-red-700 mb-1">❌ 부적합한 경우:</p>
                      <ul className="text-red-600 space-y-1">
                        {method.notGoodFor.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span><strong>참가자:</strong> {method.participants}</span>
                      <span><strong>필요 역량:</strong> {method.skills.join(', ')}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {researchData.selectedMethods.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  방법 선택 근거
                </label>
                <textarea
                  value={researchData.methodRationale}
                  onChange={(e) => updateResearchData('methodRationale', e.target.value)}
                  className="form-textarea"
                  rows={3}
                  placeholder="선택한 방법들이 이 프로젝트에 적합한 이유를 설명해주세요"
                />
              </div>
            )}

            {researchData.selectedMethods.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                하나 이상의 조사 방법을 선택해주세요
              </div>
            )}
          </div>
        );

      case 3: // 실행 계획
        return (
          <div className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-bold text-green-800 mb-2">📅 구체적인 실행 계획을 수립하세요</h2>
              <p className="text-green-700">세부적인 계획이 성공적인 리서치 실행의 핵심입니다.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  참가자 수 *
                </label>
                <input
                  type="text"
                  value={researchData.designDetails.participants}
                  onChange={(e) => updateResearchData('designDetails', {
                    ...researchData.designDetails,
                    participants: e.target.value
                  })}
                  className="form-input"
                  placeholder="예: 주요 타겟 8명, 서브 타겟 4명"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  모집 방법 *
                </label>
                <select
                  value={researchData.designDetails.recruitmentMethod}
                  onChange={(e) => updateResearchData('designDetails', {
                    ...researchData.designDetails,
                    recruitmentMethod: e.target.value
                  })}
                  className="form-select"
                >
                  <option value="">선택하세요</option>
                  <option value="internal-db">기존 고객 DB</option>
                  <option value="external-panel">외부 패널</option>
                  <option value="social-media">소셜미디어 공고</option>
                  <option value="referral">지인 추천</option>
                  <option value="street-recruitment">거리 모집</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  전체 일정 *
                </label>
                <input
                  type="text"
                  value={researchData.designDetails.schedule}
                  onChange={(e) => updateResearchData('designDetails', {
                    ...researchData.designDetails,
                    schedule: e.target.value
                  })}
                  className="form-input"
                  placeholder="예: 1주차-모집, 2주차-조사, 3주차-분석"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  조사 장소/환경 *
                </label>
                <select
                  value={researchData.designDetails.location}
                  onChange={(e) => updateResearchData('designDetails', {
                    ...researchData.designDetails,
                    location: e.target.value
                  })}
                  className="form-select"
                >
                  <option value="">선택하세요</option>
                  <option value="online">온라인 (원격)</option>
                  <option value="office">사무실/회의실</option>
                  <option value="user-location">사용자 현장</option>
                  <option value="neutral-space">중립 공간</option>
                  <option value="lab">전용 리서치 룸</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                사용 도구 및 플랫폼 *
              </label>
              <textarea
                value={researchData.designDetails.tools}
                onChange={(e) => updateResearchData('designDetails', {
                  ...researchData.designDetails,
                  tools: e.target.value
                })}
                className="form-textarea"
                rows={3}
                placeholder="예: Zoom (화상회의), Figma (프로토타입), Miro (협업), 녹화 장비"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                데이터 수집 방법 *
              </label>
              <textarea
                value={researchData.designDetails.dataCollection}
                onChange={(e) => updateResearchData('designDetails', {
                  ...researchData.designDetails,
                  dataCollection: e.target.value
                })}
                className="form-textarea"
                rows={3}
                placeholder="예: 인터뷰 녹화, 화면 녹화, 관찰 노트, 설문 응답"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                분석 방법 *
              </label>
              <textarea
                value={researchData.designDetails.analysisMethod}
                onChange={(e) => updateResearchData('designDetails', {
                  ...researchData.designDetails,
                  analysisMethod: e.target.value
                })}
                className="form-textarea"
                rows={3}
                placeholder="예: 녹취록 코딩, 패턴 분석, 친화도 다이어그램, 통계 분석"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                예상 결과물 *
              </label>
              <textarea
                value={researchData.designDetails.deliverables}
                onChange={(e) => updateResearchData('designDetails', {
                  ...researchData.designDetails,
                  deliverables: e.target.value
                })}
                className="form-textarea"
                rows={3}
                placeholder="예: 사용자 여정맵, 페르소나, 문제점 리스트, 개선 권장사항"
              />
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2">⚠️ 위험요소 및 대응방안</h3>
              <textarea
                value={researchData.designDetails.risks}
                onChange={(e) => updateResearchData('designDetails', {
                  ...researchData.designDetails,
                  risks: e.target.value
                })}
                className="form-textarea"
                rows={3}
                placeholder="예: 참가자 모집 지연 → 대안 모집 채널 준비, 기술적 문제 → 백업 도구 준비"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                기타 제한사항
              </label>
              <textarea
                value={researchData.limitations}
                onChange={(e) => updateResearchData('limitations', e.target.value)}
                className="form-textarea"
                rows={2}
                placeholder="예: 개인정보 보호 규정, 법적 제약, 회사 정책"
              />
            </div>
          </div>
        );

      case 4: // 문서 완성
        const documentContent = generateDetailedDocument();
        return (
          <div className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <div>
                  <h2 className="text-xl font-bold text-green-800">UX 리서치 설계 문서가 완성되었습니다! 🎉</h2>
                  <p className="text-green-700">아래 문서를 검토하고 필요시 수정해주세요.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-800">📋 완성된 설계 문서</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      const blob = new Blob([documentContent], { type: 'text/markdown' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `${researchData.projectName}_리서치설계문서.md`;
                      a.click();
                      URL.revokeObjectURL(url);
                    }}
                    className="btn-success"
                  >
                    다운로드
                  </button>
                  <button
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(documentContent);
                        alert('문서가 클립보드에 복사되었습니다!');
                      } catch (err) {
                        console.error('클립보드 복사 실패:', err);
                        alert('클립보드 복사에 실패했습니다.');
                      }
                    }}
                    className="btn-primary"
                  >
                    복사하기
                  </button>
                </div>
              </div>
              
              <div className="max-h-96 overflow-y-auto border border-gray-100 rounded p-4">
                <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono leading-relaxed">
                  {documentContent}
                </pre>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">📋 다음 단계 체크리스트</h3>
                <div className="space-y-2 text-sm text-blue-700">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    이해관계자 검토 및 승인
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    IRB 승인 (필요시)
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    참가자 모집 시작
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    조사 도구 및 가이드 준비
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    파일럿 테스트 실시
                  </label>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">💡 추가 고려사항</h3>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• 개인정보 보호 및 동의서 준비</li>
                  <li>• 참가자 인센티브 계획</li>
                  <li>• 데이터 보관 및 삭제 정책</li>
                  <li>• 연구 윤리 가이드라인 준수</li>
                  <li>• 결과 공유 및 활용 계획</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-gray-600 mb-3">새로운 리서치 프로젝트를 시작하시겠습니까?</p>
              <button
                onClick={() => {
                  setCurrentStep(0);
                  setResearchData({
                    projectName: '',
                    projectType: '',
                    currentPhase: '',
                    stakeholders: '',
                    researchPurpose: '',
                    businessProblem: '',
                    userProblem: '',
                    researchQuestions: [''],
                    hypothesis: [''],
                    successMetrics: '',
                    targetUser: '',
                    userSegments: '',
                    recruitmentCriteria: '',
                    timeline: '',
                    budget: '',
                    resources: '',
                    limitations: '',
                    selectedMethods: [],
                    methodRationale: '',
                    designDetails: {
                      participants: '',
                      recruitmentMethod: '',
                      duration: '',
                      schedule: '',
                      tools: '',
                      location: '',
                      dataCollection: '',
                      analysisMethod: '',
                      deliverables: '',
                      risks: ''
                    }
                  });
                }}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                새 프로젝트 시작하기
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const isStepValid = (): boolean => {
    switch (currentStep) {
      case 0:
        return !!(researchData.projectName && researchData.projectType && 
               researchData.currentPhase && researchData.stakeholders);
      case 1:
        return !!(researchData.businessProblem && researchData.userProblem &&
               researchData.researchPurpose && researchData.targetUser &&
               researchData.researchQuestions.some(q => q.trim()) &&
               researchData.hypothesis.some(h => h.trim()));
      case 2:
        return researchData.selectedMethods.length > 0;
      case 3:
        return !!(researchData.designDetails.participants &&
               researchData.designDetails.recruitmentMethod &&
               researchData.designDetails.schedule &&
               researchData.designDetails.tools &&
               researchData.designDetails.location &&
               researchData.designDetails.dataCollection &&
               researchData.designDetails.analysisMethod &&
               researchData.designDetails.deliverables);
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg">
      {/* Progress Steps */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className={`progress-step ${index < currentStep ? 'completed' : ''}`}>
                <div className={`flex items-center justify-center w-12 h-12 rounded-full mb-2 ${
                  index < currentStep ? 'bg-green-500 text-white' :
                  index === currentStep ? 'bg-blue-500 text-white' :
                  'bg-gray-200 text-gray-400'
                }`}>
                  {index < currentStep ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <Icon className="w-6 h-6" />
                  )}
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-800">{step.title}</div>
                  <div className="text-xs text-gray-500">{step.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <div className="p-8">
        {renderStep()}
      </div>

      {/* Navigation */}
      <div className="p-6 border-t border-gray-200 flex justify-between bg-gray-50">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`px-6 py-3 rounded-lg flex items-center font-medium ${
            currentStep === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'btn-secondary'
          }`}
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          이전 단계
        </button>

        <div className="text-sm text-gray-500 flex items-center">
          {currentStep + 1} / {steps.length}
        </div>

        {currentStep < steps.length - 1 ? (
          <button
            onClick={nextStep}
            disabled={!isStepValid()}
            className={`px-6 py-3 rounded-lg flex items-center font-medium ${
              isStepValid()
                ? 'btn-primary'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            다음 단계
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        ) : (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="btn-success"
          >
            문서 맨 위로
          </button>
        )}
      </div>
    </div>
  );
};

export default UXResearchDesignTool;