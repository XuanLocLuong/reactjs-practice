function Pagination({currentPage, maxPage, onPageChange}) {

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '20px' }}>
            {/* Nút Previous: tự động bị disabled khi đang ở trang 1 */}
            <button 
                onClick={() => onPageChange(currentPage - 1)} 
                disabled={currentPage === 1}
                style={{ padding: '8px 16px'}}
            >
                Previous
            </button>

            {/* Ô hiển thị số trang được custom style (Styled Box) */}
            <div>
                Page {currentPage} of {maxPage}
            </div>

            {/* Nút Next: tự động bị disabled khi đạt đến số trang tối đa */}
            <button 
                onClick={() => onPageChange(currentPage + 1)} 
                disabled={currentPage === maxPage}
                style={{ padding: '8px 16px'}}
            >
                Next
            </button>
        </div>
    )
}
export default Pagination;