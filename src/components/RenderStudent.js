import React, { Component } from 'react';

class RenderStudent extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.student.username}</td>
                <td>{this.props.student.password}</td>
                <td>{this.props.student.fullname}</td>
                <td>{this.props.student.gender === 0 ? "Nam" : "Nữ"}</td>
                <td>{this.props.student.class}</td>
                <td>{this.props.student.count}</td>
                <td>{this.props.student.mark}</td>
                <td>
                    <button onClick={() => this.props.changeEditStatus()}>Sửa</button>
                    <button onClick={() => this.props.removeStudent()}>Xóa</button>
                </td>
            </tr>
        );
    }
}

export default RenderStudent;