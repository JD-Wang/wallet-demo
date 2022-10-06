import { useWeb3React } from '@web3-react/core'
import { useEffect } from 'react'
import { InjectedConnector } from '@web3-react/injected-connector'
// import { CryptoCards, Button, Accordion, BannerStrip, Radios, Modal } from '@web3uikit/core'
// import { Blockie, ConnectButton, NativeBalance, BlockNumber } from '@web3uikit/web3'
import { MoralisProvider } from 'react-moralis'

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 10, 42]
})

const Home = () => {
  const sb = useWeb3React()
  console.log(sb, 'sbbb')
  const { active, account, library, connector, activate, deactivate } = sb

  async function connect() {
    try {
      await activate(injected)
      localStorage.setItem('isWalletConnected', true)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
      localStorage.setItem('isWalletConnected', false)
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
          await activate(injected)
          localStorage.setItem('isWalletConnected', true)
        } catch (ex) {
          console.log(ex)
        }
      }
    }
    connectWalletOnPageLoad()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center" style={{ textAlign: 'center', marginTop: '100px' }}>
      <button onClick={connect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">
        连接 MetaMask钱包
      </button>
      <button onClick={disconnect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">
        断开连接
      </button>
      <div>
        {active ? (
          <span>
            Connected with <b>{account}</b>
          </span>
        ) : (
          <span>Not connected</span>
        )}
      </div>
    </div>
  )
}

export default Home
