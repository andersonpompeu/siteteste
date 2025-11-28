# Climatec - Ar Condicionado

Sistema web para empresa de ar condicionado Climatec, desenvolvido com React + Vite + TypeScript.

## 🚀 Tecnologias

- React 19
- TypeScript
- Vite
- Docker & Docker Compose
- Nginx

## 📦 Instalação

### Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🐳 Deploy com Docker

### Usando Docker Compose (Recomendado)

```bash
# Build e iniciar o container
docker-compose up -d

# Parar o container
docker-compose down

# Ver logs
docker-compose logs -f
```

A aplicação estará disponível em `http://localhost:8080`

### Usando Docker diretamente

```bash
# Build da imagem
docker build -t climatec-ar-condicionado .

# Executar o container
docker run -d -p 8080:80 --name climatec climatec-ar-condicionado

# Parar o container
docker stop climatec

# Remover o container
docker rm climatec
```

## 🏗️ Estrutura do Projeto

```
climatec-ar-condicionado/
├── components/          # Componentes React
├── App.tsx             # Componente principal
├── index.tsx           # Entry point
├── types.ts            # Definições TypeScript
├── Dockerfile          # Configuração Docker
├── docker-compose.yml  # Orquestração Docker
├── nginx.conf          # Configuração Nginx
└── vite.config.ts      # Configuração Vite
```

## 🔧 Configuração

O projeto usa variáveis de ambiente definidas em `.env.local`:

```
GEMINI_API_KEY=your_api_key_here
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento (porta 3000)
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção

## 🌐 Deploy em Produção

O projeto está configurado para deploy com Docker, usando:
- **Multi-stage build** para otimização de tamanho
- **Nginx** como servidor web
- **Gzip compression** para melhor performance
- **Health checks** para monitoramento
- **Cache de assets estáticos**

## 📄 Licença

Privado - Climatec Ar Condicionado
