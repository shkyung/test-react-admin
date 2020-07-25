import React from 'react'
import jsonServerProvider from 'ra-data-json-server'
import { Admin, Resource, EditGuesser } from 'react-admin'
import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'
import { UserList } from './users'
import { PostList, PostEdit, PostCreate } from './posts'
import Dashboard from './Dashboard'
import authProvider from './authProvider'
import Layout from './Layout'
import { AppProvider } from './AppContext'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

function App() {
  return (
    <Admin
      layout={Layout}
      dashboard={Dashboard}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
      <Resource name="posts/1" list={PostList} />
      <Resource name="posts/1/comments" list={PostList} />
      <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
  )
}

export default App
