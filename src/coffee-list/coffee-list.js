import { Component } from "react";

import img4 from '../images/img4.png';
import img3 from '../images/img3.png';

import {Header, Footer} from '../home/Home';
import '../home/home.scss';
import './coffee-list.scss';

class HeaderAndFirstSection extends Component{
    render() {
        return (
            <section className="section1Page2">
                <div className="divSec1">
                        <Header/>
                        <div className="mainDivSec1">
                            <p >
                                Our Coffee
                            </p>
                        </div>
                    </div>
            </section>
        )
    }
}

class ItemCoffee extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="itemCoffee">
                <img src={img3} alt="coffee"/>
                {/* <p className="label">AROMISTICO Coffee 1 kg</p> */}
                <p className="label">{this.props.label}</p>
                <p className="country">{this.props.country}</p>
                <p className="price">6.99$</p>
            </div>
        )
    }
}



class Section2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : [
                {country: 'Brazil', label: 'AROMISTICO Coffee 1 kg'},
                {country: 'Kenya', label: 'SDCSD Coffee 1 kg'},
                {country: 'Brazil', label: 'YUJYUJYHN Coffee 1 kg'},
                {country: 'Kenya', label: 'AEFE Coffee 1 kg'},
                {country: 'Kenya', label: 'AROMISTICO Coffee 1 kg'},
                {country: 'Columbia', label: 'YHYH Coffee 1 kg'}
            ],
            filter: '',
            term: ''
        }
    }

    onFilter = (data) => {
        if (this.state.filter == '') {
            return data
        }
        if (this.state.filter == 'Brazil') {
            return data.map(item => {
                if (item && item.country == 'Brazil') {
                    return item                
                }
            })
        }
        if (this.state.filter == 'Kenya') {
            return data.map(item => {
                if (item && item.country == 'Kenya') {
                    return item                
                }
            })
        }
        if (this.state.filter == 'Columbia') {
            return data.map(item => {
                if (item && item.country == 'Columbia') {
                    return item                
                }
            })
        }
    }

    onChangeFilter = (e) => {
        this.setState({
            // data: this.state.data,
            filter: e.target.value
        })
    }

    listOfItems = (data) => {
        const elements = data.map((item, index) => {
            if (item) {
                return <ItemCoffee label={item.label} country={item.country} key={index}/>                
            }
        })

        return (
            <>
                {elements}
            </>
        )
    }

    searchItem = (data) => {
        const {term} = this.state;
        if (term == '') {
            return data
        } else {
            return data.map(item => {
                if (item.label.includes(term)) {
                    return item
                }
            });
        }
    }

    onChange = (e) => {
        this.setState({
            term: e.target.value
        })
    }

    render() {
        let visibleData = this.onFilter(this.state.data)
        visibleData = this.searchItem(visibleData)

        return (
            <section className="section2Page2">
                <div className="mainDivSec2Page2">
                    <div className="div1Sec2Page2">
                        <div className="div1Div">
                            <img src={img4} alt="our-coffee"/>
                        </div>
                        <div className="div1Div">
                            <p className="title">
                                About our beans
                            </p>
                            <div></div>
                            <p>
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/>
                                <br/>
                                Afraid at highly months do things on at. Situation recommend objection do intention <br/> so questions. <br/> 
                                As greatly removed calling pleased improve an. Last ask him cold feel <br/> met spot shy want. Children me laughing we prospect answered followed. At it went <br/> is song that held help face.
                            </p>
                        </div>
                    </div>
                    <div className="div2Sec2Page2">
                        <hr />
                        <div className="divMainForm">
                            <div className="divSearch">
                                <label htmlFor="">Looking for</label>
                                <input type="text" onChange={this.onChange} placeholder="start typing here..."/>
                            </div>
                            <div className="divFilters">
                                <p>Or filter</p>
                                <div className="buttonsFilter">
                                    <button className="activeButton" value='Brazil' onClick={this.onChangeFilter}>Brazil</button>
                                    <button className="" value='Kenya' onClick={this.onChangeFilter}>Kenya</button>
                                    <button className="" value='Columbia' onClick={this.onChangeFilter}>Columbia</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div3Sec2Page2">
                        {this.listOfItems(visibleData)}
                    </div>
                </div>
            </section>
        )
    }
}

class CoffeeList extends Component{
    render() {
        return(
            <>
                <HeaderAndFirstSection/>
                <Section2/>
                <Footer/>
            </>
        )
    }
}

export default CoffeeList