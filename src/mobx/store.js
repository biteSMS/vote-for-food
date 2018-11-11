import {observable, action} from 'mobx'
import getData from '../api/getData'

class Store {
    @observable jwt = null
    @observable rank = []
    @observable canteens = []
    @observable currentPage = 'Index'
    @observable currentCanteen = null
    @observable currentDish = null
    @observable isShowPopUp = false
    @observable voteList = []
    @observable voteStatus = 0

    @action showCanteen(isShow) {
            if (isShow) this.currentPage = 'Canteen'
            if (!isShow) this.currentPage = 'Index'
    }
    @action addJwt(jwt) {
        this.jwt = jwt
    }
    @action addData(data) {
        this.rank = data.rank
        this.canteens = data.canteens
    }
    @action changeCanteen(canteen) {
        this.currentCanteen = canteen
    }
    @action showPopUp(isShow) {
        this.isShowPopUp = isShow
    }
    @action changeDish(dish) {
        this.currentDish = dish
    }
    @action refreshVoteList(list) {
        this.voteList = list
    }
    @action changeVoteStatus(status) {
        this.voteStatus = status
    }
}

export default new Store()