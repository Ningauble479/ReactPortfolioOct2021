import { Box, Typography } from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description';


export default function DesktopIcon () {
    return (
        <a href='https://docs.google.com/document/d/1QtDoSmZLDVtDRcxeHS87yecbrngBa2u0dT6ruZ3mmJ4/edit?usp=sharing' target='_blank'>
        <Box width='100px' height='100px'  display='flex' flexDirection='column' justifyContent='space-between' alignItems='center' className='DesktopIcon'>
            <DescriptionIcon style={{fontSize: '75px'}}/>
            <Typography>Resume</Typography>
        </Box>
        </a>
    )
}