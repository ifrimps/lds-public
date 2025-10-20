import { Button } from './button';

describe('<Button />', () => {
  it('should render the button with correct text', () => {
    cy.mount(
      <Button label="Click me" onClick={() => console.log('button clicked')} />,
    );
    cy.get('button').should('exist').and('contain.text', 'Click me');
  });

  it('should trigger click event', () => {
    const onClick = cy.stub();
    cy.mount(<Button label="Click me" onClick={onClick} />);
    cy.get('button').click();

    cy.wrap(onClick).should('have.been.calledOnce');
  });
});
