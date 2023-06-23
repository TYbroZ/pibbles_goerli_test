import { ThirdwebNftMedia, useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
import styles from '../../styles/Home.module.css';
import { CONTRACT_ADDRESS } from '../../const/addresses';

export default function Profile() {
    const address = useAddress();

    const truncateAddress = (address: string) => {
        return '${address.slice(0,6)}...${address.slice(-4)}';
    };

    const {
        contract 
    } = useContract (CONTRACT_ADDRESS);

    const {
        data: ownedNFTs,
        isLoading: isOwnedNFTsLoading,
    } = useOwnedNFTs(contract, address);

    return (
        <div className={styles.container}>
            {address ? (
                <div>
                    <div>
                        <h1>Your Rescue Pibbles NFTs</h1>
                        <p>Your Wallet Address: {truncateAddress(address || "")}</p>
                    </div>

                    <div>
                        <div className={styles.grid}>
                            {!isOwnedNFTsLoading ? (
                                ownedNFTs?.length! > 0 ? (
                                    ownedNFTs?.map((nft) => (
                                        <div key={nft.metadata.id} className={styles.NFTcard}>
                                           <ThirdwebNftMedia
                                                metadata={nft.metadata}
                                           />
                                           <h3>{nft.metadata.name}</h3>

                                        </div>
                                    ))
                                ) : (
                                    <p>No NFTs owned</p>

                                )
                            
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                    </div>

                </div>

            ) : (
                <div className={styles.main}>
                    <p>Please connect your wallet</p>
                </div>
            )}
        </div>
    )
}