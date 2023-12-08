import '../About/about.css'

export default function About() {
    return (
        <>
            <div
                className="modal fade bg-white"
                id="templatemo_search"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg" role="document">
                    <div className="w-100 pt-1 mb-5 text-right">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <form
                        action=""
                        method="get"
                        className="modal-content modal-body border-0 p-0"
                    >
                        <div className="input-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                id="inputModalSearch"
                                name="q"
                                placeholder="Search ..."
                            />
                            <button
                                type="submit"
                                className="input-group-text bg-success text-light"
                            >
                                <i className="fa fa-fw fa-search text-white" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <section className="bg-success py-5">
                <div className="container">
                    <div className="row align-items-center py-5">
                        <div className="col-md-8 text-white">
                            <h1>About Us</h1>
                            <p>
                            At RaiPhone, we're more than an online store; we're your destination for cutting-edge smartphones. With a commitment to quality and innovation, we curate a selection that combines style and functionality. Join us in embracing the future of mobile technology with RaiPhone – where every device is a testament to our passion for excellence.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img src="data:image/jpeg;base64,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" alt="About Hero" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container py-5">
                <div className="row text-center pt-5 pb-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Our Services</h1>
                        <p>
                            
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center">
                                <i className="fa fa-truck fa-lg" />
                            </div>
                            <h2 className="h5 mt-4 text-center">Delivery Services</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center">
                                <i className="fas fa-exchange-alt" />
                            </div>
                            <h2 className="h5 mt-4 text-center">Shipping &amp; Return</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center">
                                <i className="fa fa-percent" />
                            </div>
                            <h2 className="h5 mt-4 text-center">Promotion</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center">
                                <i className="fa fa-user" />
                            </div>
                            <h2 className="h5 mt-4 text-center">24 Hours Service</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-light py-5">
                <div className="container my-4">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Our Partners</h1>
                            <p>
                               
                            </p>
                        </div>
                        <div className="col-lg-9 m-auto tempaltemo-carousel">
                            <div className="row d-flex flex-row">
                                <div className="col-1 align-self-center">
                                    <a
                                        className="h1"
                                        href="#templatemo-slide-brand"
                                        role="button"
                                        data-bs-slide="prev"
                                    >
                                        <i className="text-light fas fa-chevron-left" />
                                    </a>
                                </div>
                                <div className="carousel-inner product-links-wap" role="listbox">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-3 p-md-5">
                                                <a href="https://www.apple.com/">
                                                    <img
                                                        className="img-fluid brand-img"
                                                        src="https://www.yettel.bg/dA/cfed809e32/telenor-focus-partners-apple-hom.png?language_id=4663993"
                                                        alt="Brand Logo"
                                                    />
                                                </a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="https://www.samsung.com/bg/">
                                                    <img
                                                        className="img-fluid brand-img"
                                                        src="https://www.yettel.bg/dA/55ec2f7c71/telenor-focus-partners-samsung-h.png?language_id=4663993"
                                                        alt="Brand Logo"
                                                    />
                                                </a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="https://mi-bulgaria.com/">
                                                    <img
                                                        className="img-fluid brand-img"
                                                        src="https://www.yettel.bg/dA/4749ebd666/telenor-focus-partners-xiaomi-ho.png?language_id=4663993"
                                                        alt="Brand Logo"
                                                    />
                                                </a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="https://consumer.huawei.com/bg/">
                                                    <img
                                                        className="img-fluid brand-img"
                                                        src="https://www.freepnglogos.com/uploads/huawei-logo-png/huawei-logo-png-hd-0.png"
                                                        alt="Brand Logo"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}