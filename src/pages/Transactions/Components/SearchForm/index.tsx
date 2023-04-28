import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

/** Porque que um componente renderiza?
 * - Hooks changed (mudança de estado, contexto, reducer...)
 * - Props cahnged (mudou propriedades)
 * - Parent rendered (componente pai renderizou)
 *
 * Fluxo de renderização:
 * 1. React recria o HTML da interface daquele componente
 * 2. Compara a versao do HTML recriada com a versão anterior
 * 3. SE mudou alguma coisa, ele reescreve o HTML na tela
 *
 * Memo:
 * Adiciona um passo 0: Hooks changed?, props Changed? (deep comparison)
 * 0.1. Comparar a versao anteriro dos hooks e props
 * 0.2. Se mudou algo, ele vai permitir a nova renderização
 */

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)

    reset()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
