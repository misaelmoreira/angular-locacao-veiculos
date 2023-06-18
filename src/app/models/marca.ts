import { HttpClient } from "@angular/common/http"

export class Marca {
  constructor(public http: HttpClient) { }

  public id?: number
  public nome?: string
}
