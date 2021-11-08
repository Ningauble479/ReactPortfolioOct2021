import { Tooltip, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Link from 'next/link'
import useIcons from '../../hooks/useIcon'
import { useAppContext } from '../../Context/state'

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
        <Link href={link}>
            <Tooltip title={title}>
            <Box className='linkClean'>
                <NamedImport />
            </Box>
            </Tooltip>
        </Link>
    )
}

let Header = () => {
    const test = useAppContext()
    console.log(test)
    return (
        <Box maxWidth='100vw' height='10vh' borderBottom='1px solid black' display='flex' justifyContent='space-between'>
            <Box display='flex' justifyContent='space-around' pl={5} pr={5} alignItems='center' flex='1' width='35%'>
                <NavLink link=' ' linkName='Home'/>
                <NavLink link='skills' linkName='Skills'/>
                <NavLink link='projects' linkName='Projects'/>
                <NavLink link='work' linkName='Work'/>
            </Box>
            <Box width='30%' height='100%' display='flex' justifyContent='center' alignItems='center' justifySelf='center'>
                <Typography variant="h3">{test.test}</Typography>
            </Box>
            <Box width='35%' display='flex' justifyContent='space-around' alignItems='center'>
                <SocialLink link='https://github.com/Ningauble479' icon={'GitHub'} title={'Github'}/>
                <SocialLink link='https://www.linkedin.com/in/devon-owen-124342138/' icon={'LinkedIn'} title={'Linked In'}/>
                <SocialLink link='https://lune.network' icon={'Brightness2'} title={'Lune'}/>
            </Box>
        </Box>
    )
}

export default Header