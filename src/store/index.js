import Vue from 'vue'
import Vuex from 'vuex'
import {getAdminInfo} from '@/api/getData'

Vue.use(Vuex)

const state = {
}

const mutations = {
	saveAdminInfo(state, adminInfo){
	}
}

const actions = {
	async getAdminData({commit}){

	},
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
})
