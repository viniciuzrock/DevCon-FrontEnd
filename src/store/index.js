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
            userId: null,
        }
    },
    actions:{
        donetask(commit, data){
        }
        // login(commit, loginData){
        //     return new Promise(resolve =>{
        //          fetch("http://localhost:8080/auth/login",{
        //             method: "POST",
        //             headers:{
        //                 "Content-type":"application/json"
        //             },
        //             body: loginData
        //         }).then((resp) => resp.json()).then((data)=>{
        //             let auth = false
        //             this.request = true
        //             if(data.error){
        //                 this.msgData = data.error,
        //                 this.classMessage = "error"
        //                 this.request = false
        //             } else {
        //                 auth = true

        //                 this.msgData = data.msg,
        //                 this.classMessage = "success"
        //                 this.$store.commit("authenticate",{
        //                     token: data.token,
        //                     userId: data.userId
        //                 })
        //             }
        //         })
        //     }).then((resp)=>{
        //         console.log(resp);
        //     }).catch((e)=>{
        //         console.log(e);
        //     })
        // }
    },
    mutations:{
        authenticate(state, data){
            state.authenticated = true,
            state.token = data.token,
            state.userId = data.userId
        },
        logout(state){
            state.authenticated = false,
            state.token = null,
            state.userId = null
        }
    },
    getters:{
        authenticated: state => state.authenticated,
        token: state => state.token,
        userId: state => state.userId
    },
    plugins:[vuexLocal.plugin]

})