import styles from './contact.module.css';
import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';

export const metadata = {
  title: `NextFlix | Contact`,
  description: 'Contact us page for NextFlix, Best place to find great shows and movies to watch.',
}

const Contact = () => {
  return (
    <>
    <div className={styles.container}>
    <h1>Contact Us</h1>
      <ContactCard />

      <section className={styles.contact_section}>
        <h2>We&apos;d love to hear <span> from you </span></h2>
        <ContactForm />
      </section>
    </div>
    </>
  );
};

export default Contact;
