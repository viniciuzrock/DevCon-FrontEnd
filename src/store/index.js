import { createStore } from "vuex"
import VuexPersistence from "vuex-persist"

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

export default createStore({
    state(){
        return{
            authenticated: false,
            token: null,
            userId: null
        }
    },
    mutations:{
        authenticate(state, data){
            state.authenticated = true,
            state.token = data.token,
            state.userId = data.userId
        }
    }
})