import React from 'react'
import jsonServerProvider from 'ra-data-json-server'
import { Admin, Resource } from 'react-admin'
import { UserList } from './users'
import { PostList } from './posts'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} />
      <Resource name="users" list={UserList} />
    </Admin>
  )
}

export default App
