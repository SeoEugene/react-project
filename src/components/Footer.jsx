import React from 'react'

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <h2 className="footer__text">
                    <div>Eugene's Web Portfolio</div>
                </h2>
                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <a href="/">sign up</a>
                        </div>
                        <p className="desc">회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
                    </div>
                    <div className="right">
                        <h3>social</h3>
                        <ul>
                            <li>
                                <a href="https://github.com/SeoEugene/vite-project">github</a>
                                <em>깃헙에 들어오시면 모든 소스를 볼 수 있습니다.</em>
                            </li>
                            <li>
                                <a href="https://joys-weblog.tistory.com/">tistory</a>
                                <em>티스토리에 들어오시면 좋은 정보 볼 수 있습니다.</em>
                            </li>
                            <li>
                                <a href="http://eugene3322.dothome.co.kr/javascript/gsap/gsap01.html">gsap</a>
                                <em>GSAP의 다양한 효과</em>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    &copy; 2023 webstoryboy<br />
                    이 사이트는 비트를 이용하여 제작하였습니다.
                </div>
            </div>
        </footer>
    )
}

export default Footer