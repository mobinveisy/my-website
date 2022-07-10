import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'mobinveisy.ir',
    href: 'https://mobinveisy.ir',
  },
  {
    social: 'email',
    link: 'mobinveisy@yahoo.com',
    href: 'mailto:mobinveisy@yahoo.com',
  },
  {
    social: 'github',
    link: 'mobinveisy',
    href: 'https://github.com/mobinveisy',
  },
  {
    social: 'linkedin',
    link: 'mobinveisy',
    href: 'https://www.linkedin.com/in/mobin-veisy/',
  },
  {
    social: 'telegram',
    link: 'mobinveisy',
    href: 'https://t.me/mobinveisy',
  },

];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
