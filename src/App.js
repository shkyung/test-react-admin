import React from 'react'
import jsonServerProvider from 'ra-data-json-server'
import { Admin, Resource, EditGuesser } from 'react-admin'
import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'
import { UserList } from './users'
import { PostList, PostEdit, PostCreate } from './posts'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
      <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
  )
}

export default App
