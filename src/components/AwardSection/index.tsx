import { useEffect } from "react";

import AwardItem from "@components/AwardItem";
import ContentLogo from "@components/ContentLogo";
import List from "@components/List";
import MetricsItem from "@components/MetricsItem";
import { useTravelerAnimation } from "@hooks/useTravelerAnimation";

function AwardSection() {
  const { count: travelerCounter, run: travelerStart } = useTravelerAnimation({
    start: 600,
    end: 700,
  });
  const { count: reviewCounter, run: reviewStart } = useTravelerAnimation({
    start: 0,
    end: 100,
  });
  const { count: palnCounter, run: planStart } = useTravelerAnimation({
    start: 370,
    end: 470,
  });

  useEffect(() => {
    travelerStart();
    reviewStart();
    planStart();
  });
  return (
    <div className="section">
      <div className="section__content fade-in">
        <ContentLogo>
          <span>2021년 12월 기준</span>
        </ContentLogo>
      </div>
      <div className="section__metrics fade-in">
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
  );
}

export default AwardSection;
