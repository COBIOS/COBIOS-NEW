const cors = require("cors");
const env = require("./env");

const corsOptions = {
  // Allow all origins for development - update this for production
  origin: true, // Allow all origins
  // origin: function (origin, callback) {
  //   const allowedOrigins = [env.CLIENT_URL];
  //
  //   // Allow requests with no origin (like mobile apps or curl requests)
  //   if (!origin) return callback(null, true);
  //
  //   if (allowedOrigins.indexOf(origin) !== -1) {
  //     callback(null, true);
  //   } else {
  //     callback(new Error("Not allowed by CORS"));
  //   }
  // },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

module.exports = cors(corsOptions);

