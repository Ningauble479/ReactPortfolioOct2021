import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useAppContext } from '../../Context/state'

let Header = () => {
    const test = useAppContext()
    console.log(test)
    return (
        <Box maxWidth='100vw' height='6vh' bgcolor='rgba(0,0,0,0.2)' borderBottom='1px solid black' display='flex' justifyContent='space-between' color='white'>
            <Box display='flex' justifyContent='space-around' pl={5} pr={5} alignItems='center' flex='1' width='35%'>
            </Box>
            <Box width='30%' height='100%' display='flex' justifyContent='center' alignItems='center' justifySelf='center'>
                <Typography variant="h3">{test.test}</Typography>
            </Box>
            <Box width='35%' display='flex' justifyContent='space-around' alignItems='center'>
            </Box>
        </Box>
    )
}

export default Header