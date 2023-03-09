// ** React Imports
import { ElementType, ReactNode } from 'react'

// ** Next Imports
import { Link } from "react-router-dom"
// import { useRouter } from 'next/router'

// ** MUI Imports
import Chip from '@mui/material/Chip'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton'
import Icon from '@mui/material/Icon';

// ** Types
import { NavLink } from './types'

// ** Utils
// import { handleURLQueries } from 'src/@core/layouts/utils'

interface Props {
  item: NavLink
  // settings: Settings
  navVisible?: boolean
  toggleNavVisibility: () => void
}

const primaryGradient = 'linear-gradient(98deg, #FFB800 0%, #FFB800 94%)'

// ** Styled Components
const MenuNavLink = styled(ListItemButton)<
  ListItemButtonProps & { component?: ElementType; target?: '_blank' | undefined }
>(({ theme }) => ({
  width: '100%',
  borderTopRightRadius: 100,
  borderBottomRightRadius: 100,
  color: theme.palette.text.primary,
  padding: theme.spacing(2.25, 3.5),
  transition: 'opacity .25s ease-in-out',
  '&.active, &.active:hover': {
    boxShadow: theme.shadows[3],
    backgroundImage: primaryGradient,
  },
  '&.active .MuiTypography-root, &.active .MuiSvgIcon-root': {
    color: `${theme.palette.common.white} !important`
  }
}))

const MenuItemTextMetaWrapper = styled(Box)<BoxProps>({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'opacity .25s ease-in-out'
})

const VerticalNavLink = ({ item, navVisible, toggleNavVisibility }: Props) => {
  // ** Hooks
  // const router = useRouter()
  const styles = {
    color: 'rgba(58, 53, 65, 0.87)',
    // fontSize: '2rem'
  };

  const isNavLinkActive = () => {
    return false;
    // if (router.pathname === item.path) {
    //   return true
    // } else {
    //   return false
    // }
  }

  return (
    <ListItem
      disablePadding
      className='nav-link'
      sx={{
        mt: 0,
        px: '0 !important',
      }}>
      <Link to={item.path} style={{
        textDecoration: 'none',
        width: '100%'
      }}>
        <MenuNavLink
          component={'div'}
          className={isNavLinkActive() ? 'active' : ''}
          {...(item.openInNewTab ? { target: '_blank' } : null)}
          onClick={e => {
            if (item.path === undefined) {
              e.preventDefault()
              e.stopPropagation()
            }
            if (navVisible) {
              toggleNavVisibility()
            }
          }}
          sx={{
            pl: 4,
            pr: 1,
            pt: 1.25,
            pb: 1.25,
            ...(item.disabled ? { pointerEvents: 'none' } : { cursor: 'pointer' })
          }}
        >
          <ListItemIcon
            sx={{
              mr: -1,
              color: 'text.primary',
              transition: 'margin .25s ease-in-out'
            }}
          >
            {/* @ts-ignore: IconTag should be a valid component */}
            <Icon style={{ ...styles }}>{item.icon}</Icon>
          </ListItemIcon>
          <Typography sx={{ whiteSpace: 'nowrap' }}>{item.title}</Typography>
        </MenuNavLink>
      </Link>
    </ListItem>
  )
}

export default VerticalNavLink