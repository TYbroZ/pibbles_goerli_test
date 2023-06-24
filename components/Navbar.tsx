import Link from "next/link";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function Navbar() {
    const address = useAddress();

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <Link href="/">
                    <p>Rescue Pibbles</p>
                </Link>
                <div className={styles.navLinks}>
                    {address && (
                        <Link href={'/profile/${address}'}>
                            <p>Your Rescue Pibbles NFTs</p>
                        </Link>
                    )}    
                </div>
                <ConnectWallet />
            </div>
        </div>
    )
}