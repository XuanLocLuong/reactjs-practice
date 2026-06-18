// Bài 4: Form Đăng Ký
// Mục tiêu: Tạo một form đăng ký đơn giản với các trường username, email, password và confirm password. Thêm validation để kiểm tra dữ liệu nhập vào.

import {useContext, useState} from "react";
import ThemeContext from "../lesson6/ThemeContext.jsx";

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const {theme} = useContext(ThemeContext);

    const getError = () => {
        if(username.length > 0 && username.length < 6)
            return 'Username phải có ít nhất 6 ký tự';
        if(email.length > 0 && !emailRegex.test(email))
            return 'Email không đúng cú pháp';
        if(password.length > 0 && password.length < 8)
            return 'Password phải có ít nhất 8 ký tự';
        if(confirmPassword.length > 0 && password !== confirmPassword)
            return 'Confirm Password không khớp với Password';
        return '';
    }

    // hàm xử lý khi submit form
    const handleSubmit = (e) => {
        // ngăn chặn hành vi mặc định của form (gửi dữ liệu và reload trang)
        e.preventDefault();

        //sau khi kiểm tra thành công, alert thành công và reset form
        alert('Đăng ký thành công!');
        // setError('');
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <div style={{
            backgroundColor: theme === "dark" ? "#333" : "#f9f9f9",
            color: theme === "dark" ? "#fff" : "#000",
        }}>
            <h1>Form Đăng Ký</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={username}
                        onChange={(e) => {setUsername(e.target.value);}}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value); }}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value);}}
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => {setConfirmPassword(e.target.value);}}
                    />
                </div>
                <button type="submit"
                        disabled={username.length < 6 ||
                            !emailRegex.test(email) ||
                            password.length < 8 ||
                            confirmPassword !== password}
                >
                    Đăng Ký
                </button>
                {getError() && <p style={{color: 'red'}}>{getError()}</p>}
            </form>
        </div>
    )
}
export default RegistrationForm ;