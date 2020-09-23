import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment-timezone'
//import {apiCall, apiLogin} from '@/config/apiConfig'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orden: {
      "num_orden": 123456,
      "monto": 1540000,
      "cant_productos": 160,
      "fecha_entrega": "2020-07-20T00:00:00.000Z",
      "vendedor": "Luis Fuentes",
      "avance_preparacion": 0.6,
      "estado": "Preparacion"
  },
  cliente: {
      "nombre": "Sociedad Comercial AYSA SA",
      "rut_n": 82340250,
      "rut_dv": "2",
      "direccion_entrega": "Meiggs 123 Loc 1",
      "contacto": "Manuel Morales",
      "fono": "+56 22 234 4434",
      "email": "mmorales@aysa.cl"
  },
  productos: [
      {
          "cod_prod": "123",
          "descripcion": "1969 Harley Davidson Ultimate Chopper",
          "precio_unit": 1540,
          "cant_pedido": 160,
          "cant_pickeado": 0
      },
      {
          "cod_prod": "234",
          "descripcion": "1968 Ford Mustang",
          "precio_unit": 980,
          "cant_pedido": 45,
          "cant_pickeado": 10
      },
      {
          "cod_prod": "126",
          "descripcion": "1917 Grand Touring Sedan",
          "precio_unit": 2400,
          "cant_pedido": 120,
          "cant_pickeado": 80
      },
      {
          "cod_prod": "241",
          "descripcion": "1957 Corvette Convertible",
          "precio_unit": 1740,
          "cant_pedido": 70,
          "cant_pickeado": 70
      }
  ]
  },
  getters: {
    getFixedAdvance(state)
    {
      let percentage = state.orden.avance_preparacion*100;
      return percentage
    },
    getFixedDate(state)
    {
      let date = moment.tz(state.orden.fecha_entrega, "UTC");
      return date.format("DD/MM/YYYY")
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
