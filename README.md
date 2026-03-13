# MotoSpeed - Loja de Motos Online

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**Uma loja virtual moderna e elegante para venda de motocicletas**

[Ver Demo](#demo) • [Funcionalidades](#funcionalidades) • [Instalação](#instalação) • [Tecnologias](#tecnologias)

</div>

---

## Sobre o Projeto

O **MotoSpeed** é um e-commerce de motocicletas desenvolvido com as mais modernas tecnologias web. O projeto apresenta um design arrojado e esportivo, com uma paleta de cores impactante em **amarelo**, **preto** e **azul claro**, criando uma experiência visual única para os amantes de motos.

### Destaques

- Design responsivo e moderno
- Interface intuitiva e acessível
- Animações suaves e interativas
- Performance otimizada
- SEO friendly

---

## Funcionalidades

### Header & Navegação
- Menu de navegação fixo com efeito de transparência
- Menu mobile responsivo com animações
- Logo e links de acesso rápido

### Hero Section
- Banner principal com imagem de destaque
- Estatísticas da loja (motos, clientes, lojas)
- Botões de ação (Call-to-Action)
- Animações de entrada

### Catálogo de Motos
- Grid responsivo de produtos
- **Filtro por categorias**: Todas, Esportivas, Naked, Adventure, Cruiser
- Cards interativos com:
  - Imagem do produto
  - Badge de categoria
  - Botão de favoritar
  - Especificações técnicas (cilindradas, potência, velocidade)
  - Preço com desconto
  - Parcelamento
  - Botão de compra

### Categorias
- Seção visual com cards de categorias
- Imagens representativas
- Navegação por tipo de moto

### Features
- Garantia estendida
- Entrega em todo Brasil
- Financiamento facilitado
- Suporte 24 horas

### Call-to-Action
- Seção de conversão
- Formas de pagamento aceitas
- Destaques de benefícios

### Footer
- Links institucionais
- Informações de contato
- Redes sociais
- Newsletter
- Copyright

---

## Tecnologias

| Tecnologia | Descrição |
|------------|-----------|
| **Next.js 16** | Framework React com App Router |
| **TypeScript** | Tipagem estática para JavaScript |
| **Tailwind CSS 4** | Framework CSS utility-first |
| **shadcn/ui** | Componentes UI acessíveis |
| **Lucide Icons** | Biblioteca de ícones |

---

## Estrutura do Projeto

```
motospeed/
├── app/
│   ├── globals.css        # Estilos globais e tokens de design
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/
│   ├── header.tsx         # Cabeçalho e navegação
│   ├── hero-section.tsx   # Banner principal
│   ├── motos-section.tsx  # Catálogo de motos
│   ├── moto-card.tsx      # Card de produto
│   ├── categories-section.tsx  # Seção de categorias
│   ├── features-section.tsx    # Seção de benefícios
│   ├── cta-section.tsx    # Call-to-action
│   ├── footer.tsx         # Rodapé
│   └── ui/                # Componentes shadcn/ui
├── public/
│   └── images/            # Imagens das motos
└── README.md
```

---

## Paleta de Cores

| Cor | Uso | Código |
|-----|-----|--------|
| **Amarelo** | Cor primária, CTAs, preços | `oklch(0.88 0.18 95)` |
| **Azul Claro** | Cor secundária, badges, acentos | `oklch(0.72 0.12 230)` |
| **Preto** | Background, textos | `oklch(0.12 0 0)` |
| **Cinza Escuro** | Cards, seções | `oklch(0.16 0 0)` |

---

## Instalação

### Pré-requisitos

- Node.js 18+
- pnpm (recomendado)

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/C4zin/VendaDeMotos.git
cd VendaDeMotos
```

2. **Instale as dependências**
```bash
pnpm install
```

3. **Execute o servidor de desenvolvimento**
```bash
pnpm dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

---

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Inicia o servidor de desenvolvimento |
| `pnpm build` | Gera build de produção |
| `pnpm start` | Inicia servidor de produção |
| `pnpm lint` | Executa linter |


---

<div align="center">

**Desenvolvido com Next.js e Tailwind CSS**

Feito com dedicação para os amantes de motos

</div>
