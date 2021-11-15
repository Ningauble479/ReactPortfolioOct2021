import Image from 'next/image'
import Header from '../components/header';
import DTImage from '../images/background.jpg'
import { Box } from '@mui/system'
import SideBar from '../components/desktop/LeftSidebar';
import PDFRender from '../components/ImageRender/PDFRender';
import DesktopIcon from '../components/general/desktopIcon';
const Homepage = () => {
  return (
    <>
    <Image 
    className='backgroundImage'
    src={DTImage}
    layout='fill'
    objectFit='cover'
    objectPosition='center'
    />
    <div style={{zIndex: '1', width: '100vw', height: '100vh', position: 'relative', display: 'flex', flexDirection: 'column'}}>
        <Header/>
        <Box flex='1' display='flex'>
            <SideBar/>
            {/* <PDFRender/> */}
            <DesktopIcon/>
        </Box>
    </div>
    
    </>
  );
};

export default Homepage;