import React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">권보민</h3>
            <p className="text-gray-300">게임 개발자 & 기획자 & 사업가</p>
            <p className="text-gray-300 text-sm mt-2">주식회사 집연구소 대표이사</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">연락처</h4>
            <p className="text-gray-300 mb-2">이메일: dhguskdd@gmail.com</p>
            <p className="text-gray-300">회사: 주식회사 집연구소</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">소셜 미디어</h4>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://github.com/cosmos555" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-medium text-gray-300 border border-gray-600 rounded-lg hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/bomin-kwon-b84419162/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-medium text-gray-300 border border-gray-600 rounded-lg hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} 권보민. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 