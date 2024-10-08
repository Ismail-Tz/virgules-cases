// This file contains the Vuex store configuration for the app.
import { createStore } from "vuex";

import iP15_M1_C1 from "@/assets/Images/iP15_M1_C1.png";
import iP15_M1_C2 from "@/assets/Images/iP15_M1_C2.png";
import iP15_M1_C3 from "@/assets/Images/iP15_M1_C3.png";
import iP15P_M1_C1 from "@/assets/Images/iP15P_M1_C1.png";
import iP15P_M1_C2 from "@/assets/Images/iP15P_M1_C2.png";
import iP15P_M1_C3 from "@/assets/Images/iP15P_M1_C3.png";
import iP15Pro_M1_C1 from "@/assets/Images/iP15Pro_M1_C1.png";
import iP15Pro_M1_C2 from "@/assets/Images/iP15Pro_M1_C2.png";
import iP15Pro_M1_C3 from "@/assets/Images/iP15Pro_M1_C3.png";
import iP15ProM_M1_C1 from "@/assets/Images/iP15ProM_M1_C1.png";
import iP15ProM_M1_C2 from "@/assets/Images/iP15ProM_M1_C2.png";
import iP15ProM_M1_C3 from "@/assets/Images/iP15ProM_M1_C3.png";
import s24_M1_C1 from "@/assets/Images/S24_M1_C1.png";
import s24_M1_C2 from "@/assets/Images/S24_M1_C2.png";
import s24_M1_C3 from "@/assets/Images/S24_M1_C3.png";
import s24P_M1_C1 from "@/assets/Images/S24P_M1_C1.png";
import s24P_M1_C2 from "@/assets/Images/S24P_M1_C2.png";
import s24P_M1_C3 from "@/assets/Images/S24P_M1_C3.png";
import s24U_M1_C1 from "@/assets/Images/S24U_M1_C1.png";
import s24U_M1_C2 from "@/assets/Images/S24U_M1_C2.png";
import s24U_M1_C3 from "@/assets/Images/S24U_M1_C3.png";
import p8_M1_C1 from "@/assets/Images/P8_M1_C1.png";
import p8_M1_C2 from "@/assets/Images/P8_M1_C2.png";
import p8_M1_C3 from "@/assets/Images/P8_M1_C3.png";
import p8Pro_M1_C1 from "@/assets/Images/P8Pro_M1_C1.png";
import p8Pro_M1_C2 from "@/assets/Images/P8Pro_M1_C2.png";
import p8Pro_M1_C3 from "@/assets/Images/P8Pro_M1_C3.png";

import iP15_M2_C1 from "@/assets/Images/iP15_M2_C1.png";
import iP15_M2_C2 from "@/assets/Images/iP15_M2_C2.png";
import iP15_M2_C3 from "@/assets/Images/iP15_M2_C3.png";
import iP15_M2_C4 from "@/assets/Images/iP15_M2_C4.png";
import iP15P_M2_C1 from "@/assets/Images/iP15P_M2_C1.png";
import iP15P_M2_C2 from "@/assets/Images/iP15P_M2_C2.png";
import iP15P_M2_C3 from "@/assets/Images/iP15P_M2_C3.png";
import iP15P_M2_C4 from "@/assets/Images/iP15P_M2_C4.png";
import iP15Pro_M2_C1 from "@/assets/Images/iP15Pro_M2_C1.png";
import iP15Pro_M2_C2 from "@/assets/Images/iP15Pro_M2_C2.png";
import iP15Pro_M2_C3 from "@/assets/Images/iP15Pro_M2_C3.png";
import iP15Pro_M2_C4 from "@/assets/Images/iP15Pro_M2_C4.png";
import iP15ProM_M2_C1 from "@/assets/Images/iP15ProM_M2_C1.png";
import iP15ProM_M2_C2 from "@/assets/Images/iP15ProM_M2_C2.png";
import iP15ProM_M2_C3 from "@/assets/Images/iP15ProM_M2_C3.png";
import iP15ProM_M2_C4 from "@/assets/Images/iP15ProM_M2_C4.png";
import s24_M2_C1 from "@/assets/Images/S24_M2_C1.png";
import s24_M2_C2 from "@/assets/Images/S24_M2_C2.png";
import s24_M2_C3 from "@/assets/Images/S24_M2_C3.png";
import s24_M2_C4 from "@/assets/Images/S24_M2_C4.png";
import s24P_M2_C1 from "@/assets/Images/S24P_M2_C1.png";
import s24P_M2_C2 from "@/assets/Images/S24P_M2_C2.png";
import s24P_M2_C3 from "@/assets/Images/S24P_M2_C3.png";
import s24P_M2_C4 from "@/assets/Images/S24P_M2_C4.png";
import s24U_M2_C1 from "@/assets/Images/S24U_M2_C1.png";
import s24U_M2_C2 from "@/assets/Images/S24U_M2_C2.png";
import s24U_M2_C3 from "@/assets/Images/S24U_M2_C3.png";
import s24U_M2_C4 from "@/assets/Images/S24U_M2_C4.png";
import p8_M2_C1 from "@/assets/Images/P8_M2_C1.png";
import p8_M2_C2 from "@/assets/Images/P8_M2_C2.png";
import p8_M2_C3 from "@/assets/Images/P8_M2_C3.png";
import p8_M2_C4 from "@/assets/Images/P8_M2_C4.png";
import p8Pro_M2_C1 from "@/assets/Images/P8Pro_M2_C1.png";
import p8Pro_M2_C2 from "@/assets/Images/P8Pro_M2_C2.png";
import p8Pro_M2_C3 from "@/assets/Images/P8Pro_M2_C3.png";
import p8Pro_M2_C4 from "@/assets/Images/P8Pro_M2_C4.png";

import iP15_M3_C1 from "@/assets/Images/iP15_M3_C1.png";
import iP15_M3_C2 from "@/assets/Images/iP15_M3_C2.png";
import iP15_M3_C3 from "@/assets/Images/iP15_M3_C3.png";
import iP15P_M3_C1 from "@/assets/Images/iP15P_M3_C1.png";
import iP15P_M3_C2 from "@/assets/Images/iP15P_M3_C2.png";
import iP15P_M3_C3 from "@/assets/Images/iP15P_M3_C3.png";
import iP15Pro_M3_C1 from "@/assets/Images/iP15Pro_M3_C1.png";
import iP15Pro_M3_C2 from "@/assets/Images/iP15Pro_M3_C2.png";
import iP15Pro_M3_C3 from "@/assets/Images/iP15Pro_M3_C3.png";
import iP15ProM_M3_C1 from "@/assets/Images/iP15ProM_M3_C1.png";
import iP15ProM_M3_C2 from "@/assets/Images/iP15ProM_M3_C2.png";
import iP15ProM_M3_C3 from "@/assets/Images/iP15ProM_M3_C3.png";
import s24_M3_C1 from "@/assets/Images/S24_M3_C1.png";
import s24_M3_C2 from "@/assets/Images/S24_M3_C2.png";
import s24_M3_C3 from "@/assets/Images/S24_M3_C3.png";
import s24P_M3_C1 from "@/assets/Images/S24P_M3_C1.png";
import s24P_M3_C2 from "@/assets/Images/S24P_M3_C2.png";
import s24P_M3_C3 from "@/assets/Images/S24P_M3_C3.png";
import s24U_M3_C1 from "@/assets/Images/S24U_M3_C1.png";
import s24U_M3_C2 from "@/assets/Images/S24U_M3_C2.png";
import s24U_M3_C3 from "@/assets/Images/S24U_M3_C3.png";
import p8_M3_C1 from "@/assets/Images/P8_M3_C1.png";
import p8_M3_C2 from "@/assets/Images/P8_M3_C2.png";
import p8_M3_C3 from "@/assets/Images/P8_M3_C3.png";
import p8Pro_M3_C1 from "@/assets/Images/P8Pro_M3_C1.png";
import p8Pro_M3_C2 from "@/assets/Images/P8Pro_M3_C2.png";
import p8Pro_M3_C3 from "@/assets/Images/P8Pro_M3_C3.png";

export const store = createStore({
  state: {
    products: [
      {
        title: "Case Model 1",
        type: "Clear Case",
        designer: "Ismail Touzzane",
        isCustomizable: true,
        price: 199,
        colors: [
          {
            id: 1,
            colorName: "Hot Pink",
            colorHex: "#FB4DD4",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_M1_C1 },
                { name: "iPhone 15 Plus", image: iP15P_M1_C1 },
                { name: "iPhone 15 Pro", image: iP15Pro_M1_C1 },
                { name: "iPhone 15 Pro Max", image: iP15ProM_M1_C1 },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_M1_C1 },
                { name: "Galaxy S24+", image: s24P_M1_C1 },
                { name: "Galaxy S24 Ultra", image: s24U_M1_C1 },
              ],
              Google: [
                { name: "Pixel 8", image: p8_M1_C1 },
                { name: "Pixel 8 Pro", image: p8Pro_M1_C1 },
              ],
            },
          },
          {
            id: 2,
            colorName: "Lime Green",
            colorHex: "#C3FB4D",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_M1_C2 },
                { name: "iPhone 15 Plus", image: iP15P_M1_C2 },
                { name: "iPhone 15 Pro", image: iP15Pro_M1_C2 },
                { name: "iPhone 15 Pro Max", image: iP15ProM_M1_C2 },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_M1_C2 },
                { name: "Galaxy S24+", image: s24P_M1_C2 },
                { name: "Galaxy S24 Ultra", image: s24U_M1_C2 },
              ],
              Google: [
                { name: "Pixel 8", image: p8_M1_C2 },
                { name: "Pixel 8 Pro", image: p8Pro_M1_C2 },
              ],
            },
          },
          {
            id: 3,
            colorName: "Gold",
            colorHex: "#FFB830",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_M1_C3 },
                { name: "iPhone 15 Plus", image: iP15P_M1_C3 },
                { name: "iPhone 15 Pro", image: iP15Pro_M1_C3 },
                { name: "iPhone 15 Pro Max", image: iP15ProM_M1_C3 },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_M1_C3 },
                { name: "Galaxy S24+", image: s24P_M1_C3 },
                { name: "Galaxy S24 Ultra", image: s24U_M1_C3 },
              ],
              Google: [
                { name: "Pixel 8", image: p8_M1_C3 },
                { name: "Pixel 8 Pro", image: p8Pro_M1_C3 },
              ],
            },
          },
          // Add more color options as needed
        ],
      },
      {
        title: "Case Model 2",
        type: "Clear Case",
        designer: "Ismail Touzzane",
        isCustomizable: false,
        price: 199,
        colors: [
          {
            id: 1,
            colorName: "Purple",
            colorHex: "#D660FF",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_M2_C1 },
                { name: "iPhone 15 Plus", image: iP15P_M2_C1 },
                { name: "iPhone 15 Pro", image: iP15Pro_M2_C1 },
                { name: "iPhone 15 Pro Max", image: iP15ProM_M2_C1 },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_M2_C1 },
                { name: "Galaxy S24+", image: s24P_M2_C1 },
                { name: "Galaxy S24 Ultra", image: s24U_M2_C1 },
              ],
              Google: [
                { name: "Pixel 8", image: p8_M2_C1 },
                { name: "Pixel 8 Pro", image: p8Pro_M2_C1 },
              ],
            },
          },
          {
            id: 2,
            colorName: "Rose",
            colorHex: "#FF60AC",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_M2_C2 },
                { name: "iPhone 15 Plus", image: iP15P_M2_C2 },
                { name: "iPhone 15 Pro", image: iP15Pro_M2_C2 },
                { name: "iPhone 15 Pro Max", image: iP15ProM_M2_C2 },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_M2_C2 },
                { name: "Galaxy S24+", image: s24P_M2_C2 },
                { name: "Galaxy S24 Ultra", image: s24U_M2_C2 },
              ],
              Google: [
                { name: "Pixel 8", image: p8_M2_C2 },
                { name: "Pixel 8 Pro", image: p8Pro_M2_C2 },
              ],
            },
          },
          {
            id: 3,
            colorName: "Orange",
            colorHex: "#FF7D34",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_M2_C3 },
                { name: "iPhone 15 Plus", image: iP15P_M2_C3 },
                { name: "iPhone 15 Pro", image: iP15Pro_M2_C3 },
                { name: "iPhone 15 Pro Max", image: iP15ProM_M2_C3 },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_M2_C3 },
                { name: "Galaxy S24+", image: s24P_M2_C3 },
                { name: "Galaxy S24 Ultra", image: s24U_M2_C3 },
              ],
              Google: [
                { name: "Pixel 8", image: p8_M2_C3 },
                { name: "Pixel 8 Pro", image: p8Pro_M2_C3 },
              ],
            },
          },
          {
            id: 4,
            colorName: "Lime Green",
            colorHex: "#C3FB4D",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_M2_C4 },
                { name: "iPhone 15 Plus", image: iP15P_M2_C4 },
                { name: "iPhone 15 Pro", image: iP15Pro_M2_C4 },
                { name: "iPhone 15 Pro Max", image: iP15ProM_M2_C4 },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_M2_C4 },
                { name: "Galaxy S24+", image: s24P_M2_C4 },
                { name: "Galaxy S24 Ultra", image: s24U_M2_C4 },
              ],
              Google: [
                { name: "Pixel 8", image: p8_M2_C4 },
                { name: "Pixel 8 Pro", image: p8Pro_M2_C4 },
              ],
            },
          },

          // Add more color options as needed
        ],
      },
      {
        title: "Case Model 3",
        type: "Clear Case",
        designer: "Ismail Touzzane",
        isCustomizable: false,
        price: 199,
        colors: [
          {
            id: 1,
            colorName: "Cool Green",
            colorHex: "#7EE5D8",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_M3_C1 },
                { name: "iPhone 15 Plus", image: iP15P_M3_C1 },
                { name: "iPhone 15 Pro", image: iP15Pro_M3_C1 },
                { name: "iPhone 15 Pro Max", image: iP15ProM_M3_C1 },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_M3_C1 },
                { name: "Galaxy S24+", image: s24P_M3_C1 },
                { name: "Galaxy S24 Ultra", image: s24U_M3_C1 },
              ],
              Google: [
                { name: "Pixel 8", image: p8_M3_C1 },
                { name: "Pixel 8 Pro", image: p8Pro_M3_C1 },
              ],
            },
          },
          {
            id: 2,
            colorName: "Green",
            colorHex: "#2EEA89",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_M3_C2 },
                { name: "iPhone 15 Plus", image: iP15P_M3_C2 },
                { name: "iPhone 15 Pro", image: iP15Pro_M3_C2 },
                { name: "iPhone 15 Pro Max", image: iP15ProM_M3_C2 },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_M3_C2 },
                { name: "Galaxy S24+", image: s24P_M3_C2 },
                { name: "Galaxy S24 Ultra", image: s24U_M3_C2 },
              ],
              Google: [
                { name: "Pixel 8", image: p8_M3_C2 },
                { name: "Pixel 8 Pro", image: p8Pro_M3_C2 },
              ],
            },
          },
          {
            id: 3,
            colorName: "Red",
            colorHex: "#FF6060",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_M3_C3 },
                { name: "iPhone 15 Plus", image: iP15P_M3_C3 },
                { name: "iPhone 15 Pro", image: iP15Pro_M3_C3 },
                { name: "iPhone 15 Pro Max", image: iP15ProM_M3_C3 },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_M3_C3 },
                { name: "Galaxy S24+", image: s24P_M3_C3 },
                { name: "Galaxy S24 Ultra", image: s24U_M3_C3 },
              ],
              Google: [
                { name: "Pixel 8", image: p8_M3_C3 },
                { name: "Pixel 8 Pro", image: p8Pro_M3_C3 },
              ],
            },
          },
          // Add more color options as needed
        ],
      },

      // Add more products as needed
    ],
    bag: [],
    orders: [],

    selectedOptions: {
      customizable: [],
      collection: [],
      artist: [],
      printStyle: [],
    },
  },
  mutations: {
    ADD_TO_BAG(state, product) {
      state.bag.push(product);
    },
    SET_BAG(state, bag) {
      state.bag = bag;
    },
    clearBag(state) {
      state.bag = [];
      localStorage.removeItem("bag"); // Clear the local storage
    },
    REMOVE_ITEM(state, index) {
      state.bag.splice(index, 1);
      localStorage.setItem("bag", JSON.stringify(state.bag)); // Sync localStorage
    },

    // Order-related mutations
    ADD_ORDER(state, order) {
      state.orders.push(order);
    },
    SET_ORDERS(state, orders) {
      state.orders = orders;
    },
    CLEAR_ORDERS(state) {
      state.orders = [];
      
    },

    // Mutation to update selectedOptions
    setSelectedOption(state, { key, option }) {
      const options = state.selectedOptions[key];
      const index = options.indexOf(option);
      if (index === -1) {
        options.push(option);
      } else {
        options.splice(index, 1);
      }
    },

    updateProductImage(state, { productIndex, newImage }) {
      state.bag[productIndex].image = newImage;
    },
  },
  actions: {
    addToBag({ commit }, product) {
      commit("ADD_TO_BAG", product);
    },
    initializeBag({ commit }) {
      const bag = JSON.parse(localStorage.getItem("bag")) || [];
      commit("SET_BAG", bag);
    },

    toggleOption({ commit }, payload) {
      commit("setSelectedOption", payload);
    },
    updateProductImage({ commit }, { productIndex, newImage }) {
      commit('updateProductImage', { productIndex, newImage });
    },
  },
  getters: {
    products: (state) => state.products,
    bagItems: (state) => state.bag,

    //Getting Available Devices from Products Objects
    availableDevices: (state) => {
      const devices = {};

      state.products.forEach((product) => {
        product.colors.forEach((color) => {
          for (const [brand, models] of Object.entries(color.availableModels)) {
            if (!devices[brand]) {
              devices[brand] = new Set(); // Using a Set to avoid repetition
            }
            models.forEach((model) => devices[brand].add(model.name)); // Add unique device names
          }
        });
      });

      // Convert the Sets back to arrays for easier use in the component
      const devicesObj = {};
      Object.keys(devices).forEach((brand) => {
        devicesObj[brand] = Array.from(devices[brand]);
      });

      return devicesObj;
    },

    filteredProducts: (state) => {
      return state.products.filter((product) => {
        // Check if "Customizable" is selected in the dropdown
        const isCustomizableSelected =
          state.selectedOptions.customizable.includes("Customizable");
        // If "Customizable" is selected, return only customizable products
        if (isCustomizableSelected) {
          return product.isCustomizable;
        }
        // If "Customizable" is not selected, return all products
        return true;
      });
    },
  },
});
