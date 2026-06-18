import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import UserDetail from './lesson5/UserDetail';
import UserCard from "./lesson2/UserCard.jsx";
import HelloWord from "./lesson1/HelloWorld.jsx";
import Pagination from "./lesson3/Pagination.jsx";
import RegistrationForm from "./lesson4/RegistrationForm.jsx";
import UserList from "./lesson5/UserList.jsx";
import ThemeProvider from "./lesson6/ThemeProvider.jsx";
import ThemeButton from "./lesson6/ThemeButton.jsx";
import UserListPage from "./lesson7/UserListPage.jsx";
import UserDetailPage from "./lesson7/UserDetailPage.jsx";
function App() {


  return (
      <>
          {/*Cho các bài từ 1 -> 6*/}
          {/*<ThemeProvider>*/}
          {/*    <ThemeButton/>*/}
          {/*    <HelloWord/>*/}
          {/*    <hr/>*/}
          {/*    <UserCard name="Xuân Lộc" avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYAjQ5r6i4TQNaJDcUH7UPhN8KH_QQ2zfpA&s" birthday="01/01/1990"/>*/}
          {/*    <hr/>*/}
          {/*    <Pagination/>*/}
          {/*    <hr/>*/}
          {/*    <RegistrationForm/>*/}
          {/*    <hr/>*/}
          {/*    <UserList/>*/}
          {/*    <hr/>*/}
          {/*    <UserDetail/>*/}

          {/*</ThemeProvider>*/}

          {/*<HelloWord/>*/}
          {/*<hr/>*/}
          {/*<UserCard name="Xuân Lộc" avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYAjQ5r6i4TQNaJDcUH7UPhN8KH_QQ2zfpA&s" birthday="01/01/1990"/>*/}
          {/*<hr/>*/}
          {/*<Pagination/>*/}
          {/*<hr/>*/}
          {/*<RegistrationForm/>*/}
          {/*<hr/>*/}
          {/*<UserList/>*/}
          {/*<hr/>*/}
          {/*<UserDetail/>*/}


        <ThemeProvider>

          <ThemeButton />

          <Routes>
            <Route
                path="/"
                element={
                  <Navigate to="/users"/>
                }
            ></Route>

            <Route
                path="/users"
                element={<UserListPage />}
            ></Route>

            <Route
                path="/users/:id"
                element={<UserDetailPage />}
            ></Route>

          </Routes>
        </ThemeProvider>
      </>
  )
}

export default App