const Map = () => {
    return (
        <div className="gallery-area">
            <div className="container-fluid pl-0 pr-0">
                <div className="row">
                    <div
                        className="col-sm-6 col-md-6 col-lg-6"
                        data-aos="fade-up"
                    >
                        <div className="thumb mb-31">
                            <iframe
                                title="LCAH Orlando"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112176.14867660997!2d-81.41237074897646!3d28.524547631840186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1638623533158!5m2!1sen!2sus"
                                width="600"
                                height="450"
                            ></iframe>
                        </div>
                    </div>
                    <div
                        className="col-sm-6 col-md-6 col-lg-6"
                        data-aos="fade-up"
                    >
                        <div className="thumb mb-31">
                            <iframe
                                title="LCAH NY"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240850.7955145423!2d-74.05607234338655!3d40.693199544925825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1638623687134!5m2!1sen!2sus"
                                width="600"
                                height="450"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;
