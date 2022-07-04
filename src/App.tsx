import React from "react";
import "./App.scss";
import AwardItem from "./components/AwardItem";
import ContentLogo from "./components/ContentLogo";
import MetricsItem from "./components/MetricsItem";

function App() {
  return (
    <div className="app">
      <div className="section fade-in">
        <div className="section__content">
          <ContentLogo>
            <span>2021년 12월 기준</span>
          </ContentLogo>
        </div>
        <div className="section__metrics">
          <MetricsItem className="section__metrics-item" count={700} unit="만 명" text="의 여행자" />
          <MetricsItem className="section__metrics-item" count={100} unit="만 개" text="의 여행 리뷰" />
          <MetricsItem className="section__metrics-item" count={470} unit="만 개" text="의 여행 일정" />
          <div className="section__award">
            <AwardItem img='play-store2x.png'>
              2018 구글 플레이스토어
              <br />
              올해의 앱 최우수상 수상
            </AwardItem>
            <AwardItem img='badge-apple4x.png'>
              2018 애플 앱스토어
              <br />
              오늘의 여행앱 선정
            </AwardItem>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
