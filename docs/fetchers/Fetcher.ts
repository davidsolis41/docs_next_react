type Parameters = {
  headers?: any;
  body?: any;
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

    return await this.compStatus(peticionGet);
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

    return await this.compStatus(peticionPost);
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

    return await this.compStatus(peticionPut);
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

    return await this.compStatus(peticionDelete);
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

    return await this.compStatus(peticionPatch);
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

  private async compStatus(peticion: Response): Promise<ResProv> {
    const { status } = peticion;
    let respuesta: ResProv;
    try {
      respuesta = { status, data: await peticion.clone().json() };
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
