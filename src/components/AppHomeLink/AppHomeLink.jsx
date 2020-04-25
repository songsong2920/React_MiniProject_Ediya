import "./AppHomeLink.scss";
import React from "react";
import classNames from "classnames";
import { string } from "prop-types";

// [비표준 DOM 속성 방법]
// : external, children 을 제외한 표준 DOM속성(domProps)를 bind 한다.

// [외부에서 전달 받은 랩퍼 속성을 별칭 등록해서 사용하는 방법]
const AppHomeLink = ({
  wrapperProps: {
    as: WrapperComponent,
    className: wrapperClassName,
    ...restWrapperProps
  },
  external,
  children,
  className,
  ...domProps
}) => {
  // [외부로 전달된 className 병합 방법]
  // const combineClassNames = ["appHeader__homeLink", className || ""]
  //   .join(" ")
  //   .trim();

  // [classnames 라이브러리 방법]
  const combineClassNames = classNames("appHeader__homeLink", className);

  // [특정 요소 속성을 원하는 특정 랩퍼에 사용하는 방법]
  const combineWrapperClassNames = classNames(
    "appHeader__brand",
    wrapperClassName || ""
  );

  return (
    <WrapperComponent
      {...restWrapperProps}
      className={combineWrapperClassNames}
    >
      <a
        {...domProps}
        className={combineClassNames}
        target={external ? "_blank" : null}
        rel={external ? "noopener noreferrer" : null}
      >
        {children || <span className="=a11yHidden">HOME LINK</span>}
      </a>
    </WrapperComponent>
  );
};

AppHomeLink.propTypes = {
  href: string.isRequired,
};

// [AppHomeLink에 wrapperProps 속성 기본 설정]
AppHomeLink.defaultProps = {
  wrapperProps: {
    as: "h1",
  },
};

export default AppHomeLink;
