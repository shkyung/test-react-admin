//import MyNotification from './MyNotification';
import React, { forwardRef } from 'react'
import { Layout, AppBar, UserMenu, MenuItemLink } from 'react-admin'
import SettingsIcon from '@material-ui/icons/Settings'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

const MyLayout = (props) => (
  <Layout
    {...props}
    appBar={MyAppBar}
    //sidebar={MySidebar}
    //menu={MyMenu}
    //notification={MyNotification}
  />
)

export default MyLayout

const useStyles = makeStyles({
  avatar: {
    height: 30,
    width: 30
  }
})

const ConfigurationMenu = forwardRef(({ onClick }, ref) => (
  <MenuItemLink
    ref={ref}
    to="/configuration"
    primaryText="Configuration"
    leftIcon={<SettingsIcon />}
    onClick={onClick} // close the menu on click
  />
))

const MyCustomIcon = () => {
  const classes = useStyles()
  return (
    <Avatar
      className={classes.avatar}
      src="https://marmelab.com/images/avatars/adrien.jpg"
    />
  )
}

const MyUserMenu = (props) => (
  <UserMenu {...props} icon={<MyCustomIcon />}>
    <ConfigurationMenu />
  </UserMenu>
)

const MyAppBar = (props) => <AppBar {...props} userMenu={<MyUserMenu />} />
