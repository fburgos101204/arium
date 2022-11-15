import { Injectable } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

const routes = {
    root: "pokemon?",
    names: "list/name",
    allNames: "list/name/all"
}
@Injectable({
    providedIn: 'root'
})
export class PokeService {
    constructor(private apiService: ApiService) {
    }

    getListPokemons(pageNumber: number, pageSize: number) {
        return this.apiService.get(`${routes.root}limit=${pageNumber}&offset=${pageSize}`);
    }
}
