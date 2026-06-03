import Pagination from "../lesson7/Pagination";

export default {
    title: "Components/Pagination",
    component: Pagination,
};

export const FirstPage = {
    args: {
        currentPage: 1,
        maxPage: 5,
        onPageChange: () => {},
    },
};

export const MiddlePage = {
    args: {
        currentPage: 3,
        maxPage: 5,
        onPageChange: () => {},
    },
};

export const LastPage = {
    args: {
        currentPage: 5,
        maxPage: 5,
        onPageChange: () => {},
    },
};