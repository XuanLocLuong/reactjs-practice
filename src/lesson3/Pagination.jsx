import { useState } from "react";

function Pagination(props) {
    //lấy số trang tối đa từ props truyền vào, nếu không có thì mặc định là 10
    const {maxPage = 10} = props;

    //tạo state để lưu trang hiện tại, mặc định là 1 là trang đầu tiên
    const [currentPage, setCurrentPage] = useState(1);

    //hàm xử lý nút next
    const handleNext = () => {
        if(currentPage < maxPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    //ham xử lý nút previous
    const handlePrevious = () => {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '20px' }}>
            {/* Nút Previous: tự động bị disabled khi đang ở trang 1 */}
            <button 
                onClick={handlePrevious} 
                disabled={currentPage === 1}
                style={{ padding: '8px 16px'}}
            >
                Previous
            </button>

            {/* Ô hiển thị số trang được custom style (Styled Box) */}
            <div>
                {currentPage}
            </div>

            {/* Nút Next: tự động bị disabled khi đạt đến số trang tối đa */}
            <button 
                onClick={handleNext} 
                disabled={currentPage === maxPage}
                style={{ padding: '8px 16px'}}
            >
                Next
            </button>
        </div>
    )
}
export default Pagination;