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

    async DeleteUsers(data) {
        return Api.post("/user/delete", data)
    }

    async userProfile(data) {
        return Api.post("/user/profile", data)
    }

    async userProfileAdd(data) {
        return Api.post("/user/user-profile", data)
    }

    async userprfileget(data) {
        return Api.post("/user/profile-data", data)
    }


    async userSocialAdd(data) {
        return Api.post("/user/user-social", data)
    }

    async userprfileId(data) {
        return Api.post("/user/profile_id", data)
    }

    async userBankData(data) {
        return Api.post("/user/bank-data", data)
    }

    async CreateInstructor(data) {
        return Api.post("/instrutor/instrutor_post", data)
    }


    async InstrutorGet() {
        return Api.get("/instrutor/instrutor_get")
    }

    async InstrutorGetId(Id) {
        return Api.get(`/instrutor/instrutor_get/${Id}`)
    }

    async UpdateInstructor(data) {
        return Api.post("/instrutor/instrutor_update", data)
    }


    async InstrutorDelete(data) {
        return Api.post("/instrutor/instrutor_delete", data)
    }


    async CreateCourse(data) {
        return Api.post("/course/course_post", data)
    }

    async courseGet() {
        return Api.get("/course/course_get")
    }

    async CourseGetId(Id) {
        return Api.get(`/course/course_get/${Id}`)
    }

    async Updatecourse(data) {
        return Api.post("/course/course_update", data)
    }


    async courseDelete(data) {
        return Api.post("/course/course_delete", data)
    }

    async PaymentAdd(data) {
        return Api.post("/payment/create", data)
    }

    async PaymentSave(data) {
        return Api.post("/payment/verify-payment", data)
    }


    async PaymentList() {
        return Api.get("/payment/paymentget")
    }
    // Rieview
    async ReviewSave(data) {
        return Api.post("/review/review_add", data)
    }

    async ReviewGet() {
        return Api.get("/review/review_get")
    }


    async ReviewStatus(data) {
        return Api.post("/review/review_status", data)
    }

    async ReviewCourse(data) {
        return Api.post("/review/review_course", data)
    }
    
    // Blog Add 
    async BlogAdd(data) {
        return Api.post("/blog/create", data)
    }

    async BlogGet() {
        return Api.get(`/blog/get`)
    }

    async BlogGetId(Id) {
        return Api.get(`/blog/get/${Id}`)
    }

    async BlogDelete(data) {
        return Api.post("/blog/delete", data)
    }

    async blogupdate(data) {
        return Api.post("/blog/update", data)
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