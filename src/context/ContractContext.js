import React, { useEffect, useState } from 'react';

export const ContractContext = React.createContext();

const { ethereum } = window

export const ContractProvider = ({ children }) => {

    const [account, setAccount] = useState('')

    const checkIfWalletIsConnected = async () => {
        try {

            if (!ethereum) return alert('Please Install Metamask')

            const accounts = await ethereum.request({ method: 'eth_accounts' })
            if (accounts.length) {
                setAccount(accounts[0])
            }

        } catch (error) {
            console.log(error);
        }
    }

    const connectWallet = async () => {
        try {

            if (!ethereum) return alert('Please Install Metamask')

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
            if (accounts.length) {
                setAccount(accounts[0])
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected()
    }, [])
    useEffect(() => {
        if (ethereum) {

            const handleAccountsChanged = async (newAccounts) => {
                if (newAccounts.length > 0) {
                    setAccount(newAccounts[0]);
                } else {
                    setAccount('');
                }
            };

            ethereum.on('accountsChanged', handleAccountsChanged);

            return () => {
                ethereum.removeListener('accountsChanged', handleAccountsChanged);
            };
        }
    }, [ethereum])

    return (
        <ContractProvider value={{ account, connectWallet }}>
            {children}
        </ContractProvider>
    )
}