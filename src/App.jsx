import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
// import Bai1 from './lesson1/bai1';
// import Bai2 from './lesson2/bai2';
// import Pagination from './lesson3/bai3';
// import FormPractice from './lesson4/bai4';
// import UserList from './lesson5/UserList';
import ThemeButton from './lesson6/ThemeButton';
import ThemeProvider from './lesson6/ThemeProvider';
import UserDetail from './lesson7/UserDetail';
import UserListPage from './lesson7/UserList';
import UserCard from "./lesson2/UserCard.jsx";
import HelloWord from "./lesson1/HelloWorld.jsx";
import Pagination from "./lesson3/Pagination.jsx";
function App() {


  return (
      <>
        <HelloWord/>
        <hr/>
        <UserCard name="Xuân Lộc" avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYAjQ5r6i4TQNaJDcUH7UPhN8KH_QQ2zfpA&s" birthday="01/01/1990"/>
        <hr/>
        <Pagination/>
        {/*<ThemeProvider>*/}

        {/*  <ThemeButton />*/}

        {/*  <Routes>*/}
        {/*    /!* Các Route sẽ được định nghĩa ở đây *!/*/}
        {/*    /!* <Route>*/}
        {/*    path="/bai1" element={<Bai1 />}*/}
        {/*  </Route>*/}

        {/*  <Route>*/}
        {/*    path="/bai2" element={<Bai2 name="Xuân Lộc" avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYAjQ5r6i4TQNaJDcUH7UPhN8KH_QQ2zfpA&s" birthday="01/01/1990" />}*/}
        {/*  </Route>*/}

        {/*  <Route>*/}
        {/*    path="/pagination" element={<Pagination maxPage={5}/>}*/}
        {/*  </Route>*/}

        {/*  <Route>*/}
        {/*    path="/form" element={<FormPractice />}*/}
        {/*  </Route>*/}

        {/*  <Route>*/}
        {/*    path="/theme" element={*/}
        {/*      <ThemeProvider>*/}
        {/*        <ThemeButton/>*/}
        {/*        <UserList />*/}
        {/*      </ThemeProvider>*/}
        {/*    }*/}
        {/*  </Route> *!/*/}

        {/*    <Route*/}
        {/*        path="/"*/}
        {/*        element={*/}
        {/*          <Navigate to="/users"/>*/}
        {/*        }*/}
        {/*    ></Route>*/}

        {/*    <Route*/}
        {/*        path="/users"*/}
        {/*        element={<UserListPage />}*/}
        {/*    ></Route>*/}

        {/*    <Route*/}
        {/*        path="/users/:id"*/}
        {/*        element={<UserDetail />}*/}
        {/*    ></Route>*/}

        {/*  </Routes>*/}
        {/*</ThemeProvider>*/}
      </>
  )
}

export default App