import { NgResumePage } from './app.po';

describe('ng-resume App', () => {
  let page: NgResumePage;

  beforeEach(() => {
    page = new NgResumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
