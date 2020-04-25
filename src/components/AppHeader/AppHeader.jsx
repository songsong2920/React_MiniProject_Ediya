import "./AppHeader.scss";
import React from "react";
import AppHomeLink from "../AppHomeLink/AppHomeLink";
import AppNavigation from "../AppNavigation/AppNavigation";

// - props 데이터 전달 및 관리
// - className 전달 및 병합 설정
// - 필요에 따라서 컴포넌트 포함하고 있는 특정 요소의 속성을 객체 전달
// - 필요에 따라서 as 별칭을 사용해 다른 요소로 변경해서 렌더링

// wrapperProps ={{as : "h2", className="wrapper", title:"wrapper"}}
const AppHeader = () => {
  return (
    <header className="appHeader">
      <AppHomeLink href="/" title="EDIYA COFFEE HOME" external>
        <span className="a11yHidden" lang="en">
          EDIYA COFFEE
        </span>
      </AppHomeLink>
      <AppNavigation />
    </header>
  );
};
export default AppHeader;
