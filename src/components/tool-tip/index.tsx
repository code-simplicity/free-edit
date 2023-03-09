import { CSSProperties, FC, ReactNode } from 'react';
import ResizeObserver from 'rc-resize-observer';
import CSSMotion from 'rc-motion';

export type ToolTipProps = {
  /**
   * 内联样式
   */
  style?: CSSProperties;
  /**
   * class样式
   */
  className?: CSSProperties;
  /**
   * 提示文字
   */
  title?: ReactNode;
  /**
   * 箭头方向
   */
  arrow?: boolean;
  /**
   * 背景颜色
   */
  backgroundColor?: string;
  /**
   * 触发行为
   */
  trigger?: string | string[];
  /**
   * z-index
   */
  zIndex?: number;
};

const ToolTip: FC<ToolTipProps> = (props) => {
  const { style, className, title, arrow, backgroundColor, ...resetProps } =
    props;
  const handleResize = () => {};
  const handleOpen = () => {};
  return (
    <ResizeObserver onResize={handleResize} disabled={handleOpen}>
      <CSSMotion>
        {() => {
          return <div>11</div>;
        }}
      </CSSMotion>
    </ResizeObserver>
  );
};

export default ToolTip;
