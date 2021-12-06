class arrayUtils {
  eliminarRepetidos(array: any[]) {
    let result: any[] = [];
    array.forEach((item: any) => {
      if (!result.includes(item)) result.push(item);
    });
    return result;
  }

  menorAMayor(arrayNumber: any[]): number[] {
    return arrayNumber.map((e) => e).sort((a, b) => Number(a) - Number(b));
  }

  mayorAMenor(arrayNumber: any[]): number[] {
    return arrayNumber.map((e) => e).sort((a, b) => Number(b) - Number(a));
  }

  aZ(arrayString: string[]): string[] {
    return arrayString
      .map((el, i) => Object({ index: i, value: el.toLowerCase() }))
      .sort((a, b) => (a.value > b.value ? 1 : a.value < b.value ? -1 : 0))
      .map((el) => arrayString[el.index]);
  }

  zA(arrayString: string[]): string[] {
    return arrayString
      .map((el, i) => Object({ index: i, value: el.toLowerCase() }))
      .sort((a, b) => (a.value > b.value ? -1 : a.value < b.value ? 1 : 0))
      .map((el) => arrayString[el.index]);
  }

  trueFalse(arrayBoolean: any[]): boolean[] {
    return arrayBoolean
      .map((e) => e)
      .sort((x, y) => (Boolean(x) === Boolean(y) ? 0 : x ? -1 : 1));
  }

  falseTrue(arrayBoolean: any[]): boolean[] {
    return arrayBoolean
      .map((e) => e)
      .sort((x, y) => (Boolean(x) === Boolean(y) ? 0 : x ? 1 : -1));
  }

  rangosNumericos(
    arrayNumber: any[],
    inicial: number | string,
    final: number | string
  ): number[] {
    return arrayNumber
      .map((e) => e)
      .filter(
        (el) => Number(el) >= Number(inicial) && Number(el) <= Number(final)
      );
  }
}

export default new arrayUtils();
