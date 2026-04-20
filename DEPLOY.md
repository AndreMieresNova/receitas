# Guia de Deploy no Azure Static Web Apps

## Passos Rápidos

### 1. Teste Local
```bash
npm install
npm start
```

### 2. Build de Produção
```bash
npm run build
```

### 3. Deploy no Azure

#### Opção A: Via Portal Azure
1. Acesse portal.azure.com
2. Criar > Static Web App
3. Conecte seu repositório GitHub
4. Configure:
   - Framework: React
   - Build Location: /
   - Output Location: build
   - Node Version: 18

#### Opção B: Via CLI Azure
```bash
# Instale a extensão
az extension add --name staticwebapp

# Crie o app
az staticwebapp create \
  --name receitas-app \
  --resource-group my-resource-group \
  --source https://github.com/SEU-USERNAME/receitas-app \
  --branch main \
  --app-location "/" \
  --build-location "build" \
  --login-with-github
```

### 4. Variáveis de Ambiente
No repositório GitHub, configure:
- `AZURE_STATIC_WEB_APPS_API_TOKEN`: Token do Azure

## Estrutura Final
```
receitas-app/
  build/              # Build estático gerado
  src/                # Código fonte
  azure/              # Configuração Azure
  .github/workflows/  # CI/CD automático
```

## URLs Após Deploy
- Site principal: `https://SEU-APP.azurestaticapps.net`
- Preview automático para cada PR

## Backup e Manutenção
- O código está no GitHub
- Backup automático via Git
- Deploy contínuo a cada push para main

## Suporte
- Documentação Azure Static Web Apps
- Issues no repositório GitHub
