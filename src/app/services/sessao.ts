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

  public static clearUsuario(): void {
    localStorage.removeItem("usuario")
  }

}

export default Sessao
