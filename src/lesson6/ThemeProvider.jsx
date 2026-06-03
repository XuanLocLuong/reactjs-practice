// ThemeProvider component cung cấp giá trị theme và hàm toggleTheme cho các component con thông qua Context API
import { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeProvider({ children }) {

    // State để lưu trữ theme hiện tại, mặc định là "light"
    const [theme, setTheme] = useState("light");

    // Hàm để chuyển đổi giữa theme "light" và "dark"
    const toggleTheme = () => {
        // Cập nhật state theme dựa trên giá trị hiện tại
        setTheme((prev) =>
        prev === "light" ? "dark" : "light"
        );
    };

    return (
        // Cung cấp giá trị theme và hàm toggleTheme cho các component con thông qua ThemeContext.Provider
        <ThemeContext.Provider
        value={{
            theme,
            toggleTheme,
        }}
        >
        {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;