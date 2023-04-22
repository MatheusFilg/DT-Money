import { SearchForm } from '../SearchForm'
import {
  PriceHighlight,
  TranctionsTableBody,
  TransactionsTableContainer,
} from './styles'

export function TransactionsTable() {
  return (
    <TransactionsTableContainer>
      <SearchForm />
      <TranctionsTableBody>
        <tbody>
          <tr>
            <td width="40%">Desenvolvimento de site</td>
            <td>
              <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td width="40%">Hamburguer</td>
            <td>
              <PriceHighlight variant="outcome">- R$ 59,00</PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tr>
        </tbody>
      </TranctionsTableBody>
    </TransactionsTableContainer>
  )
}
