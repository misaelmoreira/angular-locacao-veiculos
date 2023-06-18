import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/enviroment"
import { Marca } from "src/app/models/marca"

export class Veiculo {
  constructor(public http: HttpClient) { }

  public id?: number
  public nome?: string
  public cor?: string
  public qnt_passageiros?: number
  public placa?: string
  public valor?: number
  public marca?: Marca

  static async todos(http: HttpClient) {
    return await http.get<Veiculo[]>(`${environment.apiUrl}/veiculos.json`).toPromise()
  }
}
