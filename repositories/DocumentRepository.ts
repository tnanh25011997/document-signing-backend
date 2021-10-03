import { DocumentInterface } from "../models/interface/DocumentInterface";
import Document from "../models/Document";
import { BaseRepository } from "./BaseRepository";
import mongoose from "mongoose";
export const ObjectId = mongoose.Types.ObjectId;

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

    async getDocumentWithSigner(id: string) {
        const document = await this.model.aggregate([
            {
                $match: { _id: ObjectId(id) },
            },
            {
                $lookup: {
                    from: "signers",
                    let: {
                        document_id: "$_id",
                    },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $eq: ["$document_id", "$$document_id"],
                                },
                            },
                        },
                    ],
                    as: "signer",
                },
            },
            {
                $unwind: {
                    path: "$signer",
                    preserveNullAndEmptyArrays: true,
                },
            },
        ]);
        return document.length ? document[0] : null;
    }
}
