import logo from './logo.svg';
import './App.css';

function AppJSX() { //반환 값은 하나의 테그 만을 반환한다. 여러개면 하나의 부모 태그로 감싼다.
  const name = '엘리';
  return (
    <>
      <h1 className='orange'>geko</h1>
      
    </>
  );
}

export default AppJSX;
