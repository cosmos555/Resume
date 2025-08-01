import React from 'react'

const History: React.FC = () => {
  return (
    <div id="history" className="bg-white">
      

      {/* Content Section */}
      <section className="section">
        <div className="container-custom">
          {/* Experience Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-600 mb-12">
              경력
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-primary-600"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                <div className="relative pl-8 md:pl-16">
                  <div className="absolute left-0 md:left-4 top-2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="text-sm font-semibold text-primary-600 mb-2">2015.01 - 2025.05 (10년 4개월)</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">주식회사 집연구소 - 대표이사, 공동 대표이사</h3>
                    <p className="text-gray-600">클라이언트 프로그래밍</p>
                    <p className="text-gray-600">서버 프로그래밍</p>
                    <p className="text-gray-600">게임 기획</p>
                    <p className="text-gray-600">PD</p>
                    <p className="text-gray-600">프로젝트 관리</p>
                    <p className="text-gray-600">경영</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-600 mb-12">
              학력
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-8 hover:-translate-y-2">
                <h3 className="text-xl font-semibold text-primary-600 mb-3">세종대학교</h3>
                <p className="text-gray-600">컴퓨터공학과 (2009-2019, 4학년 중퇴)</p>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-600 mb-12">
              수상
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card p-6 hover:-translate-y-2">
                <h3 className="text-lg font-semibold text-primary-600 mb-2">충남 게임상 1위</h3>
                <p className="text-gray-600 text-sm">2022년 - 충남정보산업진흥원</p>
              </div>
              <div className="card p-6 hover:-translate-y-2">
                <h3 className="text-lg font-semibold text-primary-600 mb-2">구글 창구 프로그램 3기</h3>
                <p className="text-gray-600 text-sm">2021년 - 창업진흥원</p>
              </div>
              <div className="card p-6 hover:-translate-y-2">
                <h3 className="text-lg font-semibold text-primary-600 mb-2">이달의 우수게임</h3>
                <p className="text-gray-600 text-sm">2019년 - 문화체육관광부</p>
              </div>
              <div className="card p-6 hover:-translate-y-2">
                <h3 className="text-lg font-semibold text-primary-600 mb-2">기술보증기금 벤처 캠프 1기</h3>
                <p className="text-gray-600 text-sm">2017년 - 기술보증기금</p>
              </div>
              <div className="card p-6 hover:-translate-y-2">
                <h3 className="text-lg font-semibold text-primary-600 mb-2">2nd 게임 창조 오디션 3위</h3>
                <p className="text-gray-600 text-sm">2016년 - 경기콘텐츠진흥원</p>
              </div>
              <div className="card p-6 hover:-translate-y-2">
                <h3 className="text-lg font-semibold text-primary-600 mb-2">코나아이 창업 경진대회 우수상</h3>
                <p className="text-gray-600 text-sm">2015년 - (주)코나아이</p>
              </div>
            </div>
          </div>

          {/* Special Experience */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-600 mb-12">
              기타
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-8 hover:-translate-y-2">
                <h3 className="text-xl font-semibold text-primary-600 mb-4">기능경기대회 심사위원</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 충남 기능경기대회 게임개발 심사위원 (2025.04)</li>
                  <li>• 강원 기능경기대회 게임개발 심사위원 (2022.04)</li>
                  <li>• 전국 기능경기대회 게임개발 심사위원 (2021.09)</li>
                  <li>• 서울 기능경기대회 게임개발 심사위원 (2021.04, 2020.04)</li>
                </ul>
              </div>
              <div className="card p-8 hover:-translate-y-2">
                <h3 className="text-xl font-semibold text-primary-600 mb-4">추가 성과</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 7+ 퍼블리싱 계약</li>
                  <li>• 다양한 장르 게임 개발</li>
                  <li>• 글로벌 서비스 경험</li>
                  <li>• 창업 및 팀리드 경험</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Military Service */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-600 mb-8">
              병역
            </h2>
            <div className="card p-6 hover:-translate-y-2">
              <div className="flex items-center">
                <div className="text-lg font-semibold text-gray-900 mr-4">육군 만기 전역</div>
                <div className="text-gray-600">(2010-2012)</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default History 