import { Card } from './card';

const imageSrc =
  'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=200';

describe('<Button />', () => {
  it('should render the card', () => {
    cy.mount(
      <Card
        title="Card title"
        description="card description"
        imageSrc={imageSrc}
      />,
    );

    cy.get('.flex.border').should('exist');
  });

  it('should have the correct content', () => {
    cy.mount(
      <Card
        title="Card title"
        description="card description"
        imageSrc={imageSrc}
      />,
    );

    cy.get('h2').should('exist').and('contain.text', 'Card title');
    cy.get('p').should('exist').and('contain.text', 'card description');
    cy.get('img').should('exist');
  });
});
