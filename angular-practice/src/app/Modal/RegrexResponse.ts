import { user } from '../students-list/student/user'

export class regrexResponse{
    constructor(){
        this.page = "";
        this.per_page = 0;
        this.total = "";
        this.total_pages = 0;
        this.data = new Array<user>(); 
    }
    page : string;
    per_page : number;
    total : string;
    total_pages : number;
    data : user[];
}