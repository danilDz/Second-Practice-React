import { Component } from "react";

import './home.scss'

class Header extends Component{
    render() {
        return (
            <header>
                <nav className="navigationHome">
                    <div className="logo">
                        <div alt="logo" className="navigationIMG"></div>
                        <a href="" className="navigationA">Coffee house</a>
                    </div>
                    
                    <a href="" className="navigationA">Our coffee</a>
                    <a href="" className="navigationA">For your pleasure</a>
                </nav>
            </header>
        )
    }
}

class HeaderAndFirstSection extends Component{
    render() {
        return (
            <>
                <section className="section1">
                    <div className="divSec1">
                        <Header/>
                        <div className="mainDiv1">
                            <p >
                                Everything You Love About Coffee
                            </p>
                            <div></div>
                            <p className="minP">
                                We makes every day full of energy and taste
                            </p>
                            <p className="minP">
                                Want to try our beans?
                            </p>
                            <button>
                                <p>More</p>
                            </button>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

class SecondSection extends Component{
    render() {
        return (
            <section className="section2">
                <div className="sec2DivMain">
                    <p className="title">
                        About us
                    </p>
                    <div></div>
                    <p>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face. <br/>
                        <br/>
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </p>
                </div>
            </section>
        )
    }
}

class Footer extends Component{
    render() {
        return (
            <footer>
                <div className="divFooter">
                    <Header/>
                    <div className="imgFooter"></div>
                </div>
            </footer>
        )
    }
}

class ThirdSectionAndFooter extends Component{
    render() {
        return (
            <>
                <section className="section3">
                    <div className="sec3Div">
                        <p>
                            Our best
                        </p>
                        <div className="divOfDivs">
                            <div className="divItem">
                                <div className="img1"></div>
                                <p className="descr">Solimo Coffee Beans 2 kg</p>
                                <p className="price">10.73$</p>
                            </div>
                            <div className="divItem">
                                <div className="img2"></div>
                                <p className="descr">Presto Coffee Beans 1 kg</p>
                                <p className="price">15.99$</p>
                            </div>
                            <div className="divItem">
                                <div className="img3"></div>
                                <p className="descr">AROMISTICO Coffee 1 kg</p>
                                <p className="price">6.99$</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
            
        )
    }
}

class Home extends Component{
    render() {
        return (
            <>
                <HeaderAndFirstSection/>
                <SecondSection/>
                <ThirdSectionAndFooter/>
            </>
        )
    }
}

export default Home;
export {Header, Footer};