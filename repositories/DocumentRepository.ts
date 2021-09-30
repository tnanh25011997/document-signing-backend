import { DocumentInterface } from "../models/interface/DocumentInterface";
import Document from "../models/Document";
import { BaseRepository } from "./BaseRepository";

export class DocumentRepository extends BaseRepository<DocumentInterface> {
    private static instance: DocumentRepository;

    private constructor() {
        super();
        this.model = Document;
    }

    public static getInstance(): DocumentRepository {
        if (!DocumentRepository.instance) {
            DocumentRepository.instance = new DocumentRepository();
        }

        return DocumentRepository.instance;
    }
}
