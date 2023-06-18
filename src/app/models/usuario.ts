import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/enviroment'

export class Usuario {
  constructor(public http: HttpClient) { }

  public id?: number
  public nome?: string
  public cpf?: string
  public endereco?: string
  public numero?: number
  public cep?: string
  public estado?: string
  public senha?: string
  public login?: string
  public cidade?: string
  public complemento?: string
  public data_nascimento?: string
  public bairro?: string

  async fazerLogin(): Promise<any> {
    try {
      return await this.http.post<Usuario>(`${environment.apiUrl}/login.json`, { usuario: this }).toPromise();
    } catch (err) {
      console.log(err, "Erro ao fazer requisição via angular")
    }
  }
}
