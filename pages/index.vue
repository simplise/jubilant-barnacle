<template>
 <ViewState
  v-slot="users"
  src="reqres://users"
  path="data"
 >
  <b-table striped>
   <thead>
    <tr>
     <th scope="col">
      id
     </th>
     <th scope="col">
      email
     </th>
     <th scope="col">
      first_name
     </th>
     <th scope="col">
      last_name
     </th>
     <th scope="col">
      avatar
     </th>
    </tr>
   </thead>
   <tbody>
    <tr
     v-for="item in users.data"
     :key="item"
    >
     <td>{{ item.id }}</td>
     <td>{{ item.email }}</td>
     <td>{{ item.first_name }}</td>
     <td>{{ item.last_name }}</td>
     <td>
      <img :src="item.avatar" />
     </td>
    </tr>
   </tbody>
  </b-table>
 </ViewState>
</template>
