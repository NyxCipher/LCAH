import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import QuteContainer from "../containers/global/global-qute/index.jsx";
import AboutAward from "../containers/about/about-award";
import PortfolioContainer from "../containers/global/portfolio/index.jsx";
import IntroContainer from "../containers/home/intro/index.jsx";
import Footer from "../layouts/footer";
import Header from "../layouts/header/index";
import Layout from "../layouts/index";
import MainService from "../containers/global/main";
import DOMPurify from "dompurify";
// prettier-ingore
const thisIsMyCopy = '<br /><div id="my-timeline"></div>';

const HomePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="LCAH" />
                <div className="wrapper home-default-wrapper">
                    <Header />
                    <IntroContainer />
                    <div className="main-content">
                        <QuteContainer />
                        <MainService />
                        {/* prettier-ignore */}
                        <br />
                        <br />
                        {/* prettier-ignore */}
                        <div className="shell" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(thisIsMyCopy)}}></div>
                        <br />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default HomePage;
