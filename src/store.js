// This file contains the Vuex store configuration for the app.
import { createStore } from "vuex";

import iP15_Red from "@/assets/Images/iP15_Red.jpg";
import iP15_Green from "@/assets/Images/iP15_Green.jpg";
import iP15_CoolGreen from "@/assets/Images/iP15_CoolGreen.jpg";

import iP15p_Red from "@/assets/Images/iP15+_Red.jpg";
import iP15p_Green from "@/assets/Images/iP15+_Green.jpg";
import iP15p_CoolGreen from "@/assets/Images/iP15+_CoolGreen.jpg";

import iP15Pro_Red from "@/assets/Images/iP15Pro_Red.jpg";
import iP15Pro_Green from "@/assets/Images/iP15Pro_Green.jpg";
import iP15Pro_CoolGreen from "@/assets/Images/iP15Pro_CoolGreen.jpg";

import iP15ProM_Red from "@/assets/Images/iP15ProM_Red.jpg";
import iP15ProM_Green from "@/assets/Images/iP15ProM_Green.jpg";
import iP15ProM_CoolGreen from "@/assets/Images/iP15ProM_CoolGreen.jpg";

import s24_Red from "@/assets/Images/S24_Red.jpg";
import s24_Green from "@/assets/Images/S24_Green.jpg";
import s24_CoolGreen from "@/assets/Images/S24_CoolGreen.jpg";

import s24p_Red from "@/assets/Images/S24+_Red.jpg";
import s24p_Green from "@/assets/Images/S24+_Green.jpg";
import s24p_CoolGreen from "@/assets/Images/S24+_CoolGreen.jpg";

import s24U_Red from "@/assets/Images/S24U_Red.jpg";
import s24U_Green from "@/assets/Images/S24U_Green.jpg";
import s24U_CoolGreen from "@/assets/Images/S24U_CoolGreen.jpg";

import p8_Red from "@/assets/Images/P8_Red.jpg";
import p8_Green from "@/assets/Images/P8_Green.jpg";
import p8_CoolGreen from "@/assets/Images/P8_CoolGreen.jpg";

import p8Pro_Red from "@/assets/Images/P8Pro_Red.jpg";
import p8Pro_Green from "@/assets/Images/P8Pro_Green.jpg";
import p8Pro_CoolGreen from "@/assets/Images/P8Pro_CoolGreen.jpg";

import iP15Pro_CoolGreen_Transparent from "@/assets/Images/iP15Pro_CoolGreen.png";

export const store = createStore({
  state: {
    products: [
      {
        image: iP15Pro_CoolGreen_Transparent,
        altText: "Case Image",
        title: "OG Virgules",
        type: "Clear Case",
        designer: "Ismail Touzzane",
        isCustomizable: true,
        price: 199,
        colors: [
          {
            id: 1,
            colorName: "Cool Green",
            colorHex: "#7EE5D8",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_CoolGreen },
                { name: "iPhone 15 Plus", image: iP15p_CoolGreen },
                { name: "iPhone 15 Pro", image: iP15Pro_CoolGreen },
                { name: "iPhone 15 Pro Max", image: iP15ProM_CoolGreen },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_CoolGreen },
                { name: "Galaxy S24+", image: s24p_CoolGreen },
                { name: "Galaxy S24 Ultra", image: s24U_CoolGreen },
              ],
              Google: [
                { name: "Pixel 8", image: p8_CoolGreen },
                { name: "Pixel 8 Pro", image: p8Pro_CoolGreen },
              ],
            },
          },
          {
            id: 2,
            colorName: "Red",
            colorHex: "#FF6060",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_Red },
                { name: "iPhone 15 Plus", image: iP15p_Red },
                { name: "iPhone 15 Pro", image: iP15Pro_Red },
                { name: "iPhone 15 Pro Max", image: iP15ProM_Red },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_Red },
                { name: "Galaxy S24+", image: s24p_Red },
                { name: "Galaxy S24 Ultra", image: s24U_Red },
              ],
              Google: [
                { name: "Pixel 8", image: p8_Red },
                { name: "Pixel 8 Pro", image: p8Pro_Red },
              ],
            },
          },
          {
            id: 3,
            colorName: "Green",
            colorHex: "#2EEA89",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_Green },
                { name: "iPhone 15 Plus", image: iP15p_Green },
                { name: "iPhone 15 Pro", image: iP15Pro_Green },
                { name: "iPhone 15 Pro Max", image: iP15ProM_Green },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_Green },
                { name: "Galaxy S24+", image: s24p_Green },
                { name: "Galaxy S24 Ultra", image: s24U_Green },
              ],
              Google: [
                { name: "Pixel 8", image: p8_Green },
                { name: "Pixel 8 Pro", image: p8Pro_Green },
              ],
            },
          },
          // Add more color options as needed
        ],
      },
      {
        image: iP15Pro_CoolGreen_Transparent,
        altText: "Case Image",
        title: "Case Model 2",
        type: "Clear Case",
        designer: "Ismail Touzzane",
        isCustomizable: false,
        price: 199,
        colors: [
            {
                id: 1,
                colorName: "Green",
                colorHex: "#2EEA89",
                availableModels: {
                  Apple: [
                    { name: "iPhone 15", image: iP15_Green },
                    { name: "iPhone 15 Plus", image: iP15p_Green },
                    { name: "iPhone 15 Pro", image: iP15Pro_Green },
                    { name: "iPhone 15 Pro Max", image: iP15ProM_Green },
                  ],
                  Samsung: [
                    { name: "Galaxy S24", image: s24_Green },
                    { name: "Galaxy S24+", image: s24p_Green },
                    { name: "Galaxy S24 Ultra", image: s24U_Green },
                  ],
                  Google: [
                    { name: "Pixel 8", image: p8_Green },
                    { name: "Pixel 8 Pro", image: p8Pro_Green },
                  ],
                },
              },
          {
            id: 2,
            colorName: "Cool Green",
            colorHex: "#7EE5D8",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_CoolGreen },
                { name: "iPhone 15 Plus", image: iP15p_CoolGreen },
                { name: "iPhone 15 Pro", image: iP15Pro_CoolGreen },
                { name: "iPhone 15 Pro Max", image: iP15ProM_CoolGreen },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_CoolGreen },
                { name: "Galaxy S24+", image: s24p_CoolGreen },
                { name: "Galaxy S24 Ultra", image: s24U_CoolGreen },
              ],
              Google: [
                { name: "Pixel 8", image: p8_CoolGreen },
                { name: "Pixel 8 Pro", image: p8Pro_CoolGreen },
              ],
            },
          },
          {
            id: 3,
            colorName: "Red",
            colorHex: "#FF6060",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_Red },
                { name: "iPhone 15 Plus", image: iP15p_Red },
                { name: "iPhone 15 Pro", image: iP15Pro_Red },
                { name: "iPhone 15 Pro Max", image: iP15ProM_Red },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_Red },
                { name: "Galaxy S24+", image: s24p_Red },
                { name: "Galaxy S24 Ultra", image: s24U_Red },
              ],
              Google: [
                { name: "Pixel 8", image: p8_Red },
                { name: "Pixel 8 Pro", image: p8Pro_Red },
              ],
            },
          },
          
          // Add more color options as needed
        ],
      },
      {
        image: iP15Pro_CoolGreen_Transparent,
        altText: "Case Image",
        title: "Case Model 3",
        type: "Clear Case",
        designer: "Ismail Touzzane",
        isCustomizable: false,
        price: 199,
        colors: [
          {
            id: 1,
            colorName: "Red",
            colorHex: "#FF6060",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_Red },
                { name: "iPhone 15 Plus", image: iP15p_Red },
                { name: "iPhone 15 Pro", image: iP15Pro_Red },
                { name: "iPhone 15 Pro Max", image: iP15ProM_Red },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_Red },
                { name: "Galaxy S24+", image: s24p_Red },
                { name: "Galaxy S24 Ultra", image: s24U_Red },
              ],
              Google: [
                { name: "Pixel 8", image: p8_Red },
                { name: "Pixel 8 Pro", image: p8Pro_Red },
              ],
            },
          },
          {
            id: 2,
            colorName: "Cool Green",
            colorHex: "#7EE5D8",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_CoolGreen },
                { name: "iPhone 15 Plus", image: iP15p_CoolGreen },
                { name: "iPhone 15 Pro", image: iP15Pro_CoolGreen },
                { name: "iPhone 15 Pro Max", image: iP15ProM_CoolGreen },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_CoolGreen },
                { name: "Galaxy S24+", image: s24p_CoolGreen },
                { name: "Galaxy S24 Ultra", image: s24U_CoolGreen },
              ],
              Google: [
                { name: "Pixel 8", image: p8_CoolGreen },
                { name: "Pixel 8 Pro", image: p8Pro_CoolGreen },
              ],
            },
          },

          {
            id: 3,
            colorName: "Green",
            colorHex: "#2EEA89",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_Green },
                { name: "iPhone 15 Plus", image: iP15p_Green },
                { name: "iPhone 15 Pro", image: iP15Pro_Green },
                { name: "iPhone 15 Pro Max", image: iP15ProM_Green },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_Green },
                { name: "Galaxy S24+", image: s24p_Green },
                { name: "Galaxy S24 Ultra", image: s24U_Green },
              ],
              Google: [
                { name: "Pixel 8", image: p8_Green },
                { name: "Pixel 8 Pro", image: p8Pro_Green },
              ],
            },
          },
          // Add more color options as needed
        ],
      },
      {
        image: iP15Pro_CoolGreen_Transparent,
        altText: "Case Image",
        title: "Case Model 4",
        type: "Clear Case",
        designer: "Ismail Touzzane",
        isCustomizable: false,
        price: 199,
        colors: [
          {
            id: 1,
            colorName: "Rose",
            colorHex: "#FFC0CB",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_Red },
                { name: "iPhone 15 Plus", image: iP15p_Red },
                { name: "iPhone 15 Pro", image: iP15Pro_Red },
                { name: "iPhone 15 Pro Max", image: iP15ProM_Red },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_Red },
                { name: "Galaxy S24+", image: s24p_Red },
                { name: "Galaxy S24 Ultra", image: s24U_Red },
              ],
              Google: [
                { name: "Pixel 8", image: p8_Red },
                { name: "Pixel 8 Pro", image: p8Pro_Red },
              ],
            },
          },
          {
            id: 2,
            colorName: "Hot Pink",
            colorHex: "#FF69B4",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_CoolGreen },
                { name: "iPhone 15 Plus", image: iP15p_CoolGreen },
                { name: "iPhone 15 Pro", image: iP15Pro_CoolGreen },
                { name: "iPhone 15 Pro Max", image: iP15ProM_CoolGreen },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_CoolGreen },
                { name: "Galaxy S24+", image: s24p_CoolGreen },
                { name: "Galaxy S24 Ultra", image: s24U_CoolGreen },
              ],
              Google: [
                { name: "Pixel 8", image: p8_CoolGreen },
                { name: "Pixel 8 Pro", image: p8Pro_CoolGreen },
              ],
            },
          },

          {
            id: 3,
            colorName: "Lime Yellow",
            colorHex: "#DFFF00",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_Green },
                { name: "iPhone 15 Plus", image: iP15p_Green },
                { name: "iPhone 15 Pro", image: iP15Pro_Green },
                { name: "iPhone 15 Pro Max", image: iP15ProM_Green },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_Green },
                { name: "Galaxy S24+", image: s24p_Green },
                { name: "Galaxy S24 Ultra", image: s24U_Green },
              ],
              Google: [
                { name: "Pixel 8", image: p8_Green },
                { name: "Pixel 8 Pro", image: p8Pro_Green },
              ],
            },
          },
          // Add more color options as needed
        ],
      },
      {
        image: iP15Pro_CoolGreen_Transparent,
        altText: "Case Image",
        title: "Case Model 5",
        type: "Clear Case",
        designer: "Ismail Touzzane",
        isCustomizable: false,
        price: 199,
        colors: [
          {
            id: 1,
            colorName: "Magenta",
            colorHex: "#FF00FF",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_Red },
                { name: "iPhone 15 Plus", image: iP15p_Red },
                { name: "iPhone 15 Pro", image: iP15Pro_Red },
                { name: "iPhone 15 Pro Max", image: iP15ProM_Red },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_Red },
                { name: "Galaxy S24+", image: s24p_Red },
                { name: "Galaxy S24 Ultra", image: s24U_Red },
              ],
              Google: [
                { name: "Pixel 8", image: p8_Red },
                { name: "Pixel 8 Pro", image: p8Pro_Red },
              ],
            },
          },
          {
            id: 2,
            colorName: "Violet",
            colorHex: "#EE82EE",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_CoolGreen },
                { name: "iPhone 15 Plus", image: iP15p_CoolGreen },
                { name: "iPhone 15 Pro", image: iP15Pro_CoolGreen },
                { name: "iPhone 15 Pro Max", image: iP15ProM_CoolGreen },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_CoolGreen },
                { name: "Galaxy S24+", image: s24p_CoolGreen },
                { name: "Galaxy S24 Ultra", image: s24U_CoolGreen },
              ],
              Google: [
                { name: "Pixel 8", image: p8_CoolGreen },
                { name: "Pixel 8 Pro", image: p8Pro_CoolGreen },
              ],
            },
          },

          {
            id: 3,
            colorName: "Web Green",
            colorHex: "#2EEA89",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_Green },
                { name: "iPhone 15 Plus", image: iP15p_Green },
                { name: "iPhone 15 Pro", image: iP15Pro_Green },
                { name: "iPhone 15 Pro Max", image: iP15ProM_Green },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_Green },
                { name: "Galaxy S24+", image: s24p_Green },
                { name: "Galaxy S24 Ultra", image: s24U_Green },
              ],
              Google: [
                { name: "Pixel 8", image: p8_Green },
                { name: "Pixel 8 Pro", image: p8Pro_Green },
              ],
            },
          },
          // Add more color options as needed
        ],
      },
      {
        image: iP15Pro_CoolGreen_Transparent,
        altText: "Case Image",
        title: "Case Model 6",
        type: "Clear Case",
        designer: "Ismail Touzzane",
        isCustomizable: false,
        price: 199,
        colors: [
          {
            id: 1,
            colorName: "Carnation Pink",
            colorHex: "#FFA6C9",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_Red },
                { name: "iPhone 15 Plus", image: iP15p_Red },
                { name: "iPhone 15 Pro", image: iP15Pro_Red },
                { name: "iPhone 15 Pro Max", image: iP15ProM_Red },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_Red },
                { name: "Galaxy S24+", image: s24p_Red },
                { name: "Galaxy S24 Ultra", image: s24U_Red },
              ],
              Google: [
                { name: "Pixel 8", image: p8_Red },
                { name: "Pixel 8 Pro", image: p8Pro_Red },
              ],
            },
          },
          {
            id: 2,
            colorName: "Xanadu",
            colorHex: "#738678",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_CoolGreen },
                { name: "iPhone 15 Plus", image: iP15p_CoolGreen },
                { name: "iPhone 15 Pro", image: iP15Pro_CoolGreen },
                { name: "iPhone 15 Pro Max", image: iP15ProM_CoolGreen },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_CoolGreen },
                { name: "Galaxy S24+", image: s24p_CoolGreen },
                { name: "Galaxy S24 Ultra", image: s24U_CoolGreen },
              ],
              Google: [
                { name: "Pixel 8", image: p8_CoolGreen },
                { name: "Pixel 8 Pro", image: p8Pro_CoolGreen },
              ],
            },
          },

          {
            id: 3,
            colorName: "Apple Green",
            colorHex: "#8DB600",
            availableModels: {
              Apple: [
                { name: "iPhone 15", image: iP15_Green },
                { name: "iPhone 15 Plus", image: iP15p_Green },
                { name: "iPhone 15 Pro", image: iP15Pro_Green },
                { name: "iPhone 15 Pro Max", image: iP15ProM_Green },
              ],
              Samsung: [
                { name: "Galaxy S24", image: s24_Green },
                { name: "Galaxy S24+", image: s24p_Green },
                { name: "Galaxy S24 Ultra", image: s24U_Green },
              ],
              Google: [
                { name: "Pixel 8", image: p8_Green },
                { name: "Pixel 8 Pro", image: p8Pro_Green },
              ],
            },
          },
          // Add more color options as needed
        ],
      },

      // Add more products as needed

    ],
    bag: [],
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
        localStorage.removeItem('bagItems'); // Clear the local storage
    },
  },
  actions: {
    addToBag({ commit }, product) {
      commit('ADD_TO_BAG', product);
    },
    initializeBag({ commit }) {
      const bag = JSON.parse(localStorage.getItem('bag')) || [];
      commit('SET_BAG', bag);
    }
  },
  getters: {
    products: (state) => state.products,
    bagItems: (state) => state.bag,
  },
});
