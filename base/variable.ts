/**
 * ENUM FOR ALL PROJECT
 */

import keys from "../config/env/keys";

export const TYPE_PDF_STORAGE = "pdf";
export const PDF_STORAGE = "uploads/pdf/";
export const MAX_NUMBER_OF_FILE = 10;

export const URL_UPLOAD_SINGLE = "/api/v1/upload/single";
export const URL_UPLOAD_MULTIPLE = "/api/v1/upload/multiple";

export const DETAIL_DOCUMENT_URL = `http://${keys.host}/api/v1/documents/`;
