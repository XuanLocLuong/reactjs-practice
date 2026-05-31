// Bài 4: Form Đăng Ký
// Mục tiêu: Tạo một form đăng ký đơn giản với các trường username, email, password và confirm password. Thêm validation để kiểm tra dữ liệu nhập vào.

import { useState } from "react";

const FormPractice = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    // hàm xử lý khi submit form
    const handleSubmit = (e) => {
        // ngăn chặn hành vi mặc định của form (gửi dữ liệu và reload trang)
        e.preventDefault();

        //kiểm tra username đã có 6 ký tự đổ lên chưa
        if(username.length < 6) {
            setError('Username phải có ít nhất 6 ký tự');
            return;
        }

        //kiểm tra password có ít nhất 8 ký tự không
        if(password.length < 8) {
            setError('Password phải có ít nhất 8 ký tự');
            return;
        }

        //kiểm tra confirm password có khớp với password không
        if(password !== confirmPassword) {
            setError('Confirm Password không khớp với Password');
            return;
        }

        //sau khi kiểm tra thành công, alert thành công và reset form
        alert('Đăng ký thành công!');
        setError('');
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <div>
            <h1>Form Đăng Ký</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}  
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Đăng Ký</button>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </form>
        </div>
    )
}
export default FormPractice;