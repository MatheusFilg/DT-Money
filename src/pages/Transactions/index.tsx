import { Header } from '../../components/Header'
import { Summary } from './Components/Summary'
import { TransactionsTable } from './Components/TransactionsTable'
import { TransactionsContainer } from './styles'

export function Transactions() {
  return (
    <TransactionsContainer>
      <Header />
      <Summary />
      <TransactionsTable />
    </TransactionsContainer>
  )
}
