import Container from './Container/Container';
import Phonebook from './Phonebook/Phonebook';

export const App = () => {
  return (
    <div>
      <Container title={'Phonebook'}>
        <Phonebook />
      </Container>
    </div>
  );
};
