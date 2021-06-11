import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from '../components/Header/Header'

const queryClient = new QueryClient()

test('renders github button', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
      </Router>
    </QueryClientProvider>
  )
  // Before loading
  expect(screen.getByText(/Loading GitHub link/i)).toBeInTheDocument()
  // wait for appearance inside an assertion
  await waitFor(() => {
    const githubLink = screen.getByText(/My GitHub/i)
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/AlexeyVolkov'
    )
  })
})
