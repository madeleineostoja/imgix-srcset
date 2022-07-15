type ImgixProps = { [key: string]: string };

function trimSrc(src: string) {
  return src.split(/[?#]/)[0];
}

export default function srcset(src: string, imgixProps: ImgixProps = {}) {
  const resolutions: number[] = [],
    sets = [];

  let prev = 100;

  while (prev <= 8192) {
    resolutions.push(2 * Math.round(prev / 2));
    prev *= 1 + 0.08 * 2;
  }

  for (var i = 0; i < resolutions.length; i++) {
    const params = {
      w: resolutions[i].toString(),
      ...imgixProps
    };

    sets.push(
      `${trimSrc(src)}?${new URLSearchParams(params).toString()} ${
        resolutions[i]
      }w`
    );
  }

  return sets.join(', ');
}
