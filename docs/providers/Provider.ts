type ResProv = {
  status: number;
  data: any;
};

class Provider {
  private headders: any = {
    "Content-Type": "application/json",
  };

  public async get(url: string, headers?: any): Promise<ResProv> {
    let peticionGet: Response = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(this.headders, headers),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
    });

    return await this.compStatus(peticionGet);
  }

  public async post(url: string, headers?: any, body?: any): Promise<ResProv> {
    let peticionPost: Response = await fetch(url, {
      method: "POST",
      headers: this.getHeaders(this.headders, headers),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      body: JSON.stringify(body),
    });

    return await this.compStatus(peticionPost);
  }

  public async put(url: string, headers?: any, body?: any): Promise<ResProv> {
    let peticionPut: Response = await fetch(url, {
      method: "PUT",
      headers: this.getHeaders(this.headders, headers),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      body: JSON.stringify(body),
    });

    return await this.compStatus(peticionPut);
  }

  public async delete(
    url: string,
    headers?: any,
    body?: any
  ): Promise<ResProv> {
    let peticionDelete: Response = await fetch(url, {
      method: "DELETE",
      headers: this.getHeaders(this.headders, headers),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      body: JSON.stringify(body),
    });

    return await this.compStatus(peticionDelete);
  }

  public async patch(url: string, headers?: any, body?: any): Promise<ResProv> {
    let peticionPatch: Response = await fetch(url, {
      method: "PATCH",
      headers: this.getHeaders(this.headders, headers),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      body: JSON.stringify(body),
    });

    return await this.compStatus(peticionPatch);
  }

  private getHeaders(locals: any, user: any): any {
    if (user) {
      let headders = locals;
      let headers = user;
      let headderskeys = Object.keys(headders);
      let headersKeys = Object.keys(headers);
      let repetidos: string[] = [];

      headersKeys.map((propiedad) =>
        headderskeys.map((key) => {
          if (
            String(propiedad).trim().toLowerCase() ===
            String(key).trim().toLowerCase()
          ) {
            repetidos.push(String(key));
          }
        })
      );

      if (repetidos.length > 0)
        repetidos.map((key: string) => delete headders[key]);

      return { ...headders, ...headers };
    } else {
      return locals;
    }
  }

  private async compStatus(peticion: Response): Promise<ResProv> {
    let { status } = peticion;
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

export default new Provider();
