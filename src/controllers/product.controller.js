const productData = require("../modelknex/MOCK_DATA.json");

const allProducts = (req, res) => {
  res.send({
    message: "Data product retrieved",
    status: "OK",
    data: productData,
  });
};

const productById = (req, res) => {
  const params = req.params.productId;
  const intParams = parseInt(params);

  if (intParams >= 100 || intParams < 0) {
    res.send({
      message: "Data product not found",
      status: "Error",
      data: null,
    });
  } else {
    res.send({
      message: "Data product retrieved",
      status: "OK",
      data: productData[intParams],
    });
  }
};

module.exports = { allProducts, productById };
