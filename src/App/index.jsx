import React from 'react'
import Index from '../components/Index'
import Store from '../mobx/store'
import { observer } from 'mobx-react'
import getUrlParam from '../api/getUrlParam'
import getData from '../api/getData'
import getVote from '../api/getVote'
import './normalize.css'
import './index.scss'

@observer
class App extends React.Component {
    render() {
        return <Index />
    }

    componentDidMount() {
        //从当前url获取jwt参数
        var jwt = getUrlParam('s')
        if (jwt) {
            Store.addJwt(jwt)
        }
        else {
            console.log('jwt null')
        }

        //获取菜品信息
        getData()

        if(jwt) {
            getVote()
        }

        window.history.pushState({ page: 'state1' }, 'state', '#state1')
        window.history.pushState({ page: 'state2' }, 'state', '#state2')

        //监听返回
        window.addEventListener('popstate', function (e) {
            var page = e.state.page
            switch (page) {
                case 'state3':
                    Store.showPopUp(false)
                    break
                case 'state2':
                    Store.showCanteen(false)
                    break
                case 'state1':
                    window.history.pushState({ page: 'state2' }, 'state', '#state2')
                    break
                default:
            }
        })
    }
}

export default App