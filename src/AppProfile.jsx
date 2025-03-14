import './App.css';
import Avartar from './components/Avartar';
import Profile from './components/Profile';

function AppProfile() {
  return (
    <>
     <Profile url = '/happy1.jpg' name ='Yook1' title = 'Physic1' isNew={true}/>
     <Profile url = '/happy2.jpg'  name = 'Yook2' title = 'Physic2' isNew={false}/>
     <Profile url = '/happy3.jpg' name = 'Yook3' title = 'Physic3' isNew={true}/>
    </>
  );
}

export default AppProfile;
