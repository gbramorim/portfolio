import { useLottie } from "lottie-react";

import codeAnimation from "./code.json";

export function Code(props: { size: number }) {
  const options = {
    animationData: codeAnimation,
    loop: true,
    style: {
      width: props.size,
      height: props.size,
    },
  };

  const { View } = useLottie(options);

  return <>{View}</>;
}
