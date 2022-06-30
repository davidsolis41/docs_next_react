export const fileToBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
      resolve(String(reader.result).replace("data:", "").replace(/^.+,/, ""));
    reader.onerror = (error) => reject(error);
  });

export function base64toFile(textBase64: string, NameyExt: string) {
  const arr = textBase64.split(",");
  const bstr = window.atob(arr[1]);
  //const mime: any = arr[0].match(/:(.*?);/)[1] as any;
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], NameyExt, { type: "image/png" });
}
