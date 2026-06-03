// Dùng để tạo một context lưu trữ thông tin về theme (sáng/tối) của ứng dụng
// Context này sẽ được sử dụng bởi các component con để truy cập và thay đổi theme hiện tại
// Context giúp tránh việc phải truyền props qua nhiều cấp độ component, làm cho code trở nên sạch hơn và dễ bảo trì hơn
import { createContext } from "react";

const ThemeContext = createContext();

export default ThemeContext;