import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import renderer from 'react-test-renderer';

import ThemeContainer from '../app/ThemeContainer';

interface TestWrapperProps {
  children: React.ReactNode;
}

const TestWrapper: React.FC<TestWrapperProps> = ({ children }) => {
  return <ThemeContainer>{children}</ThemeContainer>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: TestWrapper, ...options });

const customSnapshotRender = (children: ReactElement) =>
  renderer.create(<TestWrapper>{children}</TestWrapper>);

export * from '@testing-library/react';
export { customRender as render, customSnapshotRender as renderSnapshot };
