import React, { cloneElement, useMemo, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Create,
  Filter,
  useListContext,
  TopToolbar,
  CreateButton,
  ExportButton,
  Button,
  sanitizeListRestProps,
  BulkDeleteButton,
  BooleanInput
} from 'react-admin'

import IconEvent from '@material-ui/icons/Event'
import ResetViewsButton from './ResetViewsButton'

const ListActions = (props) => {
  const { className, exporter, filters, maxResults, ...rest } = props
  const {
    currentSort,
    resource,
    displayedFilters,
    filterValues,
    hasCreate,
    basePath,
    selectedIds,
    showFilter,
    total
  } = useListContext()
  return (
    <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
      {filters &&
        cloneElement(filters, {
          resource,
          showFilter,
          displayedFilters,
          filterValues,
          context: 'button'
        })}
      <CreateButton basePath={basePath} />
      {/* 필요없는 export버튼을 비활성화 하는 방법*/}
      {/*<ExportButton*/}
      {/*  disabled={total === 0}*/}
      {/*  resource={resource}*/}
      {/*  sort={currentSort}*/}
      {/*  filterValues={filterValues}*/}
      {/*  maxResults={maxResults}*/}
      {/*/>*/}
      {/* Add your custom actions */}
      <Button
        onClick={() => {
          alert('Your custom action')
        }}
        label="Show calendar"
      >
        <IconEvent />
      </Button>
    </TopToolbar>
  )
}

const PostFilter = (props) => (
  <Filter {...props}>
    {/*<TextInput label="Search" source="q" alwaysOn />*/}
    {/*<ReferenceInput*/}
    {/*  label="User"*/}
    {/*  source="userId"*/}
    {/*  reference="users"*/}
    {/*  allowEmpty*/}
    {/*  alwaysOn*/}
    {/*>*/}
    {/*  <SelectInput optionText="name" />*/}
    {/*</ReferenceInput>*/}
    <TextInput label="Search" source="q" alwaysOn />
    <BooleanInput source="is_published" alwaysOn />
    {/*Error: Cannot use alwaysOn and defaultValue on a filter input. if below textinput has alwaysOn*/}
    <TextInput source="title" defaultValue="Hello, World!" />
  </Filter>
)

const PostBulkActionButtons = (props) => (
  <Fragment>
    <ResetViewsButton label="Reset Views" {...props} />
    {/* default bulk delete action */}
    <BulkDeleteButton {...props} />
  </Fragment>
)

export const PostList = (props) => (
  <List
    title="List of posts"
    bulkActionButtons={<PostBulkActionButtons />}
    actions={<ListActions />}
    filters={<PostFilter />}
    filterDefaultValues={{ is_published: false }}
    {...props}
  >
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
)

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>
}

export const PostEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
)

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
)
