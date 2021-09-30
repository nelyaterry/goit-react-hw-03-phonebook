import ButtonText from "../Button/Button";
import {
  ContacstList,
  Contact,
  ContactName,
  ContactPhone,
  MessageNotFound,
} from "./Contacts.styled";

const Contacts = ({ contacts, handleDeleteContact }) => {
  console.log(contacts);
  return (
    // <p>helloWorld {contacts[0]}</p>
    contacts.length > 0 ? (
      <ContacstList>
        {contacts.map(({ name, number, id }) => (
          <Contact key={id}>
            <ContactName>{name}</ContactName>
            <ContactPhone>{number}</ContactPhone>
            <ButtonText type="button" onClick={() => handleDeleteContact(id)}>
              Delete
            </ButtonText>
          </Contact>
        ))}
      </ContacstList>
    ) : (
      <MessageNotFound>Contact not found</MessageNotFound>
    )
  );
};

export default Contacts;
