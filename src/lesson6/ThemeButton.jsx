import { useContext } from "react";
import ThemeContext from "./ThemeContext";

// ThemeButton component sử dụng useContext để truy cập giá trị theme và hàm toggleTheme từ ThemeContext
function ThemeButton() {
  // Sử dụng useContext để lấy giá trị theme và hàm toggleTheme từ ThemeContext
  const { toggleTheme, theme } =
    useContext(ThemeContext);

  return (
    // Khi người dùng click vào button, hàm toggleTheme sẽ được gọi để thay đổi theme
    <button onClick={toggleTheme}>
      Current Theme: {theme}
    </button>
  );
}

export default ThemeButton;