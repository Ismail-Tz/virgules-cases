<template>
  <div class="flex justify-center min-h-screen mt-[108px]">
    <div :style="computedWidth">
      <div class="grid grid-cols-3 gap-[40px]">
        <div
          class="col-span-1 bg-[#F9F9F9] border border-[#00000010] rounded-[32px] p-[24px]"
        >
          <div>
            <!-- Loop over dropdown data -->
            <div
              v-for="(dropdown, key) in dropdownsData"
              :key="key"
              class="cursor-pointer border-b border-[#00000020] px-[10px]"
            >
              <div
                @click="toggleDropdown(key)"
                @mousedown.prevent
                class="flex justify-between items-center py-[17.5px] h-[52px]"
              >
                <span class="font-semibold text-[17px]">{{
                  dropdown.title
                }}</span>
                <svg
                  :class="{ 'rotate-180': openDropdowns[key] }"
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="transition-transform duration-300"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.497812 1.64518C0.218392 1.34935 0.218363 0.886876 0.497746 0.591005V0.591005C0.800665 0.27021 1.31101 0.270169 1.61398 0.590916L6.13652 5.37882C6.33382 5.58771 6.66618 5.58771 6.86348 5.37882L11.386 0.590916C11.689 0.27017 12.1993 0.27021 12.5023 0.591005V0.591005C12.7816 0.886876 12.7816 1.34935 12.5022 1.64518L7.22699 7.2303C6.83237 7.6481 6.16763 7.6481 5.77301 7.2303L0.497812 1.64518Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div v-if="openDropdowns[key]" class="py-2 text-left">
                <div
                  v-for="(option, index) in dropdown.options"
                  :key="index"
                  class="flex items-center cursor-pointer py-1 px-2 mb-2 rounded-[32px]"
                  :class="{
                    'bg-blue-100': selectedOptions[key].includes(option),
                    'hover:bg-blue-200': selectedOptions[key].includes(option),
                    'hover:bg-gray-300': !selectedOptions[key].includes(option),
                  }"
                  @click="toggleSelection(key, option)"
                >
                  <span
                    :class="{
                      'text-blue-600': selectedOptions[key].includes(option),
                      'text-gray-900': !selectedOptions[key].includes(option),
                    }"
                  >
                    {{ option }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2 rounded-[32px]">
          <div class="grid grid-cols-3 gap-[24px]">
            <div
              v-for="(item, index) in products"
              :key="index"
              @click="goToProductPage(index)"
              @mouseover="applyHoverColors(index)"
              @mouseleave="clearHoverColors"
              class="cursor-pointer bg-[#F9F9F9] border border-[#00000010] rounded-[32px] p-[24px] hover:bg-[#F7FDFC] hover:border-[#0A332E50] flex flex-col items-center"
              :style="{
                backgroundColor: hoveredIndex === index ? lightColor : '#F9F9F9',
                borderColor: hoveredIndex === index ? darkColor + 50 : '#00000010',
              }"
            >
              <img
                :src="item.image"
                :alt="item.altText"
                class="mb-[24px] mt-[12px] h-[300px] w-auto object-contain"
              />
              <h1
                class="text-black text-center font-[Visby] font-bold text-[16px] mb-[3px] leading-[125%] truncate w-[100%]"
                :style="{
                color: hoveredIndex === index ? darkColor : '#000000',
              }"
              >
                {{ item.title }}
              </h1>
              <h2
                class="text-black text-center font-[Visby] font-semibold text-[16px] mb-[5px] leading-[100%]"
                :style="{
                color: hoveredIndex === index ? darkColor : '#000000',
              }"
              >
                {{ item.type }}
              </h2>
              <h3
                class="text-black text-center font-[Arial] text-[15px] mb-[5px] leading-[100%]"
                :style="{
                color: hoveredIndex === index ? darkColor : '#000000',
              }"
              >
                {{ item.isCustomizable ? "Customizable" : "Not Customizable" }}
              </h3>
              <h3
                class="text-black text-center font-[Arial] text-[15px] leading-[100%]"
                :style="{
                color: hoveredIndex === index ? darkColor : '#000000',
              }"
              >
                MAD {{ item.price }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { lightenColor, darkenColor } from "@/utils";

export default {
  name: "MultipleProductsPage",
  data() {
    return {
      openDropdowns: {
        customizable: false,
        collection: false,
        artist: false,
        printStyle: false,
        color: false,
      },

      selectedOptions: {
        customizable: [],
        collection: [],
        artist: [],
        printStyle: [],
      },

      dropdownsData: {
        customizable: {
          title: "Customizable",
          options: ["Option 1", "Option 2", "Option 3"],
        },
        collection: {
          title: "Collection",
          options: ["Option A", "Option B", "Option C"],
        },
        artist: {
          title: "Artist",
          options: ["Artist X", "Artist Y", "Artist Z"],
        },
        printStyle: {
          title: "Print Style",
          options: ["Style 1", "Style 2", "Style 3"],
        },
      },

      colorOptions: [
        { id: "black1", name: "Black", colorClass: "bg-black" },
        { id: "black2", name: "Black", colorClass: "bg-black" },
        { id: "black3", name: "Black", colorClass: "bg-black" },
        // Add more options as needed
      ],

      hoveredIndex: null,
    lightColor: '#F9F9F9', // default light color
    darkColor: '#000000', // default dark color
    };
  },
  computed: {
    // VUEX: Using mapGetters to access the colors array from the store
    ...mapGetters(["products"]),

    computedWidth() {
      return "width: calc(1680px - 540px)";
    },
  },
  methods: {
    applyHoverColors(index) {
      const color = this.products[index].colors[0].colorHex;
      this.lightColor = lightenColor(color, 98); // Adjust to your preference
      this.darkColor = darkenColor(color, 12); // Adjust to your preference
      this.hoveredIndex = index;
    },
    clearHoverColors() {
      this.hoveredIndex = null;
      this.lightColor = "#F9F9F9"; // Reset to default background
      this.darkColor = "#000000"; // Reset to default border
    },

    toggleDropdown(dropdown) {
      this.openDropdowns[dropdown] = !this.openDropdowns[dropdown];
    },
    toggleSelection(dropdown, option) {
      const index = this.selectedOptions[dropdown].indexOf(option);
      if (index === -1) {
        this.selectedOptions[dropdown].push(option);
      } else {
        this.selectedOptions[dropdown].splice(index, 1);
      }
    },

    // Method to navigate to the product page
    goToProductPage(productId) {
      this.$router.push({ path: `/product/${productId}` });
    },
  },
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
/* Add any custom styles here if needed */
</style>
