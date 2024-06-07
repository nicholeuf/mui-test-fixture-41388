/*
 * @jest-environment jsdom
 */
import { render, renderSnapshot, screen } from '@/utils/test-utils';
import userEvent from '@testing-library/user-event';

import Page from './page';

describe('The Page', () => {
  test('has expected snapshot', () => {
    const component = renderSnapshot(<Page />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('works as expected', async () => {
    const user = userEvent.setup();

    render(<Page />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Example Tabs');

    const tab1 = screen.getByRole('tab', { name: 'Item One' });
    expect(tab1).toBeVisible();
    const tabPanel1 = screen.getByRole('tabpanel', { name: 'Item One' });
    expect(tabPanel1).toBeVisible();

    const tab2 = screen.getByRole('tab', { name: 'Item Two' });
    expect(tab2).toBeVisible();

    // This triggers an error, which only happens while under test
    // TypeError: Cannot read properties of null (reading 'offsetHeight')
    await user.click(tab2);

    const tabPanel2 = screen.getByRole('tabpanel', { name: 'Item Two' });
    expect(tabPanel2).toBeVisible();
  });
});
