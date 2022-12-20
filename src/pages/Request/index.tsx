import { Header } from '../../components/header'
import { CompleteYourRequest } from './components/CompleteYourRequest'
import { RequestContainer } from './style'

export function Request() {
  return (
    <RequestContainer>
      <Header />
      <div>
        <CompleteYourRequest />
      </div>
    </RequestContainer>
  )
}
