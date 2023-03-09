import "./Navigation.css"

import List from '@mui/material/List'
import Box from '@mui/material/Box'
import { NavLink, NavSectionTitle, VerticalNavItemsType } from './types'

import VerticalNavSectionTitle from './VerticalNavSectionTitle'
import VerticalNavLink from './VerticalNavLink'

interface Props {
  navVisible: boolean
  loggedIn: boolean
  toggleNavVisibility: () => void
  setNavVisible: (value: boolean) => void
}

const Navigation = (props: Props) => {

    // Icons: https://fonts.google.com/icons
    const verticalNavItems: VerticalNavItemsType = [{
        title: 'Home',
        path: '/',
        icon: 'home',
    } as NavLink, {
        title: 'About',
        path: '/about',
        icon: 'info',
    }, {
        sectionTitle: 'Account',
    } as NavSectionTitle, ...(props.loggedIn ? [{
        title: 'Logout',
        path: '/logout',
        icon: 'logout',
    }] : [{
        title: 'Login',
        path: '/login',
        icon: 'login',
    } as NavLink, {
        title: 'Register',
        path: '/register',
        icon: 'person_add',
    } as NavLink]), {
        sectionTitle: 'Booking',
    } as NavSectionTitle, {
        title: 'Laundry', // Washroom
        path: '/booking/laundry',
        icon: 'local_laundry_service',
    } as NavLink, {
        title: 'Grill cabin',
        path: '/booking/grill',
        icon: 'cabin',
    } as NavLink,
    ];

  const resolveNavItemComponent = (item: NavLink | NavSectionTitle) => {
    if ((item as NavSectionTitle).sectionTitle) return VerticalNavSectionTitle
    return VerticalNavLink
  }
  
  const RenderMenuItems = verticalNavItems?.map((item: NavLink | NavSectionTitle, index: number) => {
    const TagName: any = resolveNavItemComponent(item)
    return <TagName {...props} key={index} item={item} />
  })

  const navHide = !props.navVisible ? "nav-hide" : '';

  return (
    <Box className={"nav " + navHide}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '64px', fontSize: '90%' }}>
            <h1>BRF</h1>
            <h1 style={{ fontWeight: '100' }}>&nbsp;Booking</h1>
            {/* <img src='/images/logo.png' alt='logo' width='100%' /> */}
        </Box>
        <List className='nav-items' sx={{ transition: 'padding .25s ease', pr: 2 }}>
            {RenderMenuItems}
        </List>
    </Box>
  )
}

export default Navigation