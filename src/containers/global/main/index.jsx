import { Link } from "react-router-dom";
import MainData from "../../../data/global/main.json";

const MainService = () => {
    return (
        <div className="service-area">
            <div className="container">
                <div className="row">
                    <div
                        className="col-lg-8 col-xl-8 mb-sm-50 mb-md-70"
                        data-aos="fade-up"
                    >
                        <h2 className="title">{MainData[0].title}</h2>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: MainData[0].excerpt,
                            }}
                        />
                    </div>
                    <div
                        className="col-lg-4 col-xl-3 offset-xl-1"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <h2 className="title">{MainData[1].title}</h2>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: MainData[1].excerpt,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainService;
