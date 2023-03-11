import "./MainLayout.css"

// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Fab from '@mui/material/Fab'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'

// ** Icons Imports
import ArrowUp from 'mdi-material-ui/ArrowUp'

// ** Type Import
import { LayoutProps } from './types'
import Navigation from './Navigation'
import LayoutAppBar from './AppBar'

// // ** Components
// import AppBar from './components/vertical/appBar'
// import Footer from './components/shared-components/footer'
// import ScrollToTop from 'src/@core/components/scroll-to-top'

// // ** Styled Component
// import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const MainLayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex'
})

const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
})

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(3),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

const MainLayout = (props: LayoutProps) => {
  // ** Props
  const { children } = props

  // ** States
  const [navVisible, setNavVisible] = useState<boolean>(false)

  // ** Toggle Functions
  const toggleNavVisibility = () => setNavVisible(!navVisible)
  
  const showBackdrop = navVisible ? "backdrop-show" : '';

  return (
      <MainLayoutWrapper style={{
        background: '#a3ebff'
      }}>
        <Navigation
          navVisible={navVisible}
          setNavVisible={setNavVisible}
          toggleNavVisibility={toggleNavVisibility}
          loggedIn={props.loggedIn}
        />
        
        <div id="backdrop" className={showBackdrop} onClick={toggleNavVisibility}></div>

        <MainContentWrapper style={{
          backgroundColor: '#eaf6ff',
        }}>
          <LayoutAppBar navVisible={navVisible} toggleNavVisibility={toggleNavVisibility} {...props} />
          <ContentWrapper
            className='layout-page-content'
            sx={{
                mx: 'auto',
                '@media (min-width:1440px)': { maxWidth: 1440 },
                '@media (min-width:1200px)': { maxWidth: '100%' }
            }}
          >
            {children}
          </ContentWrapper>

          {/* Footer Component */}
          {/* <Footer {...props} /> */}
          <div style={{
            padding: '1rem 1.5rem',
          }}>
            &copy; 2023 by William - LGH 1202
          </div>
        </MainContentWrapper>
      </MainLayoutWrapper>
  )
}

export default MainLayout