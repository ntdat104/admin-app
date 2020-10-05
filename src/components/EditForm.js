import React, { Component } from 'react';
import "../css/EditForm.css";

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
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
            username: this.state.username ? this.state.username : this.props.studentEditing.username,
            password: this.state.password ? this.state.password : this.props.studentEditing.password,
            fullname: this.state.fullname ? this.state.fullname : this.props.studentEditing.fullname,
            gender: parseInt(this.state.gender ? this.state.gender : this.props.studentEditing.gender),
            class: this.state.class ? this.state.class : this.props.studentEditing.class,
            count: this.state.count ? this.state.count : this.props.studentEditing.count,
            mark: this.state.mark ? this.state.mark : this.props.studentEditing.mark
        }
        this.props.editStudent(student)
    }
    
    render() {
        // console.log(this.props.studentEditing);
        return (
            <form className="edit_form" onSubmit={(e) => this.handleSubmit(e)}>
                <h1>Sửa học sinh</h1>
                <div className="form_group">
                    <label htmlFor="username">Username</label>
                    <input name="username" defaultValue={this.props.studentEditing.username} id="username" type="text" onChange={(e) => this.handleChange(e)} autoComplete="off" required/> 
                </div>
                <div className="form_group">
                    <label htmlFor="password">Password</label>
                    <input name="password" defaultValue={this.props.studentEditing.password} id="password" type="password" onChange={(e) => this.handleChange(e)} autoComplete="off" required/>
                </div>
                <div className="form_group">
                    <label htmlFor="fullname">Họ tên</label>
                    <input name="fullname" defaultValue={this.props.studentEditing.fullname} id="fullname" type="text" onChange={(e) => this.handleChange(e)} autoComplete="off" required/>
                </div>
                <div className="form_group">
                    <label htmlFor="class">Lớp</label>
                    <input name="class" defaultValue={this.props.studentEditing.class} id="class" type="text" onChange={(e) => this.handleChange(e)} autoComplete="off" required/>
                </div>
                <div className="form_group">
                    <label htmlFor="count">Số buổi học</label>
                    <input name="count" defaultValue={this.props.studentEditing.count} id="count" type="number" onChange={(e) => this.handleChange(e)} autoComplete="off" required/>
                </div>
                <div className="form_group">
                    <label htmlFor="mark">Điểm</label>
                    <input name="mark" defaultValue={this.props.studentEditing.mark} id="mark" type="text" onChange={(e) => this.handleChange(e)} autoComplete="off" required/>
                </div>
                <div className="form_group">
                    <label htmlFor="gender">Giới tính</label>
                    <select name="gender" defaultValue={this.props.studentEditing.gender} id="gender" onChange={(e) => this.handleChange(e)} autoComplete="off" required>
                        <option value="">Chọn giới tính</option>
                        <option value={0}>Nam</option>
                        <option value={1}>Nữ</option>
                    </select>
                </div>
                <div className="form_btn">
                    <button type="submit">Save</button>
                </div>
            </form>
        );
    }
}

export default EditForm;