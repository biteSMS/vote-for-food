import React from 'react'
import Index from '../components/Index'
import Store from '../mobx/store'
import {observer} from 'mobx-react'
import getUrlParam from '../api/getUrlParam'
import getData from '../api/getData'
import './normalize.css'
import './index.scss'

@observer
class App extends React.Component {
    render() {
        return <Index/>
    }

    componentDidMount() {
        //从当前url获取jwt参数
        var jwt = getUrlParam('s')
        if (jwt) {
            Store.addJwt(jwt)
        }
        else {
            console.log ('jwt null')
        }

        //获取菜品信息
        getData()
    }
}

export default App