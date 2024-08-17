<template>
  <div class="flex justify-center min-h-screen mt-[108px]">
    <div style="width: calc(1680px - 540px)">
      <div class="grid grid-cols-12 gap-[40px]">
        <div class="relative col-span-7">
          <div class="relative w-full h-full">
            <img
              :src="imageSrc"
              alt="Case Image"
              class="w-full h-full object-cover"
            />
            <!-- Customizing Cases -->
            <div
              v-if="isCustomizable"
              class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            >
              <span
                class="custom-text name-text leading-[100%] font-semibold"
                :style="{ color: darkColor, fontFamily: customFont }"
                >{{ customName || "VIRGULES" }}</span
              >
              <span
                class="custom-text number-text leading-[100%] font-bold"
                :style="{ color: darkColor, fontFamily: customFont }"
                >{{ customNumber || "00" }}</span
              >
            </div>
          </div>
        </div>
        <div class="col-span-5">
          <div class="mb-[24px]">
            <h1
              class="text-black text-left font-[Visby] font-extrabold text-[28px] mb-[10px] leading-[100%]"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              {{ productName }}
            </h1>
            <h2
              class="text-black text-left font-[Visby] font-bold text-[21px] mb-[8px] leading-[100%]"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              Clear Case
            </h2>
            <h3
              class="text-black text-left text-[18px] mb-[10px] leading-[100%]"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              MAD 199
            </h3>
            <h4
              class="text-gray-500 text-left text-[14px] leading-[100%]"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              By Ismail Touzzane
            </h4>
          </div>
          <div
            class="bg-[#F5F7F6] text-white border p-[24px] rounded-[32px]"
            :style="{
              backgroundColor: lightColor,
              borderColor: darkColor + '20',
            }"
          >
            <h2
              class="text-black text-left font-[Visby] font-extrabold text-[20px] mb-[24px] leading-[100%] after"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              Select Device
            </h2>
            <div class="flex gap-[8px] mb-[8px]">
              <button
                v-for="device in availableBrands"
                :key="device"
                class="border border-black text-black py-[17.5px] px-[20px] text-[15px] rounded-[62px] leading-[100%]"
                @mouseenter="hoveredButton = device"
                @mouseleave="hoveredButton = null"
                @click="selectBrand(device)"
                :style="buttonStyles(device)"
              >
                {{ device }}
              </button>
            </div>
            <div class="flex">
              <label for="device-model-dropdown"></label>
              <div class="select-wrapper w-full">
                <select
                  v-model="selectedModel"
                  id="device-model-dropdown"
                  class="border border-black text-black bg-transparent py-[17.5px] px-[20px] text-[15px] leading-[100%] rounded-[62px] focus:outline-none appearance-none focus:ring-indigo-500 focus:border-indigo-500"
                  :style="{ borderColor: darkColor, color: darkColor }"
                >
                  <option
                    v-for="model in currentBrandModels"
                    :key="model"
                    :value="model"
                  >
                    {{ model }}
                  </option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  class="w-[15px] h-[15px] text-black absolute right-[20px] top-1/2 transform -translate-y-1/2 pointer-events-none"
                  :style="{ borderColor: darkColor, color: darkColor }"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 12.293l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 12.293z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <!-- Customize section (only in customizable products) -->
            <div v-if="isCustomizable">
              <h2
                class="text-black text-left font-[Visby] font-extrabold text-[20px] my-[24px] leading-[100%] after"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                Customize
              </h2>
              <div class="flex gap-[8px] mb-[8px]">
                <div class="flex w-full space-x-2">
                  <input
                    type="text"
                    class="w-[30%] bg-transparent border border-black text-black py-[17.5px] px-[20px] text-[15px] italic rounded-[62px] leading-[100%] focus:outline-none focus:ring-1 focus:ring-[#0000006e]"
                    placeholder="Number"
                    v-model="customNumber"
                    :style="{
                      borderColor: darkColor,
                      color: darkColor,
                      focusBorderColor: darkColor,
                    }"
                  />
                  <input
                    type="text"
                    class="w-[70%] bg-transparent border border-black text-black py-[17.5px] px-[20px] text-[15px] italic rounded-[62px] leading-[100%] focus:outline-none focus:ring-1 focus:ring-[#0000006e]"
                    placeholder="Name"
                    v-model="customName"
                    :style="{ borderColor: darkColor, color: darkColor }"
                  />
                </div>
              </div>
            </div>
            <!-- Color/Style Selection -->
            <h4
              class="text-black text-left font-[Visby] font-extrabold text-[15px] mt-[24px] mb-[10px] leading-[100%] after"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              Other Colors
            </h4>
            <p
              class="text-black text-left text-[12px] mb-[6px]"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              Selected: <span class="font-bold">{{ colorTitle }}</span>
            </p>
            <div class="grid grid-cols-7 gap-[6px]">
              <div
                v-for="color in colors"
                :key="color.id"
                @click="handleClick(color)"
                :class="[
                  'bg-[#ffffff] border aspect-square rounded-[8px] p-[10px] cursor-pointer',
                ]"
                :style="
                  selectedColor === color.id ? { borderColor: darkColor } : {}
                "
              >
                <!-- <svg
                class="full-size-svg" 
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet">
                <circle  cx="50" cy="50" r="50" :fill="color.colorHex" />
              </svg> -->
                <div
                  class="w-full aspect-square rounded-full inner-shadow"
                  :style="{ backgroundColor: color.colorHex }"
                ></div>
              </div>
            </div>
          </div>
          <div>
            <button
              class="w-full mt-[24px] bg-black text-white py-[17.5px] px-[20px] text-[21px] font-medium border rounded-[62px] leading-[100%] hover:bg-[white] hover:text-black hover:border-black hover:border"
              :class="{
                'hover:bg-lightColor hover:text-black hover:border-lightColor': true,
              }"
              :style="
                isAddToCartHovered
                  ? {
                      backgroundColor: lightColor,
                      color: 'black',
                      borderColor: darkColor,
                    }
                  : { backgroundColor: darkColor, borderColor: darkColor }
              "
              @mouseenter="isAddToCartHovered = true"
              @mouseleave="isAddToCartHovered = false"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import p8_Red from "@/assets/Images/P8_Red.jpg";
import p8_Green from "@/assets/Images/P8_Green.jpg";
import p8_CoolGreen from "@/assets/Images/P8_CoolGreen.jpg";

import p8Pro_Red from "@/assets/Images/P8Pro_Red.jpg";
import p8Pro_Green from "@/assets/Images/P8Pro_Green.jpg";
import p8Pro_CoolGreen from "@/assets/Images/P8Pro_CoolGreen.jpg";

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

export default {
  name: "ProductPage",

  data() {
    return {
      message: "Hello, Vue with Tailwind CSS!",
      colors: [
        {
          id: 1,
          name: "Cool Green Virgules' OG",
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
          name: "Red Virgules' OG",
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
          name: "Just Green Virgules' OG",
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
      ],
      colorTitle: "",
      imageSrc: "",
      productName: "",
      selectedColor: null,
      hoveredButton: null,
      isAddToCartHovered: false,
      availableBrands: [],
      availableModels: [],
      selectedBrand: "",
      selectedModel: "", // Default selected model

      // Customizing Cases
      isCustomizable: false, // Set to true or false based on whether the product is customizable
      customNumber: "",
      customName: "",
      customFont: "visby, sans-serif",
    };
  },

  created() {
    // Set colorTitle to the colorName of the first color in the colors array
    this.colorTitle = this.colors[0].colorName;
    this.imageSrc =
      this.colors[0].availableModels[
        Object.keys(this.colors[0].availableModels)[0]
      ][0].image;
    this.productName = this.colors[0].name;
    this.selectedColor = this.colors[0].id;

    // Initialize available brands and models based on the first color in the colors array
    this.availableBrands = Object.keys(this.colors[0].availableModels);
    this.selectedBrand =
      this.availableBrands.length > 0 ? this.availableBrands[0] : null;
    this.selectedModel =
      this.colors[0].availableModels[this.selectedBrand][0].name; // first model of the first brand

    // Initialize Safari tab bar color
    this.updateSafariTabBarColor();


  },

  methods: {
    // Method to handle click event
    handleClick(color) {
      // Update clicked to true when button is clicked
      // Set clickedElement to the target element of the event

      this.colorTitle = color.colorName;
      this.productName = color.name;
      this.selectedColor = color.id;
      this.availableBrands = Object.keys(color.availableModels);

      const selectedColorData = this.colors.find(
        (c) => c.id === this.selectedColor
      );

  
      // Update Safari tab bar color
    this.updateSafariTabBarColor();

      if (!selectedColorData) {
        // Handle the case where no matching color data is found
        this.imageSrc = "";
        return;
      }

      // Check if the selected brand exists for the new color
      let modelsForSelectedBrand =
        selectedColorData.availableModels[this.selectedBrand];

      if (!modelsForSelectedBrand) {
        // If the selected brand is not available, default to the first available brand
        this.selectedBrand = this.availableBrands[0] || ""; // Default to the first available brand
        modelsForSelectedBrand =
          selectedColorData.availableModels[this.selectedBrand];
        this.selectedModel = modelsForSelectedBrand[0]?.name || ""; // Select the first model or reset if no models are available
      }

      // Find the image for the selected model and color
      const modelData = modelsForSelectedBrand.find(
        (model) => model.name === this.selectedModel
      );

      // Update imageSrc based on selected model
      this.imageSrc = modelData ? modelData.image : "";
    },

    selectBrand(device) {
      // Check if the selected brand is already the same as the new device
      if (this.selectedBrand === device) {
        return; // Exit the function if the same brand is selected
      }

      this.selectedBrand = device;

      // Update the image source based on the selected brand and first model
      const selectedColorData = this.colors.find(
        (c) => c.id === this.selectedColor
      );

      if (!selectedColorData) {
        // Handle the case where no matching color data is found
        this.imageSrc = "";
        return;
      }

      const firstModel =
        selectedColorData.availableModels[this.selectedBrand]?.[0];
      if (!firstModel) {
        // Handle the case where no models are available for the selected brand
        this.imageSrc = "";
        return;
      }

      this.selectedModel = firstModel.name; // First model of the selected brand
      this.imageSrc = firstModel.image || ""; // Fallback to empty string if no image is available
    },

    buttonStyles(device) {
      if (this.hoveredButton === device) {
        return {
          backgroundColor: this.darkColor,
          color: this.lightColor,
          borderColor: this.darkColor,
        };
      }
      if (this.selectedBrand === device) {
        return {
          backgroundColor: this.darkColor,
          color: this.lightColor,
          borderColor: this.darkColor,
        };
      }
      return { borderColor: this.darkColor, color: this.darkColor };
    },

    hexToHSL(hex) {
      hex = hex.replace(/^#/, "");

      if (hex.length === 3) {
        hex = hex
          .split("")
          .map((hex) => hex + hex)
          .join("");
      }

      const r = parseInt(hex.slice(0, 2), 16) / 255;
      const g = parseInt(hex.slice(2, 4), 16) / 255;
      const b = parseInt(hex.slice(4, 6), 16) / 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h,
        s,
        l = (max + min) / 2;

      if (max === min) {
        h = s = 0; // achromatic
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }

      return {
        h: h * 360,
        s: s * 100,
        l: l * 100,
      };
    },
    hslToHex(h, s, l) {
      s /= 100;
      l /= 100;

      const k = (n) => (n + h / 30) % 12;
      const a = s * Math.min(l, 1 - l);
      const f = (n) => l - a * Math.max(Math.min(k(n) - 3, 9 - k(n), 1), -1);

      const toHex = (x) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      };

      return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
    },
    lightenColor(color, lightness) {
      const hsl = this.hexToHSL(color);
      return this.hslToHex(hsl.h, hsl.s, lightness);
    },
    darkenColor(color, lightness) {
      const hsl = this.hexToHSL(color);
      return this.hslToHex(hsl.h, hsl.s, lightness);
    },
    
    updateSafariTabBarColor() {
    const metaTag = document.querySelector('meta[name="theme-color"]');
    const color = this.themeColor;  // Use the computed themeColor
    if (metaTag) {
      metaTag.setAttribute('content', color);
    } else {
      const newMetaTag = document.createElement('meta');
      newMetaTag.setAttribute('name', 'theme-color');
      newMetaTag.setAttribute('content', color);
      document.head.appendChild(newMetaTag);
    }
  },
  },

  computed: {
    lightColor() {
      const color = this.colors.find(
        (c) => c.id === this.selectedColor
      ).colorHex;
      const lightColor = this.lightenColor(color, 98); // Adjust the amount to get very light color
      this.$emit("lightColorEvent", lightColor);
      return lightColor;
    },
    darkColor() {
      const color = this.colors.find(
        (c) => c.id === this.selectedColor
      ).colorHex;
      const darkColor = this.darkenColor(color, 12); // Adjust the amount to get a darker color
      this.$emit("darkColorEvent", darkColor);
      return darkColor;
    },
    currentBrandModels() {
      return this.selectedBrand
        ? this.colors
            .find((c) => c.id === this.selectedColor)
            .availableModels[this.selectedBrand].map((model) => model.name)
        : [];
    },

    //for safari tab bar color

    isDarkMode() {
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    },

    themeColor() {
      return this.isDarkMode ? this.darkColor : this.lightColor;
    },
  },

  watch: {
    // Watching for Customizing Cases Inputs
    customNumber(value) {
      if (!/^\d{0,2}$/.test(value)) {
        this.customNumber = value.replace(/[^\d]/g, "").slice(0, 2);
      }
    },
    customName(value) {
      // Remove extra spaces and ensure no more than 9 characters
      value = value.trim().replace(/\s+/g, " ").slice(0, 8);

      // Allow only uppercase letters and spaces between letters
      this.customName = value
        .toUpperCase()
        .replace(/[^A-Z ]|(?<=\b\s)\s+/g, "");
    },

    selectedModel(newModel) {
      // Find the selected color data
      const selectedColorData = this.colors.find(
        (c) => c.id === this.selectedColor
      );

      // Find the image for the selected model
      const modelData = selectedColorData.availableModels[
        this.selectedBrand
      ].find((model) => model.name === newModel);

      // Update imageSrc based on selected model
      this.imageSrc = modelData ? modelData.image : "";
    },
  },
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.select-wrapper {
  @apply relative inline-block;
}

#device-model-dropdown {
  @apply block w-full pr-[45px];
}

.inner-shadow {
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2); /* Inner shadow */
}

/* Customizing Cases */

.custom-text {
  text-align: center;
  pointer-events: none;
}

.number-text,
.name-text {
  position: relative;
  width: 100%;
}

.number-text {
  margin-top: 0;
  font-size: 200px; /* Adjust the font size as needed */
}

.name-text {
  margin-top: 0;
  font-size: 40px; /* Adjust the font size as needed */
}
</style>
