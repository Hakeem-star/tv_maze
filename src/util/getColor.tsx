import ColorThief from "colorthief";

export default async function getColor(imgSrc: string) {
  const colorThief = new ColorThief();
  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.src = imgSrc;

  return new Promise((resolve, reject) => {
    img.addEventListener("load", async function (e) {
      resolve(colorThief.getColor(img));
    });

    img.addEventListener("error", () => {
      reject(`Color Thief React | Failed to load image URL: ${imgSrc}`);
    });
  });
}
