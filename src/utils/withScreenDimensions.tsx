import React, { useState } from "react";

type Props = {
  Component?: React.FC | undefined;
};

export viewPortConfig = [];

export function withScreenDimensionController(Component): Fn | void {
  // const k

  function BaseComponent(props: Props): Props.FC | void {
    const [ width, setWidth ] = useState();
    const [ width, setWidth ] = useState();
    return <BaseComponent {...props} />;
  }

  return BaseComponent;
}

export default withScreenDimensionController;
