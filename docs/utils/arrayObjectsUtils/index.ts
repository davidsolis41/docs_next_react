class arrayObjectsUtils {
  menorAMayor(arrayObjetos: any[], valorFiltrar: string): object[] {
    return arrayObjetos
      .map((e) => e)
      .sort((a, b) => Number(a[valorFiltrar]) - Number(b[valorFiltrar]));
  }

  mayorAMenor(arrayObjetos: any[], valorFiltrar: string): object[] {
    return arrayObjetos
      .map((e) => e)
      .sort((a, b) => Number(b[valorFiltrar]) - Number(a[valorFiltrar]));
  }

  aZ(arrayObjetos: any[], valorFiltrar: string): object[] {
    return arrayObjetos
      .map((el, i) =>
        Object({ index: i, value: el[valorFiltrar].toLowerCase() })
      )
      .sort((a, b) => (a.value > b.value ? 1 : a.value < b.value ? -1 : 0))
      .map((el: any) => arrayObjetos[el.index]);
  }

  zA(arrayObjetos: any[], valorFiltrar: string): object[] {
    return arrayObjetos
      .map((el, i) =>
        Object({ index: i, value: el[valorFiltrar].toLowerCase() })
      )
      .sort((a, b) => (a.value > b.value ? -1 : a.value < b.value ? 1 : 0))
      .map((el: any) => arrayObjetos[el.index]);
  }

  trueFalse(arrayObjetos: any[], valorFiltrar: string): object[] {
    return arrayObjetos
      .map((el, i) => Object({ index: i, value: Boolean(el[valorFiltrar]) }))
      .sort((a, b) => (a.value > b.value ? -1 : a.value < b.value ? 1 : 0))
      .map((el) => arrayObjetos[el.index]);
  }

  falseTrue(arrayObjetos: any[], valorFiltrar: string): object[] {
    return arrayObjetos
      .map((el, i) => Object({ index: i, value: Boolean(el[valorFiltrar]) }))
      .sort((a, b) => (a.value > b.value ? 1 : a.value < b.value ? -1 : 0))
      .map((el) => arrayObjetos[el.index]);
  }

  objetosRangosNumericos(
    arrayObjetos: any[],
    valorFiltrar: string,
    inicial: number | string,
    final: number | string
  ): object[] {
    return arrayObjetos
      .map((e) => e)
      .filter(
        (el) =>
          Number(el[valorFiltrar]) >= Number(inicial) &&
          Number(el[valorFiltrar]) <= Number(final)
      );
  }
}

export default new arrayObjectsUtils();
