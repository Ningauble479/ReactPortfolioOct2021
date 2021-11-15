import { Box } from "@mui/system";
import { Tooltip, Typography } from "@mui/material"
import useIcons from '../../hooks/useIcon'
import Link from 'next/link'

let NavLink = ({link, linkName}) => {
    return (
        <Link href={`/${link}`}>
            <Box className='linkClean'>
                <Typography variant='h5'>{linkName}</Typography>
            </Box>
        </Link>
    )
}

let SocialLink = ({link, icon, title}) => {
    const NamedImport = useIcons(icon)
    console.log(NamedImport)
    return (
        <a href={link} target='_blank'>
            <Tooltip title={title}>
                <Box className='linkClean'>
                    <NamedImport style={{width: '75px', height: '75px'}}/>
                </Box>
            </Tooltip>
        </a>
    )
}


export default function SideBar () {
    return (
        <Box maxWidth='6vw' flex='1' display='flex' flexDirection='column' justifyContent='center' alignItems='center' borderRight='1px solid black' bgcolor='rgba(0,0,0,0.1)' color='white'>
                <SocialLink link='https://github.com/Ningauble479' icon={'GitHub'} title={'Github'}/>
                <SocialLink link='https://www.linkedin.com/in/devon-owen-124342138/' icon={'LinkedIn'} title={'Linked In'}/>
                <SocialLink link='https://lune.network' icon={'Brightness2'} title={'Lune'}/>
        </Box>
    )
}


{/* <NavLink link=' ' linkName='Home'/> */}
{/* <NavLink link='skills' linkName='Skills'/> */}
{/* <NavLink link='projects' linkName='Projects'/> */}
{/* <NavLink link='work' linkName='Work'/> */}