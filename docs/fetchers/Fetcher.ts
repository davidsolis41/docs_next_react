type Parameters = {
  headers?: any;
  body?: any;
  maper?: any;
};

type ResProv = {
  status: number;
  data: any;
};

class Fetcher {
  private headders: any = {
    "Content-Type": "application/json",
  };

  public async get<T>(
    url: string,
    parameters?: Parameters
  ): Promise<{ status: number; data: T }> {
    let peticionGet: Response = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(this.headders, parameters?.headers),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
    });

    return await this.compStatus(peticionGet, parameters?.maper);
  }

  public async post<T>(
    url: string,
    parameters?: Parameters
  ): Promise<{ status: number; data: T }> {
    let peticionPost: Response = await fetch(url, {
      method: "POST",
      headers: this.getHeaders(this.headders, parameters?.headers),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      body: JSON.stringify(parameters?.body),
    });

    return await this.compStatus(peticionPost, parameters?.maper);
  }

  public async put<T>(
    url: string,
    parameters?: Parameters
  ): Promise<{ status: number; data: T }> {
    let peticionPut: Response = await fetch(url, {
      method: "PUT",
      headers: this.getHeaders(this.headders, parameters?.headers),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      body: JSON.stringify(parameters?.body),
    });

    return await this.compStatus(peticionPut, parameters?.maper);
  }

  public async delete<T>(
    url: string,
    parameters?: Parameters
  ): Promise<{ status: number; data: T }> {
    let peticionDelete: Response = await fetch(url, {
      method: "DELETE",
      headers: this.getHeaders(this.headders, parameters?.headers),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      body: JSON.stringify(parameters?.body),
    });

    return await this.compStatus(peticionDelete, parameters?.maper);
  }

  public async patch<T>(
    url: string,
    parameters?: Parameters
  ): Promise<{ status: number; data: T }> {
    let peticionPatch: Response = await fetch(url, {
      method: "PATCH",
      headers: this.getHeaders(this.headders, parameters?.headers),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      body: JSON.stringify(parameters?.body),
    });

    return await this.compStatus(peticionPatch, parameters?.maper);
  }

  private getHeaders(locals: any, user?: any): any {
    if (user) {
      const localHeaderkeys: string[] = Object.keys(locals);
      const userHeaderKeys: string[] = Object.keys(user);
      let keyBusqueda: string | undefined;

      userHeaderKeys.forEach((headUser) => {
        keyBusqueda = localHeaderkeys.find(
          (headLocal) =>
            String(headLocal).trim().toLowerCase() ===
            String(headUser).trim().toLowerCase()
        );
        if (keyBusqueda) delete locals[keyBusqueda];
      });

      return { ...locals, ...user };
    } else return locals;
  }

  private async compStatus(peticion: Response, Maper?: any): Promise<ResProv> {
    const { status } = peticion;
    let respuesta: ResProv;

    try {
      if (!Maper || Maper === undefined) {
        respuesta = { status, data: await peticion.clone().json() };
      } else {
        const jsons = await peticion.clone().json();

        try {
          respuesta = { status, data: new Maper(jsons) };
        } catch (ex) {
          respuesta = {
            status,
            data: "Los datos recibidos no pueden ser convertidos a objetos de tipo 'Maper'",
          };
        }
      }
    } catch (e) {
      try {
        respuesta = { status, data: await peticion.clone().text() };
      } catch (error) {
        respuesta = { status, data: error };
      }
    }
    return respuesta;
  }
}

export default new Fetcher();
