import * as variables from "../base/variable";
import path from "path";

const multer = require("multer");

const validFileType = [".png", ".jpg", ".gif", ".jpeg", ".svg", ".pdf"];

const getPathToSave = (type) => {
    switch (type) {
        case variables.TYPE_PDF_STORAGE:
            return variables.PDF_STORAGE;
        default:
            return "uploads/pdf/";
    }
};

const filter = function (req, file, callback) {
    var ext = path.extname(file.originalname.toLowerCase());
    if (!validFileType.includes(ext)) {
        callback(new Error(`Invalid Type`), false);
    }

    callback(null, true);
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, getPathToSave(req.type));
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname.toLowerCase());
        cb(
            null,
            `${Date.now()}_pdf_${Math.floor(Math.random() * 1_000_000)}${ext}`
        );
    },
});
const uploadFile = multer({
    storage: storage,
    fileFilter: filter,
});

export default uploadFile;
