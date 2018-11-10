import React from 'react'
import Index from '../components/Index'
//import Canteen from '../components/Canteen'
import './normalize.css'
import './index.scss'

// function Page(props) {
//     if (props.page === 'Index') return (<Index/>)
//     if (props.page === 'Canteen') return (<Canteen/>)
// }

// export default class App extends React.Component {
//     state = {
//         currentPage: 'Canteen'
//     }

//     render() {
//         return (<Page page={this.state.currentPage}/>)
//     }
// }

export default class App extends React.Component {
    render() {
        return <Index/>
    }
}