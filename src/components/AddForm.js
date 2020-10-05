import React, { Component } from 'react';
import "../css/AddForm.css";

class AddForm extends Component {
    handleChange(e) {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let student = {
            username: this.state.username.toLowerCase(),
            password: this.state.password.toLowerCase(),
            fullname: this.state.fullname,
            gender: parseInt(this.state.gender),
            class: this.state.class,
            count: this.state.count,
            mark: this.state.mark
        };
        this.props.addStudent(student);
    }
    
    render() {
        return (
            <form className="add_form" onSubmit={(e) => this.handleSubmit(e)}>
                <h1>Thêm học sinh</h1>
                <div className="form_group">
                    <label htmlFor="username">Username</label>
                    <input name="username" id="username" type="text" onChange={(e) => this.handleChange(e)} required/> 
                </div>
                <div className="form_group">
                    <label htmlFor="password">Password</label>
                    <input name="password" id="password" type="password" onChange={(e) => this.handleChange(e)} required/>
                </div>
                <div className="form_group">
                    <label htmlFor="fullname">Họ tên</label>
                    <input name="fullname" id="fullname" type="text" onChange={(e) => this.handleChange(e)} required/>
                </div>
                <div className="form_group">
                    <label htmlFor="class">Lớp</label>
                    <input name="class" id="class" type="text" onChange={(e) => this.handleChange(e)} required/>
                </div>
                <div className="form_group">
                    <label htmlFor="count">Số buổi học</label>
                    <input name="count" id="count" type="number" onChange={(e) => this.handleChange(e)} required/>
                </div>
                <div className="form_group">
                    <label htmlFor="mark">Điểm</label>
                    <input name="mark" id="mark" type="text" onChange={(e) => this.handleChange(e)} required/>
                </div>
                <div className="form_group">
                    <label htmlFor="gender">Giới tính</label>
                    <select name="gender" id="gender" onChange={(e) => this.handleChange(e)} required>
                        <option value="">Chọn giới tính</option>
                        <option value={0}>Nam</option>
                        <option value={1}>Nữ</option>
                    </select>
                </div>
                <div className="form_btn">
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        );
    }
}

export default AddForm;