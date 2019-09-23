import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
//const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const api = new WooCommerceRestApi({
  url: "http://woocommerce.maktabsharif.ir",
  consumerKey: "ck_7a8da12d8df12441f33614bd57051a3636918f6c",
  consumerSecret: "cs_1dce1e31145ca5f6a7fa10482c13998055a42f9e",
  version: "wc/v3"
});
 
// List products
export const Apiget = api.get("products", {
  per_page: 100, // 20 products per page
})
  .then((response) => response.data
  )
  .catch((error) => {
    // Invalid request, for 4xx and 5xx statuses
    // console.log("Response Status:", error.response.status);
    // console.log("Response Headers:", error.response.headers);
    // console.log("Response Data:", error.response.data);
  })
  .finally(() => {
    // Always executed.
  });
 
// Create a product
// api.post("products", {
//   name: "Premium Quality", // See more in https://woocommerce.github.io/woocommerce-rest-api-docs/#product-properties
//   type: "simple",
//   regular_price: "21.99",
// })
//   .then((response) => {
//     // Successful request
//     console.log("Response Status:", response.status);
//     console.log("Response Headers:", response.headers);
//     console.log("Response Data:", response.data);
//   })
//   .catch((error) => {
//     // Invalid request, for 4xx and 5xx statuses
//     console.log("Response Status:", error.response.status);
//     console.log("Response Headers:", error.response.headers);
//     console.log("Response Data:", error.response.data);
//   })
//   .finally(() => {
//     // Always executed.
//   });
 
// // Edit a product
// api.put("products/1", {
//   sale_price: "11.99", // See more in https://woocommerce.github.io/woocommerce-rest-api-docs/#product-properties
// })
//   .then((response) => {
//     // Successful request
//     console.log("Response Status:", response.status);
//     console.log("Response Headers:", response.headers);
//     console.log("Response Data:", response.data);
//   })
//   .catch((error) => {
//     // Invalid request, for 4xx and 5xx statuses
//     console.log("Response Status:", error.response.status);
//     console.log("Response Headers:", error.response.headers);
//     console.log("Response Data:", error.response.data);
//   })
//   .finally(() => {
//     // Always executed.
//   });
 
// // Delete a product
// api.delete("products/1", {
//   force: true, // Forces to delete instead of move to the Trash
// })
//   .then((response) => {
//     // Successful request
//     console.log("Response Status:", response.status);
//     console.log("Response Headers:", response.headers);
//     console.log("Response Data:", response.data);
//   })
//   .catch((error) => {
//     // Invalid request, for 4xx and 5xx statuses
//     console.log("Response Status:", error.response.status);
//     console.log("Response Headers:", error.response.headers);
//     console.log("Response Data:", error.response.data);
//   })
//   .finally(() => {
//     // Always executed.
//   });