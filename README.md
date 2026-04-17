# 🎬 VODA (보다)
> **풀사이클 생성형 AI OTT 미디어 서비스**  
> TMDB API와 Hugging Face(Qwen2.5) LLM을 결합하여 취향에 맞는 영화와 TV 시리즈를 추천하고 소통하는 스마트한 OTT 플랫폼입니다.

## 📋 목차
* [프로젝트 소개](#-프로젝트-소개)
* [사용 기술](#-사용-기술)
* [주요 기능](#-주요-기능)
* [프로젝트 구조](#-프로젝트-구조)
* [설치 및 실행 방법](#-설치-및-실행-방법)
* [개선 예정 사항](#-개선-예정-사항)

## 💡 프로젝트 소개
- **VODA**는 사용자가 방대한 미디어 콘텐츠 속에서 길을 잃지 않도록 돕는 AI 기반 OTT 서비스입니다.
- 단순히 정보를 나열하는 것을 넘어, **생성형 AI(Chatbot)**를 통해 작품에 대한 깊이 있는 대화와 맞춤형 추천을 제공합니다.
- 최신 기술 스택(React 19, Vite 7, Tailwind v4, FastAPI)을 활용하여 최상의 사용자 경험을 목표로 합니다.

## 🛠 사용 기술

### 프론트엔드 (Frontend)
- **React 19**: React Compiler를 통한 자동 최적화
- **Vite 7**: 초고속 빌드 및 HMR 환경
- **Tailwind CSS v4**: `@theme` 기반의 현대적인 스타일링
- **React Router v7**: Data Mode 기반의 효율적인 라우팅
- **Axios**: 커스텀 엔드포인트 기반 API 통신

### 백엔드 (Backend)
- **FastAPI (Python)**: 고성능 비동기 API 서버
- **Hugging Face (Qwen2.5-7B-Instruct)**: 생성형 AI 채팅 엔진
- **TMDB API v3**: 글로벌 영화/TV 시리즈 데이터 소스

## ✅ 주요 기능
- **스마트 검색 & 탐색**: TMDB 데이터를 활용한 실시간 영화/TV 시리즈 필터링 및 검색
- **AI 미디어 챗봇**: 작품의 시놉시스, 출연진 정보를 바탕으로 한 지능형 Q&A 및 추천
- **반응형 UI**: 모바일과 데스크탑 모두 최적화된 OTT 스타일 레이아웃
- **개인화 피드**: 취향 분석을 통한 카테고리별 콘텐츠 큐레이션

## 📁 프로젝트 구조
```text
voda/
├── frontend/             # React 프론트엔드
│   ├── src/
│   │   ├── api/          # TMDB/AI API 통신
│   │   ├── components/   # 재사용 UI 컴포넌트
│   │   ├── hooks/        # 커스텀 훅
│   │   ├── pages/        # 라우트 페이지
│   │   └── router/       # React Router v7 설정
├── backend/              # FastAPI 백엔드
│   ├── main.py           # 서버 진입점 및 AI 로직
│   └── requirements.txt  # 백엔드 의존성
└── md/                   # 프로젝트 문서 및 명세
```

## ⚙️ 설치 및 실행 방법

### 1. 환경 설정 (.env)
루트 폴더나 각 앱 폴더에 다음 키가 포함된 `.env` 파일이 필요합니다.
```env
VITE_TMDB_API_KEY=your_tmdb_key
HF_TOKEN=your_huggingface_token
```

### 2. 프론트엔드 실행
```bash
cd frontend
npm install --legacy-peer-deps
npm run dev
```

### 3. 백엔드 실행
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## 🔧 개선 예정 사항
- [ ] 사용자 선호도 기반 맞춤형 추천 알고리즘 고도화
- [ ] 다국어 지원 확대 (한국어/영어/일본어 등)
- [ ] 소셜 로그인 (Google, Kakao) 연동
- [ ] 시청 기록 및 '찜하기' 기능 서버 연동

## 📬 연락처
- **Author**: [angun1546](https://github.com/angun1546)
- **Email**: angun1546@gmail.com

---
*VODA 프로젝트는 생성형 AI와 미디어 서비스의 결합을 탐구하는 풀사이클 프로젝트입니다.*
