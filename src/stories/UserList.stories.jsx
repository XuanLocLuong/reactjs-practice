import UserListView from "../lesson7/forStories/UserListView";

export default {
    title: "Components/UserListView",
    component: UserListView,
};

export const Default = {
    args: {
        users: [
            {
                id: 1,
                name: "Xuân Lộc",
            },
            {
                id: 2,
                name: "Nguyễn Văn A",
            },
            {
                id: 3,
                name: "Nguyễn Văn B",
            },
        ],

        currentPage: 1,

        maxPage: 5,

        onPageChange: () => {},

        onUserClick: () => {},

        theme: "light",
    },
};