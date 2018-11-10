import React from 'react'
import Canteen from '../../components/Canteen'
import Store from '../../mobx/store'
import {observer} from 'mobx-react'
import './index.scss'

function CanteenItem() {
    return (
        <div
            className="canteen-item"
            onTouchStart={e => Store.showCanteen(true, e)}
            >
            <div className="canteen-pic">
                <img src={require('../../assets/canteendemo.png')} alt=""/>
            </div>
            <div className="canteen-name">千喜鹤食堂</div>
        </div>
    )
}

function RankingItem(props) {
    return(
        <div className="ranking-item" style={{animationDelay: `${props.index/8}s`}}>
            <div className="number">
                <img src={require(`../../assets/${props.index+1}.png`)} alt=""/>
            </div>
            <div className="dish-pic">
                <img src={require('../../assets/canteendemo.png')} alt=""/>
            </div>
            <div className="dish-info">
                <p className="dish-name">家常烤鱼<span className="like like-active"><img src={require('../../assets/like.png')} alt=""/>100</span></p>
                <p className="dish-des">介绍：测试测试测试测试测试测试测试测试测试测试测试测试</p>
                <p className="dish-canteen">食堂：测试</p>
            </div>
        </div>
    )
}

function Footer(props) {
    return (
        <footer className={props.className}>© 红岩网校工作站</footer>
    )
}

function VotePage() {
    return (
        <React.Fragment>
            <div className="banner"></div>
            <div className="canteen-container">
                <div className="canteen-buttons">
                    {[1,2,3,4].map((item, index) => <CanteenItem index={index}/>)}
                </div>
                <div className="chili1"></div>
                <div className="chili2"></div>
                <div className="chili3"></div>
                <Footer className="vote-footer"/>
            </div>
        </React.Fragment>
    )
}

function RankingPage() {
    return (
        <div className="ranking-container">
            {[1,2,3,4,5].map((item, index) => <RankingItem index={index}/>)}
            <div className="chili4"></div>
            <div className="chili5"></div>
            <div className="chili6"></div>
            <div className="chili7"></div>
            <Footer className="ranking-footer"/>
        </div>
    )
}

@observer
class Index extends React.Component {
    state = {
        currentTab: 'vote'
    }

    render() {
        return (
            <React.Fragment>
                <div className="index">
                <header>
                    <div className="header-in">
                        <button
                            className={`vote-button ${this.state.currentTab==='vote' ? 'active' : ''}`}
                            onTouchStart={e => this.changeTab('vote', e)}
                            >投票</button>
                        <button
                            className={`ranking-button ${this.state.currentTab==='ranking' ? 'active' : ''}`}
                            onTouchStart={e => this.changeTab('ranking', e)}
                            >排行</button>
                    </div>
                </header>
                <main>
                    {this.state.currentTab === 'vote' ? <VotePage/> : <RankingPage/>}
                </main>
                </div>
                {Store.currentPage === 'Canteen' && <Canteen/>}
            </React.Fragment>
        )
    }

    changeTab = tab => {
        this.setState({
            currentTab: tab
        })
    }
}

export default Index