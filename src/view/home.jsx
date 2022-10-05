import { useWeb3React } from "@web3-react/core"
import { useEffect } from "react"
import { InjectedConnector } from "@web3-react/injected-connector"
import { CryptoCards, Button, Accordion, BannerStrip, Radios } from "@web3uikit/core"
import {
  Blockie,
  ConnectButton,
  NativeBalance,
  BlockNumber
} from "@web3uikit/web3"
import { MoralisProvider } from "react-moralis"

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 10, 42]
})

const Home = () => {
  const sb = useWeb3React()
  console.log(sb, "sbbb")
  const { active, account, library, connector, activate, deactivate } = sb

  async function connect() {
    try {
      await activate(injected)
      localStorage.setItem("isWalletConnected", true)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
      localStorage.setItem("isWalletConnected", false)
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await activate(injected)
          localStorage.setItem("isWalletConnected", true)
        } catch (ex) {
          console.log(ex)
        }
      }
    }
    connectWalletOnPageLoad()
  }, [])

  return (
    <div
      className='flex flex-col items-center justify-center'
      style={{ textAlign: "center", marginTop: "100px" }}
    >
      <button
        onClick={connect}
        className='py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800'
      >
        连接 MetaMask钱包
      </button>

      <button
        onClick={disconnect}
        className='py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800'
      >
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

      <BannerStrip />

      <Accordion
        hasLockIcon
        id='accordion'
        subTitle='the sub title'
        tagText='Tag!'
        theme='blue'
        title='Accordion'
      >
        <Blockie seed='0x0000000000000000000000000000000000000000' />
      </Accordion>

      <Radios
        id='radios'
        items={[
          {
            brand: "visa",
            expiresAt: {
              month: "04",
              year: "22"
            },
            fingerprint: "foo-bar-visa",
            id: "marty-mc-fly-visa-id",
            isExpired: false,
            lastDigits: "1177",
            name: "Marty McFly"
          },
          {
            brand: "mastercard",
            expiresAt: {
              month: "11",
              year: "24"
            },
            fingerprint: "foo-bar-master",
            id: "marty-mc-fly-master-id",
            isExpired: false,
            lastDigits: "1177",
            name: "Marty McFly"
          },
          {
            brand: "amex",
            expiresAt: {
              month: "11",
              year: "24"
            },
            fingerprint: "foo-bar-amex",
            id: "marty-mc-fly-amex-id",
            isExpired: false,
            lastDigits: "1177",
            name: "Marty McFly"
          },
          {
            brand: "diners",
            expiresAt: {
              month: "11",
              year: "24"
            },
            fingerprint: "foo-bar-diners",
            id: "marty-mc-fly-amex-id",
            isExpired: false,
            lastDigits: "1177",
            name: "Marty McFly"
          }
        ]}
        onBlur={function noRefCheck() {}}
        onChange={function noRefCheck() {}}
        onCreditCardRemoved={function noRefCheck() {}}
        title='How would you like pay for that?'
      />

      <MoralisProvider serverUrl='https://sb.xx.com' appId={123}>
        <BlockNumber variant='12313123'>1313222</BlockNumber>
        <NativeBalance>1313</NativeBalance>

        {/* <ConnectButton /> */}
      </MoralisProvider>

      <CryptoCards
        chain='ethereum'
        bgColor='blue'
        chainType='Network'
        onClick={console.log}
      />
      <Button theme='primary' type='button' text='Launch Dapp' />
    </div>
  )
}

export default Home
