class arrayObjectsUtils {
  eliminarObjeto<T>(arrayObjetos: T[], objetoEliminar: T): T[] {
    const keys: string[] = Object.keys(objetoEliminar as any);
    let newArray: T[] = [];

    for (let i = 0; i < arrayObjetos.length; i++) {
      let coincidencia: boolean = false;
      const obj = arrayObjetos[i];

      for (let j = 0; j < keys.length; j++) {
        const key = keys[j];
        if ((objetoEliminar as any)[key] === (obj as any)[key])
          coincidencia = true;
        else {
          coincidencia = false;
          break;
        }
      }

      if (!coincidencia) newArray.push(obj);
    }
    return newArray;
  }

  eliminarRepetidos<T>(arrayObjetos: T[], propiedadFiltrar: string) {
    let result: any[] = [];
    arrayObjetos.forEach((item: any) => {
      if (
        !result.find(
          (res: any) => res[propiedadFiltrar] === item[propiedadFiltrar]
        )
      )
        result.push(item);
    });
    return result;
  }

  menorAMayor<T>(arrayObjetos: T[], propiedadFiltrar: string) {
    return arrayObjetos
      .map((e) => e)
      .sort(
        (a: any, b: any) =>
          Number(a[propiedadFiltrar]) - Number(b[propiedadFiltrar])
      );
  }

  mayorAMenor<T>(arrayObjetos: T[], propiedadFiltrar: string) {
    return arrayObjetos
      .map((e) => e)
      .sort(
        (a: any, b: any) =>
          Number(b[propiedadFiltrar]) - Number(a[propiedadFiltrar])
      );
  }

  aZ<T>(arrayObjetos: T[], propiedadFiltrar: string) {
    return arrayObjetos
      .map((el: any, i) =>
        Object({ index: i, value: el[propiedadFiltrar].toLowerCase() })
      )
      .sort((a, b) => (a.value > b.value ? 1 : a.value < b.value ? -1 : 0))
      .map((el: any) => arrayObjetos[el.index]);
  }

  zA<T>(arrayObjetos: T[], propiedadFiltrar: string) {
    return arrayObjetos
      .map((el: any, i) =>
        Object({ index: i, value: el[propiedadFiltrar].toLowerCase() })
      )
      .sort((a, b) => (a.value > b.value ? -1 : a.value < b.value ? 1 : 0))
      .map((el: any) => arrayObjetos[el.index]);
  }

  trueFalse<T>(arrayObjetos: T[], propiedadFiltrar: string) {
    return arrayObjetos
      .map((el: any, i) =>
        Object({ index: i, value: Boolean(el[propiedadFiltrar]) })
      )
      .sort((a, b) => (a.value > b.value ? -1 : a.value < b.value ? 1 : 0))
      .map((el) => arrayObjetos[el.index]);
  }

  falseTrue<T>(arrayObjetos: T[], propiedadFiltrar: string) {
    return arrayObjetos
      .map((el: any, i) =>
        Object({ index: i, value: Boolean(el[propiedadFiltrar]) })
      )
      .sort((a, b) => (a.value > b.value ? 1 : a.value < b.value ? -1 : 0))
      .map((el) => arrayObjetos[el.index]);
  }

  objetosRangosNumericos(
    arrayObjetos: any[],
    propiedadFiltrar: string,
    inicial: number | string,
    final: number | string
  ) {
    return arrayObjetos
      .map((e) => e)
      .filter(
        (el) =>
          Number(el[propiedadFiltrar]) >= Number(inicial) &&
          Number(el[propiedadFiltrar]) <= Number(final)
      );
  }
}

export default new arrayObjectsUtils();
