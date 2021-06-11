import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

test('renders homepage link', () => {
  render(<App />)
  const linkElement = screen.getByText(/CSS3 is Awesome/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders menu', () => {
  render(<App />)
  const rocketLink = screen.getByText(/rocket/i)
  expect(rocketLink).toBeInTheDocument()
  const rainLink = screen.getByText(/дождь/i)
  expect(rainLink).toBeInTheDocument()
  const boxLink = screen.getByText(/box/i)
  expect(boxLink).toBeInTheDocument()
  const bicycleLink = screen.getByText(/bicycle/i)
  expect(bicycleLink).toBeInTheDocument()
})

test('navigates to rain tv', () => {
  render(<App />)
  const rainLink = screen.getByText(/дождь/i)
  fireEvent.click(rainLink)
  expect(screen.getByText(/optimistic channel/i)).toBeInTheDocument()
})
