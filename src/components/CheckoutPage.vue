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
            <!-- Contact Info -->
            <h2
              class="text-[22px] mb-[24px] text-left font-[Visby] font-bold text-[#000000]"
            >
              Contact Information
            </h2>
            <div class="relative w-full mb-[14px]">
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
            <div class="flex gap-[14px]">
              <div
                class="relative flex items-center h-[50px] bg-white border border-[#00000033] text-black text-[15px] rounded-full focus-within:border-[#000000] transition-all duration-300 ease-in-out w-auto"
              >
                <select
                  id="countryCode"
                  class="w-full bg-transparent text-[15px] border-none outline-none pl-[20px] pr-[40px] py-[10px] leading-[100%] cursor-pointer appearance-none"
                >
                  <option value="+212">+212</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  class="absolute right-[20px] top-1/2 transform -translate-y-1/2 text-black h-4 w-4 pointer-events-none"
                >
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  />
                </svg>
              </div>

              <div class="relative flex-grow mb-[14px]">
                <input
                  type="text"
                  id="phoneNum"
                  class="w-full bg-white border border-[#00000033] text-black px-[20px] text-[15px] rounded-full leading-[100%] focus:outline-none focus:ring-none focus:border-[#000000] peer pt-[22.5px] pb-[12.5px] h-[50px] transition-all duration-300 ease-in-out"
                  placeholder=" "
                />
                <label
                  for="phoneNum"
                  class="absolute left-[20px] text-[15px] text-black opacity-80 transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 peer-focus:top-[13px] peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-[13px] peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  Phone Number
                </label>
              </div>
            </div>

            <!-- Shipping Adress -->

            <h2
              class="text-[22px] mt-[32px] mb-[24px] text-left font-[Visby] font-bold text-[#000000]"
            >
              Shipping Address
            </h2>
            <div class="flex gap-[14px] mb-[14px]">
              <div class="relative w-1/2">
                <input
                  type="text"
                  id="firstName"
                  class="w-full bg-white border border-[#00000033] text-black px-[20px] text-[15px] rounded-full leading-[100%] focus:outline-none focus:ring-none focus:border-[#000000] peer pt-[22.5px] pb-[12.5px] h-[50px] transition-all duration-300 ease-in-out"
                  placeholder=" "
                />
                <label
                  for="firstName"
                  class="absolute left-[20px] text-[15px] text-black opacity-80 transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 peer-focus:top-[13px] peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-[13px] peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  First Name
                </label>
              </div>

              <div class="relative w-1/2">
                <input
                  type="text"
                  id="lastName"
                  class="w-full bg-white border border-[#00000033] text-black px-[20px] text-[15px] rounded-full leading-[100%] focus:outline-none focus:ring-none focus:border-[#000000] peer pt-[22.5px] pb-[12.5px] h-[50px] transition-all duration-300 ease-in-out"
                  placeholder=" "
                />
                <label
                  for="lastName"
                  class="absolute left-[20px] text-[15px] text-black opacity-80 transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 peer-focus:top-[13px] peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-[13px] peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  Last Name
                </label>
              </div>
            </div>

            <div class="flex gap-[14px] mb-[14px]">
              <div class="relative w-1/2">
                <input
                  type="text"
                  id="address"
                  class="w-full bg-white border border-[#00000033] text-black px-[20px] text-[15px] rounded-full leading-[100%] focus:outline-none focus:ring-none focus:border-[#000000] peer pt-[22.5px] pb-[12.5px] h-[50px] transition-all duration-300 ease-in-out"
                  placeholder=" "
                />
                <label
                  for="address"
                  class="absolute left-[20px] text-[15px] text-black opacity-80 transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 peer-focus:top-[13px] peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-[13px] peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  Address
                </label>
              </div>

              <div class="relative w-1/2">
                <input
                  type="text"
                  id="postalCode"
                  class="w-full bg-white border border-[#00000033] text-black px-[20px] text-[15px] rounded-full leading-[100%] focus:outline-none focus:ring-none focus:border-[#000000] peer pt-[22.5px] pb-[12.5px] h-[50px] transition-all duration-300 ease-in-out"
                  placeholder=" "
                />
                <label
                  for="postalCode"
                  class="absolute left-[20px] text-[15px] text-black opacity-80 transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 peer-focus:top-[13px] peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-[13px] peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  Postal Code
                </label>
              </div>
            </div>

            <div class="flex gap-[14px]">
              <div
                class="relative flex items-center h-[50px] bg-white border border-[#00000033] text-black text-[15px] rounded-full focus-within:border-[#000000] w-1/2"
              >
                <select
                  id="countryCode"
                  class="w-full bg-transparent text-[15px] border-none outline-none pl-[20px] pr-[40px] py-[10px] leading-[100%] cursor-pointer appearance-none"
                >
                  <option value="Casablanca-Settat">Casablanca-Settat</option>
                  <option value="Marrakech-Safi">Marrakech-Safi</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  class="absolute right-[20px] top-1/2 transform -translate-y-1/2 text-black h-4 w-4 pointer-events-none"
                >
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  />
                </svg>
              </div>

              <div class="relative w-1/2">
                <input
                  type="text"
                  id="city"
                  class="w-full bg-white border border-[#00000033] text-black px-[20px] text-[15px] rounded-full leading-[100%] focus:outline-none focus:ring-none focus:border-[#000000] peer pt-[22.5px] pb-[12.5px] h-[50px] transition-all duration-300 ease-in-out"
                  placeholder=" "
                />
                <label
                  for="city"
                  class="absolute left-[20px] text-[15px] text-black opacity-80 transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 peer-focus:top-[13px] peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-[13px] peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  City
                </label>
              </div>
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
