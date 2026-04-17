import styles from './Page.module.css';

const Contact = () => {
  return (
    <section className={styles.page}>
      <div className="container">
        <h1>Contact</h1>
        <p>Get in touch via email or social links.</p>
        <p>hello@example.com</p>
      </div>
    </section>
  );
};

export default Contact;