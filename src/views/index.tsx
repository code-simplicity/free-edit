import React, { FC, useContext } from 'react';
import { ViewsProps } from '../types';
import '../styles/views/index.less';
import ToolBar from '../components/tool-bar';
import { ThemeContext } from '../context/theme';

/**
 * 视图入口
 * @param props
 * @constructor
 */
const Views: FC<ViewsProps> = props => {
  const { style } = props;
  return (
    <ThemeContext.Provider value={{ theme: 'dark' }}>
      <div style={style} className={`views-container`}>
        <div>
          <ToolBar />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Views;
