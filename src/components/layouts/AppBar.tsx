
import { IconButton, Menu } from '@mui/material'
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

    return (
        <header style={{
            display: 'flex',
            background: background,
            alignItems: 'center',
            padding: '1rem 1.5rem'
        }}>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div className='app-bar-left'>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={toggleNavVisibility}
                >
                    <Icon fontSize='inherit'>menu</Icon>
                </IconButton>
                </div>
                <div className='app-bar-right'>
                    {props.loggedIn ? <Icon>account_circle</Icon> : null}
                </div>
            </Box>
        </header>
    )
}

export default LayoutAppBar