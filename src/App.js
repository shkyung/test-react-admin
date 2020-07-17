import React from 'react'
import jsonServerProvider from 'ra-data-json-server'
import { Admin, Resource, EditGuesser } from 'react-admin'
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
      />
      <Resource name="users" list={UserList} />
    </Admin>
  )
}

export default App
