<div align="center">

# 🎲 Gerador de Texto com Cadeia de Markov

<img src="https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
<img src="https://img.shields.io/badge/Vite-5.4.10-646cff?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
<img src="https://img.shields.io/badge/JavaScript-ES6+-f7df1e?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
<img src="https://img.shields.io/badge/CSS3-Animations-1572b6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>

**Uma aplicação web interativa que demonstra o funcionamento das Cadeias de Markov através da geração probabilística de texto**

[🚀 Demonstração](#-demonstração) • [📚 Sobre o Projeto](#-sobre-o-projeto) • [🎯 Funcionalidades](#-funcionalidades) • [⚙️ Instalação](#️-instalação) • [👥 Equipe](#-equipe)

---

</div>

## 📖 Sobre o Projeto

Este projeto foi desenvolvido como trabalho da disciplina **Estruturas Matemáticas** da **Universidade Salvador (UNIFACS)** sob orientação da **Prof.ª Ivana Barreto Matos**.

### 🤔 O que são Cadeias de Markov?

Cadeias de Markov são modelos matemáticos que descrevem uma sequência de eventos onde a probabilidade de cada evento depende apenas do estado anterior. No contexto deste projeto:

- 📝 Analisamos um texto base fornecido pelo usuário
- 🔍 Identificamos padrões de transição entre palavras
- 📊 Calculamos probabilidades de ocorrência
- ✨ Geramos novos textos seguindo essas probabilidades

### 🎓 Aplicações Práticas

- **Processamento de Linguagem Natural**: Base para autocomplete e correção ortográfica
- **Geração de Conteúdo**: Criação de textos, músicas e arte procedural
- **Análise Preditiva**: Previsão de comportamentos em séries temporais
- **Ciência de Dados**: Modelagem de processos estocásticos

---

## ✨ Funcionalidades

### 🎨 Interface Moderna e Responsiva

- **Design Dark Mode** com gradientes suaves e animações fluidas
- **Layout Responsivo** que se adapta a diferentes tamanhos de tela
- **Feedback Visual** com animações e transições elegantes

### 🛠️ Recursos Principais

| Recurso                               | Descrição                                    |
| ------------------------------------- | -------------------------------------------- |
| 📝 **Texto Base Personalizável**      | Insira qualquer texto para treinar o modelo  |
| 🎯 **Palavra Inicial Configurável**   | Escolha como começar a geração               |
| 📏 **Tamanho Ajustável**              | Defina quantas palavras serão geradas (3-30) |
| 📊 **Visualização de Probabilidades** | Veja as chances de transição em tempo real   |
| 🎭 **Animação de Geração**            | Acompanhe palavra por palavra sendo gerada   |
| 📚 **Lista de Palavras Disponíveis**  | Visualize todo o vocabulário do texto base   |
| ⚡ **Geração Instantânea**            | Resultados rápidos com animações suaves      |

### 🔥 Destaques Técnicos

- ✅ **Validação Inteligente**: Verifica se a palavra inicial existe no vocabulário
- 🎲 **Aleatoriedade Controlada**: Usa distribuições de probabilidade reais
- 📈 **Cálculo de Probabilidades**: Mostra percentuais exatos de cada transição
- 🎨 **UI/UX Premium**: Ícones da biblioteca Lucide React, cores harmoniosas

---

## 🚀 Demonstração

### 📸 Captura de Tela

![Amostra da interface](https://res.cloudinary.com/dw0qtsos5/image/upload/v1763581971/Captura_de_tela_de_2025-11-19_16-51-15_jggwuo.png)

### 🎬 Exemplo de Uso

1. **Insira um texto base**:

   ```
   o gato dorme o gato corre o gato mia o cão late
   ```

2. **Escolha uma palavra inicial**: `gato`

3. **Ajuste o tamanho**: `10 palavras`

4. **Clique em "Gerar Texto"** e veja a mágica acontecer! ✨

**Resultado possível**:

```
gato dorme o gato mia o cão late o gato
```

**Probabilidades exibidas**:

- `dorme` → 33.3%
- `corre` → 33.3%
- `mia` → 33.3%

---

## ⚙️ Instalação

### 📋 Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**

### 🔧 Passo a Passo

```bash
# 1️⃣ Clone o repositório
git clone https://github.com/Pedrohxxz/MarkovGenerator.git

# 2️⃣ Entre na pasta do projeto
cd gerador-markov

# 3️⃣ Instale as dependências
npm install

# 4️⃣ Inicie o servidor de desenvolvimento
npm run dev

# 5️⃣ Acesse no navegador
# O app estará rodando em http://localhost:5173
```

### 📦 Comandos Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run preview  # Visualiza build de produção
npm run lint     # Executa o linter
```

---

## 🏗️ Estrutura do Projeto

```
gerador-markov/
├── 📁 public/              # Arquivos públicos estáticos
├── 📁 src/
│   ├── 📁 components/
│   │   ├── MarkovTextGenerator.jsx    # Componente principal
│   │   └── MarkovTextGenerator.css    # Estilos do componente
│   ├── App.jsx             # Componente raiz
│   ├── App.css             # Estilos globais
│   └── main.jsx            # Ponto de entrada
├── index.html              # HTML principal
├── package.json            # Dependências do projeto
├── vite.config.js          # Configuração do Vite
└── README.md               # Este arquivo
```

---

## 🧮 Como Funciona

### 1️⃣ Análise do Texto

```javascript
// Exemplo de transições criadas
texto: "o gato dorme o gato corre"

transições: {
  "o": ["gato", "gato"],
  "gato": ["dorme", "corre"],
  "dorme": ["o"],
  "corre": []
}
```

### 2️⃣ Cálculo de Probabilidades

```javascript
// Para a palavra "gato"
probabilidades: {
  "dorme": 50%,  // 1 de 2 ocorrências
  "corre": 50%   // 1 de 2 ocorrências
}
```

### 3️⃣ Geração do Texto

```javascript
1. Começa com a palavra inicial
2. Consulta possíveis próximas palavras
3. Escolhe aleatoriamente baseado nas probabilidades
4. Repete até atingir o tamanho desejado
```

---

## 🎨 Tecnologias Utilizadas

<div align="center">

| Tecnologia          | Uso                                            |
| ------------------- | ---------------------------------------------- |
| ⚛️ **React**        | Framework JavaScript para UI                   |
| ⚡ **Vite**         | Build tool e dev server ultra-rápido           |
| 🎨 **CSS3**         | Estilização avançada com animações             |
| 🎭 **Lucide React** | Biblioteca de ícones modernos                  |
| 🪝 **React Hooks**  | useState, useMemo para gerenciamento de estado |

</div>

---

## 👥 Equipe

### 👨‍🎓 Grupo nº 6

<div align="center">

| Nome               | Contribuição             | Github                   |
| ------------------ | ------------------------ | ------------------------ |
| **Gabriel**        | Desenvolvimento e Design | [@teixaf](https://github.com/teixaf)                     |
| **Janaina**        | Lógica e Algoritmos      | [@janainafmonteiro](https://github.com/janainafmonteiro)                     |
| **Gustavo**        | Interface e UX           | [@GustavoGabrielRC](https://github.com/GustavoGabrielRC)                     |
| **Guilherme**      | Documentação e Testes    | [@Guilherme-Vieira-Souza](https://github.com/Guilherme-Vieira-Souza)                     |
| **Silas**          | Matemática e Validação   | [@SilasAlefe](https://github.com/SilasAlefe)                     |
| **Pedro Henrique** | Integração e Deploy      | [@Pedrohxxz](https://github.com/Pedrohxxz)|

### 👩‍🏫 Orientação

**Prof.ª Ivana Barreto Matos**  
Estruturas Matemáticas • UNIFACS

</div>

---

## 📚 Referências

- **Markov, A. A.** (1906). "Extension of the law of large numbers to dependent quantities"
- [Wikipedia - Markov Chain](https://en.wikipedia.org/wiki/Markov_chain)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do curso de **Estruturas Matemáticas** na **Universidade Salvador (UNIFACS)**.

---

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Sinta-se à vontade para:

1. 🍴 Fazer um fork do projeto
2. 🌿 Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. 💾 Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. 📤 Push para a branch (`git push origin feature/MinhaFeature`)
5. 🔃 Abrir um Pull Request

---

<div align="center">

### ⭐ Se este projeto foi útil para você, considere dar uma estrela!

**Projeto A3 • Estruturas Matemáticas • 2025.2**

🎓 **Universidade Salvador (UNIFACS)**

---

Feito com ❤️ e muita ☕ pelo Grupo 6

</div>
