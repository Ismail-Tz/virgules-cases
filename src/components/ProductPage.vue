<template>
  <div class="flex justify-center min-h-screen" :style="{ fontCo: darkColor }">
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
              200 Dhs
            </h3>
            <h4
              class="text-gray-500 text-left text-[14px] leading-[100%]"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              By Ismail Touzzane
            </h4>
          </div>
          <div
            class="bg-[#F5F7F6] text-white p-[24px] rounded-[32px]"
            :style="{ backgroundColor: lightColor }"
          >
            <h2
              class="text-black text-left font-[Visby] font-extrabold text-[20px] mb-[24px] leading-[100%] after"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              Select Device
            </h2>
            <div class="flex gap-[8px] mb-[8px]">
              <button
                v-for="device in devices"
                :key="device"
                class="border border-black text-black py-[17.5px] px-[20px] text-[15px] rounded-[62px] leading-[100%]"
                @mouseenter="hoveredButton = device"
                @mouseleave="hoveredButton = null"
                @click="selectDevice(device)"
                :style="buttonStyles(device)"
              >
                {{ device }}
              </button>
            </div>
            <div class="flex">
              <label for="device-model-dropdown"></label>
              <div class="select-wrapper w-full">
                <select
                  id="device-model-dropdown"
                  class="border border-black text-black bg-transparent py-[17.5px] px-[20px] text-[15px] leading-[100%] rounded-[62px] focus:outline-none appearance-none focus:ring-indigo-500 focus:border-indigo-500"
                  :style="{ borderColor: darkColor, color: darkColor }"
                >
                  <option v-for="model in currentDeviceModels" :key="model">
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
import coolGreenImg from "@/assets/Images/Model1-coolGreen.png";
import redImg from "@/assets/Images/Model1-Red.png";
import greenImg from "@/assets/Images/Model1-Green.png";
export default {
  name: "ProductPage",
  data() {
    return {
      message: "Hello, Vue with Tailwind CSS!",
      colors: [
        {
          id: 1,
          name: "Cool Green Mushroom",
          colorName: "Cool Green",
          colorHex: "#7EE5D8",
          image: coolGreenImg,
        },
        {
          id: 2,
          name: "Red Mushroom",
          colorName: "Red",
          colorHex: "#FF6060",
          image: redImg,
        },
        {
          id: 3,
          name: "Just Green Mushroom",
          colorName: "Green",
          colorHex: "#2EEA89",
          image: greenImg,
        },
      ],
      colorTitle: "",
      imageSrc: "",
      productName: "",
      selectedColor: null,
      hoveredButton: null,
      isAddToCartHovered: false,
      devices: ["Apple", "Samsung", "Google"],
      selectedDevice: "Apple",
      deviceModels: {
        Apple: ["iPhone 15", "iPhone 15 Pro", "iPhone 15 Pro Max"],
        Samsung: ["Galaxy S24", "Galaxy S24+", "Galaxy S24 Ultra"],
        Google: ["Pixel 8a", "Pixel 8", "Pixel 8 Pro"],
      },

      // Customizing Cases
      customNumber: "",
      customName: "",
      customFont: "visby, sans-serif",
    };
  },
  created() {
    // Set colorTitle to the colorName of the first color in the colors array
    this.colorTitle = this.colors[0].colorName;
    this.imageSrc = this.colors[0].image;
    this.productName = this.colors[0].name;
    this.selectedColor = this.colors[0].id;
  },
  methods: {
    // Method to handle click event
    handleClick(color) {
      // Update clicked to true when button is clicked
      // Set clickedElement to the target element of the event

      this.colorTitle = color.colorName;
      this.imageSrc = color.image;
      this.productName = color.name;
      this.selectedColor = color.id;
    },

    selectDevice(device) {
      this.selectedDevice = device;
    },

    buttonStyles(device) {
      if (this.hoveredButton === device) {
        return {
          backgroundColor: this.darkColor,
          color: this.lightColor,
          borderColor: this.darkColor,
        };
      }
      if (this.selectedDevice === device) {
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
  },

  computed: {
    lightColor() {
      const color = this.colors.find(
        (c) => c.id === this.selectedColor
      ).colorHex;
      return this.lightenColor(color, 98); // Adjust the amount to get very light color
    },
    darkColor() {
      const color = this.colors.find(
        (c) => c.id === this.selectedColor
      ).colorHex;
      return this.darkenColor(color, 12); // Adjust the amount to get a darker color
    },
    currentDeviceModels() {
      return this.deviceModels[this.selectedDevice];
    },
  },

  // Watching for Customizing Cases Inputs
  watch: {
    customNumber(value) {
      if (!/^\d{0,2}$/.test(value)) {
        this.customNumber = value.replace(/[^\d]/g, "").slice(0, 2);
      }
    },
    customName(value) {
    // Remove extra spaces and ensure no more than 9 characters
    value = value.trim().replace(/\s+/g, ' ').slice(0, 7);

    // Allow only uppercase letters and spaces between letters
    this.customName = value.toUpperCase().replace(/[^A-Z ]|(?<=\b\s)\s+/g, '');
  }
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
  font-size: 50px; /* Adjust the font size as needed */
}
</style>
