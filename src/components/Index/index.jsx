import React from 'react'
import Canteen from '../../components/Canteen'
import Store from '../../mobx/store'
import {observer} from 'mobx-react'
import './index.scss'

function alertWarn(warn) {
    alert(warn)
}

function changeCanteen(canteen) {
    Store.changeCanteen(canteen)
    Store.showCanteen(true)
}

function CanteenItem(props) {
    return (
        <div
            className="canteen-item"
            onClick={props.onTouchStart}
            >
            <div className="canteen-pic">
                <img src={props.img} alt=""/>
            </div>
            <div className="canteen-name">{props.name}</div>
        </div>
    )
}

function RankingItem(props) {
    var img = Store.voteList.includes(props.item.id) ? 'like-active' : 'like'

    return(
        <div className="ranking-item" style={{animationDelay: `${props.index/8}s`}} onClick={e => alertWarn('请前往投票界面查看菜品详情！', e)}>
            <div className="number">
                <img src={require(`../../assets/${props.index+1}.png`)} alt=""/>
            </div>
            <div className="dish-pic">
                <img src={`https://wx.idsbllp.cn/foodbe/img/${props.item.id}.jpg`} alt=""/>
            </div>
            <div className="dish-info">
                <p className="dish-name">{props.item.name}<span className={`like ${Store.voteList.includes(props.item.id) ? 'like-active' : ''}`}><img src={require(`../../assets/${img}.png`)} alt="" onClick={e => {e.stopPropagation();alertWarn('请前往投票界面进行投票！', e)}}/>{props.item.votes}</span></p>
                <p className="dish-des">介绍：{props.item.introduction}</p>
                <p className="dish-canteen">食堂：{props.item.canteen}</p>
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
                    <CanteenItem
                        index={1}
                        name="千喜鹤美食城"
                        img="https://wx.idsbllp.cn/foodbe/img/18.jpg"
                        onTouchStart={e => changeCanteen('千喜鹤美食城', e)}
                        />
                    <CanteenItem
                        index={2}
                        name="饮食服务中心"
                        img="https://wx.idsbllp.cn/foodbe/img/38.jpg"
                        onTouchStart={e => changeCanteen('饮食服务中心', e)}
                        />
                    <CanteenItem
                        index={3}
                        name="红高粱食堂"
                        img="https://wx.idsbllp.cn/foodbe/img/28.jpg"
                        onTouchStart={e => changeCanteen('红高粱食堂', e)}
                        />
                    <CanteenItem
                        index={4}
                        name="延生食堂"
                        img="https://wx.idsbllp.cn/foodbe/img/7.jpg"
                        onTouchStart={e => changeCanteen('延生食堂', e)}
                        />
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
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    return (
        <div className="ranking-container">
            {Store.rank.map((item, index) => <RankingItem index={index} key={item.id} item={item}/>)}
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

    componentDidMount() {
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
    }

    changeTab = tab => {
        this.setState({
            currentTab: tab
        })
    }
}

export default Index