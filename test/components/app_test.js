import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';


// use 'describe' to group together similar tests
describe('App', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(App);
  })

  it('shows the comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

})

