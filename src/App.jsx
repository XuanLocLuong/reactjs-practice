import './App.css'
import Bai1 from './lesson1/bai1';
import Bai2 from './lesson2/bai2';
import Pagination from './lesson3/bai3';
import FormPractice from './lesson4/bai4';
import UserList from './lesson5/UserList';
function App() {
  

  return (
    <>
      <Bai1 />
      <hr/>
      <Bai2 name="Xuân Lộc" avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYAjQ5r6i4TQNaJDcUH7UPhN8KH_QQ2zfpA&s" birthday="01/01/1990" />
      <hr/>
      <Pagination maxPage={5}/>
      <hr/>
      <FormPractice />
      <hr/>
      <UserList />
    </>
  )
}

export default App
