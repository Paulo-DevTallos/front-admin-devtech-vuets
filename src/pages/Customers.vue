<template>
  <div>
    <table v-for="customer in customers" :key="customer._id">
      <thead>
        <tr>
          <th v-if="customer.customer_name" >name</th>
          <th v-if="customer.email">email</th>
          <th v-if="customer.dados_da_compra">dados da compra</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ customer.customer_name }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.dados_da_compra }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import customerService from '@/service/customerService'
import type { Customer } from '@/interfaces/customers';
export default defineComponent({
  name: 'Customers',
  data() {
    return {
      //customers: [] as Customer[],
      customers: [],
      customers2: [],
    }
  },
  methods: {
    getAllCustomers() {
      this.customers = [
        { id: 1, customer_name: 'Rafael 1', email: 'email@rafa.com', dados_da_compra: 'ola' },
        { id: 2, customer_name: 'Rafael 2', email: 'email@rafa2.com', dados_da_compra: '' },
        { id: 3, customer_name: 'Rafael 3', email: 'email@rafa3.com', dados_da_compra: '' },
      ];
      this.customers2 = [
        { id: 1, customer_name: 'Rafael 1', email: 'email@rafa1.com', dados_da_compra: 'ola' },
        { id: 2, customer_name: 'Rafael 2', email: 'email@rafa22.com', dados_da_compra: 'ola' },
        { id: 3, customer_name: 'Rafael 3', email: 'email@rafa33.com', dados_da_compra: 'ola' },
      ];
    }
    /*async getAllCustomers() {
      await customerService.getCustomers().then(res => {
        this.customers = res.data.customer
      })
    }*/
  },
  mounted() {
    this.getAllCustomers()
  }
});
</script>
