class Sessao {
  public static setUsuario(id: string): void {
    localStorage.setItem("usuario", id)
  }

  public static getUsuario(): any {
    const usuarioId = localStorage.getItem("usuario")
    if (usuarioId) {
      return usuarioId
    }
  }
}

export default Sessao
