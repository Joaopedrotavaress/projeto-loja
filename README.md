# 📦 Melhor Loja por Endereço de Entrega

Este projeto calcula **qual é a melhor loja** para atender um cliente com base no **CEP informado** e no **valor da compra**, utilizando a **Google Distance Matrix API** para obter a distância e o tempo estimado de entrega.  

O objetivo é ajudar a **selecionar automaticamente o ponto de distribuição mais próximo** e aplicar as **regras de frete** conforme a distância e o valor da compra.

---

## 🚀 Funcionalidades

- Consulta a distância e tempo entre o CEP informado e as lojas cadastradas.
- Seleção automática da loja mais rápida para entrega.
- Aplicação automática das regras de frete:
  - **Distância até 10 km** → Frete grátis acima de R$100,00, caso contrário R$5,00.
  - **Distância acima de 10 km** → Frete grátis acima de R$150,00, caso contrário R$10,00.
- Exibição detalhada das distâncias, tempos e loja escolhida.

---

## 🛠 Tecnologias Utilizadas

- **HTML5** — Estrutura da página
- **CSS3** — Estilização
- **JavaScript** — Lógica de cálculo e integração com API
- **Google Distance Matrix API** — Cálculo de distâncias e tempos de trajeto

---

## 📋 Como Usar

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/seu-usuario/melhor-loja-entrega.git
   cd melhor-loja-entrega
---
### 2️⃣ Configurar a API do Google

1. Obtenha uma **API Key** no [Google Cloud Console](https://console.cloud.google.com/).
2. Ative o serviço **Distance Matrix API** no seu projeto do Google Cloud.
3. Adicione sua chave no arquivo `api.js` ou diretamente no `index.html`:
   ```html
   <script async
     src="https://maps.googleapis.com/maps/api/js?key=SUA_CHAVE_AQUI&libraries=places">
   </script>
---
### 3️⃣ Executar o projeto
- Abra o arquivo `index.html` diretamente no navegador.

---

## 📌 Exemplo de Uso

1. Informe seu **CEP**.
2. Digite o **valor da compra**.
3. Clique em **Enviar**.
4. O sistema exibirá:
   - 📍 Distância e tempo de todas as lojas.
   - 🏆 Melhor loja selecionada.
   - 🚚 Valor estimado do frete.

---

## ⚠️ Observações

- É necessário ter acesso à internet para que a API funcione corretamente.
- O valor mínimo para entrega é **R$50,00**.
- Os endereços das lojas estão cadastrados diretamente no código (`array destinos`), mas podem ser adaptados para vir de um banco de dados ou API própria.

---

## 📄 Licença
Este projeto está sob a licença **MIT** — sinta-se à vontade para usar, modificar e distribuir.

