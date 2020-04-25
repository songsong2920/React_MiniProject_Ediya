import "./AppNavigation.scss";
import React, { Fragment, Component } from "react";

// [hidden 속성을 사용하는 이유]
// 키보드 사용자의 경우 접근성 관점에서 해당 메뉴를 열지 않으면
// 다음으 컨텐츠를 탐색할 거라 생각할 수도 있다.
// 하지만 hideen 속성을 사용하지 시각적으로 보이지 않는 부분까지 탐색된다.

class AppNavigation extends Component {
  state = {
    isOpen: false,
    classes: "appNavigation",
  };
  // callback 함수를 통해서 open 값이 변경된 이후에
  handleOpenMeun = (e) => {
    this.setState({ isOpen: true }, () => {
      window.setTimeout(() => {
        this.setState({
          classes: "appNavigation is-active",
        });
      }, 100);
    });
  };
  handleClopseMeun = (e) => {
    this.setState({ classes: "appNavigation" }, () => {
      window.setTimeout(() => {
        this.setState({ isOpen: false });
      }, 400);
    });
  };
  render() {
    return (
      <Fragment>
        <button
          className="resetButton is-open-menu"
          type="button"
          title="메뉴 열기"
          aria-label="메뉴 열기"
          onClick={this.handleOpenMeun}
        >
          <span className="ir"></span>
        </button>
        <nav className={this.state.classes} hidden={!this.state.isOpen}>
          <h2 className="a11yHidden">메인 메뉴</h2>
          <ul className="resetBoxModel">
            <li>
              <a href="#menu">메뉴</a>
            </li>
            <li>
              <a href="#members">이디야멤버스</a>
            </li>
            <li>
              <a href="#coffee-lab">이디야커피랩</a>
            </li>
            <li>
              <a href="#culture-lab">이디야컬쳐랩</a>
            </li>
            <li>
              <a href="#notice">공지사항</a>
            </li>
            <li>
              <a href="#find-store">매장찾기</a>
            </li>
          </ul>
          <button
            className="resetButton is-close-menu"
            type="button"
            title="메뉴 닫기"
            aria-label="메뉴 닫기"
            onClick={this.handleClopseMeun}
          >
            <span className="close" aria-hidden="true">
              {" "}
              x
            </span>
          </button>
        </nav>
      </Fragment>
    );
  }
}
export default AppNavigation;
