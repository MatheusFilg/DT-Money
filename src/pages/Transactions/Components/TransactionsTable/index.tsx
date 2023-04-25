import { useContext } from 'react'
import { SearchForm } from '../SearchForm'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import {
  PriceHighlight,
  TranctionsTableBody,
  TransactionsTableContainer,
} from './styles'
import { dateFormatter, priceFormatter } from '../../../../utils/formatter'

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <TransactionsTableContainer>
      <SearchForm />
      <TranctionsTableBody>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td width="40%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            )
          })}
        </tbody>
      </TranctionsTableBody>
    </TransactionsTableContainer>
  )
}
