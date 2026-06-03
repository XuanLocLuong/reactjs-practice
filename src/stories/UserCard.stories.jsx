import UserCard from "../lesson7/UserCard";

export default {
    title: "Components/UserCard",
    component: UserCard,
};

export const LightTheme = {
    args: {
        name: "Xuân Lộc",
        email: "loc@gmail.com",
        phone: "0123456789",
        theme: "light",
    },
};

export const DarkTheme = {
    args: {
        name: "Xuân Lộc",
        email: "loc@gmail.com",
        phone: "0123456789",
        theme: "dark",
    },
};