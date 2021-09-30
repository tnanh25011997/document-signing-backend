import { BaseDTO } from "./BaseDTO";
export class UserDTO extends BaseDTO {
    protected obj;
    protected fillable = [];
    protected fillableDB = [];

    constructor(dto) {
        super();
        this.obj = dto;
    }

    toSimpleJSON = () => {
        return this.toJSON([]);
    };
}
