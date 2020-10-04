import React, { Component } from 'react';
import { FirebaseConfig } from "../api/FirebaseConfig";
import * as firebase from "firebase";
import "../css/Admin.css";
import SearchBox from './SearchBox';
import RenderStudent from './RenderStudent';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirebaseConfig: FirebaseConfig,
            searchStatus: false,
            userSearch: null
        }
    }
    
    UNSAFE_componentWillMount(){
        const data = firebase.database().ref("students");
        data.on("value", (data) => {
            let students = [];
            data.forEach((student) => {
                students.push({
                    username: student.key,
                    password: student.val().password,
                    fullname: student.val().fullname,
                    gender: parseInt(student.val().gender),
                    class: student.val().class,
                    count: student.val().count,
                    mark: student.val().mark,
                })
            });
            this.setState({
                students: students
            });
        })
    }

    //* SearchBox
    getUsernameSearch(username){
        if(username !== ""){
            let listStudent = this.state.students.filter((student) => student.username.indexOf(username) !== -1);
            this.setState({
                searchStatus: true,
                userSearch: listStudent
            });
        } else {
            this.setState({
                searchStatus: false,
                userSearch: null
            });
        }
    }

    mapStudent(){
        if(this.state.searchStatus) {
            return this.state.userSearch.map((student, index) => (
                <RenderStudent
                    key={index}
                    stt={index + 1}
                    student={student}
                />
            ))
        }
        
        if(this.state.students) {
            return this.state.students.map((student, index) => (
                <RenderStudent
                    key={index}
                    stt={index + 1}
                    student={student}
                />
            ))
        }
    }

    render() {
        return (
            <div className="admin">
                <h1>Welcome to admin</h1>
                <SearchBox getUsernameSearch={(username) => this.getUsernameSearch(username)}/>
                <button className="add_button">Thêm mới</button>
                <table className="admin_table">
                    <tbody>
                        <tr>
                            <th>STT</th>
                            <th>Username</th>
                            <th>Password</th> 
                            <th>Họ tên</th>
                            <th>Giới tính</th>
                            <th>Lớp</th>
                            <th>Số buổi học</th>
                            <th>Điểm</th>
                            <th>Chức năng</th>
                        </tr>
                        {this.mapStudent()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Admin;