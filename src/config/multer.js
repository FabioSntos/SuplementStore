const multer = require("multer");
const crypto = require("crypto");
const { extname, resolve } = require("path");

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, "..", "..", "temp", "uploads"),
    filename: (req, file, cb) => {
      crypto.randomBytes(10, (error, res) => {
        if (error) return cb(error);

        return cb(null, res.toString("hex") + extname(file.originalname));
      });
    },
  }),
};
