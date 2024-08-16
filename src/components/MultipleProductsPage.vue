<template>
  <div class="flex justify-center min-h-screen mt-12">
    <div :style="computedWidth">
      <div class="grid grid-cols-3 gap-[40px]">
        <div
          class="col-span-1 bg-[#F9F9F9] border border-[#00000010] rounded-[32px] p-[24px]"
        >
          <!-- Content for the left column (1/3 width) -->
          Filters
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
                class="text-black text-center font-[Visby] font-bold text-[16px] mb-[5px] leading-[100%]"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                CoolG Virgules' OG
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
                class="text-black text-center font-[Visby] font-bold text-[16px] mb-[5px] leading-[100%]"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                CoolG Virgules' OG
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
                class="text-black text-center font-[Visby] font-bold text-[16px] mb-[5px] leading-[100%]"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                CoolG Virgules' OG
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
                class="text-black text-center font-[Visby] font-bold text-[16px] mb-[5px] leading-[100%]"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                CoolG Virgules' OG
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
  computed: {
    computedWidth() {
      return "width: calc(1680px - 540px)";
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
