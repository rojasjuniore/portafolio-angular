import { TemplateHtml5Page } from './app.po';

describe('template-html5 App', () => {
  let page: TemplateHtml5Page;

  beforeEach(() => {
    page = new TemplateHtml5Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
