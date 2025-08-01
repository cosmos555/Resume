# 개인 포트폴리오 웹사이트

React.js와 TypeScript를 사용하여 만든 개인 포트폴리오 웹사이트입니다.

## 🚀 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 경험
- **모던 UI/UX**: 깔끔하고 직관적인 사용자 인터페이스
- **라우팅**: React Router를 사용한 페이지 네비게이션
- **TypeScript**: 타입 안정성을 위한 TypeScript 사용
- **Vite**: 빠른 개발 환경과 빌드 도구

## 📋 페이지 구성

- **홈**: 소개 및 기술 스택
- **소개**: 경력, 교육, 관심사
- **프로젝트**: 포트폴리오 프로젝트들
- **연락처**: 연락처 정보 및 메시지 폼

## 🛠️ 기술 스택

- **Frontend**: React 18, TypeScript
- **Styling**: CSS3 (CSS Variables, Flexbox, Grid)
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Development**: ESLint, Prettier

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 16.0 이상
- npm 또는 yarn

### 설치
```bash
# 의존성 설치
npm install
```

### 개발 서버 실행
```bash
# 개발 모드로 실행 (http://localhost:3000)
npm run dev
```

### 빌드
```bash
# 프로덕션 빌드
npm run build
```

### 빌드 미리보기
```bash
# 빌드된 파일 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── Header.tsx      # 네비게이션 헤더
│   ├── Footer.tsx      # 푸터
│   └── *.css           # 컴포넌트별 스타일
├── pages/              # 페이지 컴포넌트
│   ├── Home.tsx        # 홈 페이지
│   ├── About.tsx       # 소개 페이지
│   ├── Projects.tsx    # 프로젝트 페이지
│   ├── Contact.tsx     # 연락처 페이지
│   └── *.css           # 페이지별 스타일
├── App.tsx             # 메인 앱 컴포넌트
├── main.tsx            # 앱 진입점
├── index.css           # 전역 스타일
└── App.css             # 앱 스타일
```

## 🎨 커스터마이징

### 색상 테마 변경
`src/index.css` 파일의 CSS 변수를 수정하여 색상 테마를 변경할 수 있습니다:

```css
:root {
  --primary-color: #2563eb;    /* 메인 색상 */
  --secondary-color: #1e40af;  /* 보조 색상 */
  --accent-color: #3b82f6;     /* 강조 색상 */
  /* ... */
}
```

### 내용 수정
각 페이지 컴포넌트에서 다음 내용들을 수정하세요:
- 개인 정보 (이름, 이메일, 전화번호 등)
- 프로젝트 정보
- 경력 및 교육 사항
- 소셜 미디어 링크

## 📱 반응형 디자인

이 웹사이트는 다음과 같은 브레이크포인트를 지원합니다:
- **모바일**: 768px 이하
- **태블릿**: 768px - 1024px
- **데스크톱**: 1024px 이상

## 🚀 배포

### GitHub Pages 배포
1. `package.json`에 homepage 필드 추가:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name"
}
```

2. 빌드 및 배포:
```bash
npm run build
npm run deploy
```

### Vercel 배포
1. [Vercel](https://vercel.com)에 GitHub 저장소 연결
2. 자동 배포 설정

### Netlify 배포
1. [Netlify](https://netlify.com)에 GitHub 저장소 연결
2. 빌드 명령어: `npm run build`
3. 배포 디렉토리: `dist`

## 🤝 기여

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

프로젝트에 대한 질문이나 제안사항이 있으시면 언제든 연락주세요!

- 이메일: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
