import axios from 'axios'
import Store from '../mobx/store'

export default function() {
    axios({
        method: 'GET',
        url: 'https://wx.idsbllp.cn/foodbe/getVote',
        headers: {
            'jwt': Store.jwt,
        }
    })
    .then(res => {
        var voteList = res.data.data.vote
        Store.refreshVoteList(voteList)
    })
}