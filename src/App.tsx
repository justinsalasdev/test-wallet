import { useWallet, ConnectType } from "@terra-money/wallet-provider";

export default function App() {
  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    availableInstallTypes,
    connect,
  } = useWallet();

  return (
    <div>
      <section>
        <button onClick={() => connect(ConnectType.WALLETCONNECT)}>
          connect
        </button>
        <pre>
          {JSON.stringify(
            {
              status,
              network,
              wallets,
              availableConnectTypes,
              availableInstallTypes
            },
            null,
            2
          )}
        </pre>
      </section>
    </div>
  );
}
