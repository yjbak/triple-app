import React, { useEffect } from "react";
import "./App.scss";
import AwardItem from "./components/AwardItem";
import ContentLogo from "./components/ContentLogo";
import List from "./components/List";
import MetricsItem from "./components/MetricsItem";
import { useCounter } from "./hooks/useCounter";

function App() {
  const { count: travelerCounter, run: travelerStart } = useCounter({
    start: 600,
    end: 700,
    fps: 60,
  });
  const { count: reviewCounter, run: reviewStart } = useCounter({
    start: 80,
    end: 100,
    fps: 12,
  });
  const { count: palnCounter, run: planStart } = useCounter({
    start: 370,
    end: 470,
    fps: 60,
  });

  useEffect(() => {
    travelerStart();
    reviewStart();
    planStart();
  });

  return (
    <div className="app">
      <div className="section fade-in">
        <div className="section__content">
          <ContentLogo>
            <span>2021년 12월 기준</span>
          </ContentLogo>
        </div>
        <div className="section__metrics">
          <List mtSpace={20}>
            <MetricsItem
              fontSize={36}
              count={travelerCounter}
              unit="만 명"
              text="의 여행자"
            />
            <MetricsItem
              fontSize={36}
              count={reviewCounter}
              unit="만 개"
              text="의 여행 리뷰"
            />
            <MetricsItem
              fontSize={36}
              count={palnCounter}
              unit="만 개"
              text="의 여행 일정"
            />
          </List>
          <div className="section__award">
            <AwardItem img="play-store2x.png">
              2018 구글 플레이스토어
              <br />
              올해의 앱 최우수상 수상
            </AwardItem>
            <AwardItem img="badge-apple4x.png">
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
