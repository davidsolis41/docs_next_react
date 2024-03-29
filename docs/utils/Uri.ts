function Uri(url: string, params: string = "", query: any = {}): string {
  let uri: string = url.concat(
    params.trim().length > 0 && params.indexOf("/") != 0 ? `/${params}` : params
  );

  const queryKeys: string[] = Object.keys(query) || [];
  if (queryKeys.length > 0)
    queryKeys.forEach((key, i) => {
      uri += i === 0 ? "?" : "&";
      uri += `${key}=${query[key]}`;
    });

  return uri;
}
export default Uri;
