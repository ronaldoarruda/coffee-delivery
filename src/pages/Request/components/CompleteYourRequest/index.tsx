import { CompleteYourRequestContainer, TagComplete } from './style'

export function CompleteYourRequest() {
  return (
    <CompleteYourRequestContainer>
      <TagComplete>Complete seu pedido</TagComplete>
      <div /* Container de Endereço de entrega */>
        <div /* bloco visual de icone + End.Entrega + span */>
          <img src="" alt="" />
          <div /* div para facilitar o flexbox */>
            <h3>Endereço de entrega</h3>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </div>

        <div /* Input's */>
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </div>
      </div>
    </CompleteYourRequestContainer>
  )
}
