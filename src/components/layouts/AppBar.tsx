
import { Menu } from '@mui/material'
import { LayoutProps } from './types'
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';

type AppBarProps = {
    navVisible: boolean
    loggedIn: boolean
    toggleNavVisibility: () => void
} & LayoutProps

const LayoutAppBar = (props: AppBarProps) => {
    // ** Props
    const { toggleNavVisibility } = props

    const background = '#a3ebff';
    const icon_style = {
        color: 'black',
        fontSize: '2rem',
        cursor: 'pointer',
    };
    
    return (
        <header style={{
            display: 'flex',
            background: background,
            alignItems: 'center',
            padding: '1rem 1.5rem'
        }}>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div className='app-bar-left'>
                    <Icon style={icon_style} onClick={toggleNavVisibility}>menu</Icon>
                </div>
                <div className='app-bar-right'>
                    {props.loggedIn ? <Icon style={icon_style}>account_circle</Icon> : null}
                </div>
            </Box>
        </header>
    )
}

export default LayoutAppBar