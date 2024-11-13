const express = require("express");
const multer = require("multer");
const {
  getuserstotal,
  findUser,
  blockuser,
  findCreator,
  findBusiness,
  findDeliveryPartners,
  findcoms,
  blockcomms,
  findposts,
  blockposts,
  blockproducts,
  findproducts,
  findreports,
  markreports,
  getdp,
  getalldata,
  findandblock,
  allapprovals,
  approvalactions,
  refresh,
  adminlogin,
  getCommunitiesforMon,
  communitiesRequests,
  store,
  approveStoreofUser,
  productApproval,
  allproductApprovals,
  dashboard,
  storecount,
  fetchads,
  fetchBanks,
  approveBank,
  approveAds,
  formUpload,
  forms,
  latestUserstofetch,
  latestCommunities,
  payuser,
  declinepayuser,
  delusers,
  sendcreatordetails,
  rejectdelusers,
  acceptdelusers,
  deliveriesget,
  fetchCreators,
  fetchbyQuery,
  monitorCreators,
  monitorCreatorsByEmail,
  fetchPosts,
  fetchProductsByCollection,
  fetchBuyOrders,
  fetchOrdersSell,
  givePassword,
  getUserfromLocal,
  fetchCommunity,
  deletePost,
  pushNotificationToUser,
  addmembers,

} = require("../controllers/admin");
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// router.get("/totalusers/:userId", getuserstotal);
// router.post("/finduser/:useId/:id", findUser);
// router.post("/findcreator/:userId/:id", findCreator);
// router.post("/findbusiness/:userId/:id", findBusiness);
// router.post("/finddeliverypartner/:userId/:id", findDeliveryPartners);
// router.post("/findcomms/:comId/:id", findcoms);
// router.post("/commsblock/:comId/:id", blockcomms);
// router.post("/blockuser/:userId/:id", blockuser);
// router.post("/findposts/:postId/:id", findposts);
// router.post("/blockposts/:postId/:id", blockposts);
// router.post("/findproducts/:prodId/:id", findproducts);
// router.post("/blockproducts/:prodId/:id", blockproducts);
// router.post("/findreports/:id", findreports);
// router.post("/markreports/:reportId/:id", markreports);
// router.get("/getdp/:userId", getdp);

// //new routes
// router.get("/getalldata/:id", getalldata);
// router.post("/findandblock/:userId", findandblock);
// router.get("/allapprovals/:userId", allapprovals);
// router.post("/approvalactions/:userId", approvalactions);


// my
router.post("/adminlogin", adminlogin);
router.post("/refresh", refresh);
router.get("/v1/getCommunitiesforMon", getCommunitiesforMon);
router.post("/requests/:id", communitiesRequests);
router.get("/v1/store", store);
router.post("/approveStoreofUser/:id", approveStoreofUser);
router.post("/productApproval/:id/:pid", productApproval);
router.post("/allproductApprovals/:id", allproductApprovals);
router.post("/approveAds/:id", approveAds);
router.get("/dashboard", dashboard);
router.get("/v1/storecount", storecount);
router.get("/v1/fetchads", fetchads);
router.get("/v1/fetchBanks", fetchBanks);
router.post("/approveBank/:id", approveBank);
router.post("/v1/form", upload.single("doc"), formUpload);
router.get("/v1/adminform", forms);
router.get("/v1/latestCommunities", latestCommunities);
router.post("/v1/payuser/:id/:wid", payuser)
router.post("/v1/declinepayuser/:wid", declinepayuser)

router.get(`/v1/delusers`, delusers)
router.post(`/acceptdelusers/:id`, acceptdelusers)
router.post(`/rejectdelusers/:id`, rejectdelusers)
router.get("/deliveries", deliveriesget)

router.post("/sendcreatordetails", sendcreatordetails)
router.get("/fetchCreators", fetchCreators)
router.get("/fetchbyQuery", fetchbyQuery)
router.get("/monitorCreators", monitorCreators)
router.post("/monitorCreatorsByEmail", monitorCreatorsByEmail)
router.get("/fetchPosts/:comId", fetchPosts)

router.get("/fetchProductsByCollection/:id", fetchProductsByCollection)
router.get("/fetchBuyOrders/:id", fetchBuyOrders)
router.get("/fetchOrdersSeller/:id", fetchOrdersSell)
router.post("/givePassword", givePassword)
router.post("/getUserfromLocal", getUserfromLocal)
router.get("/fetchCommunity/:id", fetchCommunity)
router.post("/deletePost", deletePost)
router.post("/pushNotificationToUser",pushNotificationToUser)
router.post("/addmembers/:comid/:number",addmembers);
module.exports = router;
