import { BIDTPage } from './app.po';

describe('bidt App', () => {
  let page: BIDTPage;

  beforeEach(() => {
    page = new BIDTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
