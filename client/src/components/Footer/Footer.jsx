import { Link } from 'react-router-dom';
import '../Footer/footer.css'

export default function Footer() {

    return (
        <footer className="bg-dark" id="tempaltemo_footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-success border-bottom pb-3 border-light logo">
                            RaiPhone Shop
                        </h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <i className="fas fa-map-marker-alt fa-fw" />
                                Blagoevgrad, bul. Sv. sv. Kiril & Metodiy 33
                            </li>
                            <li>
                                <i className="fa fa-phone fa-fw" />
                                <a className="text-decoration-none" href="tel:010-020-0340">
                                    010-020-0340
                                </a>
                            </li>
                            <li>
                                <i className="fa fa-envelope fa-fw" />
                                <a className="text-decoration-none" href="mailto:info@company.com">
                                    info@raiphone.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">
                            Further Info
                        </h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <Link className="text-decoration-none" to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="text-decoration-none" to="/about">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="w-100 bg-black py-3">
                <div className="container">
                    <div className="row pt-2">
                        <div className="col-12">
                            <p className="text-left text-light">
                                Copyright © 2023 RaiPhone | Designed by RaiPhone
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}