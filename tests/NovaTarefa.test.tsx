import { render, screen, fireEvent } from '@testing-library/react'
import NovaTarefa from '../components/NovaTarefa'

describe('NovaTarefa', () => {
  it('deve renderizar o input e o botão', () => {
    render(<NovaTarefa onAdd={() => {}} />)

    expect(screen.getByPlaceholderText('nova tarefa')).toBeInTheDocument()
    expect(screen.getByText('Adicionar')).toBeInTheDocument()
  })

  it('nao enviar input vazio', () => {
    const onAdd = jest.fn()

    render(<NovaTarefa onAdd={onAdd} />)

    fireEvent.click(screen.getByText('Adicionar'))

    expect(onAdd).not.toHaveBeenCalled()
  })

  it('envia tarefa corretamente', () => {
    const onAdd = jest.fn()

    render(<NovaTarefa onAdd={onAdd} />)

    fireEvent.change(screen.getByPlaceholderText('nova tarefa'), {
      target: { value: 'Nova tarefa' }
    })

    fireEvent.click(screen.getByText('Adicionar'))

    expect(onAdd).toHaveBeenCalledWith('Nova tarefa')
  })
})
    