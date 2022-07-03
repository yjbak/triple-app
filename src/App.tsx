import React from "react";
import "./App.css";
import AwardItem from "./components/AwardItem";

function App() {
  return (
    <div className="App">
      <div className="Section fade-in">
        <div className="ContentSection">
          <div className="ContentLogo">
            <span>2021년 12월 기준</span>
          </div>
        </div>
        <div className="MetricsContainer">
          <div className="item">
            <strong>
              <span>700</span>만 명
            </strong>
            의 여행자
          </div>
          <div className="item">
            <strong>
              <span>100</span>만 개
            </strong>
            의 여행 리뷰
          </div>
          <div className="item">
            <strong>
              <span>470</span>만 개
            </strong>
            의 여행 일정
          </div>
          <div className="AwardsContainer">
            <AwardItem
              icon="play-store2x.png"
              title="2018 구글 플레이스토어"
              subtitle="올해의 앱 최우수상 수상"
            />
            <AwardItem
              icon="badge-apple4x.png"
              title="2018 애플 앱스토어"
              subtitle="오늘의 여행앱 선정"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
