<template>
  <div class="flex justify-center min-h-screen mt-[108px]">
    <div :style="computedWidth">
      <h2
        class="text-[26px] mb-[24px] text-left font-[Visby] font-bold text-[#000000]"
      >
        Checkout
      </h2>
      <div class="grid grid-cols-3 gap-[40px]">
        <div
          class="col-span-2 bg-[#F9F9F9] border border-[#00000010] rounded-[32px] p-[24px]"
        >
          <div>
            <h2
              class="text-[22px] mb-[24px] text-left font-[Visby] font-bold text-[#000000]"
            >
              Contact Information
            </h2>
            <div class="relative w-full">
              <input
                type="text"
                id="email"
                class="w-full bg-white border border-[#00000033] text-black px-[20px] text-[15px] rounded-full leading-[100%] focus:outline-none focus:ring-none focus:border-[#000000] peer pt-[22.5px] pb-[12.5px] h-[50px] transition-all duration-300 ease-in-out"
                placeholder=" "
              />
              <label
                for="email"
                class="absolute left-[20px] text-[15px] text-black opacity-80 transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 peer-focus:top-[13px] peer-focus:text-[10px] peer-focus:text-black peer-[:not(:placeholder-shown)]:top-[13px] peer-[:not(:placeholder-shown)]:text-[10px]"
              >
                Email
              </label>
            </div>
          </div>
        </div>
        <div
          class="col-span-1 bg-[#F9F9F9] border border-[#00000010] rounded-[32px] p-[24px]"
        >
          Bagged Shit
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutPage",
  data() {
    return {
      // Your data properties go here
    };
  },
  methods: {
    // Your methods go here
  },
  mounted() {
    // Code to run when the component is mounted goes here
  },
  computed: {
    computedWidth() {
      return "width: calc(1680px - 540px)";
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
