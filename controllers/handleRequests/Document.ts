export interface CreateDocumentRequest {
    name: String;
    url: String;
    user_id: String;
    status: Number;
    signature_type_id: String;
    is_require_signature: Boolean;
}
