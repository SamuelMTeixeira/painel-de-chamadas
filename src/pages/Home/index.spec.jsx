import { expect, it, describe } from 'vitest'
import { render, screen } from '@testing-library/react';
import Home from '.';


describe('Home', () => {
    it('should render header elements', () => {
        render(<Home />)

        expect(screen.getByText('Secretaria Municipal de Saúde')).toBeInTheDocument()

        expect(screen.getByRole('img')).toBeInTheDocument()
        expect(screen.getByRole('img')).toBeVisible()
        expect(screen.getByRole('img')).not.toBeNull()
    })

    it('should render default ticket data', () => {
        render(<Home />)

        expect(screen.getByTestId('senha')).toBeInTheDocument()
        expect(screen.getByTestId('senha')).not.toBeNull()
        expect(screen.getByTestId('senha')).toBeVisible()

        expect(screen.getByTestId('prioridade')).toBeInTheDocument()
        expect(screen.getByTestId('prioridade')).not.toBeNull()
        expect(screen.getByTestId('prioridade')).toBeVisible()

        expect(screen.getByTestId('guiche')).toBeInTheDocument()
        expect(screen.getByTestId('guiche')).not.toBeNull()
        expect(screen.getByTestId('guiche')).toBeVisible()


        expect(screen.getByTestId('paciente')).toBeInTheDocument()
        expect(screen.getByTestId('paciente')).not.toBeNull()
        expect(screen.getByTestId('paciente')).toBeVisible()
    }
    )
})