import '../../styles/tool-bar/index.less';
import { FC } from 'react';

export type ToolBarProps<T = Record<string, any>> = {};

/**
 * 工具栏
 * @param props
 * @constructor
 */
const ToolBar: FC<ToolBarProps> = (props) => {
  const {} = props;
  return (
    <div className={`tool-bar-container`}>
      <div>工具1</div>
      <div>工具2</div>
    </div>
  );
};

export default ToolBar;
