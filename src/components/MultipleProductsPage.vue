<template>
  <div class="flex justify-center min-h-screen mt-12">
    <div :style="computedWidth">
      <div class="grid grid-cols-3 gap-[40px]">
        <div
          class="col-span-1 bg-[#F9F9F9] border border-[#00000010] rounded-[32px] p-[24px]"
        >
          <!-- Dropdown for Customizable -->
          <div class="cursor-pointer border-b border-[#00000020] px-[10px]">
            <!-- Header Section -->
            <div
              @click="toggleDropdown('customizable')"
              class="flex justify-between items-center py-[17.5px] h-[52px]"
            >
              <span class="font-semibold text-[17px]">Customizable</span>
              <svg
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.497812 1.64518C0.218392 1.34935 0.218363 0.886876 0.497746 0.591005V0.591005C0.800665 0.27021 1.31101 0.270169 1.61398 0.590916L6.13652 5.37882C6.33382 5.58771 6.66618 5.58771 6.86348 5.37882L11.386 0.590916C11.689 0.27017 12.1993 0.27021 12.5023 0.591005V0.591005C12.7816 0.886876 12.7816 1.34935 12.5022 1.64518L7.22699 7.2303C6.83237 7.6481 6.16763 7.6481 5.77301 7.2303L0.497812 1.64518Z"
                  fill="black"
                  style="fill: black; fill-opacity: 1"
                />
              </svg>
            </div>

            <!-- Dropdown Content Section -->
            <div v-if="openDropdowns.customizable" class="py-2 text-left">
              <!-- List of checkable items for Customizable -->
              <label class="text-[15px] cursor-pointer flex items-center">
                <input type="checkbox" class="mr-2" />
                Customizable
              </label>
            </div>
          </div>

          <!-- Dropdown for Collection -->
          <div class="cursor-pointer border-b border-[#00000020] px-[10px]">
            <!-- Header Section -->
            <div
              @click="toggleDropdown('collection')"
              class="flex justify-between items-center py-[17.5px] h-[52px]"
            >
              <span class="font-semibold text-[17px]">Collection</span>
              <svg
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.497812 1.64518C0.218392 1.34935 0.218363 0.886876 0.497746 0.591005V0.591005C0.800665 0.27021 1.31101 0.270169 1.61398 0.590916L6.13652 5.37882C6.33382 5.58771 6.66618 5.58771 6.86348 5.37882L11.386 0.590916C11.689 0.27017 12.1993 0.27021 12.5023 0.591005V0.591005C12.7816 0.886876 12.7816 1.34935 12.5022 1.64518L7.22699 7.2303C6.83237 7.6481 6.16763 7.6481 5.77301 7.2303L0.497812 1.64518Z"
                  fill="black"
                  style="fill: black; fill-opacity: 1"
                />
              </svg>
            </div>

            <!-- Dropdown Content Section -->
            <div v-if="openDropdowns.collection" class="py-2 text-left">
              <!-- List of checkable items for Collection -->
              <label class="text-[15px] cursor-pointer flex items-center">
                <input type="checkbox" class="mr-2" />
                Summer 2024
              </label>
              <label class="text-[15px] cursor-pointer flex items-center">
                <input type="checkbox" class="mr-2" />
                Fall/Winter 2024
              </label>
              <label class="text-[15px] cursor-pointer flex items-center">
                <input type="checkbox" class="mr-2" />
                Limited Edition
              </label>
            </div>
          </div>

          <!-- Dropdown for Artist -->
          <div class="cursor-pointer border-b border-[#00000020] px-[10px]">
            <!-- Header Section -->
            <div
              @click="toggleDropdown('artist')"
              class="flex justify-between items-center py-[17.5px] h-[52px]"
            >
              <span class="font-semibold text-[17px]">Artist</span>
              <svg
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.497812 1.64518C0.218392 1.34935 0.218363 0.886876 0.497746 0.591005V0.591005C0.800665 0.27021 1.31101 0.270169 1.61398 0.590916L6.13652 5.37882C6.33382 5.58771 6.66618 5.58771 6.86348 5.37882L11.386 0.590916C11.689 0.27017 12.1993 0.27021 12.5023 0.591005V0.591005C12.7816 0.886876 12.7816 1.34935 12.5022 1.64518L7.22699 7.2303C6.83237 7.6481 6.16763 7.6481 5.77301 7.2303L0.497812 1.64518Z"
                  fill="black"
                  style="fill: black; fill-opacity: 1"
                />
              </svg>
            </div>

            <!-- Dropdown Content Section -->
            <div v-if="openDropdowns.artist" class="py-2 text-left">
              <!-- List of checkable items for Artist -->
              <label class="text-[15px] cursor-pointer flex items-center">
                <input type="checkbox" class="mr-2" />
                John Doe
              </label>
              <label class="text-[15px] cursor-pointer flex items-center">
                <input type="checkbox" class="mr-2" />
                Jane Smith
              </label>
              <label class="text-[15px] cursor-pointer flex items-center">
                <input type="checkbox" class="mr-2" />
                Alex Carter
              </label>
            </div>
          </div>

          <!-- Dropdown for Print Style -->
          <div class="cursor-pointer border-b border-[#00000020] px-[10px]">
            <!-- Header Section -->
            <div
              @click="toggleDropdown('printStyle')"
              class="flex justify-between items-center py-[17.5px] h-[52px]"
            >
              <span class="font-semibold text-[17px]">Print Style</span>
              <svg
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.497812 1.64518C0.218392 1.34935 0.218363 0.886876 0.497746 0.591005V0.591005C0.800665 0.27021 1.31101 0.270169 1.61398 0.590916L6.13652 5.37882C6.33382 5.58771 6.66618 5.58771 6.86348 5.37882L11.386 0.590916C11.689 0.27017 12.1993 0.27021 12.5023 0.591005V0.591005C12.7816 0.886876 12.7816 1.34935 12.5022 1.64518L7.22699 7.2303C6.83237 7.6481 6.16763 7.6481 5.77301 7.2303L0.497812 1.64518Z"
                  fill="black"
                  style="fill: black; fill-opacity: 1"
                />
              </svg>
            </div>

            <!-- Dropdown Content Section -->
            <div v-if="openDropdowns.printStyle" class="py-2 text-left">
              <!-- List of checkable items for Print Style -->
              <label class="text-[15px] cursor-pointer flex items-center">
                <input type="checkbox" class="mr-2" />
                Minimalistic
              </label>
              <label class="text-[15px] cursor-pointer flex items-center">
                <input type="checkbox" class="mr-2" />
                Abstract
              </label>
              <label class="text-[15px] cursor-pointer flex items-center">
                <input type="checkbox" class="mr-2" />
                Geometric
              </label>
            </div>
          </div>

          <!-- Dropdown for Color -->
          <div class="cursor-pointer border-b border-[#00000020] px-[10px]">
            <!-- Header Section -->
            <div
              @click="toggleDropdown('color')"
              class="flex justify-between items-center py-[17.5px] h-[52px]"
            >
              <span class="font-semibold text-[17px]">Color</span>
              <svg
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.497812 1.64518C0.218392 1.34935 0.218363 0.886876 0.497746 0.591005V0.591005C0.800665 0.27021 1.31101 0.270169 1.61398 0.590916L6.13652 5.37882C6.33382 5.58771 6.66618 5.58771 6.86348 5.37882L11.386 0.590916C11.689 0.27017 12.1993 0.27021 12.5023 0.591005V0.591005C12.7816 0.886876 12.7816 1.34935 12.5022 1.64518L7.22699 7.2303C6.83237 7.6481 6.16763 7.6481 5.77301 7.2303L0.497812 1.64518Z"
                  fill="black"
                  style="fill: black; fill-opacity: 1"
                />
              </svg>
            </div>

            <!-- Dropdown Content Section -->
            <div v-if="openDropdowns.color" class="py-2 text-left">
              <div class="grid grid-cols-3 gap-2">
                <!-- List of checkable items for Color -->
                <div
                  v-for="(option, index) in colorOptions"
                  :key="index"
                  class="flex items-center"
                >
                  <input type="checkbox" :id="option.id" class="mr-2" />
                  <label
                    :for="option.id"
                    class="flex items-center cursor-pointer"
                  >
                    <span
                      :class="['w-5 h-5 rounded-full', option.colorClass]"
                      class="mr-2"
                    ></span>
                    {{ option.name }}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2 rounded-[32px]">
          <!-- Content for the right column (2/3 width) -->
          <div class="grid grid-cols-3 gap-[24px]">
            <div
              class="cursor-pointer bg-[#F9F9F9] border border-[#00000010] rounded-[32px] p-[24px] hover:bg-[#F7FDFC] hover:border-[#0A332E50] flex flex-col items-center"
            >
              <!-- Content for the third sub-column -->
              <img
                src="../assets/Images/iP15Pro_CoolGreen.png"
                alt="Case Image"
                class="mb-[24px] mt-[12px] h-[300px] w-auto object-contain"
              />
              <h1
                class="text-black text-center font-[Visby] font-bold text-[16px] mb-[3px] leading-[120%] truncate w-[100%]"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                Cool Greeeeen Virgules' OG
              </h1>
              <h2
                class="text-black text-center font-[Visby] font-semibold text-[16px] mb-[5px] leading-[100%]"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                Clear Case
              </h2>
              <h3
                class="text-black text-center font-[Arial] text-[15px] mb-[5px] leading-[100%]"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                Customizable
              </h3>
              <h3
                class="text-black text-center font-[Arial] text-[15px] leading-[100%]"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                MAD 199
              </h3>
            </div>
            <div
              class="cursor-pointer bg-[#F9F9F9] border border-[#00000010] rounded-[32px] p-[24px] hover:bg-[#F7FDFC] hover:border-[#0A332E50] flex flex-col items-center"
            >
              <!-- Content for the third sub-column -->
              <img
                src="../assets/Images/iP15Pro_CoolGreen.png"
                alt="Case Image"
                class="mb-[24px] mt-[12px] h-[300px] w-auto object-contain"
              />
              <h1
                class="text-black text-center font-[Visby] font-bold text-[16px] mb-[3px] leading-[120%] truncate w-[100%]"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                Cool Greeeeen Virgules' OG
              </h1>
              <h2
                class="text-black text-center font-[Visby] font-semibold text-[16px] mb-[5px] leading-[100%]"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                Clear Case
              </h2>
              <h3
                class="text-black text-center font-[Arial] text-[15px] mb-[5px] leading-[100%]"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                Customizable
              </h3>
              <h3
                class="text-black text-center font-[Arial] text-[15px] leading-[100%]"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                MAD 199
              </h3>
            </div>
            <div
              class="cursor-pointer bg-[#F9F9F9] border border-[#00000010] rounded-[32px] p-[24px] hover:bg-[#F7FDFC] hover:border-[#0A332E50] flex flex-col items-center"
            >
              <!-- Content for the third sub-column -->
              <img
                src="../assets/Images/iP15Pro_CoolGreen.png"
                alt="Case Image"
                class="mb-[24px] mt-[12px] h-[300px] w-auto object-contain"
              />
              <h1
                class="text-black text-center font-[Visby] font-bold text-[16px] mb-[3px] leading-[120%] truncate w-[100%]"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                Cool Greeeeen Virgules' OG
              </h1>
              <h2
                class="text-black text-center font-[Visby] font-semibold text-[16px] mb-[5px] leading-[100%]"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                Clear Case
              </h2>
              <h3
                class="text-black text-center font-[Arial] text-[15px] mb-[5px] leading-[100%]"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                Customizable
              </h3>
              <h3
                class="text-black text-center font-[Arial] text-[15px] leading-[100%]"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                MAD 199
              </h3>
            </div>
            <div
              class="cursor-pointer bg-[#F9F9F9] border border-[#00000010] rounded-[32px] p-[24px] hover:bg-[#F7FDFC] hover:border-[#0A332E50] flex flex-col items-center"
            >
              <!-- Content for the third sub-column -->
              <img
                src="../assets/Images/iP15Pro_CoolGreen.png"
                alt="Case Image"
                class="mb-[24px] mt-[12px] h-[300px] w-auto object-contain"
              />
              <h1
                class="text-black text-center font-[Visby] font-bold text-[16px] mb-[3px] leading-[120%] truncate w-[100%]"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                Cool Greeeeen Virgules' OG
              </h1>
              <h2
                class="text-black text-center font-[Visby] font-semibold text-[16px] mb-[5px] leading-[100%]"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                Clear Case
              </h2>
              <h3
                class="text-black text-center font-[Arial] text-[15px] mb-[5px] leading-[100%]"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                Customizable
              </h3>
              <h3
                class="text-black text-center font-[Arial] text-[15px] leading-[100%]"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                MAD 199
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      
      
      colorOptions: [
        { id: "black1", name: "Black", colorClass: "bg-black" },
        { id: "black2", name: "Black", colorClass: "bg-black" },
        { id: "black3", name: "Black", colorClass: "bg-black" },
        // Add more options as needed
      ],
    };
  },
  computed: {
    computedWidth() {
      return "width: calc(1680px - 540px)";
    },
  },
  methods: {
    toggleDropdown(dropdown) {
      this.openDropdowns[dropdown] = !this.openDropdowns[dropdown];
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
