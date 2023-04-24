import Link from "next/link";
import { MdEmail, MdForum, MdVoiceChat } from 'react-icons/md'
import styles from '../contact/contact.module.css'


const ContactCard = () => {
    return (
        <div className={styles.section}>
          <div className={styles.container}>
            <div className={styles.grid}>
              <div className={styles.grid_card}>
                <i> <MdEmail /> </i>
                <h2>Email</h2>
                <p>Monday to Friday Expected</p>
                <p className={styles.last_para}>Response time : 72 hours</p>
                <Link href="mailto:notmyrealemail@netflix.com">Send Email <span>-&gt;</span> </Link>
              </div>
              <div className={styles.grid_card}>
                <i> <MdVoiceChat /> </i>
                <h2>Live Chat</h2>
                <p>Weekdays: 9 Am - 6 PM IST</p>
                <p className={styles.last_para}>Weekends: 9 AM - 5 PM IST</p>
                <Link href="https://wa.me/+919999999999" target="_blank">Chat Now<span>-&gt;</span> </Link>
              </div>
              <div className={styles.grid_card}>
                <i> <MdForum /> </i>
                <h2>Community Forum</h2>
                <p>Monday to Friday Expected</p>
                <p className={styles.last_para}>Response time : 72 hours</p>
                <Link href="mailto:notmyrealemail@netflix.com">Ask the community <span>-&gt;</span> </Link>
              </div>
            </div>
          </div>
        </div>
      )
}

export default ContactCard