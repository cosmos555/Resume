import React from 'react'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  period: string
  company: string
  achievements: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "잡캐키우기 온라인",
      description: "방치형 MORPG 게임으로, 계약금 5억, 일 매출 5천을 달성한 성공적인 프로젝트입니다. 구글 창구 프로그램 3기 선정 및 충남 게임상 1위를 수상했습니다.",
      technologies: ["Unity", "C#", "Node.js", "MySQL", "WebSocket"],
      period: "2020-2022",
      company: "ZIP-LAB Inc.",
      achievements: ["계약금 5억", "일 매출 5천", "구글 창구 프로그램 3기", "충남 게임상 1위"],
      image: "/images/HybridHero.png",
      liveUrl: "https://drive.google.com/file/d/1YF2WJPDjTCm5Ei2ewSyCFwqsI9z2FAby/view?usp=sharing"
    },
    {
      id: 2,
      title: "서울 좀비:용병 키우기",
      description: "50만 다운로드를 달성한 방치형 RPG 게임입니다. Unity를 사용한 모바일 게임으로 개발 총괄 PD와 클라이언트 개발을 담당했습니다.",
      technologies: ["Unity", "C#", "Mobile Development"],
      period: "2023-현재",
      company: "ZIP-LAB Inc.",
      achievements: ["50만 다운로드", "Google Play 출시"],
      image: "/images/SeoulZombie.png",
      liveUrl: "https://play.google.com/store/apps/details?id=com.ziplab.seoulzombie"
    },
    {
      id: 3,
      title: "코즈믹 온라인",
      description: "유럽, 러시아에서 서비스된 SF MMORPG 게임입니다. 10만 유로 수출을 달성했으며, 서버 개발부터 기획, 감독, 운영까지 전담했습니다.",
      technologies: ["HTML5", "JavaScript", "Node.js", "MySQL", "WebSocket"],
      period: "2015-2018",
      company: "ZIP-LAB Inc.",
      achievements: ["유럽, 러시아 서비스", "10만 유로 수출", "4개 대륙 퍼블리싱"],
      image: "/images/CosmicOnline.png",
      liveUrl: "https://drive.google.com/file/d/19lWu3vgFtwW0OE5HVLaUy9auLmZhXxFq/view?usp=sharing"
    },
    {
      id: 4,
      title: "메이헴의 유산",
      description: "연 매출 5천만 원을 달성한 수집형 RPG 게임입니다. 문체부 주관 이달의 우수게임으로 선정되었으며, 일본 퍼블리싱 계약을 체결했습니다.",
      technologies: ["HTML5", "JavaScript", "PHP", "MySQL"],
      period: "2017-2020",
      company: "ZIP-LAB Inc.",
      achievements: ["연 매출 5천만 원", "이달의 우수게임 선정", "러시아 퍼블리싱"],
      image: "/images/HeritageOfMayhem.png",
      liveUrl: "https://drive.google.com/file/d/1RVbR0PQRKwbs963ERbBdpSn1grTMa8Bi/view"
    },
    {
      id: 5,
      title: "까먹는 용사(가제)",
      description: "개인 프로젝트로 개발 중인 로그라이트 RPG 게임입니다. Unity를 사용하여 개발 총괄 PD와 클라이언트 개발을 담당하고 있습니다.",
      technologies: ["Unity", "C#", "Roguelike"],
      period: "2024-현재",
      company: "개인 프로젝트",
      achievements: ["개발 진행 중"],
      image: "/images/WarriorWhoForgets.png",
      liveUrl: "https://drive.google.com/file/d/1zyGjNN6fagSPMEDy3mFOIom674Kt9Yuy/view?usp=sharing"
    },
    {
      id: 6,
      title: "webgame.js",
      description: "정부 R&D 지원사업으로 개발한 HTML5 + JavaScript 기반 웹게임 엔진 프레임워크입니다.",
      technologies: ["HTML5", "JavaScript", "Framework"],
      period: "2019.09-2020.09",
      company: "ZIP-LAB Inc.",
      achievements: ["정부 R&D 지원사업"],
      image: "/images/webgamejs.png",
      liveUrl: "http://webgamejs.zip-lab.co.kr"
    }
  ]

  return (
    <div id="projects" className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            프로젝트
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            직접 개발하고 기획한 주요 프로젝트들을 소개합니다.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card overflow-hidden group hover:-translate-y-2">
                <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">주요 성과:</p>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <span className="text-primary-600 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{project.company}</span>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 border border-primary-600 text-primary-600 text-sm font-medium rounded-lg hover:bg-primary-600 hover:text-white transition-colors"
                      >
                        자세히 보기
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Projects Section */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            더 많은 프로젝트
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            DROP POP, 히로익 택틱스, 이노센트 워리어, HI5GAME 등 다양한 장르의 게임을 개발했습니다.
          </p>
          <a 
            href="https://github.com/cosmos555" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            더 많은 프로젝트 보기
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
            기술 스택
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-primary-600 mb-6">게임 개발</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="text-primary-600 mr-3">▹</span>
                  Unity & C#
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-primary-600 mr-3">▹</span>
                  HTML5 & JavaScript
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-primary-600 mr-3">▹</span>
                  Node.js & WebSocket
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-primary-600 mr-3">▹</span>
                  PHP & MySQL
                </li>
              </ul>
            </div>
            <div className="card p-8 hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-primary-600 mb-6">게임 기획</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="text-primary-600 mr-3">▹</span>
                  시스템 설계
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-primary-600 mr-3">▹</span>
                  밸런싱
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-primary-600 mr-3">▹</span>
                  프로젝트 관리
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-primary-600 mr-3">▹</span>
                  PD
                </li>
              </ul>
            </div>
            <div className="card p-8 hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-primary-600 mb-6">사업 운영</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="text-primary-600 mr-3">▹</span>
                  팀 빌딩
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-primary-600 mr-3">▹</span>
                  글로벌 퍼블리싱
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-primary-600 mr-3">▹</span>
                  서비스 운영
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-primary-600 mr-3">▹</span>
                  Git & PlayFab
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects 