import React from 'react'

const Home: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div id="home">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                안녕하세요! <br />
                <span className="text-green-600">권보민</span>입니다
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              창업부터 서비스 종료까지, 전 과정을 겪은 실전형 게임 개발자
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="btn btn-primary"
                >
                  프로젝트 보기
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn btn-secondary"
                >
                  연락하기
                </button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="/images/Profile.jpg" 
                  alt="권보민 프로필" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 