import { Component } from 'react';
import Api from './Api';
class Listing extends Component {

    async Login(data) {
        return Api.post("/user/login", data);
    }

    async SubLogin(data) {
        return Api.post("/user/Sublogin", data);
    }
    async contact(data) {
        return Api.post("/contact/contact-add", data)
    }

    async ContactGet() {
        return Api.get("/contact/contact-get")
    }

    async subscribe(data) {
        return Api.post("/subscribe/subscribe-add", data)
    }

    async subscribeGet() {
        return Api.get("/subscribe/subscribe-list")
    }
    async singup(data) {
        return Api.post("/user/signup", data)
    }

    async login(data) {
        return Api.post("/user/login", data)
    }

    async adminlogin(data) {
        return Api.post("/user/admin/login", data)
    }


    async userList() {
        return Api.get("/user/profile",)
    }

    async userListId(id) {
        return Api.get(`/user/userlist/${id}`)
    }


    async profileVerify() {
        return Api.get("/user/profile-token")
    }

    async resetpassword(data) {
        return Api.post("/user/reset-password", data)
    }

    async userProfile(data) {
        return Api.post("/user/profile", data)
    }

    async userProfileAdd(data) {
        return Api.post("/user/user-profile", data)
    }

    async userprfileget() {
        return Api.get("/user/profile-data")
    }


    async userSocialAdd(data) {
        return Api.post("/user/user-social", data)
    }

    async userprfileId() {
        return Api.get("/user/profile-data")
    }

    





    render() {
        return (
            <div>
                <>

                </>
            </div>
        )
    }
}

export default Listing;